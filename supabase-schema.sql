create table if not exists public.client_reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 80),
  project text not null default '' check (char_length(project) <= 100),
  comment text not null check (char_length(comment) between 1 and 600),
  rating smallint not null check (rating between 1 and 5),
  permission_to_publish boolean not null default false,
  approved boolean not null default false,
  image_path text,
  created_at timestamptz not null default now()
);

alter table public.client_reviews add column if not exists image_path text;
grant select, insert on public.client_reviews to anon, authenticated;
grant update, delete on public.client_reviews to authenticated;

create table if not exists public.review_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

-- After creating and confirming Andrea's Auth user, run this allowlist insert.
-- Keep the email in sync with adminEmail in supabase-config.js.
-- To grant a different Auth account, replace the email below and adminEmail together.
insert into public.review_admins (user_id)
select id
from auth.users
where lower(email) = lower('andrea@gmail.com')
on conflict (user_id) do nothing;

alter table public.review_admins enable row level security;

create or replace function public.is_review_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.review_admins
    where user_id = auth.uid()
  );
$$;

revoke all on function public.is_review_admin() from public;
grant execute on function public.is_review_admin() to authenticated;

create table if not exists public.site_content (
  key text primary key check (char_length(key) between 1 and 80),
  value jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;
grant select on public.site_content to anon, authenticated;
grant insert, update, delete on public.site_content to authenticated;

drop policy if exists "Anyone can read published site content" on public.site_content;
drop policy if exists "Review admins can insert site content" on public.site_content;
drop policy if exists "Review admins can update site content" on public.site_content;
drop policy if exists "Review admins can delete site content" on public.site_content;

create policy "Anyone can read published site content"
on public.site_content
for select
to anon, authenticated
using (true);

create policy "Review admins can insert site content"
on public.site_content
for insert
to authenticated
with check (public.is_review_admin());

create policy "Review admins can update site content"
on public.site_content
for update
to authenticated
using (public.is_review_admin())
with check (public.is_review_admin());

create policy "Review admins can delete site content"
on public.site_content
for delete
to authenticated
using (public.is_review_admin());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'portfolio-assets',
  'portfolio-assets',
  true,
  8388608,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update
set public = true,
    file_size_limit = 8388608,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Anyone can read portfolio images" on storage.objects;
drop policy if exists "Review admins can upload portfolio images" on storage.objects;
drop policy if exists "Review admins can update portfolio images" on storage.objects;

create policy "Anyone can read portfolio images"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'portfolio-assets');

create policy "Review admins can upload portfolio images"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'portfolio-assets' and public.is_review_admin());

create policy "Review admins can update portfolio images"
on storage.objects
for update
to authenticated
using (bucket_id = 'portfolio-assets' and public.is_review_admin())
with check (bucket_id = 'portfolio-assets' and public.is_review_admin());

alter table public.client_reviews enable row level security;

drop policy if exists "Anyone can submit a pending review" on public.client_reviews;
drop policy if exists "Anyone can read approved reviews" on public.client_reviews;
drop policy if exists "Review admins can read all reviews" on public.client_reviews;
drop policy if exists "Review admins can moderate reviews" on public.client_reviews;
drop policy if exists "Review admins can remove reviews" on public.client_reviews;
drop policy if exists "Authenticated admin can read all reviews" on public.client_reviews;
drop policy if exists "Authenticated admin can moderate reviews" on public.client_reviews;
drop policy if exists "Authenticated admin can remove reviews" on public.client_reviews;

create policy "Anyone can submit a pending review"
on public.client_reviews
for insert
to anon, authenticated
with check (approved = false);

create policy "Anyone can read approved reviews"
on public.client_reviews
for select
to anon, authenticated
using (approved = true and permission_to_publish = true);

create policy "Review admins can read all reviews"
on public.client_reviews
for select
to authenticated
using (public.is_review_admin());

create policy "Review admins can moderate reviews"
on public.client_reviews
for update
to authenticated
using (public.is_review_admin())
with check (approved = false or permission_to_publish = true);

create policy "Review admins can remove reviews"
on public.client_reviews
for delete
to authenticated
using (public.is_review_admin());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'review-photos',
  'review-photos',
  false,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update
set public = false,
    file_size_limit = 5242880,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Anyone can upload review photos" on storage.objects;
drop policy if exists "Review photos visible to admins or approved clients" on storage.objects;
drop policy if exists "Review admins can delete review photos" on storage.objects;

create policy "Anyone can upload review photos"
on storage.objects
for insert
to anon, authenticated
with check (
  bucket_id = 'review-photos'
  and name ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.(jpg|png|webp|gif)$'
);

create policy "Review photos visible to admins or approved clients"
on storage.objects
for select
to anon, authenticated
using (
  bucket_id = 'review-photos'
  and (
    exists (
      select 1
      from public.client_reviews
      where client_reviews.image_path = storage.objects.name
        and client_reviews.approved = true
        and client_reviews.permission_to_publish = true
    )
    or (auth.role() = 'authenticated' and public.is_review_admin())
  )
);

create policy "Review admins can delete review photos"
on storage.objects
for delete
to authenticated
using (bucket_id = 'review-photos' and public.is_review_admin());

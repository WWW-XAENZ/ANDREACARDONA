(() => {
      "use strict";
      const DB_NAME = "andrea-cardona-portfolio";
      const DB_VERSION = 2;
      const starterProjects = [
        { id: "identidad-nocturna", title: "Nocturna Studio", category: "Identidad visual", year: "2026", description: "Concepto visual de muestra para un estudio creativo ficticio: sistema tipográfico expresivo, paleta monocromática y recursos gráficos con una energía oscura y contemporánea.", image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1100&q=85", order: 1 },
        { id: "portada-frecuencia", title: "Frecuencia", category: "Diseño editorial", year: "2025", description: "Ejercicio conceptual de dirección de arte y diseño de portada musical. Texturas, composición tipográfica y contraste para construir una pieza gráfica con voz propia.", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1100&q=85", order: 2 },
        { id: "campana-ritual", title: "Ritual", category: "Campaña gráfica", year: "2025", description: "Concepto de muestra para una campaña cultural: póster principal, adaptaciones para redes y dirección de arte pensada para destacar en cada formato.", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=85", order: 3 },
        { id: "editorial-forma", title: "Forma & Fondo", category: "Dirección de arte", year: "2024", description: "Exploración gráfica conceptual de formas, ritmo y tipografía. Una propuesta editorial que cruza referencias impresas con una mirada digital actual.", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1100&q=85", order: 4 }
      ];
      const defaultProfile = {
        name: "Andrea",
        role: "Diseñadora gráfica independiente",
        intro: "Diseño identidades visuales y piezas gráficas con concepto, personalidad y una estética que no pasa desapercibida.",
        bio: "Soy diseñadora gráfica y convierto ideas en sistemas visuales con personalidad. Trabajo entre el branding, la dirección de arte y el diseño editorial, con una estética contemporánea, oscura y llena de intención.",
        email: "",
        instagram: "https://www.instagram.com/cardonaa.___12/",
        behance: "",
        whatsapp: "573113352580",
        portrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85"
      };
      const defaultServices = [
        { id: "identidad-visual", number: "01 / BRAND", symbol: "✳", title: "Identidad visual", description: "Concepto, logotipo, paleta, tipografías y recursos para que tu marca hable con una sola voz.", tags: "ESTRATEGIA · SISTEMA · GUÍA" },
        { id: "diseno-editorial", number: "02 / EDIT", symbol: "◈", title: "Diseño editorial", description: "Composición tipográfica y diseño de publicaciones, portadas, dossiers y piezas impresas.", tags: "PORTADAS · PUBLICACIONES" },
        { id: "direccion-arte", number: "03 / ART", symbol: "⌁", title: "Dirección de arte", description: "Un lenguaje visual claro para campañas, sesiones, lanzamientos y comunicación digital.", tags: "CONCEPTO · CAMPAÑA · CONTENIDO" },
        { id: "piezas-digitales", number: "04 / DIGITAL", symbol: "✳", title: "Piezas digitales", description: "Diseño adaptable para redes, presentaciones, eventos y experiencias de marca online.", tags: "SOCIAL · PRESENTACIONES" }
      ];
      const siteCopyFields = [
        { key: "navProjects", label: "Navegación · Proyectos", value: "Proyectos" },
        { key: "navServices", label: "Navegación · Servicios", value: "Servicios" },
        { key: "navAbout", label: "Navegación · Sobre mí", value: "Sobre mí" },
        { key: "navContact", label: "Navegación · Contacto", value: "Contacto" },
        { key: "navCta", label: "Navegación · Botón principal", value: "Hablemos" },
        { key: "footerCredit", label: "Pie de página · Crédito", value: "Diseñado con intención." },
        { key: "footerInstagram", label: "Pie de página · Instagram", value: "Instagram" },
        { key: "footerWhatsapp", label: "Pie de página · WhatsApp", value: "WhatsApp" },
        { key: "heroLine1", label: "Inicio · Titular, línea 1", value: "IDEAS CON" },
        { key: "heroLine2", label: "Inicio · Titular, línea 2", value: "IDENTIDAD." },
        { key: "heroLine3", label: "Inicio · Titular, línea 3", value: "DISEÑO CON" },
        { key: "heroLine4", label: "Inicio · Titular, línea 4", value: "ACTITUD." },
        { key: "heroScribble", label: "Inicio · Texto decorativo", value: "DESDE LA IDEA" },
        { key: "heroSticker", label: "Inicio · Insignia", value: "IDEAS · CON · IDENTIDAD ✳" },
        { key: "heroNoteLabel", label: "Inicio · Etiqueta de enfoque", value: "Mi enfoque" },
        { key: "heroNoteTitle", label: "Inicio · Enfoque", value: "concepto con carácter" },
        { key: "heroCta", label: "Inicio · Botón de proyectos", value: "Explorar proyectos" },
        { key: "heroAvailability", label: "Inicio · Disponibilidad", value: "Branding · Editorial · Arte" },
        { key: "tickerOne", label: "Inicio · Franja animada 1", value: "Identidad visual" },
        { key: "tickerTwo", label: "Inicio · Franja animada 2", value: "Diseño editorial" },
        { key: "tickerThree", label: "Inicio · Franja animada 3", value: "Dirección de arte" },
        { key: "tickerFour", label: "Inicio · Franja animada 4", value: "Ideas con carácter" },
        { key: "manifestoEyebrow", label: "Inicio · Etiqueta manifiesto", value: "Diseño con intención" },
        { key: "manifestoTitleOne", label: "Inicio · Manifiesto, línea 1", value: "Una idea encuentra forma." },
        { key: "manifestoTitleTwo", label: "Inicio · Manifiesto, línea 2", value: "Una marca encuentra su voz." },
        { key: "homeManifesto", label: "Inicio · Texto manifiesto", value: "Creo conceptos visuales que convierten ideas en identidades memorables: estrategia, tipografía y una estética oscura con carácter propio." },
        { key: "projectsEyebrow", label: "Inicio · Etiqueta de proyectos", value: "Conceptos gráficos · Proyectos de muestra" },
        { key: "projectsTitleOne", label: "Inicio · Título proyectos, línea 1", value: "Diseño que" },
        { key: "projectsTitleTwo", label: "Inicio · Título proyectos, línea 2", value: "deja huella." },
        { key: "homeProjects", label: "Inicio · Introducción a proyectos", value: "Una muestra de identidad de marca, dirección de arte y diseño editorial. Desde el panel puedes sustituir estos conceptos por sus proyectos reales." },
        { key: "aboutEyebrow", label: "Inicio · Etiqueta sobre mí", value: "Andrea · Diseñadora gráfica" },
        { key: "aboutTitleOne", label: "Inicio · Título sobre mí, línea 1", value: "Diseño para" },
        { key: "aboutTitleTwo", label: "Inicio · Título sobre mí, línea 2", value: "decir algo." },
        { key: "statsOneTitle", label: "Inicio · Paso 1", value: "Concepto" },
        { key: "statsTwoTitle", label: "Inicio · Paso 2", value: "Lenguaje visual" },
        { key: "statsThreeTitle", label: "Inicio · Paso 3", value: "Diseño final" },
        { key: "contactEyebrow", label: "Inicio · Etiqueta contacto", value: "¿Tienes una idea?" },
        { key: "contactTitleOne", label: "Inicio · Llamado a la acción, línea 1", value: "Hagamos que" },
        { key: "contactTitleTwo", label: "Inicio · Llamado a la acción, línea 2", value: "se vea increíble." },
        { key: "contactCallout", label: "Inicio · Texto de contacto", value: "Cuéntame sobre tu marca, proyecto o próxima gran idea." },
        { key: "contactCta", label: "Inicio · Botón de WhatsApp", value: "Escríbeme por WhatsApp" },
        { key: "testimonialEyebrow", label: "Inicio · Etiqueta de comentarios", value: "Comentarios / Experiencias reales" },
        { key: "testimonialTitleOne", label: "Inicio · Título comentarios, línea 1", value: "Las ideas se crean" },
        { key: "testimonialTitleTwo", label: "Inicio · Título comentarios, línea 2", value: "en equipo." },
        { key: "homeTestimonials", label: "Inicio · Introducción a comentarios", value: "Los testimonios se publicarán únicamente cuando un cliente comparta su experiencia y autorice que aparezca aquí." },
        { key: "emptyReviewTitle", label: "Inicio · Estado vacío de comentarios", value: "ESPACIO PARA EXPERIENCIAS REALES" },
        { key: "emptyReviewText", label: "Inicio · Mensaje sin comentarios", value: "Aún no hay comentarios publicados. ¿Ya trabajaste con Andrea? Tu opinión puede ayudar a futuros clientes." },
        { key: "emptyReviewCta", label: "Inicio · Enlace para enviar comentario", value: "Compartir mi experiencia" },
        { key: "projectsPageEyebrow", label: "Proyectos · Etiqueta superior", value: "Portfolio / Selección visual" },
        { key: "projectsPageTitleOne", label: "Proyectos · Titular, línea 1", value: "TRABAJO" },
        { key: "projectsPageTitleTwo", label: "Proyectos · Titular, línea 2", value: "CON" },
        { key: "projectsPageTitleThree", label: "Proyectos · Titular, línea 3", value: "INTENCIÓN." },
        { key: "projectsIntro", label: "Proyectos · Introducción", value: "Identidades, imágenes y sistemas gráficos. Una selección de conceptos de muestra que puedes reemplazar desde el administrador por tus proyectos reales." },
        { key: "projectsMetaOne", label: "Proyectos · Metadato 1", value: "01 — 04" },
        { key: "projectsMetaTwo", label: "Proyectos · Metadato 2", value: "Identidad · Editorial · Dirección de arte" },
        { key: "projectsMetaLink", label: "Proyectos · Enlace archivo", value: "Explorar el archivo" },
        { key: "projectsArchiveEyebrow", label: "Proyectos · Etiqueta del archivo", value: "Archivo gráfico" },
        { key: "projectsArchiveTitleOne", label: "Proyectos · Título archivo, línea 1", value: "Ideas en" },
        { key: "projectsArchiveTitleTwo", label: "Proyectos · Título archivo, línea 2", value: "forma visual." },
        { key: "projectsDescription", label: "Proyectos · Descripción del archivo", value: "Cada proyecto es una oportunidad para encontrar la voz propia de una idea y traducirla en un lenguaje visual coherente." },
        { key: "projectsOutro", label: "Proyectos · Cierre", value: "Tu proyecto puede ser el siguiente" },
        { key: "projectsOutroCta", label: "Proyectos · Botón de contacto", value: "Hablemos de tu idea" },
        { key: "servicesPageEyebrow", label: "Servicios · Etiqueta superior", value: "Servicios / Diseño gráfico" },
        { key: "servicesPageTitleOne", label: "Servicios · Titular, línea 1", value: "ESTRATEGIA" },
        { key: "servicesPageTitleTwo", label: "Servicios · Titular, línea 2", value: "CON" },
        { key: "servicesPageTitleThree", label: "Servicios · Titular, línea 3", value: "CARÁCTER." },
        { key: "servicesIntro", label: "Servicios · Introducción", value: "Diseño pensado para comunicar primero y decorar después. Cada servicio parte de escuchar la idea, entender a quién habla y convertirla en un sistema gráfico reconocible." },
        { key: "servicesMetaOne", label: "Servicios · Metadato 1", value: "DISEÑO CONCEPTUAL" },
        { key: "servicesMetaTwo", label: "Servicios · Metadato 2", value: "DE LA IDEA AL SISTEMA VISUAL" },
        { key: "servicesMetaLink", label: "Servicios · Enlace servicios", value: "Ver servicios" },
        { key: "servicesEyebrow", label: "Servicios · Etiqueta de sección", value: "Lo que puedo diseñar" },
        { key: "servicesTitleOne", label: "Servicios · Título, línea 1", value: "Servicios" },
        { key: "servicesTitleTwo", label: "Servicios · Título, línea 2", value: "creativos." },
        { key: "servicesDescription", label: "Servicios · Descripción", value: "El alcance se define para cada proyecto. Podemos empezar con una pieza puntual o construir una identidad completa." },
        { key: "processEyebrow", label: "Servicios · Etiqueta de proceso", value: "Cómo trabajamos" },
        { key: "processTitleOne", label: "Servicios · Título proceso, línea 1", value: "Un proceso" },
        { key: "processTitleTwo", label: "Servicios · Título proceso, línea 2", value: "con intención." },
        { key: "servicesProcess", label: "Servicios · Introducción al proceso", value: "Colaborativo, claro y construido alrededor de los objetivos de tu proyecto." },
        { key: "processStepOneTitle", label: "Servicios · Paso 1", value: "Escuchar" },
        { key: "processStepOneText", label: "Servicios · Descripción paso 1", value: "Conversamos sobre la idea, el contexto y las personas a quienes quieres llegar." },
        { key: "processStepTwoTitle", label: "Servicios · Paso 2", value: "Conceptualizar" },
        { key: "processStepTwoText", label: "Servicios · Descripción paso 2", value: "Definimos una dirección creativa y un concepto visual que guíe las decisiones." },
        { key: "processStepThreeTitle", label: "Servicios · Paso 3", value: "Diseñar" },
        { key: "processStepThreeText", label: "Servicios · Descripción paso 3", value: "Desarrollo y refinamiento de las piezas, con espacios de revisión y comentarios." },
        { key: "processStepFourTitle", label: "Servicios · Paso 4", value: "Entregar" },
        { key: "processStepFourText", label: "Servicios · Descripción paso 4", value: "Archivos organizados y listos para llevar el diseño al mundo real." },
        { key: "servicesOutro", label: "Servicios · Cierre", value: "¿Tienes una idea en mente?" },
        { key: "servicesOutroCta", label: "Servicios · Botón de contacto", value: "Cuéntame tu proyecto" },
        { key: "aboutPageEyebrow", label: "Sobre mí · Etiqueta superior", value: "Perfil / Andrea" },
        { key: "aboutPageTitleOne", label: "Sobre mí · Titular, línea 1", value: "DISEÑAR ES" },
        { key: "aboutPageTitleTwo", label: "Sobre mí · Titular, línea 2", value: "ENCONTRAR LA VOZ." },
        { key: "aboutMetaTwo", label: "Sobre mí · Metadato 2", value: "IDEAS · IMAGEN · SISTEMAS" },
        { key: "aboutMetaLink", label: "Sobre mí · Enlace proyectos", value: "Ver proyectos" },
        { key: "aboutFeatureEyebrow", label: "Sobre mí · Etiqueta personal", value: "Mi mirada" },
        { key: "aboutFeatureTitleOne", label: "Sobre mí · Título perfil, línea 1", value: "Concepto primero." },
        { key: "aboutFeatureTitleTwo", label: "Sobre mí · Título perfil, línea 2", value: "Forma con sentido." },
        { key: "aboutIntro", label: "Sobre mí · Introducción", value: "Me interesa el diseño que tiene intención: una idea clara, decisiones visuales coherentes y detalles que hacen que una marca se sienta propia. Mi lenguaje combina contraste, tipografía y una sensibilidad editorial." },
        { key: "aboutValuesEyebrow", label: "Sobre mí · Etiqueta valores", value: "Lo que guía mi trabajo" },
        { key: "aboutValuesTitleOne", label: "Sobre mí · Título valores, línea 1", value: "Diseño con" },
        { key: "aboutValuesTitleTwo", label: "Sobre mí · Título valores, línea 2", value: "dirección." },
        { key: "aboutValues", label: "Sobre mí · Descripción de valores", value: "No se trata solo de que algo se vea bien. Se trata de que comunique con claridad y permanezca en la memoria." },
        { key: "valueOneTitle", label: "Sobre mí · Valor 1", value: "Concepto" },
        { key: "valueOneText", label: "Sobre mí · Descripción valor 1", value: "Una buena solución visual empieza por entender el problema y encontrar una idea que lo ordene." },
        { key: "valueTwoTitle", label: "Sobre mí · Valor 2", value: "Personalidad" },
        { key: "valueTwoText", label: "Sobre mí · Descripción valor 2", value: "La identidad se construye con decisiones consistentes, no con adornos que siguen una tendencia." },
        { key: "valueThreeTitle", label: "Sobre mí · Valor 3", value: "Detalle" },
        { key: "valueThreeText", label: "Sobre mí · Descripción valor 3", value: "Tipografía, ritmo, contraste y composición hacen que cada elemento tenga un lugar y un propósito." },
        { key: "aboutOutro", label: "Sobre mí · Cierre", value: "¿Creamos algo juntxs?" },
        { key: "aboutOutroCta", label: "Sobre mí · Botón contacto", value: "Hablemos de tu proyecto" },
        { key: "contactPageEyebrow", label: "Contacto · Etiqueta superior", value: "Contacto / Nuevos proyectos" },
        { key: "contactPageTitleOne", label: "Contacto · Titular, línea 1", value: "HABLEMOS" },
        { key: "contactPageTitleTwo", label: "Contacto · Titular, línea 2", value: "DE" },
        { key: "contactPageTitleThree", label: "Contacto · Titular, línea 3", value: "IDEAS." },
        { key: "contactIntro", label: "Contacto · Introducción", value: "¿Tienes una marca, una idea o un proyecto que necesita una identidad propia? Cuéntame un poco y empezamos la conversación." },
        { key: "contactMetaOne", label: "Contacto · Metadato 1", value: "CONSULTA DISPONIBILIDAD" },
        { key: "contactMetaTwo", label: "Contacto · Metadato 2", value: "COLOMBIA · TRABAJO REMOTO" },
        { key: "contactMetaLink", label: "Contacto · Enlace conversación", value: "Iniciar conversación" },
        { key: "contactMethodEyebrow", label: "Contacto · Etiqueta medios", value: "Encuéntrame aquí" },
        { key: "contactMethodTitleOne", label: "Contacto · Título medios, línea 1", value: "Una conversación" },
        { key: "contactMethodTitleTwo", label: "Contacto · Título medios, línea 2", value: "lo cambia todo." },
        { key: "contactDescription", label: "Contacto · Texto de contacto", value: "Elige el canal que prefieras o deja los detalles de tu proyecto. El formulario prepara un mensaje en WhatsApp para que lo revises y lo envíes." },
        { key: "contactLeadNote", label: "Contacto · Nota de respuesta", value: "RESPUESTA DIRECTA · SIN FORMULARIOS PERDIDOS" },
        { key: "contactFormNumber", label: "Contacto · Número del formulario", value: "01 — 04" },
        { key: "contactFormHeading", label: "Contacto · Título del formulario", value: "CUÉNTAME TU IDEA" },
        { key: "contactNameLabel", label: "Contacto · Etiqueta nombre", value: "¿Cómo te llamas?" },
        { key: "contactNamePlaceholder", label: "Contacto · Ejemplo de nombre", value: "Tu nombre" },
        { key: "contactServiceLabel", label: "Contacto · Etiqueta servicio", value: "¿Qué necesitas?" },
        { key: "contactMessageLabel", label: "Contacto · Etiqueta mensaje", value: "Cuéntame brevemente" },
        { key: "contactMessagePlaceholder", label: "Contacto · Ejemplo de mensaje", value: "¿Qué quieres crear? ¿Cuándo te gustaría empezar?" },
        { key: "contactFormSubmit", label: "Contacto · Botón del formulario", value: "Preparar mensaje en WhatsApp" },
        { key: "contactFormDisclaimer", label: "Contacto · Nota de privacidad", value: "Al continuar se abrirá WhatsApp con tu mensaje listo para revisar y enviar. No se guardan tus datos en esta web." },
        { key: "contactServiceOption", label: "Contacto · Opción de servicio vacía", value: "Elige un servicio" },
        { key: "contactServiceOptionOne", label: "Contacto · Servicio opción 1", value: "Identidad visual / Branding" },
        { key: "contactServiceOptionTwo", label: "Contacto · Servicio opción 2", value: "Diseño editorial" },
        { key: "contactServiceOptionThree", label: "Contacto · Servicio opción 3", value: "Dirección de arte" },
        { key: "contactServiceOptionFour", label: "Contacto · Servicio opción 4", value: "Diseño para redes" },
        { key: "contactServiceOptionFive", label: "Contacto · Servicio opción 5", value: "Otro proyecto creativo" },
        { key: "reviewEyebrow", label: "Reseñas · Etiqueta", value: "Comentarios / Tu experiencia" },
        { key: "reviewTitleOne", label: "Reseñas · Título, línea 1", value: "¿Trabajamos" },
        { key: "reviewTitleTwo", label: "Reseñas · Título, línea 2", value: "en equipo?" },
        { key: "reviewPrivacy", label: "Reseñas · Nota de autorización", value: "PUBLICACIÓN SOLO CON TU AUTORIZACIÓN" },
        { key: "reviewFormNumber", label: "Reseñas · Número del formulario", value: "02 — 04" },
        { key: "reviewFormHeading", label: "Reseñas · Título del formulario", value: "COMPARTIR RESEÑA" },
        { key: "reviewNameLabel", label: "Reseñas · Etiqueta del nombre", value: "Tu nombre" },
        { key: "reviewNamePlaceholder", label: "Reseñas · Ejemplo del nombre", value: "Cómo quieres que te identifiquemos" },
        { key: "reviewProjectLabel", label: "Reseñas · Etiqueta del proyecto", value: "Proyecto en el que colaboramos" },
        { key: "reviewProjectPlaceholder", label: "Reseñas · Ejemplo del proyecto", value: "Ej. Identidad visual" },
        { key: "reviewCommentLabel", label: "Reseñas · Etiqueta del comentario", value: "Tu comentario" },
        { key: "reviewCommentPlaceholder", label: "Reseñas · Ejemplo del comentario", value: "¿Cómo fue trabajar juntas?" },
        { key: "reviewRatingLabel", label: "Reseñas · Etiqueta de calificación", value: "Tu calificación" },
        { key: "reviewConsentText", label: "Reseñas · Autorización de publicación", value: "Autorizo que Andrea pueda publicar esta reseña junto con mi nombre, calificación y foto adjunta. Andrea decidirá si la muestra." },
        { key: "reviewFormSubmit", label: "Reseñas · Botón de envío", value: "Enviar reseña a Andrea" },
        { key: "reviewFormDisclaimer", label: "Reseñas · Nota de moderación", value: "La reseña y la foto se guardan como pendientes y no se publican automáticamente. La foto solo será visible si autorizas su publicación y Andrea aprueba la reseña." },
        { key: "faqEyebrow", label: "Contacto · Etiqueta de preguntas", value: "Preguntas frecuentes" },
        { key: "faqTitleOne", label: "Contacto · Preguntas, título línea 1", value: "Antes de" },
        { key: "faqTitleTwo", label: "Contacto · Preguntas, título línea 2", value: "empezar." },
        { key: "faqIntro", label: "Contacto · Introducción de preguntas", value: "Si tienes otra pregunta, escríbele a Andrea y conversen sobre los detalles de tu proyecto." },
        { key: "faqLink", label: "Contacto · Enlace de preguntas", value: "Preguntar por WhatsApp" },
        { key: "faqQuestionOne", label: "FAQ · Pregunta 1", value: "¿Cómo puedo consultar disponibilidad?" },
        { key: "faqAnswerOne", label: "FAQ · Respuesta 1", value: "Escríbele con una breve descripción de tu proyecto y las fechas que tienes en mente. Andrea podrá confirmar directamente si tiene espacio." },
        { key: "faqQuestionTwo", label: "FAQ · Pregunta 2", value: "¿Qué información ayuda para cotizar?" },
        { key: "faqAnswerTwo", label: "FAQ · Respuesta 2", value: "Cuéntale qué necesitas diseñar, para quién es, qué piezas imaginas y si tienes una fecha objetivo. El alcance y la propuesta se conversan según cada proyecto." },
        { key: "faqQuestionThree", label: "FAQ · Pregunta 3", value: "¿Se puede trabajar a distancia?" },
        { key: "faqAnswerThree", label: "FAQ · Respuesta 3", value: "Sí. La conversación inicial y el proceso pueden organizarse de forma remota, definiendo juntos los canales y tiempos de revisión." },
        { key: "faqQuestionFour", label: "FAQ · Pregunta 4", value: "¿Cómo se define el proceso y la entrega?" },
        { key: "faqAnswerFour", label: "FAQ · Respuesta 4", value: "Antes de comenzar se acuerdan el alcance, las etapas, las revisiones y los formatos finales, para que ambas partes tengan claras las expectativas." },
        { key: "faqQuestionFive", label: "FAQ · Pregunta 5", value: "¿Puedo dejar una opinión sobre un proyecto anterior?" },
        { key: "faqAnswerFive", label: "FAQ · Respuesta 5", value: "Sí. Usa el formulario de comentarios de esta página. Andrea solicitará autorización antes de mostrar cualquier testimonio en el portfolio." }
        ,{ key: "contactOutro", label: "Contacto · Cierre", value: "Toda gran identidad empieza con una pregunta" }
        ,{ key: "contactOutroCta", label: "Contacto · Enlace proyectos", value: "Conoce los proyectos" }
      ];
      const $ = (selector, root = document) => root.querySelector(selector);
      const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
      const supabase = window.ANDREA_SUPABASE || {};
      const SUPABASE_SESSION_KEY = "andrea-portfolio-admin-session";
      const VISUAL_EDIT_SESSION_KEY = "andrea-portfolio-visual-editing";
      const state = { db: null, projects: [], testimonials: [], remoteReviewsLoaded: false, services: [...defaultServices], siteCopy: {}, profile: { ...defaultProfile }, filter: "Todos", projectIndex: 0, projectCarouselTimer: null, editingId: null, editingTestimonialId: null, editingServiceId: null, toastTimer: null, testimonialIndex: 0, testimonialTimer: null, testimonialObjectUrls: [], testimonialAdminObjectUrls: [] };
      state.visualCopy = {};
      state.visualImages = {};
      state.visualLinks = {};
      state.visualImageStyles = {};
      state.visualPending = null;
      state.selectedVisualImage = null;
      state.siteContentSyncPending = false;
      const overlay = $("#adminOverlay"), content = $("#adminContent"), dialog = $("#projectDialog");
      const legacyProjects = [
        ["luna-botanica", "Luna Botánica", starterProjects[0]],
        ["casa-marea", "Casa Marea", starterProjects[1]],
        ["buen-dia", "Buen Día Club", starterProjects[2]],
        ["flora-estudio", "Flora Estudio", starterProjects[3]],
        ["noche-cero", "Noche Cero", starterProjects[0]],
        ["archivo-99", "Archivo 99", starterProjects[1]],
        ["fuera-de-linea", "Fuera de línea", starterProjects[2]],
        ["plata-negra", "Plata negra", starterProjects[3]]
      ];
      const legacyProfile = {
        role: ["Diseñadora visual independiente", "Estilo personal & cultura urbana"],
        intro: [
          "Creo identidades visuales y experiencias digitales para marcas con algo que decir. Estrategia, intuición y un poquito de magia.",
          "Una mirada propia entre la moda, la cultura urbana y la expresión personal. Oscura por elección. Imposible de ignorar."
        ],
        bio: [
          "Diseñadora visual y amante de las buenas historias. Acompaño a personas y marcas a encontrar su voz, traduciendo lo que las hace únicas en identidades y experiencias llenas de intención.",
          "Una propuesta visual entre la moda urbana, las siluetas oscuras y las referencias góticas contemporáneas. Este espacio está listo para compartir tu estilo, tus looks y lo que quieras contar."
        ],
        portrait: ["https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85"]
      };

      function openDatabase() {
        return new Promise((resolve, reject) => {
          if (!("indexedDB" in window)) { reject(new Error("Este navegador no permite guardar datos localmente. Prueba con una versión actualizada.")); return; }
          const request = indexedDB.open(DB_NAME, DB_VERSION);
          request.onupgradeneeded = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains("projects")) db.createObjectStore("projects", { keyPath: "id" });
            if (!db.objectStoreNames.contains("settings")) db.createObjectStore("settings", { keyPath: "key" });
            if (!db.objectStoreNames.contains("testimonials")) db.createObjectStore("testimonials", { keyPath: "id" });
          };
          request.onsuccess = () => resolve(request.result);
          request.onerror = () => reject(request.error || new Error("No se pudo abrir el almacenamiento local."));
        });
      }
      function supabaseConfigured() {
        return Boolean(String(supabase.url || "").trim() && String(supabase.anonKey || "").trim());
      }
      function readAdminSession() {
        try {
          const session = JSON.parse(localStorage.getItem(SUPABASE_SESSION_KEY) || "null");
          if (!session) return null;
          if (typeof session.access_token !== "string" || session.access_token.split(".").length !== 3) {
            localStorage.removeItem(SUPABASE_SESSION_KEY);
            return null;
          }
          return session;
        } catch (error) {
          showToast(`No se pudo leer la sesión de administración: ${error.message}`, true);
          return null;
        }
      }
      function saveAdminSession(session) {
        const expiresAt = Date.now() + Number(session.expires_in || 3600) * 1000;
        localStorage.setItem(SUPABASE_SESSION_KEY, JSON.stringify({ ...session, expires_at: expiresAt }));
      }
      async function refreshAdminSession(session) {
        if (!session.refresh_token || !supabaseConfigured()) return null;
        const response = await fetch(`${String(supabase.url).replace(/\/+$/, "")}/auth/v1/token?grant_type=refresh_token`, {
          method: "POST",
          headers: { "Content-Type": "application/json", apikey: supabase.anonKey },
          body: JSON.stringify({ refresh_token: session.refresh_token })
        });
        if (!response.ok) return null;
        const refreshed = await response.json();
        saveAdminSession(refreshed);
        return refreshed;
      }
      async function supabaseRequest(path, options = {}) {
        if (!supabaseConfigured()) throw new Error("Falta configurar la URL y la clave pública de Supabase en supabase-config.js.");
        let session = options.authenticated ? readAdminSession() : null;
        if (options.authenticated && !session) throw new Error("Inicia sesión para administrar las reseñas.");
        if (session && session.expires_at && session.expires_at < Date.now() + 30000) {
          session = await refreshAdminSession(session);
          if (!session) {
            localStorage.removeItem(SUPABASE_SESSION_KEY);
            throw new Error("La sesión expiró. Inicia sesión de nuevo.");
          }
        }
        const headers = {
          apikey: supabase.anonKey,
          "Content-Type": "application/json",
          ...(session ? { Authorization: `Bearer ${session.access_token}` } : {}),
          ...(options.prefer ? { Prefer: options.prefer } : {})
        };
        const response = await fetch(`${String(supabase.url).replace(/\/+$/, "")}/rest/v1/${path}`, {
          method: options.method || "GET",
          headers,
          ...(options.body ? { body: JSON.stringify(options.body) } : {})
        });
        if (!response.ok) {
          const message = await response.text();
          throw new Error(message || `Supabase respondió ${response.status}.`);
        }
        if (response.status === 204) return null;
        const text = await response.text();
        return text ? JSON.parse(text) : null;
      }
      async function loadSiteContent() {
        if (!supabaseConfigured()) return;
        const pending = await dbRequest("settings", "readonly", store => store.get("siteContentSyncPending"));
        if (pending?.value?.pending) {
          state.siteContentSyncPending = true;
          return;
        }
        try {
          const rows = await supabaseRequest("site_content?select=key,value");
          if (!Array.isArray(rows) || !rows.length) return;
          const values = Object.fromEntries(rows.map(row => [row.key, row.value]));
          if (Array.isArray(values.projects)) state.projects = values.projects;
          if (Array.isArray(values.services)) state.services = values.services;
          if (values.profile && typeof values.profile === "object") state.profile = { ...defaultProfile, ...values.profile };
          if (values.siteCopy && typeof values.siteCopy === "object") state.siteCopy = values.siteCopy;
          if (values.visualCopy && typeof values.visualCopy === "object") state.visualCopy = values.visualCopy;
          if (values.visualImages && typeof values.visualImages === "object") state.visualImages = values.visualImages;
          if (values.visualImageStyles && typeof values.visualImageStyles === "object") state.visualImageStyles = values.visualImageStyles;
          if (values.visualLinks && typeof values.visualLinks === "object") state.visualLinks = values.visualLinks;
          await persistSiteContentLocally();
        } catch (error) {
          showToast(`No se pudo cargar el contenido guardado en Supabase: ${error.message}`, true);
        }
      }
      async function persistSiteContentLocally() {
        const values = [
          ["services", state.services],
          ["profile", state.profile],
          ["siteCopy", state.siteCopy],
          ["visualCopy", state.visualCopy],
          ["visualImages", state.visualImages],
          ["visualImageStyles", state.visualImageStyles],
          ["visualLinks", state.visualLinks]
        ];
        await Promise.all(values.map(([key, value]) => dbRequest("settings", "readwrite", store => store.put({ key, value }))));
        const tx = state.db.transaction("projects", "readwrite");
        const store = tx.objectStore("projects");
        store.clear();
        state.projects.forEach(project => store.put(project));
        await new Promise((resolve, reject) => {
          tx.oncomplete = resolve;
          tx.onerror = () => reject(tx.error || new Error("No se pudieron guardar localmente los proyectos."));
          tx.onabort = () => reject(tx.error || new Error("No se pudieron guardar localmente los proyectos."));
        });
      }
      async function uploadPortfolioImage(dataUrl) {
        const response = await fetch(dataUrl);
        const image = await response.blob();
        const extension = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif" }[image.type];
        if (!extension || image.size > 8 * 1024 * 1024) throw new Error("Las imágenes del portfolio deben ser JPG, PNG, WebP o GIF y pesar máximo 8 MB.");
        const path = `${crypto.randomUUID()}.${extension}`;
        const token = await supabaseAccessToken(true);
        const upload = await fetch(`${String(supabase.url).replace(/\/+$/, "")}/storage/v1/object/portfolio-assets/${path}`, {
          method: "POST",
          headers: { apikey: supabase.anonKey, Authorization: `Bearer ${token}`, "Content-Type": image.type, "x-upsert": "false" },
          body: image
        });
        if (!upload.ok) throw new Error((await upload.text()) || `No se pudo subir la imagen (${upload.status}).`);
        return `${String(supabase.url).replace(/\/+$/, "")}/storage/v1/object/public/portfolio-assets/${path}`;
      }
      async function publicImage(value) {
        return typeof value === "string" && value.startsWith("data:image/") ? uploadPortfolioImage(value) : value;
      }
      async function syncSiteContent() {
        if (!supabaseConfigured()) throw new Error("Configura Supabase y aplica supabase-schema.sql para sincronizar los cambios.");
        await persistSiteContentLocally();
        try {
          state.siteContentSyncPending = true;
          await dbRequest("settings", "readwrite", store => store.put({
            key: "siteContentSyncPending",
            value: { pending: true, updatedAt: Date.now() }
          }));
          state.projects = await Promise.all(state.projects.map(async project => ({ ...project, image: await publicImage(project.image) })));
          state.profile = { ...state.profile, portrait: await publicImage(state.profile.portrait) };
          state.visualImages = Object.fromEntries(await Promise.all(Object.entries(state.visualImages).map(async ([page, images]) => [
            page,
            Object.fromEntries(await Promise.all(Object.entries(images).map(async ([selector, image]) => [selector, await publicImage(image)])))
          ])));
          await persistSiteContentLocally();
          const records = [
            { key: "projects", value: state.projects },
            { key: "services", value: state.services },
            { key: "profile", value: state.profile },
            { key: "siteCopy", value: state.siteCopy },
            { key: "visualCopy", value: state.visualCopy },
            { key: "visualImages", value: state.visualImages },
            { key: "visualImageStyles", value: state.visualImageStyles },
            { key: "visualLinks", value: state.visualLinks }
          ].map(record => ({ ...record, updated_at: new Date().toISOString() }));
          await supabaseRequest("site_content?on_conflict=key", {
            method: "POST",
            authenticated: true,
            prefer: "resolution=merge-duplicates,return=minimal",
            body: records
          });
          state.siteContentSyncPending = false;
          await dbRequest("settings", "readwrite", store => store.delete("siteContentSyncPending"));
        } catch (error) {
          const pendingError = new Error(error.message);
          pendingError.localSaved = true;
          throw pendingError;
        }
      }
      async function supabaseAccessToken(authenticated = false) {
        if (!authenticated) return supabase.anonKey;
        let session = readAdminSession();
        if (!session) throw new Error("Inicia sesión para administrar las reseñas.");
        if (session.expires_at && session.expires_at < Date.now() + 30000) {
          session = await refreshAdminSession(session);
          if (!session) {
            localStorage.removeItem(SUPABASE_SESSION_KEY);
            throw new Error("La sesión expiró. Inicia sesión de nuevo.");
          }
        }
        return session.access_token;
      }
      async function uploadReviewPhoto(file) {
        if (!file.type.startsWith("image/") || file.size > 5 * 1024 * 1024) {
          throw new Error("La foto debe ser una imagen de máximo 5 MB.");
        }
        const extension = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif" }[file.type];
        if (!extension) throw new Error("Formato no admitido. Usa JPG, PNG, WebP o GIF.");
        const path = `${crypto.randomUUID()}.${extension}`;
        const response = await fetch(`${String(supabase.url).replace(/\/+$/, "")}/storage/v1/object/review-photos/${path}`, {
          method: "POST",
          headers: { apikey: supabase.anonKey, Authorization: `Bearer ${supabase.anonKey}`, "Content-Type": file.type, "x-upsert": "false" },
          body: file
        });
        if (!response.ok) throw new Error((await response.text()) || `No se pudo subir la foto (${response.status}).`);
        return path;
      }
      async function createReviewPhotoUrl(path, authenticated = false) {
        const response = await fetch(`${String(supabase.url).replace(/\/+$/, "")}/storage/v1/object/sign/review-photos/${path.split("/").map(encodeURIComponent).join("/")}`, {
          method: "POST",
          headers: { apikey: supabase.anonKey, Authorization: `Bearer ${await supabaseAccessToken(authenticated)}`, "Content-Type": "application/json" },
          body: JSON.stringify({ expiresIn: 3600 })
        });
        if (!response.ok) throw new Error((await response.text()) || `No se pudo preparar la foto (${response.status}).`);
        const result = await response.json();
        const signedUrl = result.signedURL || result.signedUrl;
        if (!signedUrl) throw new Error("Supabase no devolvió la dirección temporal de la foto.");
        const baseUrl = String(supabase.url).replace(/\/+$/, "");
        if (/^https?:\/\//i.test(signedUrl)) return signedUrl;
        return new URL(signedUrl.startsWith("/storage/v1/") ? signedUrl : `/storage/v1${signedUrl.startsWith("/") ? "" : "/"}${signedUrl}`, `${baseUrl}/`).href;
      }
      async function deleteReviewPhoto(path) {
        const response = await fetch(`${String(supabase.url).replace(/\/+$/, "")}/storage/v1/object/review-photos/${path.split("/").map(encodeURIComponent).join("/")}`, {
          method: "DELETE",
          headers: { apikey: supabase.anonKey, Authorization: `Bearer ${await supabaseAccessToken(true)}` }
        });
        if (!response.ok) throw new Error((await response.text()) || `No se pudo eliminar la foto (${response.status}).`);
      }
      async function mapRemoteReview(review, authenticated = false) {
        let imageUrl = "";
        let imageError = "";
        if (review.image_path) {
          try { imageUrl = await createReviewPhotoUrl(review.image_path, authenticated); }
          catch (error) { imageError = error.message; }
        }
        return {
          id: review.id,
          name: review.name,
          project: review.project || "",
          comment: review.comment,
          rating: Number(review.rating) || 0,
          authorized: Boolean(review.permission_to_publish),
          published: Boolean(review.approved && review.permission_to_publish),
          imagePath: review.image_path || "",
          imageUrl,
          imageError,
          createdAt: new Date(review.created_at).getTime(),
          source: "supabase"
        };
      }
      async function loadRemoteReviews(includePending = false) {
        const filter = includePending ? "" : "&approved=eq.true&permission_to_publish=eq.true";
        const rows = await supabaseRequest(`client_reviews?select=id,name,project,comment,rating,permission_to_publish,approved,created_at,image_path&order=created_at.desc${filter}`, { authenticated: includePending });
        const localReviews = state.testimonials.filter(item => item.source !== "supabase");
        const remoteReviews = Array.isArray(rows) ? await Promise.all(rows.map(review => mapRemoteReview(review, includePending))) : [];
        if (remoteReviews.some(review => review.imageError)) {
          showToast("Algunas fotos no se pudieron cargar. Revisa las políticas de almacenamiento de Supabase.", true);
        }
        state.testimonials = [...remoteReviews, ...localReviews]
          .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        state.remoteReviewsLoaded = includePending;
      }
      async function signInAdmin(password) {
        const email = String(supabase.adminEmail || "").trim();
        if (!email) throw new Error("Falta configurar el correo de la cuenta autorizada de Andrea en supabase-config.js.");
        const response = await fetch(`${String(supabase.url).replace(/\/+$/, "")}/auth/v1/token?grant_type=password`, {
          method: "POST",
          headers: { "Content-Type": "application/json", apikey: supabase.anonKey },
          body: JSON.stringify({ email, password })
        });
        const result = await response.json().catch(() => null);
        if (!response.ok) {
          const errorCode = String(result?.code || result?.error_code || "").toLowerCase();
          const errorMessage = String(result?.msg || result?.message || result?.error_description || result?.error || "");
          if (response.status === 400 && (errorCode === "invalid_credentials" || /invalid login credentials/i.test(errorMessage))) {
            throw new Error("La contraseña no coincide con la cuenta autorizada de Andrea. Verifica o restablece su contraseña en Supabase Auth.");
          }
          if (response.status === 400 && (errorCode === "email_not_confirmed" || /email not confirmed/i.test(errorMessage))) {
            throw new Error("La cuenta de Andrea aún no está confirmada en Supabase Auth.");
          }
          throw new Error(errorMessage || `Supabase Auth respondió ${response.status}.`);
        }
        if (!result?.access_token) throw new Error("Supabase Auth no devolvió una sesión válida. Comprueba la configuración pública del proyecto.");
        saveAdminSession(result);
        try {
          await assertReviewAdmin();
        } catch (error) {
          localStorage.removeItem(SUPABASE_SESSION_KEY);
          throw error;
        }
      }
      async function assertReviewAdmin() {
        const isAdmin = await supabaseRequest("rpc/is_review_admin", { method: "POST", authenticated: true });
        if (isAdmin !== true) {
          throw new Error("La cuenta inició sesión, pero aún no está autorizada. Ejecuta en Supabase SQL Editor el bloque de autorización de Andrea al inicio de supabase-schema.sql y vuelve a entrar.");
        }
      }
      function signOutAdmin() {
        localStorage.removeItem(SUPABASE_SESSION_KEY);
        state.remoteReviewsLoaded = false;
        renderAdminReviewLogin();
        showToast("Sesión cerrada.");
      }
      function dbRequest(storeName, mode, operation) {
        return new Promise((resolve, reject) => {
          const tx = state.db.transaction(storeName, mode);
          const request = operation(tx.objectStore(storeName));
          request.onsuccess = () => resolve(request.result);
          request.onerror = () => reject(request.error || new Error("No se pudo guardar el cambio."));
          tx.onabort = () => reject(tx.error || new Error("La operación no se pudo completar."));
        });
      }
      async function loadData() {
        state.db = await openDatabase();
        let projects = await dbRequest("projects", "readonly", store => store.getAll());
        if (!projects.length) {
          const tx = state.db.transaction("projects", "readwrite");
          starterProjects.forEach(project => tx.objectStore("projects").put(project));
          await new Promise((resolve, reject) => { tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); tx.onabort = () => reject(tx.error); });
          projects = [...starterProjects];
        }
        const oldSeeds = legacyProjects.filter(([id, title]) => projects.some(project => project.id === id && project.title === title));
        if (oldSeeds.length) {
          const tx = state.db.transaction("projects", "readwrite");
          oldSeeds.forEach(([id, , replacement]) => {
            tx.objectStore("projects").delete(id);
            tx.objectStore("projects").put(replacement);
          });
          await new Promise((resolve, reject) => { tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); tx.onabort = () => reject(tx.error); });
          projects = projects.filter(project => !oldSeeds.some(([id]) => project.id === id));
          projects.push(...oldSeeds.map(([, , replacement]) => replacement));
        }
        state.projects = projects.sort((a, b) => (a.order || 0) - (b.order || 0));
        state.testimonials = (await dbRequest("testimonials", "readonly", store => store.getAll())).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        if (supabaseConfigured()) {
          try { await loadRemoteReviews(); }
          catch (error) { showToast(`No se pudieron cargar las reseñas online: ${error.message}`, true); }
        }
        const savedProfile = await dbRequest("settings", "readonly", store => store.get("profile"));
        if (savedProfile && savedProfile.value) {
          state.profile = { ...defaultProfile, ...savedProfile.value };
          let profileMigrated = false;
          Object.keys(legacyProfile).forEach(key => {
            if (legacyProfile[key].includes(state.profile[key])) {
              state.profile[key] = defaultProfile[key];
              profileMigrated = true;
            }
          });
          if (profileMigrated) await dbRequest("settings", "readwrite", store => store.put({ key: "profile", value: state.profile }));
        }
        const savedServices = await dbRequest("settings", "readonly", store => store.get("services"));
        if (savedServices && Array.isArray(savedServices.value)) state.services = savedServices.value;
        const savedCopy = await dbRequest("settings", "readonly", store => store.get("siteCopy"));
        if (savedCopy && savedCopy.value && typeof savedCopy.value === "object") state.siteCopy = savedCopy.value;
        for (const key of ["visualCopy", "visualImages", "visualImageStyles", "visualLinks"]) {
          const savedValue = await dbRequest("settings", "readonly", store => store.get(key));
          if (savedValue && savedValue.value && typeof savedValue.value === "object") state[key] = savedValue.value;
        }
        await loadSiteContent();
        renderSiteCopy();
        renderProfile();
        renderProjects();
        renderServices();
        renderTestimonials();
        applyVisualSavedContent();
        if (state.siteContentSyncPending && readAdminSession()) {
          try {
            await assertReviewAdmin();
            await syncSiteContent();
            showToast("Los cambios que estaban pendientes ya se sincronizaron.");
          } catch (error) {
            showToast(`Los cambios siguen guardados en este dispositivo, pero no se sincronizaron: ${error.message}`, true);
          }
        }
      }
      function showToast(message, isError = false) {
        const toast = $("#toast");
        if (!toast) return;
        toast.textContent = message;
        toast.classList.toggle("error", isError);
        toast.classList.add("show");
        window.clearTimeout(state.toastTimer);
        state.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3400);
      }
      function renderProfile() {
        $$('[data-profile="name"]').forEach(el => el.textContent = state.profile.name);
        $$('[data-profile="role"]').forEach(el => el.textContent = state.profile.role);
        $$('[data-profile="intro"]').forEach(el => el.textContent = state.profile.intro);
        $$('[data-profile="bio"]').forEach(el => el.textContent = state.profile.bio);
        $$(".portrait img, .profile-portrait img").forEach(portrait => {
          portrait.src = state.profile.portrait || defaultProfile.portrait;
          portrait.alt = `Retrato de ${state.profile.name}, diseñadora gráfica`;
        });
        const pageTitle = document.title.split(" — ")[0];
        document.title = `${document.body.classList.contains("interior-page") ? pageTitle : state.profile.name} — ${state.profile.role}`;
        const instagramLink = $("#instagramLink");
        if (instagramLink) instagramLink.href = safeUrl(state.profile.instagram, "https://instagram.com");
        const contactInstagram = $("#contactInstagram");
        if (contactInstagram) contactInstagram.href = safeUrl(state.profile.instagram, "https://www.instagram.com/cardonaa.___12/");
        const contactPageInstagram = $("#contactPageInstagram");
        if (contactPageInstagram) contactPageInstagram.href = safeUrl(state.profile.instagram, "https://www.instagram.com/cardonaa.___12/");
        const contactEmail = $("#contactEmail");
        const contactEmailText = $("#contactEmailText");
        if (contactEmail && contactEmailText) {
          const email = state.profile.email.trim();
          contactEmail.hidden = !email;
          if (email) {
            contactEmail.href = `mailto:${email}`;
            contactEmailText.textContent = email;
          }
        }
        const behanceUrl = safeUrl(state.profile.behance, "");
        const behanceLink = $("#behanceLink");
        if (behanceLink) {
          behanceLink.href = behanceUrl || "#contacto";
          behanceLink.hidden = !behanceUrl;
        }
        const whatsappUrl = `https://wa.me/${state.profile.whatsapp}`;
        $$('a[href^="https://wa.me/"]').forEach(link => { link.href = whatsappUrl; });
        $$('a[href^="https://wa.me/"] strong').forEach(el => { el.textContent = formatPhone(state.profile.whatsapp); });
      }
      function formatPhone(phone) {
        const digits = String(phone || "").replace(/\D/g, "");
        return digits.startsWith("57") && digits.length === 12
          ? `+57 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`
          : `+${digits}`;
      }
      function safeUrl(value, fallback) {
        try { const url = new URL(value); return ["http:", "https:"].includes(url.protocol) ? url.href : fallback; }
        catch { return fallback; }
      }
      function renderProjects() {
        const grid = $("#projectsGrid");
        if (!grid) return;
        const isHomeCarousel = visualPageKey() === "index.html";
        grid.classList.toggle("home-project-carousel", isHomeCarousel);
        const carouselControls = $("#projectCarouselControls");
        if (carouselControls) carouselControls.hidden = !isHomeCarousel || state.projects.length < 2;
        window.clearInterval(state.projectCarouselTimer);
        const categories = ["Todos", ...new Set(state.projects.map(project => project.category).filter(Boolean))];
        const filters = $("#projectFilters");
        if (filters) {
          filters.replaceChildren();
          categories.forEach(category => {
            const button = document.createElement("button");
            button.className = `filter-btn${state.filter === category ? " active" : ""}`;
            button.textContent = category;
            button.type = "button";
            button.addEventListener("click", () => { state.filter = category; renderProjects(); });
            filters.append(button);
          });
        }
        grid.replaceChildren();
        const projects = state.projects.filter(project => state.filter === "Todos" || project.category === state.filter);
        if (state.projectIndex >= projects.length) state.projectIndex = 0;
        if (!projects.length) {
          const empty = document.createElement("div");
          empty.className = "empty-projects";
          empty.textContent = "Todavía no hay proyectos aquí. Prueba otra categoría.";
          grid.append(empty);
          return;
        }
        projects.forEach((project, index) => {
          const card = document.createElement("article");
          card.className = "project-card reveal visible interactive-card";
          if (isHomeCarousel) card.classList.add("project-carousel-card");
          card.dataset.projectId = project.id;
          card.setAttribute("aria-hidden", String(isHomeCarousel && index !== state.projectIndex));
          if (isHomeCarousel && index !== state.projectIndex) card.hidden = true;
          card.style.animationDelay = `${Math.min(index * 80, 400)}ms`;
          const image = document.createElement("div");
          image.className = "project-image";
          const img = document.createElement("img");
          img.src = project.image || "";
          img.alt = project.title;
          img.loading = "lazy";
          img.dataset.projectImage = project.id;
          image.append(img);
          const meta = document.createElement("div");
          meta.className = "project-meta";
          const text = document.createElement("div");
          const title = document.createElement("h3"); title.textContent = project.title; title.dataset.projectId = project.id; title.dataset.projectField = "title";
          const category = document.createElement("p"); category.textContent = project.category; category.dataset.projectId = project.id; category.dataset.projectField = "category";
          text.append(title, category);
          const year = document.createElement("span"); year.className = "project-year"; year.textContent = project.year; year.dataset.projectId = project.id; year.dataset.projectField = "year";
          meta.append(text, year);
          card.append(image, meta);
          card.addEventListener("click", () => openProject(project));
          card.setAttribute("tabindex", "0");
          card.setAttribute("role", "button");
          card.setAttribute("aria-label", `Ver proyecto ${project.title}`);
          card.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openProject(project); } });
          grid.append(card);
          bindInteractiveGlow(card);
        });
        if (isHomeCarousel) {
          renderProjectCarousel(projects.length);
          if (projects.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            state.projectCarouselTimer = window.setInterval(() => showProject(state.projectIndex + 1), 6500);
          }
        }
      }
      function renderProjectCarousel(count) {
        const dots = $("#projectDots");
        if (!dots) return;
        dots.replaceChildren();
        for (let index = 0; index < count; index += 1) {
          const dot = document.createElement("button");
          dot.type = "button";
          dot.className = `testimonial-dot${index === state.projectIndex ? " active" : ""}`;
          dot.setAttribute("aria-label", `Mostrar proyecto ${index + 1} de ${count}`);
          dot.setAttribute("aria-current", String(index === state.projectIndex));
          dot.addEventListener("click", () => showProject(index));
          dots.append(dot);
        }
        $("#projectPrevious").onclick = () => showProject(state.projectIndex - 1);
        $("#projectNext").onclick = () => showProject(state.projectIndex + 1);
        const grid = $("#projectsGrid");
        if (grid && !grid.dataset.swipeBound) {
          grid.dataset.swipeBound = "true";
          let startX = 0;
          grid.addEventListener("pointerdown", event => { startX = event.clientX; });
          grid.addEventListener("pointerup", event => {
            if (Math.abs(event.clientX - startX) < 45 || event.target.closest("a, button, [contenteditable='plaintext-only']")) return;
            showProject(state.projectIndex + (event.clientX < startX ? 1 : -1));
          });
        }
      }
      function showProject(index) {
        const cards = $$(".project-carousel-card", $("#projectsGrid"));
        if (!cards.length) return;
        state.projectIndex = (index + cards.length) % cards.length;
        cards.forEach((card, position) => {
          const active = position === state.projectIndex;
          card.hidden = !active;
          card.setAttribute("aria-hidden", String(!active));
          card.classList.toggle("active", active);
        });
        $$(".testimonial-dot", $("#projectDots")).forEach((dot, position) => {
          const active = position === state.projectIndex;
          dot.classList.toggle("active", active);
          dot.setAttribute("aria-current", String(active));
        });
      }
      function renderServices() {
        const grid = $("#serviceGrid");
        if (!grid) return;
        grid.replaceChildren();
        state.services.forEach(service => {
          const card = document.createElement("article");
          card.className = "service-card reveal visible interactive-card";
          const number = document.createElement("span");
          number.className = "service-number";
          number.textContent = service.number;
          number.dataset.serviceId = service.id;
          number.dataset.serviceField = "number";
          const symbol = document.createElement("span");
          symbol.className = "service-symbol";
          symbol.textContent = service.symbol;
          symbol.dataset.serviceId = service.id;
          symbol.dataset.serviceField = "symbol";
          const title = document.createElement("h3");
          title.textContent = service.title;
          title.dataset.serviceId = service.id;
          title.dataset.serviceField = "title";
          const description = document.createElement("p");
          description.textContent = service.description;
          description.dataset.serviceId = service.id;
          description.dataset.serviceField = "description";
          const tags = document.createElement("span");
          tags.className = "service-tags";
          tags.textContent = service.tags;
          tags.dataset.serviceId = service.id;
          tags.dataset.serviceField = "tags";
          card.append(number, symbol, title, description, tags);
          grid.append(card);
          bindInteractiveGlow(card);
        });
      }
      function renderSiteCopy() {
        $$("[data-site-copy]").forEach(element => {
          const value = state.siteCopy[element.dataset.siteCopy];
          if (typeof value !== "string") return;
          const attribute = element.dataset.siteCopyAttribute;
          if (attribute === "value") {
            element.value = value;
            element.textContent = value;
          } else if (attribute) element.setAttribute(attribute, value);
          else setVisualText(element, value);
        });
      }
      function setVisualText(element, value) {
        const children = [...element.childNodes];
        if (children.some(node => node.nodeType === Node.ELEMENT_NODE && node.nodeName !== "BR")) return;
        if (children.some(node => node.nodeName === "BR")) {
          element.replaceChildren();
          String(value).split("\n").forEach((line, index) => {
            if (index) element.append(document.createElement("br"));
            element.append(document.createTextNode(line));
          });
          return;
        }
        element.textContent = value;
      }
      function renderTestimonials() {
        const list = $("#testimonialList");
        const empty = $("#testimonialEmpty");
        if (!list || !empty) return;
        state.testimonialObjectUrls.forEach(url => URL.revokeObjectURL(url));
        state.testimonialObjectUrls = [];
        window.clearInterval(state.testimonialTimer);
        list.replaceChildren();
        const published = state.testimonials.filter(item => item.published);
        const controls = $("#testimonialControls");
        const dots = $("#testimonialDots");
        empty.hidden = published.length > 0;
        if (controls) controls.hidden = published.length < 2;
        if (dots) dots.replaceChildren();
        published.forEach((testimonial, index) => {
          const card = document.createElement("article");
          card.className = `testimonial-card reveal visible${index === 0 ? " active" : ""}`;
          card.setAttribute("aria-hidden", index === 0 ? "false" : "true");
          if (testimonial.image || testimonial.imageUrl) {
            card.classList.add("has-image");
            const image = document.createElement("img");
            image.className = "testimonial-image";
            image.src = testimonial.imageUrl || URL.createObjectURL(testimonial.image);
            image.alt = `Imagen compartida por ${testimonial.name}`;
            image.dataset.testimonialImage = String(testimonial.id);
            if (testimonial.image) state.testimonialObjectUrls.push(image.src);
            card.append(image);
          }
          const body = document.createElement("div");
          body.className = "testimonial-card-body";
          const quoteMark = document.createElement("span");
          quoteMark.className = "testimonial-mark";
          quoteMark.setAttribute("aria-hidden", "true");
          quoteMark.textContent = "“";
          const quote = document.createElement("blockquote");
          quote.textContent = testimonial.comment;
          if (testimonial.rating) {
            const rating = document.createElement("div");
            rating.className = "testimonial-rating";
            rating.setAttribute("aria-label", `${testimonial.rating} de 5 estrellas`);
            rating.textContent = `${"★".repeat(testimonial.rating)}${"☆".repeat(5 - testimonial.rating)}`;
            body.append(rating);
          }
          const attribution = document.createElement("div");
          attribution.className = "testimonial-attribution";
          const author = document.createElement("strong");
          author.textContent = testimonial.name;
          attribution.append(author);
          if (testimonial.project) {
            const project = document.createElement("span");
            project.textContent = testimonial.project;
            attribution.append(project);
          }
          body.append(quoteMark, quote, attribution);
          card.append(body);
          list.append(card);
          if (dots) {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = `testimonial-dot${index === 0 ? " active" : ""}`;
            dot.setAttribute("aria-label", `Mostrar comentario ${index + 1} de ${published.length}`);
            dot.setAttribute("aria-current", index === 0 ? "true" : "false");
            dot.addEventListener("click", () => showTestimonial(index));
            dots.append(dot);
          }
        });
        const previous = $("#testimonialPrevious");
        const next = $("#testimonialNext");
        if (previous) previous.onclick = () => showTestimonial(state.testimonialIndex - 1);
        if (next) next.onclick = () => showTestimonial(state.testimonialIndex + 1);
        state.testimonialIndex = 0;
        if (published.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          state.testimonialTimer = window.setInterval(() => showTestimonial(state.testimonialIndex + 1), 6000);
        }
      }
      function showTestimonial(index) {
        const cards = $$(".testimonial-card", $("#testimonialList"));
        if (!cards.length) return;
        state.testimonialIndex = (index + cards.length) % cards.length;
        cards.forEach((card, position) => {
          const active = position === state.testimonialIndex;
          card.classList.toggle("active", active);
          card.setAttribute("aria-hidden", String(!active));
        });
        $$(".testimonial-dot", $("#testimonialDots")).forEach((dot, position) => {
          const active = position === state.testimonialIndex;
          dot.classList.toggle("active", active);
          dot.setAttribute("aria-current", String(active));
        });
      }
      function renderAdminReviewLogin() {
        $$(".admin-tab").forEach(button => { button.disabled = true; });
        $("#adminTitle").textContent = "Acceso al panel";
        $("#adminSubtitle").textContent = "Ingresa la contraseña para continuar.";
        const adminEmailConfigured = Boolean(String(supabase.adminEmail || "").trim());
        content.innerHTML = `
          <p class="settings-note">${supabaseConfigured() && adminEmailConfigured ? "Ingresa la contraseña de Andrea. Su correo se valida internamente." : "El acceso solo te pedirá la contraseña. Para completar la configuración una sola vez, define el correo de Andrea en supabase-config.js y crea esa cuenta autorizada en Supabase."}</p>
          ${supabaseConfigured() ? `<form class="admin-form" id="reviewAdminLogin"><div class="field full"><label for="reviewAdminPassword">Contraseña</label><div class="password-field"><input id="reviewAdminPassword" name="password" type="password" autocomplete="current-password" required autofocus><button class="password-visibility" type="button" aria-label="Mostrar contraseña" aria-pressed="false" title="Mostrar contraseña"><svg class="password-eye-open" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg><svg class="password-eye-closed" viewBox="0 0 24 24" aria-hidden="true" hidden><path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 5.2A10.7 10.7 0 0 1 12 5c6.4 0 10 7 10 7a14 14 0 0 1-3 3.8M6.2 6.2C3.5 8 2 12 2 12s3.6 7 10 7c1.2 0 2.3-.2 3.3-.6"/></svg></button></div></div><div class="form-actions"><button class="admin-button" type="submit">Entrar al administrador</button></div></form>` : ""}`;
        const form = $("#reviewAdminLogin");
        if (form) {
          const passwordInput = $("#reviewAdminPassword", form);
          const visibilityButton = $(".password-visibility", form);
          visibilityButton.addEventListener("click", () => {
            const showPassword = passwordInput.type === "password";
            passwordInput.type = showPassword ? "text" : "password";
            visibilityButton.setAttribute("aria-label", showPassword ? "Ocultar contraseña" : "Mostrar contraseña");
            visibilityButton.setAttribute("title", showPassword ? "Ocultar contraseña" : "Mostrar contraseña");
            visibilityButton.setAttribute("aria-pressed", String(showPassword));
            $(".password-eye-open", visibilityButton).hidden = showPassword;
            $(".password-eye-closed", visibilityButton).hidden = !showPassword;
            passwordInput.focus();
          });
          form.addEventListener("submit", async event => {
          event.preventDefault();
          const data = new FormData(form);
          try {
            await signInAdmin(String(data.get("password")));
            state.remoteReviewsLoaded = false;
            $$(".admin-tab").forEach(button => { button.disabled = false; });
            const activeTab = $(".admin-tab.active")?.dataset.tab || "projects";
            if (activeTab === "testimonials") {
              await loadRemoteReviews(true);
              renderAdminTestimonials();
            } else adminView(activeTab);
            showToast("Sesión iniciada.");
          } catch (error) { showToast(`No se pudo iniciar sesión: ${error.message}`, true); }
          });
        }
      }
      function openProject(project) {
        if (!dialog) return;
        $("#dialogImage").src = project.image || "";
        $("#dialogImage").alt = project.title;
        $("#dialogImage").dataset.projectImage = project.id;
        $("#dialogCategory").textContent = project.category;
        $("#dialogCategory").dataset.projectId = project.id;
        $("#dialogCategory").dataset.projectField = "category";
        $("#dialogTitle").textContent = project.title;
        $("#dialogTitle").dataset.projectId = project.id;
        $("#dialogTitle").dataset.projectField = "title";
        $("#dialogDescription").textContent = project.description || "";
        $("#dialogDescription").dataset.projectId = project.id;
        $("#dialogDescription").dataset.projectField = "description";
        $("#dialogYear").textContent = project.year || "";
        $("#dialogYear").dataset.projectId = project.id;
        $("#dialogYear").dataset.projectField = "year";
        dialog.classList.add("open");
        document.body.classList.add("locked");
        $("#closeProject").focus();
      }
      function closeProject() { if (dialog) dialog.classList.remove("open"); document.body.classList.remove("locked"); }
      const visualPages = [
        ["Inicio", "./index.html"],
        ["Proyectos", "./proyectos.html"],
        ["Servicios", "./servicios.html"],
        ["Sobre mí", "./sobre-mi.html"],
        ["Contacto", "./contacto.html"]
      ];
      function visualPageKey() {
        return decodeURIComponent(location.pathname.split("/").pop() || "index.html");
      }
      function visualSelectorFor(element) {
        if (element.id) return `#${CSS.escape(element.id)}`;
        for (const [attribute, value] of [
          ["data-site-copy", element.dataset.siteCopy],
          ["data-profile", element.dataset.profile],
          ["data-visual-image", element.dataset.visualImage],
          ["data-testimonial-image", element.dataset.testimonialImage]
        ]) {
          if (!value) continue;
          const selector = `[${attribute}="${CSS.escape(value)}"]`;
          if ($$(selector).length === 1) return selector;
        }
        const parts = [];
        let current = element;
        while (current && current !== document.body) {
          const tag = current.tagName.toLowerCase();
          const index = [...current.parentElement.children].filter(sibling => sibling.tagName === current.tagName).indexOf(current) + 1;
          parts.unshift(`${tag}:nth-of-type(${index})`);
          current = current.parentElement;
        }
        return `body > ${parts.join(" > ")}`;
      }
      function visualImageStyleKey(image) {
        if (image.dataset.projectImage) return `project:${image.dataset.projectImage}`;
        if (image.dataset.testimonialImage) return `testimonial:${image.dataset.testimonialImage}`;
        if (image.closest(".portrait, .profile-portrait")) return "profile:portrait";
        return `page:${visualPageKey()}:${visualSelectorFor(image)}`;
      }
      function applyVisualSavedContent() {
        const page = visualPageKey();
        Object.entries(state.visualCopy[page] || {}).forEach(([selector, text]) => {
          const element = $(selector);
          if (element) setVisualText(element, text);
        });
        Object.entries(state.visualImages[page] || {}).forEach(([selector, image]) => {
          const element = $(selector);
          if (element instanceof HTMLImageElement) element.src = image;
        });
        Object.entries(state.visualLinks[page] || {}).forEach(([selector, href]) => {
          const element = $(selector);
          if (element instanceof HTMLAnchorElement) element.href = href;
        });
        $$("img").forEach(image => {
          const style = state.visualImageStyles[visualImageStyleKey(image)];
          if (!style) return;
          if (style.position) image.style.objectPosition = style.position;
          if (style.fit) image.style.objectFit = style.fit;
        });
      }
      function visualHasChanges() {
        const pending = state.visualPending;
        return Boolean(pending && Object.values(pending).some(group => Object.keys(group).length));
      }
      function visualRecordText(element) {
        const value = element.innerText.trim();
        const pending = state.visualPending;
        if (!pending || !value) return;
        if (element.dataset.siteCopy) pending.copy[element.dataset.siteCopy] = value;
        else if (element.dataset.profile) pending.profile[element.dataset.profile] = value;
        else if (element.dataset.projectId && element.dataset.projectField) {
          const project = state.projects.find(item => item.id === element.dataset.projectId);
          if (project) pending.projects[project.id] = { ...(pending.projects[project.id] || project), [element.dataset.projectField]: value };
        } else if (element.dataset.serviceId && element.dataset.serviceField) {
          const service = state.services.find(item => item.id === element.dataset.serviceId);
          if (service) pending.services[service.id] = { ...(pending.services[service.id] || service), [element.dataset.serviceField]: value };
        } else {
          pending.content[visualSelectorFor(element)] = value;
        }
        element.classList.add("visual-edited");
      }
      function selectVisualImage(image) {
        state.selectedVisualImage = image;
        const key = visualImageStyleKey(image);
        const style = state.visualPending?.imageStyles[key] || state.visualImageStyles[key] || {};
        const [positionX, positionY] = (style.position || "50% 50%").split(/\s+/).map(value => Number.parseInt(value, 10));
        $("#visualImagePositionX").value = String(Number.isFinite(positionX) ? positionX : 50);
        $("#visualImagePositionY").value = String(Number.isFinite(positionY) ? positionY : 50);
        $("#visualImageFit").value = style.fit || "cover";
        $("#visualImageControls").hidden = false;
        image.classList.add("visual-image-selected");
        $("#visualEditStatus").textContent = "Imagen seleccionada: ajusta el encuadre o reemplázala.";
      }
      function updateSelectedImageStyle() {
        const image = state.selectedVisualImage;
        if (!image || !image.isConnected) return;
        const key = visualImageStyleKey(image);
        const style = {
          position: `${$("#visualImagePositionX").value}% ${$("#visualImagePositionY").value}%`,
          fit: $("#visualImageFit").value
        };
        image.style.objectPosition = style.position;
        image.style.objectFit = style.fit;
        state.visualPending.imageStyles[key] = style;
        $("#visualEditStatus").textContent = "Hay cambios sin guardar.";
      }
      async function saveVisualEdits() {
        const pending = state.visualPending;
        if (!pending || !visualHasChanges()) return;
        try {
          state.siteCopy = { ...state.siteCopy, ...pending.copy };
          state.profile = { ...state.profile, ...pending.profile };
          state.projects = state.projects.map(project => pending.projects[project.id] || project);
          state.services = state.services.map(service => pending.services[service.id] || service);
          const page = visualPageKey();
          state.visualCopy[page] = { ...(state.visualCopy[page] || {}), ...pending.content };
          state.visualImages[page] = { ...(state.visualImages[page] || {}), ...pending.images };
          state.visualImageStyles = { ...state.visualImageStyles, ...pending.imageStyles };
          state.visualLinks[page] = { ...(state.visualLinks[page] || {}), ...pending.links };
          await syncSiteContent();
          state.visualPending = { copy: {}, profile: {}, projects: {}, services: {}, content: {}, images: {}, imageStyles: {}, links: {} };
          renderSiteCopy();
          renderProfile();
          renderProjects();
          renderServices();
          applyVisualSavedContent();
          $("#visualEditStatus").textContent = "Cambios guardados y sincronizados.";
          showToast("Cambios guardados y sincronizados.");
        } catch (error) {
          if (error.localSaved) {
            state.visualPending = { copy: {}, profile: {}, projects: {}, services: {}, content: {}, images: {}, imageStyles: {}, links: {} };
            renderSiteCopy();
            renderProfile();
            renderProjects();
            renderServices();
            applyVisualSavedContent();
            $("#visualEditStatus").textContent = "Guardado en este dispositivo; sincronización pendiente.";
            showToast(`Guardado en este dispositivo. No se pudo sincronizar: ${error.message}`, true);
            return;
          }
          showToast(`No se pudieron guardar los cambios: ${error.message}`, true);
        }
      }
      function startVisualEditor() {
        try { sessionStorage.setItem(VISUAL_EDIT_SESSION_KEY, "1"); }
        catch (error) { showToast(`No se pudo activar la edición visual: ${error.message}`, true); return; }
        window.clearInterval(state.projectCarouselTimer);
        closeAdmin();
        document.body.classList.add("visual-edit-mode");
        state.visualPending = { copy: {}, profile: {}, projects: {}, services: {}, content: {}, images: {}, imageStyles: {}, links: {} };
        const toolbar = document.createElement("div");
        toolbar.id = "visualEditToolbar";
        toolbar.className = "visual-edit-toolbar";
        toolbar.innerHTML = `<div class="visual-edit-message"><strong>Edición visual</strong><span>Pulsa textos o imágenes; puedes ajustar el encuadre y reemplazarlas.</span></div><label class="visual-edit-navigation">Ver página<select id="visualPageSelect">${visualPages.map(([label, path]) => `<option value="${path}">${label}</option>`).join("")}</select></label><div class="visual-image-controls" id="visualImageControls" hidden><label>Encuadre horizontal <input type="range" id="visualImagePositionX" min="0" max="100" value="50"></label><label>Encuadre vertical <input type="range" id="visualImagePositionY" min="0" max="100" value="50"></label><label>Ajuste<select id="visualImageFit"><option value="cover">Rellenar</option><option value="contain">Mostrar completa</option></select></label><button type="button" id="visualReplaceImage">Cambiar imagen</button></div><span id="visualEditStatus" class="visual-edit-status" role="status">Sin cambios pendientes.</span><div class="visual-edit-actions"><button type="button" id="visualCancelButton">Cancelar</button><button type="button" id="visualSaveButton">Guardar</button></div>`;
        document.body.append(toolbar);
        $("#visualPageSelect").value = `./${visualPageKey()}`;
        const imageInput = document.createElement("input");
        imageInput.type = "file";
        imageInput.id = "visualImageInput";
        imageInput.accept = "image/jpeg,image/png,image/webp,image/gif";
        imageInput.hidden = true;
        document.body.append(imageInput);
        $("#visualReplaceImage").addEventListener("click", () => {
          const image = state.selectedVisualImage;
          if (!image) return;
          imageInput.dataset.targetSelector = visualSelectorFor(image);
          imageInput.dataset.profileImage = String(Boolean(image.closest(".portrait, .profile-portrait")));
          imageInput.dataset.projectId = image.dataset.projectImage || "";
          imageInput.value = "";
          imageInput.click();
        });
        ["#visualImagePositionX", "#visualImagePositionY", "#visualImageFit"].forEach(selector => {
          $(selector).addEventListener("input", updateSelectedImageStyle);
          $(selector).addEventListener("change", updateSelectedImageStyle);
        });
        imageInput.addEventListener("change", () => {
          const file = imageInput.files[0];
          if (!file) return;
          if (!file.type.startsWith("image/") || file.size > 8 * 1024 * 1024) {
            showToast("Elige una imagen JPG, PNG, WebP o GIF de máximo 8 MB.", true);
            return;
          }
          const reader = new FileReader();
          reader.onerror = () => showToast("No se pudo leer la imagen seleccionada.", true);
          reader.onload = () => {
            const image = document.querySelector(imageInput.dataset.targetSelector);
            if (!(image instanceof HTMLImageElement) || typeof reader.result !== "string") {
              showToast("No se pudo identificar la imagen que quieres cambiar.", true);
              return;
            }
            image.src = reader.result;
            const projectId = imageInput.dataset.projectId;
            if (projectId) {
              const project = state.projects.find(item => item.id === projectId);
              if (project) state.visualPending.projects[projectId] = { ...(state.visualPending.projects[projectId] || project), image: reader.result };
            } else if (imageInput.dataset.profileImage === "true") {
              state.visualPending.profile.portrait = reader.result;
            } else {
              state.visualPending.images[visualSelectorFor(image)] = reader.result;
            }
            updateSelectedImageStyle();
            image.classList.add("visual-edited");
            $("#visualEditStatus").textContent = "Hay cambios sin guardar.";
          };
          reader.readAsDataURL(file);
        });
        $("#visualSaveButton").addEventListener("click", saveVisualEdits);
        $("#visualCancelButton").addEventListener("click", () => {
          try { sessionStorage.removeItem(VISUAL_EDIT_SESSION_KEY); }
          catch (error) { showToast(`No se pudo cerrar la edición visual: ${error.message}`, true); return; }
          state.visualDiscarding = true;
          location.reload();
        });
        $("#visualPageSelect").addEventListener("change", async event => {
          const destination = event.currentTarget.value;
          if (visualHasChanges()) await saveVisualEdits();
          if (visualHasChanges()) {
            event.currentTarget.value = `./${visualPageKey()}`;
            return;
          }
          location.href = destination;
        });
        document.addEventListener("click", event => {
          if (!document.body.classList.contains("visual-edit-mode") || event.target.closest("#visualEditToolbar")) return;
          const target = event.target instanceof Element ? event.target : null;
          if (!target || target.closest("input, textarea, select, form, .admin-overlay, [aria-hidden='true']")) return;
          if (target.closest(".project-dialog-close")) return;
          if (target.closest("#projectPrevious, #projectNext, #projectDots")) return;
          if (event.altKey) {
            const link = target.closest("a");
            if (link) {
              event.preventDefault();
              event.stopPropagation();
              const nextUrl = window.prompt("Enlace del elemento", link.href);
              if (nextUrl === null) return;
              let parsed;
              try { parsed = new URL(nextUrl, location.href); }
              catch { showToast("Escribe un enlace válido.", true); return; }
              if (!["http:", "https:", "mailto:", "tel:"].includes(parsed.protocol)) {
                showToast("Ese tipo de enlace no está permitido.", true);
                return;
              }
              link.href = parsed.href;
              state.visualPending.links[visualSelectorFor(link)] = parsed.href;
              $("#visualEditStatus").textContent = "Hay cambios sin guardar.";
              return;
            }
          }
          const image = target.closest("img[data-visual-image], img[data-project-image], img[data-testimonial-image], .portrait img, .profile-portrait img");
          if (image) {
            event.preventDefault();
            event.stopPropagation();
            selectVisualImage(image);
            return;
          }
          const bound = target.closest("[data-site-copy], [data-profile], [data-project-field], [data-service-field]");
          const leaf = target.closest("span, em, strong, small, p, h1, h2, h3, h4, li, button, a, label, summary, .eyebrow, .brand-caption, .project-year, .service-number, .service-symbol, .service-tags, .manifesto-index, .profile-signature");
          const editable = bound?.childElementCount === 0 ? bound : leaf?.childElementCount === 0 ? leaf : null;
          if (editable && editable.innerText.trim()) {
            event.preventDefault();
            event.stopPropagation();
            if (editable !== document.activeElement) {
              editable.contentEditable = "plaintext-only";
              editable.classList.add("visual-editable");
              editable.focus();
            }
            return;
          }
          const lineBreakText = bound || leaf;
          if (lineBreakText && [...lineBreakText.children].every(child => child.tagName === "BR") && lineBreakText.innerText.trim()) {
            event.preventDefault();
            event.stopPropagation();
            const value = window.prompt("Edita este texto. Usa una línea por cada renglón.", lineBreakText.innerText);
            if (value === null || !value.trim()) return;
            setVisualText(lineBreakText, value);
            visualRecordText(lineBreakText);
            $("#visualEditStatus").textContent = "Hay cambios sin guardar.";
            return;
          }
          if (target.closest(".project-card")) {
            event.preventDefault();
            event.stopPropagation();
            const project = state.projects.find(item => item.id === target.closest(".project-card").dataset.projectId);
            if (project) openProject(project);
          }
        }, true);
        document.addEventListener("input", event => {
          if (event.target instanceof HTMLElement && event.target.isContentEditable && document.body.classList.contains("visual-edit-mode")) {
            visualRecordText(event.target);
            $("#visualEditStatus").textContent = "Hay cambios sin guardar.";
          }
        });
        window.addEventListener("beforeunload", event => {
          if (!visualHasChanges() || state.visualDiscarding) return;
          event.preventDefault();
          event.returnValue = "";
        });
      }
      function adminView(tab) {
        $$(".admin-tab").forEach(button => button.classList.toggle("active", button.dataset.tab === tab));
        const titles = { visual: "Editar página", projects: "Mis proyectos", new: state.editingId ? "Editar proyecto" : "Nuevo proyecto", services: "Servicios", newService: state.editingServiceId ? "Editar servicio" : "Nuevo servicio", testimonials: "Comentarios" };
        const subtitles = {
          visual: "Edita el sitio como lo ven tus visitantes.",
          projects: "Organiza y actualiza tu portfolio.",
          new: "Completa los detalles y revisa cómo se verá el proyecto.",
          services: "Administra lo que ofreces a tus clientes.",
          newService: "Define el servicio y revisa su tarjeta antes de guardar.",
          testimonials: "Revisa las experiencias antes de publicarlas."
        };
        $("#adminTitle").textContent = titles[tab];
        $("#adminSubtitle").textContent = subtitles[tab];
        if (tab === "visual") startVisualEditor();
        else if (tab === "projects") renderAdminProjects();
        else if (tab === "new") renderProjectForm();
        else if (tab === "services") renderAdminServices();
        else if (tab === "newService") renderServiceForm();
        else renderAdminTestimonials();
      }
      function renderSiteCopyForm() {
        const groups = new Map();
        siteCopyFields.forEach(field => {
          const section = field.label.startsWith("Navegación ·") ? "Navegación"
            : field.label.startsWith("Pie de página ·") ? "Pie de página"
              : field.label.split(" · ")[0];
          if (!groups.has(section)) groups.set(section, []);
          groups.get(section).push(field);
        });
        const sections = [...groups.entries()].map(([section, fields], index) => `
          <details class="admin-copy-section" ${index === 0 ? "open" : ""}>
            <summary><span>${escapeHtml(section)}</span><small>${fields.length} textos</small></summary>
            <div class="admin-copy-section-body">
              <div class="admin-form">${fields.map(field => `
                <div class="field full"><label for="copy-${field.key}">${escapeHtml(field.label.slice(field.label.indexOf(" · ") + 3))}</label>
                  <textarea id="copy-${field.key}" name="${field.key}" maxlength="500">${escapeHtml(state.siteCopy[field.key] ?? field.value)}</textarea>
                </div>`).join("")}
              </div>
              <section class="admin-live-preview"><span>VISTA PREVIA · ${escapeHtml(section.toUpperCase())}</span><div class="site-copy-preview" data-copy-section="${escapeAttribute(section)}"><div class="site-copy-preview-top"><span>⛤ ANDREA</span><small>VISTA EN EL PORTFOLIO</small></div><div class="site-copy-preview-body"><div class="site-copy-preview-kicker">${escapeHtml(section.toUpperCase())} / DISEÑO GRÁFICO</div><div class="site-copy-preview-items"></div></div></div></section>
            </div>
          </details>`).join("");
        content.innerHTML = `<p class="settings-note">Edita los textos por apartado. Abre una sección para cambiar su contenido y revisar la vista previa antes de guardar.</p><form id="siteCopyForm"><div class="admin-copy-sections">${sections}</div><div class="form-actions admin-copy-save"><button class="admin-button" type="submit">Guardar textos</button></div></form>`;
        const form = $("#siteCopyForm");
        const updatePreview = () => {
          const data = new FormData(form);
          $$(".site-copy-preview", form).forEach(preview => {
            const section = preview.dataset.copySection;
            const fields = siteCopyFields.filter(field => {
              const group = field.label.startsWith("Navegación ·") ? "Navegación"
                : field.label.startsWith("Pie de página ·") ? "Pie de página"
                  : field.label.split(" · ")[0];
              return group === section;
            });
            const items = $(".site-copy-preview-items", preview);
            items.replaceChildren();
            fields.forEach(field => {
              const item = document.createElement("article");
              const isHeading = /Titular|Título|título|Manifiesto|Cierre/.test(field.label);
              item.className = `site-copy-preview-item${isHeading ? " is-heading" : ""}`;
              const label = document.createElement("strong");
              label.textContent = field.label.slice(field.label.indexOf(" · ") + 3);
              const text = document.createElement("p");
              text.textContent = String(data.get(field.key) || "");
              item.append(label, text);
              items.append(item);
            });
          });
        };
        bindLivePreview(form, updatePreview);
        form.addEventListener("submit", saveSiteCopy);
      }
      function bindLivePreview(form, update) {
        form.addEventListener("input", update);
        form.addEventListener("change", update);
        update();
      }
      async function saveSiteCopy(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const copy = Object.fromEntries(siteCopyFields.map(field => [field.key, String(data.get(field.key) || "").trim()]));
        try {
          await dbRequest("settings", "readwrite", store => store.put({ key: "siteCopy", value: copy }));
          state.siteCopy = copy;
          await syncSiteContent();
          renderSiteCopy();
          showToast("Textos del sitio guardados y sincronizados.");
        } catch (error) { showToast(`No se pudieron guardar los textos: ${error.message}`, true); }
      }
      function renderAdminServices() {
        content.replaceChildren();
        const intro = document.createElement("div");
        intro.className = "admin-intro";
        intro.innerHTML = `<p>${state.services.length} servicio${state.services.length === 1 ? "" : "s"} en tu página.</p><button class="admin-button" type="button" data-action="add-service">＋ Añadir servicio</button>`;
        const list = document.createElement("div");
        list.className = "admin-projects";
        state.services.forEach(service => {
          const row = document.createElement("article");
          row.className = "admin-service-row";
          const details = document.createElement("div");
          const title = document.createElement("strong");
          title.textContent = service.title;
          const description = document.createElement("small");
          description.textContent = service.description;
          details.append(title, description);
          const actions = document.createElement("div");
          actions.className = "row-actions";
          const edit = document.createElement("button");
          edit.type = "button";
          edit.textContent = "Editar";
          edit.addEventListener("click", () => { state.editingServiceId = service.id; adminView("newService"); });
          const remove = document.createElement("button");
          remove.type = "button";
          remove.textContent = "Eliminar";
          remove.addEventListener("click", () => deleteService(service));
          actions.append(edit, remove);
          row.append(details, actions);
          list.append(row);
        });
        if (!state.services.length) {
          const empty = document.createElement("p");
          empty.className = "empty-projects";
          empty.textContent = "Todavía no hay servicios. Añade uno para que aparezca en la página de servicios.";
          list.append(empty);
        }
        content.append(intro, list);
        $('[data-action="add-service"]', intro).addEventListener("click", () => { state.editingServiceId = null; adminView("newService"); });
      }
      function renderServiceForm() {
        const service = state.services.find(item => item.id === state.editingServiceId);
        content.innerHTML = `
          <form class="admin-form" id="serviceForm">
            <div class="field"><label for="serviceTitle">Nombre *</label><input id="serviceTitle" name="title" required maxlength="70" value="${escapeAttribute(service?.title || "")}"></div>
            <div class="field"><label for="serviceNumber">Etiqueta pequeña</label><input id="serviceNumber" name="number" maxlength="30" value="${escapeAttribute(service?.number || "")}" placeholder="01 / BRAND"></div>
            <div class="field"><label for="serviceSymbol">Símbolo</label><input id="serviceSymbol" name="symbol" maxlength="4" value="${escapeAttribute(service?.symbol || "✳")}"></div>
            <div class="field"><label for="serviceTags">Etiquetas</label><input id="serviceTags" name="tags" maxlength="100" value="${escapeAttribute(service?.tags || "")}" placeholder="ESTRATEGIA · DISEÑO"></div>
            <div class="field full"><label for="serviceDescription">Descripción *</label><textarea id="serviceDescription" name="description" required maxlength="300">${escapeHtml(service?.description || "")}</textarea></div>
            <section class="admin-live-preview"><span>VISTA PREVIA DEL SERVICIO</span><article class="service-card"><span class="service-number" id="previewServiceNumber"></span><span class="service-symbol" id="previewServiceSymbol"></span><h3 id="previewServiceTitle"></h3><p id="previewServiceDescription"></p><span class="service-tags" id="previewServiceTags"></span></article></section>
            <div class="form-actions"><button class="admin-button" type="submit">${service ? "Guardar cambios" : "Añadir servicio"}</button><button class="admin-button secondary" type="button" data-action="cancel-service">Cancelar</button></div>
          </form>`;
        const form = $("#serviceForm");
        const updatePreview = () => {
          $("#previewServiceNumber").textContent = form.elements.number.value || "01 / BRAND";
          $("#previewServiceSymbol").textContent = form.elements.symbol.value || "✳";
          $("#previewServiceTitle").textContent = form.elements.title.value || "Nombre del servicio";
          $("#previewServiceDescription").textContent = form.elements.description.value || "La descripción de tu servicio aparecerá aquí.";
          $("#previewServiceTags").textContent = form.elements.tags.value || "ETIQUETAS";
        };
        bindLivePreview(form, updatePreview);
        form.addEventListener("submit", saveService);
        $('[data-action="cancel-service"]').addEventListener("click", () => { state.editingServiceId = null; adminView("services"); });
      }
      async function saveService(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const old = state.services.find(item => item.id === state.editingServiceId);
        const service = {
          id: old?.id || (crypto.randomUUID ? crypto.randomUUID() : `s-${Date.now()}`),
          title: String(data.get("title")).trim(),
          number: String(data.get("number")).trim(),
          symbol: String(data.get("symbol")).trim() || "✳",
          tags: String(data.get("tags")).trim(),
          description: String(data.get("description")).trim()
        };
        const services = old
          ? state.services.map(item => item.id === service.id ? service : item)
          : [...state.services, service];
        try {
          await dbRequest("settings", "readwrite", store => store.put({ key: "services", value: services }));
          state.services = services;
          await syncSiteContent();
          state.editingServiceId = null;
          renderServices();
          adminView("services");
          showToast(old ? "Servicio actualizado y sincronizado." : "Servicio añadido y sincronizado.");
        } catch (error) { showToast(`No se pudo guardar el servicio: ${error.message}`, true); }
      }
      async function deleteService(service) {
        if (!window.confirm(`¿Eliminar el servicio "${service.title}"?`)) return;
        const services = state.services.filter(item => item.id !== service.id);
        try {
          await dbRequest("settings", "readwrite", store => store.put({ key: "services", value: services }));
          state.services = services;
          await syncSiteContent();
          renderServices();
          renderAdminServices();
          showToast("Servicio eliminado y sincronizado.");
        } catch (error) { showToast(`No se pudo eliminar el servicio: ${error.message}`, true); }
      }
      function renderAdminTestimonials() {
        state.testimonialAdminObjectUrls.forEach(url => URL.revokeObjectURL(url));
        state.testimonialAdminObjectUrls = [];
        if (supabaseConfigured()) {
          if (!readAdminSession()) { renderAdminReviewLogin(); return; }
          if (!state.remoteReviewsLoaded) {
            content.innerHTML = `<p class="settings-note">Cargando reseñas recibidas…</p>`;
            assertReviewAdmin().then(() => loadRemoteReviews(true)).then(renderAdminTestimonials).catch(error => {
              content.innerHTML = `<p class="settings-note">No se pudieron cargar las reseñas: ${escapeHtml(error.message)}</p><button class="admin-button" type="button" data-action="retry-reviews">Reintentar</button><button class="admin-button secondary" type="button" data-action="logout-reviews">Cerrar sesión</button>`;
              $('[data-action="retry-reviews"]')?.addEventListener("click", () => { state.remoteReviewsLoaded = false; renderAdminTestimonials(); });
              $('[data-action="logout-reviews"]')?.addEventListener("click", signOutAdmin);
            });
            return;
          }
        }
        content.replaceChildren();
        const intro = document.createElement("div");
        intro.className = "admin-intro";
        const pending = state.testimonials.filter(item => !item.published).length;
        intro.innerHTML = `<p>${state.testimonials.length} reseña${state.testimonials.length === 1 ? "" : "s"} · ${pending} pendiente${pending === 1 ? "" : "s"} de revisar.</p>${supabaseConfigured() ? '<div class="admin-review-tools"><button class="admin-button secondary" type="button" data-action="refresh-reviews">Actualizar</button><button class="admin-button secondary" type="button" data-action="logout-reviews">Cerrar sesión</button></div>' : ""}`;
        const note = document.createElement("p");
        note.className = "settings-note";
        note.textContent = supabaseConfigured()
          ? "Las reseñas y fotos de clientes aparecen aquí como pendientes. Publícalas solo si autorizaron mostrar su comentario, nombre, calificación y foto; si no, déjalas ocultas."
          : "Configura Supabase para recibir reseñas de clientes en línea. Las reseñas locales antiguas solo están guardadas en este navegador.";
        const list = document.createElement("div");
        list.className = "admin-testimonials";
        state.testimonials.forEach(testimonial => {
          const row = document.createElement("article");
          row.className = "admin-testimonial-row";
          const details = document.createElement("div");
          const author = document.createElement("strong");
          author.textContent = testimonial.name;
          const project = document.createElement("small");
          project.textContent = `${testimonial.project || "Sin proyecto indicado"} · ${testimonial.published ? "Publicado" : "Pendiente"} · ${testimonial.authorized || testimonial.published ? "Permiso de publicación" : "Sin permiso de publicación"}`;
          const quote = document.createElement("p");
          quote.textContent = testimonial.comment;
          details.append(author, project, quote);
          if (testimonial.rating) {
            const rating = document.createElement("div");
            rating.className = "admin-testimonial-rating";
            rating.setAttribute("aria-label", `${testimonial.rating} de 5 estrellas`);
            rating.textContent = `${"★".repeat(testimonial.rating)}${"☆".repeat(5 - testimonial.rating)}`;
            details.append(rating);
          }
          if (testimonial.image || testimonial.imageUrl) {
            const image = document.createElement("img");
            image.className = "admin-testimonial-image";
            image.src = testimonial.imageUrl || URL.createObjectURL(testimonial.image);
            image.alt = `Imagen de ${testimonial.name}`;
            if (testimonial.image) state.testimonialAdminObjectUrls.push(image.src);
            details.append(image);
          }
          if (testimonial.imageError) {
            const imageError = document.createElement("small");
            imageError.className = "admin-testimonial-image-error";
            imageError.textContent = `No se pudo cargar la foto: ${testimonial.imageError}`;
            details.append(imageError);
          }
          const actions = document.createElement("div");
          actions.className = "row-actions";
          if (!testimonial.authorized && !testimonial.published && testimonial.source !== "supabase") {
            const authorize = document.createElement("button");
            authorize.type = "button";
            authorize.textContent = "Confirmar permiso";
            authorize.addEventListener("click", () => authorizeTestimonial(testimonial));
            actions.append(authorize);
          }
          const toggle = document.createElement("button");
          toggle.type = "button";
          toggle.textContent = testimonial.published ? "Ocultar" : "Publicar";
          toggle.addEventListener("click", () => toggleTestimonial(testimonial));
          const remove = document.createElement("button");
          const edit = document.createElement("button");
          edit.type = "button";
          edit.textContent = "Editar";
          edit.disabled = testimonial.source === "supabase";
          edit.title = edit.disabled ? "Las reseñas del cliente se conservan tal como fueron enviadas." : "";
          edit.addEventListener("click", () => { state.editingTestimonialId = testimonial.id; renderTestimonialForm(); });
          remove.type = "button";
          remove.textContent = "Eliminar";
          remove.addEventListener("click", () => deleteTestimonial(testimonial));
          actions.append(edit, toggle, remove);
          row.append(details, actions);
          list.append(row);
        });
        if (!state.testimonials.length) {
          const empty = document.createElement("p");
          empty.className = "empty-projects";
          empty.textContent = "Todavía no hay comentarios. Puedes añadir uno cuando recibas la autorización de un cliente.";
          list.append(empty);
        }
        content.append(intro, note, list);
        $('[data-action="refresh-reviews"]', intro)?.addEventListener("click", async event => {
          const button = event.currentTarget;
          button.disabled = true;
          try {
            await loadRemoteReviews(true);
            renderAdminTestimonials();
            showToast("Reseñas actualizadas.");
          } catch (error) { showToast(`No se pudieron actualizar las reseñas: ${error.message}`, true); }
          finally { button.disabled = false; }
        });
        $('[data-action="logout-reviews"]', intro)?.addEventListener("click", signOutAdmin);
      }
      function renderTestimonialForm() {
        const existing = state.testimonials.find(item => item.id === state.editingTestimonialId);
        const imagePreview = existing?.image ? URL.createObjectURL(existing.image) : "";
        if (imagePreview) state.testimonialAdminObjectUrls.push(imagePreview);
        content.innerHTML = `
          <p class="settings-note">${existing ? "Edita el comentario. Si quitas la autorización, se guardará como borrador." : "Añade el comentario recibido y confirma que tienes permiso para publicarlo. Si todavía no tienes permiso, déjalo como borrador."}</p>
          <form class="admin-form" id="testimonialForm">
            <div class="field"><label for="testimonialName">Nombre para mostrar *</label><input id="testimonialName" name="name" required maxlength="80" value="${escapeAttribute(existing?.name || "")}" placeholder="Nombre autorizado"></div>
            <div class="field"><label for="testimonialProject">Proyecto (opcional)</label><input id="testimonialProject" name="project" maxlength="100" value="${escapeAttribute(existing?.project || "")}" placeholder="Identidad visual"></div>
            <div class="field full"><label for="testimonialComment">Comentario *</label><textarea id="testimonialComment" name="comment" required maxlength="600" placeholder="Pega aquí el comentario del cliente">${escapeHtml(existing?.comment || "")}</textarea></div>
            <div class="field full"><label for="testimonialImage">Imagen (opcional, máximo 5 MB)</label><input id="testimonialImage" name="image" type="file" accept="image/*"><img id="testimonialImagePreview" class="testimonial-image-preview" alt="Vista previa de la imagen" src="${escapeAttribute(imagePreview)}" ${imagePreview ? "" : "hidden"}>${imagePreview ? '<label class="testimonial-consent-field"><input type="checkbox" name="removeImage"> Quitar la imagen actual</label>' : ""}</div>
            <div class="field full"><label class="testimonial-consent-field"><input type="checkbox" name="permission" ${existing?.authorized || existing?.published ? "checked" : ""}> Confirmo que el cliente autorizó publicar este comentario, el nombre y la imagen (si agregué una).</label></div>
            <section class="admin-live-preview"><span>VISTA PREVIA DEL COMENTARIO</span><article class="testimonial-card active" id="previewTestimonialCard"><img class="testimonial-image" id="previewTestimonialImage" alt="" hidden><div class="testimonial-card-body"><span class="testimonial-mark" aria-hidden="true">“</span><blockquote id="previewTestimonialComment"></blockquote><div class="testimonial-attribution"><strong id="previewTestimonialName"></strong><span id="previewTestimonialProject"></span></div></div></article></section>
            <div class="form-actions"><button class="admin-button" type="submit">${existing ? "Guardar cambios" : "Guardar comentario"}</button><button class="admin-button secondary" type="button" data-action="cancel-testimonial">Cancelar</button></div>
          </form>`;
        let previewUrl = "";
        const form = $("#testimonialForm");
        const updatePreview = () => {
          $("#previewTestimonialName").textContent = form.elements.name.value || "Nombre del cliente";
          $("#previewTestimonialProject").textContent = form.elements.project.value || "Proyecto";
          $("#previewTestimonialComment").textContent = form.elements.comment.value || "El comentario aparecerá aquí.";
          const image = $("#previewTestimonialImage");
          const source = previewUrl || (form.elements.removeImage?.checked ? "" : imagePreview);
          image.hidden = !source;
          if (source) image.src = source;
          $("#previewTestimonialCard").classList.toggle("has-image", Boolean(source));
        };
        $("#testimonialImage").addEventListener("change", event => {
          const file = event.currentTarget.files[0];
          const preview = $("#testimonialImagePreview");
          if (previewUrl) URL.revokeObjectURL(previewUrl);
          previewUrl = "";
          if (!file) { preview.hidden = true; preview.removeAttribute("src"); return; }
          if (!file.type.startsWith("image/") || file.size > 5 * 1024 * 1024) {
            event.currentTarget.value = "";
            preview.hidden = true;
            showToast("Elige una imagen de máximo 5 MB.", true);
            return;
          }
          previewUrl = URL.createObjectURL(file);
          if (form.elements.removeImage) form.elements.removeImage.checked = false;
          preview.src = previewUrl;
          preview.hidden = false;
          updatePreview();
        });
        form.elements.removeImage?.addEventListener("change", updatePreview);
        bindLivePreview(form, updatePreview);
        form.addEventListener("submit", saveTestimonial);
        $('[data-action="cancel-testimonial"]').addEventListener("click", () => { state.editingTestimonialId = null; adminView("testimonials"); });
      }
      async function saveTestimonial(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const imageFile = data.get("image");
        if (imageFile instanceof File && imageFile.size && (!imageFile.type.startsWith("image/") || imageFile.size > 5 * 1024 * 1024)) {
          showToast("Elige una imagen de máximo 5 MB.", true);
          return;
        }
        const old = state.testimonials.find(item => item.id === state.editingTestimonialId);
        const testimonial = {
          id: old?.id || (crypto.randomUUID ? crypto.randomUUID() : `t-${Date.now()}`),
          name: String(data.get("name")).trim(),
          project: String(data.get("project")).trim(),
          comment: String(data.get("comment")).trim(),
          image: data.has("removeImage") ? null : imageFile instanceof File && imageFile.size ? imageFile : old?.image || null,
          authorized: data.has("permission"),
          published: data.has("permission"),
          createdAt: old?.createdAt || Date.now()
        };
        try {
          await dbRequest("testimonials", "readwrite", store => store.put(testimonial));
          state.testimonials = [testimonial, ...state.testimonials.filter(item => item.id !== testimonial.id)].sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
          state.editingTestimonialId = null;
          renderTestimonials();
          adminView("testimonials");
          showToast(testimonial.published ? "Comentario publicado." : "Comentario guardado como borrador.");
        } catch (error) { showToast(`No se pudo guardar el comentario: ${error.message}`, true); }
      }
      async function authorizeTestimonial(testimonial) {
        if (!window.confirm(`¿Confirmas que "${testimonial.name}" autorizó publicar su comentario y el nombre indicado?`)) return;
        const updated = { ...testimonial, authorized: true };
        try {
          await dbRequest("testimonials", "readwrite", store => store.put(updated));
          state.testimonials = state.testimonials.map(item => item.id === updated.id ? updated : item);
          renderAdminTestimonials();
          showToast("Permiso confirmado. Ya puedes publicar el comentario.");
        } catch (error) { showToast(`No se pudo confirmar el permiso: ${error.message}`, true); }
      }
      async function toggleTestimonial(testimonial) {
        if (!testimonial.published && !testimonial.authorized) {
          showToast("Esta reseña no tiene autorización para publicarse. Déjala oculta hasta obtener permiso.", true);
          return;
        }
        const updated = { ...testimonial, authorized: testimonial.authorized || testimonial.published, published: !testimonial.published };
        try {
          if (testimonial.source === "supabase") {
            await supabaseRequest(`client_reviews?id=eq.${encodeURIComponent(testimonial.id)}`, {
              method: "PATCH", authenticated: true, prefer: "return=minimal", body: { approved: updated.published }
            });
          } else {
            await dbRequest("testimonials", "readwrite", store => store.put(updated));
          }
          state.testimonials = state.testimonials.map(item => item.id === updated.id ? updated : item);
          renderTestimonials();
          renderAdminTestimonials();
          showToast(updated.published ? "Comentario publicado." : "Comentario oculto.");
        } catch (error) { showToast(`No se pudo actualizar el comentario: ${error.message}`, true); }
      }
      async function deleteTestimonial(testimonial) {
        if (!window.confirm(`¿Eliminar el comentario de "${testimonial.name}"?`)) return;
        try {
          if (testimonial.source === "supabase") {
            await supabaseRequest(`client_reviews?id=eq.${encodeURIComponent(testimonial.id)}`, { method: "DELETE", authenticated: true });
          } else {
            await dbRequest("testimonials", "readwrite", store => store.delete(testimonial.id));
          }
          state.testimonials = state.testimonials.filter(item => item.id !== testimonial.id);
          renderTestimonials();
          renderAdminTestimonials();
          if (testimonial.source === "supabase" && testimonial.imagePath) {
            try { await deleteReviewPhoto(testimonial.imagePath); }
            catch (error) {
              showToast(`El comentario se eliminó, pero no se pudo borrar su foto: ${error.message}`, true);
              return;
            }
          }
          showToast("Comentario eliminado.");
        } catch (error) { showToast(`No se pudo eliminar el comentario: ${error.message}`, true); }
      }
      function renderAdminProjects() {
        content.replaceChildren();
        const intro = document.createElement("div");
        intro.className = "admin-intro";
        intro.innerHTML = `<p>${state.projects.length} proyecto${state.projects.length === 1 ? "" : "s"} en tu portfolio.</p><button class="admin-button" type="button" data-action="add">＋ Añadir proyecto</button>`;
        const list = document.createElement("div");
        list.className = "admin-projects";
        state.projects.forEach(project => {
          const row = document.createElement("div"); row.className = "admin-project-row";
          const img = document.createElement("img"); img.src = project.image || ""; img.alt = "";
          const details = document.createElement("div");
          const title = document.createElement("strong"); title.textContent = project.title;
          const sub = document.createElement("small"); sub.textContent = `${project.category} · ${project.year}`;
          details.append(title, sub);
          const actions = document.createElement("div"); actions.className = "row-actions";
          const edit = document.createElement("button"); edit.type = "button"; edit.textContent = "Editar"; edit.addEventListener("click", () => { state.editingId = project.id; adminView("new"); });
          const remove = document.createElement("button"); remove.type = "button"; remove.textContent = "Eliminar"; remove.addEventListener("click", () => deleteProject(project));
          actions.append(edit, remove); row.append(img, details, actions); list.append(row);
        });
        content.append(intro, list);
        $('[data-action="add"]', intro).addEventListener("click", () => { state.editingId = null; adminView("new"); });
      }
      function renderProjectForm() {
        const project = state.projects.find(item => item.id === state.editingId);
        content.innerHTML = `
          <form class="admin-form" id="projectForm">
            <div class="field"><label for="projectTitle">Nombre del proyecto *</label><input id="projectTitle" name="title" required maxlength="80" value="${escapeAttribute(project?.title || "")}" placeholder="Ej. Nocturna Studio"></div>
            <div class="field"><label for="projectCategory">Categoría *</label><input id="projectCategory" name="category" required maxlength="50" value="${escapeAttribute(project?.category || "")}" placeholder="Identidad visual / branding"></div>
            <div class="field"><label for="projectYear">Año</label><input id="projectYear" name="year" maxlength="4" value="${escapeAttribute(project?.year || new Date().getFullYear())}" placeholder="2026"></div>
            <div class="field"><label for="projectImageUrl">Enlace a imagen (opcional)</label><input id="projectImageUrl" name="imageUrl" type="url" value="${project && !project.image?.startsWith("data:") ? escapeAttribute(project.image) : ""}" placeholder="https://..."></div>
            <div class="field full"><label for="projectDescription">Cuéntame sobre el proyecto</label><textarea id="projectDescription" name="description" maxlength="1000" placeholder="Concepto, proceso y decisiones gráficas...">${escapeHtml(project?.description || "")}</textarea></div>
            <div class="field full"><label for="projectImage">Subir imagen de portada</label><div class="upload-box"><input id="projectImage" name="image" type="file" accept="image/jpeg,image/png,image/webp,image/gif"><div class="upload-help">JPG, PNG, WebP o GIF. Máximo 8 MB.</div></div></div>
            <section class="admin-live-preview"><span>VISTA PREVIA DEL PROYECTO</span><article class="project-card admin-preview-project"><div class="project-image"><img id="previewProjectImage" alt=""></div><div class="project-meta"><div><h3 id="previewProjectTitle"></h3><p id="previewProjectCategory"></p></div><span class="project-year" id="previewProjectYear"></span></div><p class="admin-preview-description" id="previewProjectDescription"></p></article></section>
            <div class="form-actions"><button class="admin-button" type="submit">${project ? "Guardar cambios" : "Publicar proyecto"}</button><button class="admin-button secondary" type="button" data-action="cancel">Cancelar</button></div>
          </form>`;
        const form = $("#projectForm");
        let previewUrl = project?.image || "";
        const updatePreview = () => {
          $("#previewProjectTitle").textContent = form.elements.title.value || "Nombre del proyecto";
          $("#previewProjectCategory").textContent = form.elements.category.value || "Categoría";
          $("#previewProjectYear").textContent = form.elements.year.value;
          $("#previewProjectDescription").textContent = form.elements.description.value || "La descripción del proyecto aparecerá aquí.";
          const image = $("#previewProjectImage");
          image.src = previewUrl;
          image.alt = form.elements.title.value || "Vista previa del proyecto";
        };
        form.elements.image.addEventListener("change", async event => {
          const file = event.currentTarget.files[0];
          if (file && file.size <= 8 * 1024 * 1024 && file.type.startsWith("image/")) {
            try { previewUrl = await readImage(file); updatePreview(); }
            catch (error) { showToast(error.message, true); }
          }
        });
        bindLivePreview(form, updatePreview);
        form.addEventListener("submit", saveProject);
        $('[data-action="cancel"]').addEventListener("click", () => { state.editingId = null; adminView("projects"); });
      }
      function renderProfileForm() {
        content.innerHTML = `
          <p class="settings-note">Personaliza la información que aparece en tu portfolio. Los cambios se guardan en este navegador.</p>
          <form class="admin-form" id="profileForm">
            <div class="field"><label for="profileName">Nombre</label><input id="profileName" name="name" required maxlength="80" value="${escapeAttribute(state.profile.name)}"></div>
            <div class="field"><label for="profileRole">Profesión</label><input id="profileRole" name="role" maxlength="100" value="${escapeAttribute(state.profile.role)}"></div>
            <div class="field full"><label for="profileIntro">Presentación breve</label><textarea id="profileIntro" name="intro" maxlength="280">${escapeHtml(state.profile.intro)}</textarea></div>
            <div class="field full"><label for="profileBio">Sobre mí</label><textarea id="profileBio" name="bio" maxlength="600">${escapeHtml(state.profile.bio)}</textarea></div>
            <div class="field"><label for="profileEmail">Correo de contacto (opcional)</label><input id="profileEmail" name="email" type="email" value="${escapeAttribute(state.profile.email)}"></div>
            <div class="field"><label for="profileWhatsapp">WhatsApp con indicativo del país</label><input id="profileWhatsapp" name="whatsapp" inputmode="numeric" pattern="[0-9+() -]{10,20}" required value="${escapeAttribute(state.profile.whatsapp)}" placeholder="573113352580"></div>
            <div class="field"><label for="profileInstagram">Enlace de Instagram</label><input id="profileInstagram" name="instagram" type="url" value="${escapeAttribute(state.profile.instagram)}"></div>
            <div class="field"><label for="profileBehance">Enlace de Behance</label><input id="profileBehance" name="behance" type="url" value="${escapeAttribute(state.profile.behance)}"></div>
            <div class="field full"><label for="profilePortrait">Subir mi foto de perfil</label><div class="upload-box"><input id="profilePortrait" name="portrait" type="file" accept="image/jpeg,image/png,image/webp,image/gif"><div class="upload-help">JPG, PNG, WebP o GIF. Máximo 8 MB.</div></div></div>
            <section class="admin-live-preview"><span>VISTA PREVIA DEL PERFIL</span><article class="admin-profile-preview"><img id="previewProfileImage" alt=""><div><span id="previewProfileRole"></span><h3 id="previewProfileName"></h3><p id="previewProfileIntro"></p><p id="previewProfileBio"></p><small id="previewProfileContact"></small></div></article></section>
            <div class="form-actions"><button class="admin-button" type="submit">Guardar perfil</button></div>
          </form>`;
        const form = $("#profileForm");
        let portraitPreview = state.profile.portrait || "";
        const updatePreview = () => {
          $("#previewProfileName").textContent = form.elements.name.value || "Tu nombre";
          $("#previewProfileRole").textContent = form.elements.role.value || "Tu profesión";
          $("#previewProfileIntro").textContent = form.elements.intro.value || "Tu presentación breve aparecerá aquí.";
          $("#previewProfileBio").textContent = form.elements.bio.value || "Tu biografía aparecerá aquí.";
          $("#previewProfileContact").textContent = `${form.elements.email.value || "Sin correo"} · WhatsApp +${form.elements.whatsapp.value.replace(/\D/g, "") || "sin configurar"} · ${form.elements.instagram.value || "Sin Instagram"} · ${form.elements.behance.value || "Sin Behance"}`;
          $("#previewProfileImage").src = portraitPreview;
        };
        form.elements.portrait.addEventListener("change", async event => {
          const file = event.currentTarget.files[0];
          if (file && file.size <= 8 * 1024 * 1024 && file.type.startsWith("image/")) {
            try { portraitPreview = await readImage(file); updatePreview(); }
            catch (error) { showToast(error.message, true); }
          }
        });
        bindLivePreview(form, updatePreview);
        form.addEventListener("submit", saveProfile);
      }
      function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
      }
      function escapeAttribute(value) { return escapeHtml(value); }
      function readImage(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(new Error("No se pudo leer la imagen seleccionada."));
          reader.readAsDataURL(file);
        });
      }
      async function saveProject(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const file = data.get("image");
        if (file instanceof File && file.size > 8 * 1024 * 1024) { showToast("La imagen supera el límite de 8 MB.", true); return; }
        if (file instanceof File && file.size && !file.type.startsWith("image/")) { showToast("Selecciona un archivo de imagen válido.", true); return; }
        const old = state.projects.find(project => project.id === state.editingId);
        let image = old?.image || "";
        if (file instanceof File && file.size) image = await readImage(file);
        if (!image && data.get("imageUrl")) image = safeUrl(String(data.get("imageUrl")), "");
        if (!image) { showToast("Añade una imagen de portada o un enlace válido.", true); return; }
        const project = {
          id: old?.id || (crypto.randomUUID ? crypto.randomUUID() : `p-${Date.now()}`),
          title: String(data.get("title")).trim(),
          category: String(data.get("category")).trim(),
          year: String(data.get("year")).trim(),
          description: String(data.get("description")).trim(),
          image,
          order: old?.order || Date.now()
        };
        try {
          await dbRequest("projects", "readwrite", store => store.put(project));
          state.projects = [...state.projects.filter(item => item.id !== project.id), project].sort((a, b) => (a.order || 0) - (b.order || 0));
          await syncSiteContent();
          state.filter = "Todos"; state.editingId = null;
          renderProjects(); adminView("projects"); showToast("¡Proyecto guardado y sincronizado!");
        } catch (error) { showToast(`No se pudo guardar: ${error.message}`, true); }
      }
      async function deleteProject(project) {
        if (!window.confirm(`¿Eliminar "${project.title}" del portfolio?`)) return;
        try {
          await dbRequest("projects", "readwrite", store => store.delete(project.id));
          state.projects = state.projects.filter(item => item.id !== project.id);
          await syncSiteContent();
          renderProjects(); renderAdminProjects(); showToast("Proyecto eliminado y sincronizado.");
        } catch (error) { showToast(`No se pudo eliminar: ${error.message}`, true); }
      }
      async function saveProfile(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const image = data.get("portrait");
        if (image instanceof File && image.size > 8 * 1024 * 1024) { showToast("La foto supera el límite de 8 MB.", true); return; }
        if (image instanceof File && image.size && !image.type.startsWith("image/")) { showToast("Selecciona un archivo de imagen válido.", true); return; }
        const profile = Object.fromEntries(["name", "role", "intro", "bio", "email", "instagram", "behance"].map(key => [key, String(data.get(key) || "").trim()]));
        profile.whatsapp = String(data.get("whatsapp") || "").replace(/\D/g, "");
        if (profile.whatsapp.length < 10 || profile.whatsapp.length > 15) { showToast("Ingresa el número de WhatsApp con indicativo del país (10 a 15 dígitos).", true); return; }
        if (profile.instagram) profile.instagram = safeUrl(profile.instagram, "");
        if (profile.behance) profile.behance = safeUrl(profile.behance, "");
        try {
          profile.portrait = image instanceof File && image.size ? await readImage(image) : state.profile.portrait;
          await dbRequest("settings", "readwrite", store => store.put({ key: "profile", value: profile }));
          state.profile = { ...defaultProfile, ...profile };
          await syncSiteContent();
          renderProfile(); showToast("Perfil actualizado y sincronizado.");
        } catch (error) { showToast(`No se pudo guardar el perfil: ${error.message}`, true); }
      }
      async function openAdmin() {
        if (!overlay) return;
        overlay.classList.add("open");
        document.body.classList.add("locked");
        $("#closeAdmin").focus();
        if (!supabaseConfigured()) {
          $$(".admin-tab").forEach(button => { button.disabled = true; });
          $("#adminTitle").textContent = "Acceso privado";
          $("#adminSubtitle").textContent = "Configura Supabase para habilitar el acceso seguro.";
          content.innerHTML = '<p class="settings-note">Para proteger el administrador, configura Supabase en supabase-config.js, aplica supabase-schema.sql, crea la cuenta de Andrea y agrega su UUID a public.review_admins. No se guarda la contraseña en los archivos públicos del sitio.</p>';
          return;
        }
        if (!readAdminSession()) {
          renderAdminReviewLogin();
          return;
        }
        try {
          await assertReviewAdmin();
          $$(".admin-tab").forEach(button => { button.disabled = false; });
          adminView("projects");
        } catch (error) {
          localStorage.removeItem(SUPABASE_SESSION_KEY);
          renderAdminReviewLogin();
          showToast(`No se pudo verificar el acceso: ${error.message}`, true);
        }
      }
      function closeAdmin() { if (!overlay) return; overlay.classList.remove("open"); document.body.classList.remove("locked"); state.editingId = null; $("#brandAdmin")?.focus(); }

      const yearNow = $("#yearNow");
      if (yearNow) yearNow.textContent = new Date().getFullYear();
      let adminTapCount = 0;
      let adminTapTimer = 0;
      const brandAdmin = $("#brandAdmin");
      if (brandAdmin) brandAdmin.addEventListener("click", () => {
          adminTapCount += 1;
          window.clearTimeout(adminTapTimer);
          if (adminTapCount === 5) {
            adminTapCount = 0;
            $("#adminHint").textContent = "Abriendo el administrador.";
            openAdmin();
            return;
          }
          $("#adminHint").textContent = `Acceso privado: ${5 - adminTapCount} pulsaciones más.`;
          adminTapTimer = window.setTimeout(() => {
            adminTapCount = 0;
            $("#adminHint").textContent = "";
          }, 2500);
        });
      $("#closeAdmin")?.addEventListener("click", closeAdmin);
      $$(".admin-tab").forEach(button => button.addEventListener("click", () => { state.editingId = null; adminView(button.dataset.tab); }));
      $("#closeProject")?.addEventListener("click", closeProject);
      dialog?.addEventListener("click", event => { if (event.target === dialog) closeProject(); });
      overlay?.addEventListener("click", event => { if (event.target === overlay) closeAdmin(); });
      document.addEventListener("keydown", event => {
        if (event.key === "Escape") { if (dialog?.classList.contains("open")) closeProject(); if (overlay?.classList.contains("open")) closeAdmin(); }
      });
      $("#menuToggle")?.addEventListener("click", event => {
        const links = $("#navLinks"), open = links.classList.toggle("open");
        event.currentTarget.setAttribute("aria-expanded", String(open));
        event.currentTarget.textContent = open ? "×" : "☰";
      });
      $$("#navLinks a").forEach(link => link.addEventListener("click", () => { $("#navLinks").classList.remove("open"); $("#menuToggle").setAttribute("aria-expanded", "false"); $("#menuToggle").textContent = "☰"; }));
      const contactForm = $("#contactForm");
      if (contactForm) {
        const messageField = $("#contactMessage");
        const messageCount = $("#messageCount");
        const contactStatus = $("#contactSubmitStatus");
        const fallbackLink = $("#contactFallback");
        messageField.addEventListener("input", () => {
          messageCount.textContent = `${messageField.value.length} / 700`;
        });
        contactForm.addEventListener("submit", event => {
          event.preventDefault();
          if (!contactForm.reportValidity()) return;
          const data = new FormData(contactForm);
          const message = [
            `Hola ${state.profile.name}, soy ${String(data.get("name")).trim()}.`,
            `Me interesa: ${String(data.get("service"))}.`,
            String(data.get("message")).trim()
          ].join("\n\n");
          const whatsappUrl = `https://wa.me/${state.profile.whatsapp}?${new URLSearchParams({ text: message })}`;
          window.open(whatsappUrl, "_blank", "noopener,noreferrer");
          fallbackLink.href = whatsappUrl;
          contactStatus.hidden = false;
        });
      }
      const reviewForm = $("#reviewForm");
      if (reviewForm) {
        const commentField = $("#reviewComment");
        const reviewCount = $("#reviewCount");
        const reviewStatus = $("#reviewSubmitStatus");
        const submitButton = $("#reviewSubmitButton");
        const photoInput = $("#reviewPhoto");
        const photoPreview = $("#reviewPhotoPreview");
        let photoPreviewUrl = "";
        if (!supabaseConfigured()) {
          submitButton.disabled = true;
          reviewStatus.textContent = "El envío de reseñas estará disponible cuando Andrea configure Supabase.";
          reviewStatus.hidden = false;
        }
        photoInput.addEventListener("change", () => {
          const file = photoInput.files[0];
          if (photoPreviewUrl) URL.revokeObjectURL(photoPreviewUrl);
          photoPreviewUrl = "";
          photoPreview.hidden = true;
          photoPreview.removeAttribute("src");
          if (!file) return;
          const acceptedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
          if (!acceptedTypes.includes(file.type) || file.size > 5 * 1024 * 1024) {
            photoInput.value = "";
            reviewStatus.textContent = "Elige una foto JPG, PNG, WebP o GIF de máximo 5 MB.";
            reviewStatus.hidden = false;
            return;
          }
          photoPreviewUrl = URL.createObjectURL(file);
          photoPreview.src = photoPreviewUrl;
          photoPreview.hidden = false;
          reviewStatus.hidden = true;
        });
        commentField.addEventListener("input", () => {
          reviewCount.textContent = `${commentField.value.length} / 600`;
        });
        reviewForm.addEventListener("submit", async event => {
          event.preventDefault();
          if (!reviewForm.reportValidity()) return;
          if (!supabaseConfigured()) {
            reviewStatus.textContent = "El formulario estará disponible cuando Andrea configure Supabase. Inténtalo de nuevo más tarde.";
            reviewStatus.hidden = false;
            return;
          }
          const data = new FormData(reviewForm);
          submitButton.disabled = true;
          reviewStatus.hidden = true;
          try {
            const photo = data.get("photo");
            const imagePath = photo instanceof File && photo.size ? await uploadReviewPhoto(photo) : null;
            await supabaseRequest("client_reviews", {
              method: "POST",
              prefer: "return=minimal",
              body: {
                name: String(data.get("name")).trim(),
                project: String(data.get("project")).trim(),
                comment: String(data.get("comment")).trim(),
                rating: Number(data.get("rating")),
                permission_to_publish: data.has("permission"),
                approved: false,
                image_path: imagePath
              }
            });
            reviewForm.reset();
            reviewCount.textContent = "0 / 600";
            if (photoPreviewUrl) URL.revokeObjectURL(photoPreviewUrl);
            photoPreviewUrl = "";
            photoPreview.removeAttribute("src");
            photoPreview.hidden = true;
            reviewStatus.textContent = "¡Gracias! Tu reseña llegó a Andrea y quedó pendiente de revisión. No se publica automáticamente.";
            reviewStatus.hidden = false;
          } catch (error) {
            reviewStatus.textContent = `No se pudo enviar la reseña: ${error.message}`;
            reviewStatus.hidden = false;
          } finally {
            submitButton.disabled = !supabaseConfigured();
          }
        });
      }
      const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      function bindInteractiveGlow(card) {
        if (!supportsHover || reduceMotion || card.dataset.glowBound) return;
        card.dataset.glowBound = "true";
        card.addEventListener("pointermove", event => {
          const bounds = card.getBoundingClientRect();
          card.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
          card.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
        });
        card.addEventListener("pointerleave", () => {
          card.style.removeProperty("--pointer-x");
          card.style.removeProperty("--pointer-y");
        });
      }
      function installPageTransition() {
        const transition = document.createElement("div");
        transition.className = "page-transition is-active";
        transition.id = "pageTransition";
        transition.setAttribute("aria-hidden", "true");
        transition.innerHTML = `<span class="page-transition-star"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="43"/><path d="M50 12 72 82 14 39h72L28 82 50 12Z"/></svg></span><span class="page-transition-name">ANDREA</span><span class="page-transition-caption">DISEÑO CON INTENCIÓN</span>`;
        document.body.append(transition);
        window.setTimeout(() => {
          transition.classList.remove("is-active");
          window.setTimeout(() => transition.remove(), 650);
        }, reduceMotion ? 0 : 520);
        document.addEventListener("click", event => {
          if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          if (document.body.classList.contains("visual-edit-mode")) return;
          const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
          if (!anchor || anchor.target && anchor.target !== "_self" || anchor.hasAttribute("download")) return;
          let destination;
          try { destination = new URL(anchor.href, location.href); }
          catch { return; }
          if (destination.origin !== location.origin || destination.pathname === location.pathname || destination.hash && destination.pathname === location.pathname) return;
          event.preventDefault();
          transition.classList.add("is-active", "is-leaving");
          window.setTimeout(() => location.assign(destination.href), reduceMotion ? 0 : 260);
        }, true);
      }
      function installInteractionSounds() {
        const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
        let audioContext = null;
        let audioReady = null;
        let ambientGain = null;
        let ambientPulseDepth = null;
        let ambientStarted = false;
        let audioErrorReported = false;
        const reportAudioError = error => {
          if (audioErrorReported) return;
          audioErrorReported = true;
          showToast(`No se pudo iniciar el sonido ambiental: ${error.message}`, true);
        };
        const startAmbient = () => {
          if (ambientStarted) return;
          ambientStarted = true;
          const now = audioContext.currentTime;
          const output = audioContext.createGain();
          const filter = audioContext.createBiquadFilter();
          ambientGain = audioContext.createGain();
          output.gain.value = 0.72;
          filter.type = "lowpass";
          filter.frequency.value = 850;
          ambientGain.gain.setValueAtTime(0.0001, now);
          ambientGain.gain.setTargetAtTime(document.hidden ? 0.0001 : 0.105, now, 1.8);
          filter.connect(ambientGain);
          ambientGain.connect(output);
          output.connect(audioContext.destination);
          [[110, "triangle", 0.17], [164.81, "sine", 0.085], [220, "triangle", 0.04], [329.63, "sine", 0.018]].forEach(([frequency, type, volume]) => {
            const oscillator = audioContext.createOscillator();
            const voice = audioContext.createGain();
            oscillator.type = type;
            oscillator.frequency.value = frequency;
            voice.gain.value = volume;
            oscillator.connect(voice);
            voice.connect(filter);
            oscillator.start(now);
          });
          const pulse = audioContext.createOscillator();
          ambientPulseDepth = audioContext.createGain();
          pulse.frequency.value = 0.09;
          ambientPulseDepth.gain.value = document.hidden ? 0 : 0.012;
          pulse.connect(ambientPulseDepth);
          ambientPulseDepth.connect(ambientGain.gain);
          pulse.start(now);
        };
        const startAudio = () => {
          if (!AudioContextConstructor) return Promise.resolve(false);
          if (audioReady) return audioReady;
          audioReady = (async () => {
            audioContext ||= new AudioContextConstructor();
            if (audioContext.state === "suspended") await audioContext.resume();
            startAmbient();
            return true;
          })().catch(error => {
            audioReady = null;
            throw error;
          });
          return audioReady;
        };
        const playTone = (frequency, startAt, duration, volume, type = "sine") => {
          const oscillator = audioContext.createOscillator();
          const gain = audioContext.createGain();
          oscillator.type = type;
          oscillator.frequency.setValueAtTime(frequency, startAt);
          gain.gain.setValueAtTime(0.0001, startAt);
          gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.01);
          gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
          oscillator.connect(gain);
          gain.connect(audioContext.destination);
          oscillator.start(startAt);
          oscillator.stop(startAt + duration + 0.015);
        };
        const playCue = notes => {
          const now = audioContext.currentTime;
          notes.forEach(([frequency, delay, duration, volume, type]) => {
            playTone(frequency, now + delay, duration, volume, type);
          });
        };
        const unlockAudio = () => {
          if (document.body.classList.contains("visual-edit-mode")) return;
          document.removeEventListener("pointerdown", unlockAudio);
          document.removeEventListener("keydown", unlockAudio);
          startAudio().catch(reportAudioError);
        };
        document.addEventListener("pointerdown", unlockAudio, { passive: true });
        document.addEventListener("keydown", unlockAudio);
        document.addEventListener("visibilitychange", () => {
          if (!ambientGain || !audioContext || audioContext.state !== "running") return;
          ambientGain.gain.setTargetAtTime(document.hidden ? 0.0001 : 0.105, audioContext.currentTime, 1.5);
          ambientPulseDepth.gain.setTargetAtTime(document.hidden ? 0 : 0.012, audioContext.currentTime, 1);
        });
        document.addEventListener("click", event => {
          if (document.body.classList.contains("visual-edit-mode")) return;
          const target = event.target instanceof Element ? event.target : null;
          const control = target?.closest("a[href], button, .project-card, .service-card");
          if (!control || control.matches(":disabled, [aria-disabled='true']")) return;
          const notes = control.closest(".project-card")
            ? [[293.66, 0, 0.2, 0.025], [349.23, 0.07, 0.24, 0.02], [440, 0.14, 0.32, 0.017]]
            : control.closest(".testimonial-controls, .project-carousel-controls, .testimonial-dots, .filters")
              ? [[349.23, 0, 0.12, 0.018], [440, 0.045, 0.17, 0.014]]
              : control.matches(".project-dialog-close")
                ? [[440, 0, 0.12, 0.018], [329.63, 0.055, 0.2, 0.016]]
                : control.matches("a[href]")
                  ? [[392, 0, 0.18, 0.02], [523.25, 0.065, 0.24, 0.016], [659.25, 0.13, 0.3, 0.012]]
                  : [[293.66, 0, 0.1, 0.016, "triangle"], [392, 0.04, 0.14, 0.013]];
          startAudio().then(ready => { if (ready) playCue(notes); }).catch(reportAudioError);
        }, true);
      }
      $$(".interactive-card, .service-card, .value-card").forEach(card => {
        card.classList.add("interactive-card");
        bindInteractiveGlow(card);
      });
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            const siblings = [...entry.target.parentElement.children].filter(element => element.classList.contains("reveal"));
            entry.target.style.setProperty("--reveal-delay", `${Math.min(siblings.indexOf(entry.target) * 80, 320)}ms`);
            observer.unobserve(entry.target);
          }
        }), { threshold: .12 });
        $$(".reveal").forEach(element => observer.observe(element));
      } else $$(".reveal").forEach(element => element.classList.add("visible"));
      const scrollProgress = $("#scrollProgress");
      if (scrollProgress) {
        const updateScrollProgress = () => {
          const scrollable = document.documentElement.scrollHeight - window.innerHeight;
          scrollProgress.style.transform = `scaleX(${scrollable > 0 ? window.scrollY / scrollable : 0})`;
        };
        window.addEventListener("scroll", updateScrollProgress, { passive: true });
        window.addEventListener("resize", updateScrollProgress);
        updateScrollProgress();
      }
      installPageTransition();
      installInteractionSounds();
      loadData().then(async () => {
        if (sessionStorage.getItem(VISUAL_EDIT_SESSION_KEY) !== "1") return;
        try {
          await assertReviewAdmin();
          startVisualEditor();
        } catch (error) {
          sessionStorage.removeItem(VISUAL_EDIT_SESSION_KEY);
          showToast(`Se cerró la edición visual porque no se pudo verificar el acceso: ${error.message}`, true);
        }
      }).catch(error => {
        showToast(`No se pudo iniciar el portfolio: ${error.message}`, true);
        state.projects = [...starterProjects]; renderProjects(); renderServices(); renderProfile();
      });
    })();

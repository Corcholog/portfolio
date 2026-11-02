import type { Content } from "./types";

export const es = {
  meta: {
    name: "Giorgio Iván Loguercio",
    roleLine: "Ingeniero de Software · LLM apps, RAG y evals",
    tagline: "Desarrollo apps web e integro LLMs midiendo su calidad.",
    pageTitle:
      "Giorgio Loguercio — Ingeniero de Software · LLM apps & full stack",
    description:
      "Ingeniero de Software (Ingeniería en Sistemas, UNICEN, 2026) con perfil full stack y de IA aplicada. Desarrollo apps web en producción e integro LLMs midiendo su calidad.",
  },
  nav: {
    label: "Principal",
    projects: "Proyectos",
    about: "Sobre mí",
    now: "Ahora",
    contact: "Contacto",
  },
  section: {
    projects: "Proyectos destacados",
    about: "Cómo llegué acá",
    now: "En lo que estoy ahora",
    contact: "Hablemos",
  },
  theme: { toggle: "Cambiar tema" },
  lang: { toggle: "Cambiar idioma" },
  ui: {
    demo: "Ver demo",
    repo: "Repositorio",
    cv: "Descargar CV",
    slides: "Ver defensa (PDF)",
    updated: "Actualizado",
    builtWith: "Hecho con Next.js",
    newTab: "se abre en una pestaña nueva",
    skip: "Saltar al contenido",
    expandImage: "Ver tamaño completo",
    close: "Cerrar",
  },
  hero: {
    location:
      "Necochea, Argentina · Busco mi primer rol como AI Engineer o Full-Stack Developer, remoto",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
  projects: {
    lide2: {
      title: "LIDE 2",
      subtitle: "Pasantía en UNLP Esports",
      dates: "Julio 2026 – Octubre 2026",
      problem:
        "La liga interuniversitaria de League of Legends (RedUNCI) no tenía un sitio para seguir resultados, estadísticas y el estado del torneo.",
      bullets: [
        "Tablas, fixtures, playoffs, perfiles detallados de equipos y jugadores, y estadísticas por partida, jugador, campeón y universidad, a disposición de la organización y de los jugadores.",
        "La API de Riot para desarrollo ya no entrega estadísticas de partidas personalizadas, así que las extraigo parseando directamente los archivos de replay .rofl, con estadísticas como las de sitios profesionales (por ejemplo gol.gg) para que los jugadores analicen su juego.",
        "Un panel de administración con login de Supabase Auth para subir replays de a uno o en lote; las estadísticas viven en un registro donde un ranking nuevo es una sola función; los tests de base de datos corren sobre PGlite, sin Docker ni Supabase.",
        "En producción en Vercel, con Supabase y Row-Level Security.",
      ],
      resultLabel: "Alcance",
      result: "113 jugadores, 20 equipos y 13 universidades.",
      imageAlt:
        "Portada de LIDE 2: «Un país. Una red. Un campeón.», Liga Interuniversitaria de Deportes Electrónicos, con el equipo campeón y las cifras del torneo: 113 jugadores, 20 equipos y 13 universidades.",
    },
    rekindle: {
      title: "Rekindle",
      subtitle: null,
      dates: "Octubre 2026 – presente",
      problem:
        "Lo que consumo (artículos, videos) casi nunca vuelve a lo que escribo.",
      bullets: [
        "Asistente local-first: ingesta artículos web y videos de YouTube, los resume, los compara contra los proyectos y notas de un vault de Obsidian y propone acciones. Solo las sugerencias aceptadas se escriben al vault.",
        "Retrieval en dos etapas: pre-filtro con pgvector (los 3 proyectos más cercanos) y evaluación con un LLM que responde con JSON validado contra un schema; cadena de proveedores con fallback (DeepSeek, Gemini, Ollama local) y detección de sugerencias desactualizadas por vector drift.",
        "Eval harness propio con dataset etiquetado a mano: Precision@K, Recall@K, F1 y quality gates que detectan regresiones al cambiar prompts o modelos.",
        "Telemetría de costo por token y latencia; 81 archivos de tests, 40 de ellos contra un PostgreSQL throwaway con pgvector en un Testcontainer.",
      ],
      resultLabel: "Resultado",
      result:
        "Sobre 376 pares artículo × proyecto etiquetados a mano, DeepSeek Flash (el modelo por defecto) acierta el 95% de las veces que dice «accionable» y encuentra 4 conexiones extra (un solo etiquetador; la utilidad de las sugerencias no está medida).",
      imageAlt:
        "Vista de Sugerencias de Rekindle en modo oscuro: una barra lateral con los proyectos del vault y cuánto hace que se trabajó en cada uno, pestañas para filtrar las sugerencias (no descartadas, accionables, tentativas, aceptadas, descartadas) y una tarjeta de sugerencia con una lista numerada de acciones a realizar en notas concretas.",
    },
    thesis: {
      title: "Tesis — Detección automática de caídas",
      subtitle:
        "Detección automática de caídas: evaluación experimental de enfoques visuales basados en estimadores de pose y modelos de redes neuronales",
      dates: "Marzo 2025 – Junio 2026",
      problem:
        "Detectar caídas en tiempo real a partir de video, sin sensores en el cuerpo.",
      bullets: [
        "Investigación hecha junto a un compañero, dirigida por una investigadora del CONICET.",
        "Estudio comparativo de 4 estimadores de pose humana (AlphaPose, OpenPose, MediaPipe, YOLOv8-pose) y arquitecturas de Deep Learning (CNN-LSTM, TCN-Transformer, Transformer) sobre 4 datasets públicos (unos 1.600 videos).",
        "Pipelines automatizados de experimentación y benchmarking computacional.",
      ],
      resultLabel: "Hallazgo",
      result:
        "La estimación de pose domina el tiempo de detección de una caída: YOLOv8-pose fue el estimador más rápido en todos los datasets y OpenPose el más lento.",
      imageAlt:
        "Primera diapositiva de la defensa del proyecto integrador: título de la tesis, Universidad Nacional del Centro de la Provincia de Buenos Aires, alumnos y directora.",
    },
  },
  about: {
    portraitAlt:
      "Retrato mío de frente, con anteojos y camisa a rayas azules y blancas.",
    campusAlt:
      "Mi compañero de tesis y yo de traje junto al monolito por los 60 años de la Facultad de Ciencias Exactas (1965–2025), frente al edificio de ladrillo del campus de la UNICEN en Tandil.",
    paragraphs: [
      "Desde chico me interesó la computadora. A los 6-7 años jugaba Diablo II, mi primer juego de PC. Desde entonces fui aprendiendo inglés de a poco, por inmersión y necesidad, con juegos y contenido en ese idioma. A los 8 aprendí Magic: The Gathering; años después, en la universidad, entendí la pila de ejecución casi al instante porque ya conocía la pila del juego. Entre los 9 y los 12 descubrí MUGEN y, siguiendo tutoriales, armé mi propio juego de peleas con los personajes que quería.",
      "En la secundaria pensaba estudiar psicología, hasta que en 5º año conocí la programación. No tenía computadora, así que mi primer programa lo escribí en Java desde el celular: un diálogo que, según tu fecha de nacimiento, te decía si eras mayor de edad.",
      "En 2021 entré a Ingeniería de Sistemas en la UNICEN y elegí dedicarme de lleno a la carrera. Para la tesis quise hacer algo más que una web: con un compañero, y dirigidos por una investigadora del CONICET, realizamos una evaluación comparativa de detección automática de caídas con estimación de pose y redes neuronales/transformers. Fue un desafío y aprendí muchísimo. Me recibí en junio de 2026.",
      "Mi formación no terminó ahí. En 2025 me dieron una beca para realizar una Certificación avanzada en FullStack en el ITBA. En 2026 realicé la Diplomatura en deportes electrónicos en la UNLP.",
      "Los juegos nunca se fueron. Jugando la Liga Interuniversitaria de Deportes Electrónicos (LIDE) vi que no había un sitio para seguir resultados y estadísticas, así que durante mi pasantía en UNLP Esports lo construí: LIDE 2, la plataforma oficial de la liga. Hoy estoy traduciendo al español una novela visual japonesa de PS2 con un pipeline de agentes de IA.",
    ],
  },
  timeline: {
    diablo: {
      when: "6–7 años",
      title: "Diablo II",
      line: "Siempre me interesó la PC. Cuando tuve edad comencé a jugar y de ahí en más, el inglés llegó de a poco, por inmersión y necesidad.",
      photoAlt:
        "Foto antigua mía, de muy chico y de espaldas, estirando la mano hacia la computadora para prenderla.",
    },
    magic: {
      when: "8 años",
      title: "Magic: The Gathering",
      line: "Aprendía la pila del juego, años antes de la pila de ejecución.",
      photoAlt: null,
    },
    mugen: {
      when: "9–12 años",
      title: "MUGEN",
      line: "Mi propio juego de peleas, armado con tutoriales.",
      photoAlt: null,
    },
    firstCode: {
      when: "Secundaria, 5º año",
      title: "Primer código",
      line: "Java desde el celular, sin computadora.",
      photoAlt: null,
    },
    unicen: {
      when: "2021",
      title: "UNICEN",
      line: "Empiezo Ingeniería de Sistemas en Tandil.",
      photoAlt: null,
    },
    citylab: {
      when: "2023",
      title: "CityLab Tandil — MapBox Developer",
      line: "Funcionalidades para el Mapa de Espacios Culturales, con el equipo del Centro Universitario de Innovación Ciudadana.",
      photoAlt: null,
    },
    thesisItba: {
      when: "2025",
      title: "Tesis e ITBA",
      line: "Empiezo la tesis y completo la certificación FullStack de una beca del ITBA.",
      photoAlt: null,
    },
    graduation: {
      when: "Junio 2026",
      title: "Ingeniero en Sistemas",
      line: "Defiendo la tesis y me recibo.",
      photoAlt:
        "Yo presentando la tesis junto a una pantalla proyectada con una tabla comparativa de enfoques y variantes; parte del público se ve de espaldas.",
    },
    lide2: {
      when: "Julio 2026",
      title: "LIDE 2",
      line: "Pasantía en UNLP Esports: construyo el sitio oficial del torneo.",
      photoAlt: null,
    },
    esports: {
      when: "2026",
      title: "Diplomatura en Deportes Electrónicos",
      line: "UNLP, abril a octubre de 2026.",
      photoAlt: null,
    },
    today: {
      when: "Hoy",
      title: "Rekindle y My Merry May",
      line: "IA aplicada: retrieval con evals y traducción con agentes.",
      photoAlt: null,
    },
  },
  now: {
    mmm: {
      title: "My Merry May — traducción de fans al español",
      intro:
        "Traducción de fans de My Merry May (PS2) del japonés al español neutro latinoamericano. Se distribuirá solo como parche BPS (todavía sin publicar): el repositorio no contiene datos del juego.",
      bullets: [
        "Ingeniería inversa del formato de scripts del juego y del ejecutable, con fuente propia para los acentos.",
        "Un simulador de pantallas valida cada línea tal como la mostrará el juego, antes de que alguien la juegue.",
        "Tests de ida y vuelta: reconstruir sin traducción da los 8 archivos de guion idénticos byte a byte.",
      ],
      progress: "{done} de {total} entradas ({percent}) al {date}",
      reviewerMetric:
        "Al 2 de noviembre: en 68 lotes revisados (15.905 líneas), el revisor modificó el 7,6% de las líneas (10,3% en el último guion, que se redactó en parte con otro modelo), sobre todo por naturalidad y fidelidad.",
      pipeline: {
        title: "Cómo se traduce un lote",
        scout: {
          name: "Scout",
          detail: "Lectura por adelantado, una vez por archivo de guion.",
        },
        translator: {
          name: "Traductor",
          detail: "Un lote por vez, desde el japonés.",
        },
        checks: {
          name: "Chequeos automáticos",
          detail:
            "Simulador de pantallas, juego de caracteres y límites de línea y de página.",
        },
        reviewer: {
          name: "Revisor",
          detail: "Línea por línea contra el japonés.",
        },
        human: {
          name: "Revisión humana",
          detail: "La hago yo.",
        },
        memory:
          "Memoria compartida entre lotes: guía de estilo, biblia de la historia y notas del scout.",
        referenceNote:
          "El parche no oficial en inglés se usa solo como referencia de significado.",
      },
    },
    flux: {
      title: "Flux — flujo de caja personal, con un servidor MCP",
      intro:
        "Una app de escritorio local-first que proyecta mi flujo de caja a 90 días, más un servidor MCP para que mi agente Hermes pueda leer y modificar los mismos datos. Le pregunto a Hermes desde la computadora o desde Telegram, por ejemplo cuánto me queda en el mes o si puedo comprar algo.",
      bullets: [
        "Una app de escritorio con Tauri y React y el servidor MCP comparten un mismo archivo SQLite y un mismo motor financiero, así que lo que cambia Hermes se ve en la app.",
        "El servidor MCP expone 15 herramientas por stdio, y un archivo de skill le indica a Hermes que lea el saldo actual antes de dar cualquier consejo.",
        "Los ingresos suelen llegar en un día incierto, así que cada ingreso tiene una ventana (por ejemplo del 10 al 15) mientras que los gastos tienen fechas fijas. La proyección dibuja dos caminos: uno optimista, donde el dinero llega al inicio de la ventana, y uno conservador, donde llega al final, y las alertas usan el conservador.",
      ],
      status:
        "Por ahora es privado: todavía no tiene repositorio ni sitio. La captura usa datos de demostración inventados.",
      imageAlt:
        "El panel de Flux en modo oscuro con datos de demostración: saldo real, neto del mes, próximo cuello de botella, un gráfico de flujo de caja a 90 días y los ingresos y pagos de los próximos 15 días.",
      imageCaption: "Panel de Flux con datos de demostración",
    },
  },
  evaluation: {
    summary: "Cómo lo medí: comparación de modelos",
    title: "¿Qué modelo encuentra las conexiones?",
    definitions:
      "Precisión: de los pares que llama «accionables», cuántos lo son de verdad. Recall (sensibilidad): de los pares que de verdad son accionables, cuántos encuentra.",
    choice:
      "Por qué el modelo por defecto es el que encuentra menos: con el veredicto primero encontraba 44 conexiones con 22 extra, y 14 de sus 39 veredictos «tentativos» terminaban diciendo que no hay conexión. Razonando primero, las extra bajan a 4, a costa de 9 conexiones reales.",
    caption:
      "{pairs} pares artículo × proyecto etiquetados a mano, {connections} de ellos conexiones reales. Qué cuenta como conexión es en parte subjetivo, y ajusté 7 etiquetas tras leer las respuestas de un modelo. Un solo etiquetador y un dataset chico, así que las diferencias chicas son ruido.",
    columns: {
      model: "Modelo",
      precisionTerm: "Precisión",
      precision: "Acierta cuando dice «accionable»",
      recallTerm: "Recall (sensibilidad)",
      recall: "Pares «accionables» que encuentra",
      found: "Conexiones encontradas",
      latency: "Latencia mediana",
    },
    found: "{found} de {total} (+{extra} extra)",
    models: {
      currentDefault: {
        name: "DeepSeek Flash",
        note: "por defecto hoy, razona antes del veredicto (2026-10-23)",
      },
      deepseekThinking: {
        name: "DeepSeek Flash",
        note: "con thinking, prompt del 2026-10-19",
      },
      geminiFlashLite: {
        name: "Gemini 3.1 Flash Lite",
        note: "en la nube, prompt del 2026-10-19",
      },
      qwenLocal: {
        name: "Qwen 2.5 7B",
        note: "corre en tu máquina, prompt anterior al 2026-10-21",
      },
    },
  },
  education: {
    title: "Formación",
    unicen: "Ingeniería de Sistemas — UNICEN, Tandil · marzo 2021 – junio 2026",
    itba: "Certificación avanzada Full-Stack Developer — ITBA · septiembre 2025 – diciembre 2025",
    unlp: "Diplomatura en Deportes Electrónicos — UNLP · abril 2026 – octubre 2026",
    languages: "Español (nativo); inglés C2 (EF SET, 75/100)",
  },
  contact: {
    line: "¿Tenés una búsqueda o un proyecto? Escribime.",
  },
  notFound: {
    title: "Página no encontrada",
    text: "Esa dirección no existe o cambió de lugar.",
    home: "Ir al inicio",
  },
} satisfies Content;

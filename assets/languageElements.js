export const elements = [
  // Nav
  { id: "about-link",      en: "About",      es: "Sobre Mí" },
  { id: "experience-link", en: "Experience", es: "Experiencia" },
  { id: "skills-link",     en: "Skills",     es: "Habilidades" },
  { id: "projects-link",   en: "Projects",   es: "Proyectos" },
  { id: "contact-link",    en: "Contact",    es: "Contacto" },
  { id: "resume-link",     en: "Resume",     es: "CV" },

  // Hero
  { id: "hero-title",        en: "Hello, I'm",   es: "Hola, soy" },
  { id: "btn-view-work",    en: "View My Work", es: "Ver Mi Trabajo" },
  { id: "btn-get-in-touch", en: "Get In Touch", es: "Contáctame" },
  {
    id: "hero-description",
    en: "Computer Science Engineer with 2+ years designing scalable distributed systems on AWS. Building ML inference pipelines, multi-agent AI applications, and automated cloud infrastructure.",
    es: "Ingeniero en Ciencias de la Computación con 2+ años diseñando sistemas distribuidos escalables en AWS. Construyendo pipelines de inferencia ML, aplicaciones de IA multi-agente e infraestructura cloud automatizada.",
  },

  // About
  { id: "about-title", en: "About Me", es: "Sobre Mí" },
  {
    id: "about-description",
    en: "Computer Science Engineer from Pontificia Universidad Católica de Chile with 2+ years of professional experience designing and operating scalable distributed systems on AWS. I've built ML inference pipelines, multi-step orchestration workflows, multi-agent AI applications, and full-stack systems. Passionate about generative AI and cloud-native architecture.",
    es: "Ingeniero en Ciencias de la Computación de la Pontificia Universidad Católica de Chile con 2+ años de experiencia profesional diseñando y operando sistemas distribuidos escalables en AWS. He construido pipelines de inferencia ML, flujos de orquestación multi-paso, aplicaciones de IA multi-agente y sistemas full-stack. Apasionado por la IA generativa y la arquitectura cloud-native.",
  },

  // Education
  { id: "education-title",  en: "Education",                                           es: "Educación" },
  { id: "university-title", en: "B.S. in Computer Science Engineering — Dec 2024",     es: "Ing. Civil en Computación — Dic 2024" },
  { id: "university-major", en: "Major: Software Engineering",                         es: "Major: Ingeniería de Software" },
  { id: "university-minor", en: "Minor: Scientific & Technological Foundations of Computing", es: "Minor: Fundamentos Científicos y Tecnológicos de la Computación" },

  // Work Experience
  { id: "work-experience-title", en: "Work Experience", es: "Experiencia Laboral" },

  // diio
  { id: "diio-title", en: "DevOps / Software Development Engineer", es: "Ingeniero DevOps / Desarrollo de Software" },
  {
    id: "diio-li-1",
    en: "Architected an end-to-end ML inference pipeline for audio transcription and speaker diarization using AWS Step Functions, Lambda, SQS, ECS, and S3 — replaced a third-party vendor and cut costs by 60%.",
    es: "Arquitecturé un pipeline de inferencia ML end-to-end para transcripción de audio y diarización de hablantes usando AWS Step Functions, Lambda, SQS, ECS y S3 — reemplazó un proveedor externo y redujo costos en 60%.",
  },
  {
    id: "diio-li-2",
    en: "Built Spark, a multi-agent AI sales assistant powered by Google Vertex AI Reasoning Engine with an MCP server in Ruby on Rails exposing RAG, text-to-DSL, CRM integrations, and chart generation tools.",
    es: "Construí Spark, un asistente de ventas de IA multi-agente impulsado por Google Vertex AI Reasoning Engine con un servidor MCP en Ruby on Rails que expone RAG, generación de consultas DSL, integraciones CRM y herramientas de gráficos.",
  },
  {
    id: "diio-li-3",
    en: "Engineered the RAG pipeline for Spark: OpenAI embeddings + hybrid BM25 + KNN vector search on Elasticsearch returning ranked conversation snippets with rich XML context blocks for LLM synthesis.",
    es: "Desarrollé el pipeline RAG para Spark: embeddings de OpenAI + búsqueda vectorial híbrida BM25 + KNN en Elasticsearch retornando fragmentos de conversación rankeados con bloques de contexto XML para síntesis del LLM.",
  },
  {
    id: "diio-li-4",
    en: "Implemented dynamic ECS Sidekiq auto-scaling via CloudWatch alarms triggered by real-time queue depth metrics, reducing compute costs without sacrificing throughput.",
    es: "Implementé auto-escalado dinámico de ECS Sidekiq mediante alarmas de CloudWatch activadas por métricas de profundidad de cola en tiempo real, reduciendo costos de cómputo sin sacrificar rendimiento.",
  },
  {
    id: "diio-li-5",
    en: "Designed an observability stack with CloudWatch, Prometheus, and Grafana (EC2-hosted), enabling proactive incident detection across the production environment.",
    es: "Diseñé un stack de observabilidad con CloudWatch, Prometheus y Grafana (alojado en EC2), permitiendo detección proactiva de incidentes en todo el entorno de producción.",
  },
  {
    id: "diio-li-6",
    en: "Migrated production database from RDS PostgreSQL to distributed Citus, enabling horizontal scaling and improving analytical query performance by 10%.",
    es: "Migré la base de datos de producción de RDS PostgreSQL a Citus distribuido, habilitando escalado horizontal y mejorando el rendimiento de consultas analíticas en 10%.",
  },
  {
    id: "diio-li-7",
    en: "Optimized CI/CD pipelines with GitHub Actions through parallelization, build caching, and matrix builds — reduced deployment time by 50%.",
    es: "Optimicé pipelines CI/CD con GitHub Actions mediante paralelización, caché de builds y builds matriciales — redujo el tiempo de despliegue en 50%.",
  },
  {
    id: "diio-li-8",
    en: "Built an AI-powered nightly security scanning pipeline on on-premise NVIDIA Jetson hardware that auto-opens PRs with LLM-generated vulnerability fixes and justifications.",
    es: "Construí un pipeline de escaneo de seguridad nocturno con IA en hardware NVIDIA Jetson on-premise que abre automáticamente PRs con correcciones de vulnerabilidades y justificaciones generadas por LLM.",
  },

  // Lolocar
  { id: "lolocar-title", en: "Software Development Engineer", es: "Ingeniero de Desarrollo de Software" },
  {
    id: "lolocar-li-1",
    en: "Developed scalable RESTful APIs for tenant toll-charge calculation, integrated with existing backend systems using Ruby on Rails.",
    es: "Desarrollé APIs RESTful escalables para el cálculo de cargos por peaje de inquilinos, integradas con los sistemas backend existentes usando Ruby on Rails.",
  },
  {
    id: "lolocar-li-2",
    en: "Designed and implemented internal admin dashboards for real-time data management, improving operational efficiency for the ops team.",
    es: "Diseñé e implementé dashboards de administración internos para gestión de datos en tiempo real, mejorando la eficiencia operativa del equipo de ops.",
  },
  {
    id: "lolocar-li-3",
    en: "Led application deployment to Google Cloud Platform, improving deployment reliability and speed by 20%.",
    es: "Lideré el despliegue de aplicaciones en Google Cloud Platform, mejorando la confiabilidad y velocidad de despliegue en 20%.",
  },

  // Skills
  { id: "skills-title",          en: "Technical Skills",        es: "Habilidades Técnicas" },
  { id: "programming-languages", en: "Languages",               es: "Lenguajes" },
  { id: "devops",                 en: "Cloud & Infrastructure",  es: "Cloud e Infraestructura" },
  { id: "ai-ml",                  en: "AI / ML & Agents",        es: "IA / ML y Agentes" },
  { id: "observability-title",    en: "Observability",           es: "Observabilidad" },
  { id: "version-control",        en: "CI/CD & DevOps",          es: "CI/CD y DevOps" },
  { id: "backend-tech",           en: "Backend & Frameworks",    es: "Backend y Frameworks" },
  { id: "databases",              en: "Databases & Search",      es: "Bases de Datos y Búsqueda" },

  // Projects
  { id: "projects-title", en: "Projects", es: "Proyectos" },
  { id: "ruuf-title",     en: "Full-Stack Energy Monitoring App", es: "App de Monitoreo Energético Full-Stack" },
  {
    id: "ruuf-description",
    en: "Led backend development for a real-time energy monitoring app. Provisioned EC2, designed REST APIs, and optimized database integration for performance and scalability.",
    es: "Lideré el desarrollo backend de una app de monitoreo de energía en tiempo real. Aprovisioné EC2, diseñé REST APIs y optimicé la integración de base de datos.",
  },
  { id: "video-game-title", en: "Real-Time Multiplayer Game", es: "Juego Multijugador en Tiempo Real" },
  {
    id: "video-game-description",
    en: "Interactive multiplayer game with real-time state synchronization across clients. Built with React/Next.js and PostgreSQL, hosted on Heroku and Netlify.",
    es: "Juego multijugador interactivo con sincronización de estado en tiempo real entre clientes. Construido con React/Next.js y PostgreSQL, alojado en Heroku y Netlify.",
  },
  { id: "docker-title", en: "Containerized App Deployment", es: "Despliegue de App en Contenedores" },
  {
    id: "docker-description",
    en: "Containerized a full-stack application using Docker Compose and deployed on AWS, demonstrating proficiency in scalable cloud deployments and service orchestration.",
    es: "Contenerizé una aplicación full-stack con Docker Compose y la desplegué en AWS, demostrando competencia en despliegues cloud escalables y orquestación de servicios.",
  },
  { id: "dccarpool-title", en: "University Car Sharing Platform", es: "Plataforma Universitaria de Carpooling" },
  {
    id: "dccarpool-description",
    en: "Ruby on Rails application to facilitate car sharing among university students and staff, deployed on Heroku for reliability and accessibility.",
    es: "Aplicación Ruby on Rails para facilitar el carpooling entre estudiantes y personal universitario, desplegada en Heroku.",
  },
  { id: "blackjack-cardcounter", en: "Blackjack Card Counter", es: "Contador de Cartas de Blackjack" },
  {
    id: "blackjack-cardcounter-desc",
    en: "Card counter using Python and probability theory to dynamically update optimal play strategy based on remaining cards in the deck.",
    es: "Contador de cartas usando Python y teoría de probabilidad para actualizar dinámicamente la estrategia óptima de juego.",
  },
  { id: "portfolio-title", en: "Personal Portfolio", es: "Portafolio Personal" },
  {
    id: "portfolio-description",
    en: "Designed and developed this personal portfolio to showcase projects, skills, and experience. Built with HTML, CSS, and JavaScript, hosted on GitHub Pages.",
    es: "Diseñé y desarrollé este portafolio personal para mostrar proyectos, habilidades y experiencia. Construido con HTML, CSS y JavaScript, alojado en GitHub Pages.",
  },

  // Contact
  { id: "contact-title", en: "Get In Touch", es: "Contáctame" },
];

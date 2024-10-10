// Run the script only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const languageToggleBtn = document.getElementById("language-toggle");

  // Ensure buttons exist before adding event listeners
  if (themeToggleBtn && languageToggleBtn) {
    // Theme toggle event listener
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        themeToggleBtn.textContent = "Light Mode";
      } else {
        themeToggleBtn.textContent = "Dark Mode";
      }
    });

    // Language toggle event listener
    languageToggleBtn.addEventListener("click", () => {
      const isSpanish = languageToggleBtn.textContent === "Español";
      toggleLanguage(isSpanish);
    });
  }

  // Function to toggle language, using element lookups with null-checks
  function toggleLanguage(isSpanish) {
    const elements = [
      {
        id: "portfolio-title",
        en: "Agustin's Portfolio",
        es: "Portafolio de Agustín",
      },
      { id: "about-link", en: "About Me", es: "Sobre Mí" },
      { id: "education-link", en: "Education", es: "Educación" },
      { id: "coursework-link", en: "Coursework", es: "Cursos" },
      { id: "experience-link", en: "Experience", es: "Experiencia" },
      { id: "projects-link", en: "Projects", es: "Proyectos" },
      { id: "skills-link", en: "Skills", es: "Habilidades" },
      { id: "resume-link", en: "Resume", es: "CV" },
      { id: "contact-link", en: "Contact", es: "Contacto" },
      { id: "hero-title", en: "Hello, I'm Agustin", es: "Hola, soy Agustín" },
      {
        id: "hero-description",
        en: "Software Engineer with a passion for building web applications and solving complex problems.",
        es: "Ingeniero de Software apasionado por desarrollar aplicaciones web y resolver problemas complejos.",
      },
      { id: "about-title", en: "About Me", es: "Sobre Mí" },
      { id: "education-title", en: "Education", es: "Educación" },
      {
        id: "university-major",
        en: "Major: Software Engineering",
        es: "Major: Ingeniería de Software",
      },
      {
        id: "university-minor",
        en: "Minor: Scientific and Technological Foundations of Computing",
        es: "Minor: Profundidad en Data Science y Analytics",
      },
      {
        id: "university-title",
        en: "Bachelor in Engineering (Expected Jul 2025)",
        es: "Título de Ingeniero Civil en Computación (Terminación Jul 2025)",
      },
      {
        id: "university-classes",
        en: "Relevant Coursework",
        es: "Clases Relevantes",
      },
      {
        id: "data-structures-and-algorithm",
        en: "Data Structures and Algorithms",
        es: "Estructura de Datos y Algoritmos",
      },
      {
        id: "operating-systems",
        en: "Operating Systems & Networks",
        es: "Sistemas Operativos & Redes",
      },

      { id: "databases", en: "Databases", es: "Bases de Datos" },
      {
        id: "software-engineer",
        en: "Software Engineering",
        es: "Ingeniería de Software",
      },
      {
        id: "web",
        en: "Web Tecnologies and Applications",
        es: "Tecnologías y Aplicaciones Web",
      },
      {
        id: "software-architecture",
        en: "Architecture of Software Systems",
        es: "Arquitectura de Sistemas de Software",
      },
      {
        id: "computer-architecture",
        en: "Computer Architecture",
        es: "Arquitectura de Computares",
      },
      {
        id: "distributed-systems",
        en: "Distributed Systems",
        es: "Sistemas Distribuidos",
      },
      {
        id: "advanced-web",
        en: "Advanced Web Application Design",
        es: "Diseño Avanzado de Aplicaciones Web",
      },
      {
        id: "recommender-systems",
        en: "Sistems Recomendadores",
        es: "Recommender Systems",
      },
      {
        id: "logic",
        en: "Logic for Computer Science",
        es: "Lógica para Ciencias de la Computación",
      },
      { id: "automata", en: "Theory of Automata", es: "Teoría de Automatas" },
      {
        id: "discrete-math",
        en: "Discrete Mathematics",
        es: "Matematicas Discretas",
      },
      {
        id: "capstone",
        en: "Capstone: Especialty Project",
        es: "Proyecto de Especialidad",
      },
      {
        id: "gpti",
        en: "Information Technology Project Management",
        es: "Gestión de Proyectos de Tecnologías de Información",
      },

      {
        id: "about-description",
        en: "I’ve been a Linux user for 4 years, and I’m passionate about open-source software. I love customizing my workflow with Vim and mechanical keyboards. When I'm not coding, I'm diving deep into new technologies or optimizing my development environment.",
        es: "He sido usuario de Linux durante 4 años, y me apasiona el software de código abierto. Me encanta personalizar mi flujo de trabajo con Vim y teclados mecánicos. Cuando no estoy programando, me sumerjo en nuevas tecnologías o optimizo mi entorno de desarrollo.",
      },
      {
        id: "work-experience-title",
        en: "Work Experience",
        es: "Experiencia Laboral",
      },
      {
        id: "lolocar-title",
        en: "Software Engineering Intern - LOLOCAR.CL, Santiago, Chile",
        es: "Desarrollador Practicante - LOLOCAR.CL, Santiago, Chile",
      },
      {
        id: "lolocar-li-1",
        en: "Engineered robust and scalable RESTful APIs to accurately compute toll charges owed by renters, ensuring seamless integration with existing systems and improving operational efficiency.",
        es: "Desarrollé APIs RESTful robustas y escalables para calcular con precisión los cargos por peaje de los arrendatarios, asegurando la integración perfecta con los sistemas existentes y mejorando la eficiencia operativa.",
      },
      {
        id: "lolocar-li-2",
        en: "Architected and implemented sophisticated admin panels for internal use, enhancing user experience and enabling real-time data management.",
        es: "Diseñé e implementé paneles de administración sofisticados para uso interno, mejorando la experiencia del usuario y permitiendo la gestión de datos en tiempo real.",
      },
      {
        id: "lolocar-li-3",
        en: "Led deployment of applications on Google Cloud Services, optimizing performance and improving deployment speed and reliability by 20%.",
        es: "Lideré el despliegue de aplicaciones en Google Cloud Services, optimizando el rendimiento y mejorando la velocidad y la confiabilidad del despliegue en un 20%.",
      },
      {
        id: "ski-lift-title",
        en: "Ski Lift Operator - Vail Keystone, CO",
        es: "Operador de Andarivel - Vail Keystone, CO",
      },
      {
        id: "ski-lift-li-1",
        en: "Operated and maintained ski lifts during peak winter seasons, ensuring safety and efficiency for thousands of guests daily.",
        es: "Operé y mantuve los andariveles durante las temporadas de invierno, garantizando la seguridad y eficiencia para miles de huéspedes diariamente.",
      },
      {
        id: "ski-lift-li-2",
        en: "Provided exceptional guest service, addressing any concerns promptly to enhance the overall resort experience.",
        es: "Proporcioné un servicio excepcional a los huéspedes, atendiendo cualquier inquietud de manera rápida para mejorar la experiencia general del resort.",
      },
      {
        id: "ski-lift-li-3",
        en: "Coordinated with lift operators, maintenance team, and ski patrol to ensure guest safety.",
        es: "Coordiné con otros operadores, el equipo de mantenimiento y la patrulla de esquí para garantizar la seguridad de los huéspedes.",
      },
      { id: "projects-title", en: "Projects", es: "Proyectos" },
      {
        id: "ruuf-title",
        en: "Full-Stack Energy Monitoring App for Ruuf",
        es: "Aplicación de Monitoreo Energético Full-Stack para Ruuf",
      },
      {
        id: "ruuf-description",
        en: "Developed a full-stack application for Ruff to monitor and analyze energy usage. Served as backend administrator, managing server-side logic and database integration.",
        es: "Desarrollé una aplicación full-stack para Ruuf para monitorear y analizar el uso de energía. Actué como administrador de backend, gestionando la lógica del servidor y la integración de la base de datos.",
      },
      {
        id: "recommendation-title",
        en: "Recommendation Engine",
        es: "Motor de Recomendación",
      },
      {
        id: "recommendation-description",
        en: "Built a recommendation system using Python and machine learning to suggest recipes based on user preferences and dietary needs.",
        es: "Desarrollé un sistema de recomendación utilizando Python y aprendizaje automático para sugerir recetas basadas en las preferencias del usuario y necesidades dietéticas.",
      },
      {
        id: "docker-title",
        en: "Containerized Application Deployment",
        es: "Despliegue de Aplicación en Contenedores",
      },
      {
        id: "docker-description",
        en: "Containerized a full-stack application with Docker Compose and deployed it on AWS, demonstrating scalable deployment and management of services in a cloud environment.",
        es: "Contenericé una aplicación full-stack con Docker Compose y la desplegué en AWS, demostrando el despliegue escalable y la gestión de servicios en un entorno en la nube.",
      },
      {
        id: "video-game-title",
        en: "Multiplayer Video Game Development",
        es: "Desarrollo de Videojuego Multijugador",
      },
      {
        id: "video-game-description",
        en: "Created a multiplayer video game using React for the frontend and PostgreSQL for backend deployment. Hosted on Heroku and Netlify for an interactive gaming experience.",
        es: "Creé un videojuego multijugador utilizando React para el frontend y PostgreSQL para el backend. Hospedado en Heroku y Netlify para una experiencia de juego interactiva.",
      },
      {
        id: "dccarpool-title",
        en: "University Car Sharing and Logistics Platform",
        es: "Plataforma Universitaria de Compartir Autos y Logística",
      },
      {
        id: "dccarpool-description",
        en: "Developed a Ruby on Rails application to facilitate car sharing among university students and staff, deployed on Heroku for reliability and accessibility.",
        es: "Desarrollé una aplicación en Ruby on Rails para facilitar el compartir autos entre estudiantes y personal de la universidad, desplegada en Heroku para garantizar fiabilidad y accesibilidad.",
      },
      {
        id: "download-resume",
        en: "Download Resume",
        es: "Descargar CV",
      },
      { id: "contact-me", en: "Contact Me", es: "Contáctame" },
      { id: "email-me", en: "Email me at", es: "Envíame un correo a" },
      {
        id: "phone",
        en: "Phone: +56 9 6844 1857",
        es: "Teléfono: +56 9 6844 1857",
      },
    ];

    elements.forEach((element) => {
      const el = document.getElementById(element.id);
      if (el) {
        el.textContent = isSpanish ? element.es : element.en;
      }
    });

    const resume_pdf = document.getElementById("download-resume");
    if (isSpanish) {
      resume_pdf.href = "agustin-herrera-resume-es.pdf";
    } else {
      resume_pdf.href = "agustin-herrera-resume-en.pdf";
    }

    // Update language button text
    languageToggleBtn.textContent = isSpanish ? "English" : "Español";
  }
});

}

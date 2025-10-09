// DigDev Solutions - JavaScript functionality

// Language data
const translations = {
  es: {
    // Header
    "header.company-name": "DigDev Solutions",
    "header.services": "Servicios",
    "header.mining": "Minería",
    "header.about": "Nosotros",
    "header.clients": "Clientes",
    "header.blog": "Blog",
    "header.faq": "FAQ",
    "header.contact": "Contacto",
    
    // Hero
    "hero.title": "Impulsando la Innovación en la Minería",
    "hero.description": "DigDev Solutions: Líderes en desarrollo de software para la industria minera con más de 10 años de experiencia. Ofrecemos soluciones personalizadas, responsivas y multilenguaje, con soporte para modo claro y oscuro.",
    "hero.cta": "Conoce Nuestras Soluciones",
    
    // Features
    "features.title": "Nuestras Características Destacadas",
    "features.description": "En DigDev Solutions, nos enfocamos en ofrecer soluciones de software que cumplen con los más altos estándares de calidad y funcionalidad.",
    "features.responsive-title": "Diseño Responsivo",
    "features.responsive-desc": "Nuestras aplicaciones se adaptan a cualquier dispositivo, garantizando una experiencia de usuario óptima.",
    "features.multilanguage-title": "Soporte Multilenguaje",
    "features.multilanguage-desc": "Facilitamos la comunicación y el acceso a la información para usuarios de todo el mundo.",
    "features.theme-title": "Modo Claro/Oscuro",
    "features.theme-desc": "Permite a los usuarios elegir la apariencia que mejor se adapte a sus preferencias.",
    "features.experience-title": "+10 Años de Experiencia",
    "features.experience-desc": "Una década desarrollando soluciones innovadoras y eficientes para la industria minera.",
    
    // Success Cases
    "success.title": "Casos de Éxito",
    "success.case1-title": "Optimización de Procesos",
    "success.case1-desc": "Aumento del 15% en la eficiencia operativa en una importante mina de cobre.",
    "success.case2-title": "Gestión de Flota",
    "success.case2-desc": "Reducción del 20% en costos de mantenimiento y mejora en la disponibilidad de equipos.",
    "success.case3-title": "Análisis de Datos",
    "success.case3-desc": "Identificación de cuellos de botella y mejoras significativas en la producción.",
    
    // Services
    "services.title": "Nuestros Servicios",
    "services.description": "Soluciones de software innovadoras, especializadas en el sector minero para potenciar la eficiencia y seguridad.",
    "services.webdev-title": "Desarrollo Web",
    "services.webdev-desc": "Creamos sitios web atractivos y funcionales, optimizados para la industria minera, con un enfoque en la experiencia del usuario y la accesibilidad.",
    "services.mobile-title": "Aplicaciones Móviles",
    "services.mobile-desc": "Desarrollamos aplicaciones móviles robustas y seguras para iOS y Android, diseñadas para mejorar la eficiencia y comunicación en el sector minero.",
    "services.custom-title": "Soluciones Personalizadas",
    "services.custom-desc": "Ofrecemos software a medida adaptado a las necesidades de cada cliente, desde sistemas de gestión hasta herramientas de análisis de datos.",
    
    // Mining
    "mining.title": "Soluciones de Software para la Industria Minera",
    "mining.description": "En DigDev Solutions, transformamos la operación minera con tecnología de punta. Desde sistemas de gestión hasta monitoreo en tiempo real, integramos datos para optimizar cada proceso.",
    "mining.cta": "Conozca Nuestras Soluciones",
    
    // Solutions
    "solutions.title": "Nuestras Soluciones Clave",
    "solutions.description": "Impulsamos la eficiencia y seguridad en la minería a través de soluciones innovadoras.",
    "solutions.management-title": "Sistemas de Gestión Minera",
    "solutions.management-desc": "Optimice la planificación y control de sus operaciones con sistemas que se adaptan a sus necesidades.",
    "solutions.monitoring-title": "Monitoreo en Tiempo Real",
    "solutions.monitoring-desc": "Supervise cada aspecto de su operación en tiempo real, mejorando la toma de decisiones y la seguridad.",
    "solutions.integration-title": "Integración de Datos",
    "solutions.integration-desc": "Unifique sus datos para obtener una visión completa y accionable de su negocio minero.",
    
    // CTA
    "cta.title": "Trabajemos Juntos",
    "cta.description": "Si buscas un socio tecnológico con experiencia en la industria minera, estamos listos para ayudarte a alcanzar tus objetivos.",
    "cta.button": "Contáctanos",
    
    // About
    "about.title": "Quiénes Somos",
    "about.description": "En DigDev Solutions, nos dedicamos a transformar la industria minera a través de soluciones de software innovadoras y personalizadas.",
    "about.mission-title": "Misión",
    "about.mission-desc": "Impulsar la eficiencia operativa, mejorar la seguridad y optimizar la toma de decisiones en cada etapa del proceso minero.",
    "about.vision-title": "Visión",
    "about.vision-desc": "Un futuro donde la tecnología y la minería convergen para crear operaciones más inteligentes y sostenibles.",
    "about.values-title": "Valores",
    "about.values-desc": "Integridad, innovación, colaboración y compromiso con la excelencia, guiando cada proyecto que emprendemos.",
    
    // Testimonials
    "testimonials.title": "Lo que dicen nuestros clientes",
    "testimonials.description": "Historias de éxito de líderes en la industria minera.",
    "testimonials.testimonial1": "\"DigDev Solutions transformó nuestra eficiencia operativa. Su experiencia en procesos mineros es inigualable, lo que generó ahorros significativos y una mayor productividad.\"",
    "testimonials.testimonial2": "\"El software personalizado de DigDev ha revolucionado nuestro análisis de datos. Ahora tenemos información en tiempo real que impulsa una mejor toma de decisiones y optimiza la gestión de recursos.\"",
    "testimonials.testimonial3": "\"Trabajar con DigDev Solutions cambió las reglas del juego. Su enfoque personalizado y su profundo conocimiento de nuestros desafíos dieron como resultado una solución que se adapta perfectamente a nuestras necesidades.\"",
    
    // Blog
    "blog.title": "Nuestro Blog",
    "blog.description": "Explorando la vanguardia tecnológica en la minería.",
    "blog.automation-category": "Automatización",
    "blog.automation-title": "Innovaciones en la automatización de procesos mineros",
    "blog.automation-desc": "Descubre cómo la automatización está transformando la eficiencia y seguridad en las operaciones mineras. Exploramos casos de éxito y las últimas tendencias.",
    "blog.logistics-category": "Logística",
    "blog.logistics-title": "Optimización de la cadena de suministro en la industria minera",
    "blog.logistics-desc": "Analizamos estrategias para mejorar la eficiencia y reducir costos en la cadena de suministro minera, desde la extracción hasta la entrega del producto final.",
    "blog.innovation-category": "Innovación",
    "blog.innovation-title": "El futuro de la minería: tecnologías emergentes y su impacto",
    "blog.innovation-desc": "Un vistazo a las tecnologías que están redefiniendo la industria minera, incluyendo inteligencia artificial, blockchain y sensores avanzados.",
    "blog.read-more": "Ver en detalle",
    
    // FAQ
    "faq.title": "Preguntas Frecuentes",
    "faq.description": "Encuentra respuestas a las consultas más comunes sobre nuestros servicios.",
    "faq.question1": "¿Qué tipo de soluciones de software ofrece DigDev Solutions?",
    "faq.answer1": "DigDev Solutions se especializa en desarrollar soluciones de software personalizadas para la industria minera. Nuestras ofertas incluyen sistemas de automatización de procesos, plataformas de análisis de datos, software de monitoreo de equipos y aplicaciones de gestión de seguridad. Aprovechamos tecnologías de vanguardia para abordar desafíos específicos y mejorar la eficiencia operativa.",
    "faq.question2": "¿Cómo garantiza DigDev Solutions la seguridad de su software?",
    "faq.answer2": "La seguridad es una prioridad máxima. Implementamos prácticas de codificación segura, realizamos auditorías de seguridad periódicas y utilizamos cifrado de datos robusto. Nuestras soluciones cumplen con los estándares de seguridad de la industria para proteger los datos críticos de nuestros clientes contra amenazas cibernéticas.",
    "faq.question3": "¿Puede DigDev Solutions integrar su software con sistemas existentes?",
    "faq.answer3": "Sí, una de nuestras fortalezas es la capacidad de integrar nuestras soluciones de software sin problemas con los sistemas y la infraestructura de TI existentes de nuestros clientes. Diseñamos nuestras aplicaciones con API flexibles para garantizar una interoperabilidad fluida y minimizar las interrupciones durante la implementación.",
    "faq.question4": "¿Cuál es el cronograma de desarrollo típico para un proyecto de software?",
    "faq.answer4": "El cronograma varía según la complejidad y el alcance del proyecto. Después de una consulta inicial, proporcionamos una hoja de ruta detallada del proyecto con hitos y plazos claros. Nuestro enfoque de desarrollo ágil nos permite entregar valor de manera incremental y adaptarnos a los requisitos cambiantes de manera eficiente.",
    "faq.question5": "¿DigDev Solutions ofrece soporte y mantenimiento post-lanzamiento?",
    "faq.answer5": "Absolutamente. Ofrecemos paquetes integrales de soporte y mantenimiento para garantizar que nuestras soluciones de software sigan funcionando de manera óptima. Nuestros servicios incluyen actualizaciones periódicas, corrección de errores, soporte técnico y mejoras de funciones para satisfacer las necesidades cambiantes de su negocio.",
    "faq.contact-text": "¿No encuentras lo que buscas?",
    "faq.contact-link": "Contáctanos",
    
    // Contact
    "contact.title": "Ponte en Contacto",
    "contact.description": "Estamos aquí para ayudarte. Contáctanos a través de cualquiera de los siguientes canales.",
    "contact.phone-title": "Teléfono",
    "contact.email-title": "Email",
    "contact.whatsapp-title": "WhatsApp",
    "contact.linkedin-title": "LinkedIn",
    
    // Footer
    "footer.copyright": "© 2025 DigDev Solutions. Todos los derechos reservados."
  },
  en: {
    // Header
    "header.company-name": "DigDev Solutions",
    "header.services": "Services",
    "header.mining": "Mining",
    "header.about": "About Us",
    "header.clients": "Clients",
    "header.blog": "Blog",
    "header.faq": "FAQ",
    "header.contact": "Contact",
    
    // Hero
    "hero.title": "Driving Innovation in Mining",
    "hero.description": "DigDev Solutions: Leaders in software development for the mining industry with over 10 years of experience. We offer customized, responsive, and multilingual solutions with support for light and dark modes.",
    "hero.cta": "Discover Our Solutions",
    
    // Features
    "features.title": "Our Key Features",
    "features.description": "At DigDev Solutions, we focus on delivering software solutions that meet the highest standards of quality and functionality.",
    "features.responsive-title": "Responsive Design",
    "features.responsive-desc": "Our applications adapt to any device, ensuring an optimal user experience.",
    "features.multilanguage-title": "Multilingual Support",
    "features.multilanguage-desc": "We facilitate communication and access to information for users worldwide.",
    "features.theme-title": "Light/Dark Mode",
    "features.theme-desc": "Allows users to choose the appearance that best suits their preferences.",
    "features.experience-title": "+10 Years of Experience",
    "features.experience-desc": "A decade developing innovative and efficient solutions for the mining industry.",
    
    // Success Cases
    "success.title": "Success Cases",
    "success.case1-title": "Process Optimization",
    "success.case1-desc": "15% increase in operational efficiency at a major copper mine.",
    "success.case2-title": "Fleet Management",
    "success.case2-desc": "20% reduction in maintenance costs and improved equipment availability.",
    "success.case3-title": "Data Analysis",
    "success.case3-desc": "Identification of bottlenecks and significant improvements in production.",
    
    // Services
    "services.title": "Our Services",
    "services.description": "Innovative software solutions, specialized in the mining sector to enhance efficiency and safety.",
    "services.webdev-title": "Web Development",
    "services.webdev-desc": "We create attractive and functional websites, optimized for the mining industry, with a focus on user experience and accessibility.",
    "services.mobile-title": "Mobile Applications",
    "services.mobile-desc": "We develop robust and secure mobile applications for iOS and Android, designed to improve efficiency and communication in the mining sector.",
    "services.custom-title": "Custom Solutions",
    "services.custom-desc": "We offer tailored software adapted to each client's needs, from management systems to data analysis tools.",
    
    // Mining
    "mining.title": "Software Solutions for the Mining Industry",
    "mining.description": "At DigDev Solutions, we transform mining operations with cutting-edge technology. From management systems to real-time monitoring, we integrate data to optimize every process.",
    "mining.cta": "Discover Our Solutions",
    
    // Solutions
    "solutions.title": "Our Key Solutions",
    "solutions.description": "We drive efficiency and safety in mining through innovative solutions.",
    "solutions.management-title": "Mining Management Systems",
    "solutions.management-desc": "Optimize the planning and control of your operations with systems that adapt to your needs.",
    "solutions.monitoring-title": "Real-Time Monitoring",
    "solutions.monitoring-desc": "Monitor every aspect of your operation in real time, improving decision-making and safety.",
    "solutions.integration-title": "Data Integration",
    "solutions.integration-desc": "Unify your data to obtain a complete and actionable view of your mining business.",
    
    // CTA
    "cta.title": "Let's Work Together",
    "cta.description": "If you're looking for a technology partner with experience in the mining industry, we're ready to help you achieve your goals.",
    "cta.button": "Contact Us",
    
    // About
    "about.title": "About Us",
    "about.description": "At DigDev Solutions, we are dedicated to transforming the mining industry through innovative and customized software solutions.",
    "about.mission-title": "Mission",
    "about.mission-desc": "To drive operational efficiency, improve safety, and optimize decision-making at every stage of the mining process.",
    "about.vision-title": "Vision",
    "about.vision-desc": "A future where technology and mining converge to create smarter and more sustainable operations.",
    "about.values-title": "Values",
    "about.values-desc": "Integrity, innovation, collaboration, and commitment to excellence, guiding every project we undertake.",
    
    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.description": "Success stories from leaders in the mining industry.",
    "testimonials.testimonial1": "\"DigDev Solutions transformed our operational efficiency. Their expertise in mining processes is unmatched, resulting in significant savings and increased productivity.\"",
    "testimonials.testimonial2": "\"DigDev's customized software has revolutionized our data analysis. We now have real-time information that drives better decision-making and optimizes resource management.\"",
    "testimonials.testimonial3": "\"Working with DigDev Solutions changed the game. Their personalized approach and deep understanding of our challenges resulted in a solution that perfectly fits our needs.\"",
    
    // Blog
    "blog.title": "Our Blog",
    "blog.description": "Exploring the technological forefront in mining.",
    "blog.automation-category": "Automation",
    "blog.automation-title": "Innovations in Mining Process Automation",
    "blog.automation-desc": "Discover how automation is transforming efficiency and safety in mining operations. We explore success cases and the latest trends.",
    "blog.logistics-category": "Logistics",
    "blog.logistics-title": "Supply Chain Optimization in the Mining Industry",
    "blog.logistics-desc": "We analyze strategies to improve efficiency and reduce costs in the mining supply chain, from extraction to final product delivery.",
    "blog.innovation-category": "Innovation",
    "blog.innovation-title": "The Future of Mining: Emerging Technologies and Their Impact",
    "blog.innovation-desc": "A look at the technologies redefining the mining industry, including artificial intelligence, blockchain, and advanced sensors.",
    "blog.read-more": "Read More",
    
    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.description": "Find answers to the most common questions about our services.",
    "faq.question1": "What type of software solutions does DigDev Solutions offer?",
    "faq.answer1": "DigDev Solutions specializes in developing customized software solutions for the mining industry. Our offerings include process automation systems, data analysis platforms, equipment monitoring software, and safety management applications. We leverage cutting-edge technologies to address specific challenges and improve operational efficiency.",
    "faq.question2": "How does DigDev Solutions ensure the security of its software?",
    "faq.answer2": "Security is a top priority. We implement secure coding practices, conduct regular security audits, and use robust data encryption. Our solutions comply with industry security standards to protect our clients' critical data against cyber threats.",
    "faq.question3": "Can DigDev Solutions integrate its software with existing systems?",
    "faq.answer3": "Yes, one of our strengths is the ability to seamlessly integrate our software solutions with our clients' existing systems and IT infrastructure. We design our applications with flexible APIs to ensure smooth interoperability and minimize disruptions during implementation.",
    "faq.question4": "What is the typical development timeline for a software project?",
    "faq.answer4": "The timeline varies depending on the complexity and scope of the project. After an initial consultation, we provide a detailed project roadmap with clear milestones and deadlines. Our agile development approach allows us to deliver value incrementally and adapt to changing requirements efficiently.",
    "faq.question5": "Does DigDev Solutions offer post-launch support and maintenance?",
    "faq.answer5": "Absolutely. We offer comprehensive support and maintenance packages to ensure our software solutions continue to perform optimally. Our services include regular updates, bug fixes, technical support, and feature enhancements to meet your evolving business needs.",
    "faq.contact-text": "Can't find what you're looking for?",
    "faq.contact-link": "Contact Us",
    
    // Contact
    "contact.title": "Get in Touch",
    "contact.description": "We're here to help. Contact us through any of the following channels.",
    "contact.phone-title": "Phone",
    "contact.email-title": "Email",
    "contact.whatsapp-title": "WhatsApp",
    "contact.linkedin-title": "LinkedIn",
    
    // Footer
    "footer.copyright": "© 2025 DigDev Solutions. All rights reserved."
  }
};

// Blog content
const blogContent = {
  1: {
    es: {
      title: "Innovaciones en la automatización de procesos mineros",
      content: `
        <div class="mb-6">
          <p class="mb-4">La automatización está revolucionando la industria minera, permitiendo operaciones más eficientes, seguras y rentables. En este artículo, exploramos las últimas innovaciones en automatización de procesos mineros y cómo están transformando el sector.</p>
          
          <h3 class="text-xl font-bold mb-3">Tecnologías Clave en Automatización Minera</h3>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">Sistemas de control autónomo para equipos de perforación y carga</li>
            <li class="mb-2">Plataformas de monitoreo en tiempo real con sensores IoT</li>
            <li class="mb-2">Algoritmos de inteligencia artificial para optimización de procesos</li>
            <li class="mb-2">Sistemas de gestión integrada de flotas</li>
            <li class="mb-2">Soluciones de análisis predictivo para mantenimiento</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Beneficios de la Automatización</h3>
          <p class="mb-4">La implementación de soluciones de automatización en operaciones mineras ha demostrado:</p>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">Reducción de hasta 30% en costos operativos</li>
            <li class="mb-2">Aumento del 25% en productividad</li>
            <li class="mb-2">Disminución del 40% en accidentes laborales</li>
            <li class="mb-2">Optimización del consumo energético</li>
            <li class="mb-2">Mejora en la toma de decisiones estratégicas</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Casos de Éxito</h3>
          <p class="mb-4">En DigDev Solutions, hemos implementado soluciones de automatización en varias minas líderes, logrando resultados significativos:</p>
          <ul class="list-disc pl-6">
            <li class="mb-2">Mina de cobre en Chile: 18% de aumento en eficiencia operativa</li>
            <li class="mb-2">Operación de oro en Perú: 22% de reducción en costos de mantenimiento</li>
            <li class="mb-2">Mina de hierro en Brasil: 35% de mejora en seguridad operacional</li>
          </ul>
        </div>
      `
    },
    en: {
      title: "Innovations in Mining Process Automation",
      content: `
        <div class="mb-6">
          <p class="mb-4">Automation is revolutionizing the mining industry, enabling more efficient, safe, and profitable operations. In this article, we explore the latest innovations in mining process automation and how they are transforming the sector.</p>
          
          <h3 class="text-xl font-bold mb-3">Key Technologies in Mining Automation</h3>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">Autonomous control systems for drilling and loading equipment</li>
            <li class="mb-2">Real-time monitoring platforms with IoT sensors</li>
            <li class="mb-2">Artificial intelligence algorithms for process optimization</li>
            <li class="mb-2">Integrated fleet management systems</li>
            <li class="mb-2">Predictive analytics solutions for maintenance</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Benefits of Automation</h3>
          <p class="mb-4">The implementation of automation solutions in mining operations has demonstrated:</p>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">Up to 30% reduction in operational costs</li>
            <li class="mb-2">25% increase in productivity</li>
            <li class="mb-2">40% decrease in workplace accidents</li>
            <li class="mb-2">Optimization of energy consumption</li>
            <li class="mb-2">Improved strategic decision-making</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Success Cases</h3>
          <p class="mb-4">At DigDev Solutions, we have implemented automation solutions in several leading mines, achieving significant results:</p>
          <ul class="list-disc pl-6">
            <li class="mb-2">Copper mine in Chile: 18% increase in operational efficiency</li>
            <li class="mb-2">Gold operation in Peru: 22% reduction in maintenance costs</li>
            <li class="mb-2">Iron mine in Brazil: 35% improvement in operational safety</li>
          </ul>
        </div>
      `
    }
  },
  2: {
    es: {
      title: "Optimización de la cadena de suministro en la industria minera",
      content: `
        <div class="mb-6">
          <p class="mb-4">La cadena de suministro en la industria minera enfrenta desafíos únicos debido a la naturaleza remota de las operaciones, la volatilidad de los precios de los commodities y las complejidades logísticas. En este artículo, analizamos estrategias efectivas para optimizar la cadena de suministro minera.</p>
          
          <h3 class="text-xl font-bold mb-3">Desafíos en la Cadena de Suministro Minera</h3>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">Ubicaciones remotas y acceso limitado a infraestructura</li>
            <li class="mb-2">Gestión de inventarios en sitios múltiples</li>
            <li class="mb-2">Volatilidad en la demanda de insumos críticos</li>
            <li class="mb-2">Complejidades en el transporte y logística</li>
            <li class="mb-2">Gestión de proveedores en mercados globales</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Estrategias de Optimización</h3>
          <p class="mb-4">Implementar las siguientes estrategias puede transformar significativamente la eficiencia de la cadena de suministro:</p>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">Digitalización de procesos de aprovisionamiento</li>
            <li class="mb-2">Implementación de sistemas de pronóstico de demanda</li>
            <li class="mb-2">Optimización de rutas de transporte</li>
            <li class="mb-2">Gestión colaborativa de inventarios</li>
            <li class="mb-2">Análisis de datos en tiempo real para toma de decisiones</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Tecnologías Habilitadoras</h3>
          <p class="mb-4">Las siguientes tecnologías están revolucionando la gestión de la cadena de suministro minera:</p>
          <ul class="list-disc pl-6">
            <li class="mb-2">Plataformas de gestión de cadena de suministro en la nube</li>
            <li class="mb-2">Sistemas de seguimiento por GPS y RFID</li>
            <li class="mb-2">Soluciones de blockchain para trazabilidad</li>
            <li class="mb-2">Analítica predictiva para gestión de inventarios</li>
            <li class="mb-2">Internet de las cosas (IoT) para monitoreo de activos</li>
          </ul>
        </div>
      `
    },
    en: {
      title: "Supply Chain Optimization in the Mining Industry",
      content: `
        <div class="mb-6">
          <p class="mb-4">The supply chain in the mining industry faces unique challenges due to the remote nature of operations, commodity price volatility, and logistical complexities. In this article, we analyze effective strategies for optimizing the mining supply chain.</p>
          
          <h3 class="text-xl font-bold mb-3">Challenges in the Mining Supply Chain</h3>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">Remote locations and limited access to infrastructure</li>
            <li class="mb-2">Inventory management across multiple sites</li>
            <li class="mb-2">Volatility in demand for critical inputs</li>
            <li class="mb-2">Complexities in transportation and logistics</li>
            <li class="mb-2">Supplier management in global markets</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Optimization Strategies</h3>
          <p class="mb-4">Implementing the following strategies can significantly transform supply chain efficiency:</p>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">Digitalization of procurement processes</li>
            <li class="mb-2">Implementation of demand forecasting systems</li>
            <li class="mb-2">Transportation route optimization</li>
            <li class="mb-2">Collaborative inventory management</li>
            <li class="mb-2">Real-time data analysis for decision-making</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Enabling Technologies</h3>
          <p class="mb-4">The following technologies are revolutionizing mining supply chain management:</p>
          <ul class="list-disc pl-6">
            <li class="mb-2">Cloud-based supply chain management platforms</li>
            <li class="mb-2">GPS and RFID tracking systems</li>
            <li class="mb-2">Blockchain solutions for traceability</li>
            <li class="mb-2">Predictive analytics for inventory management</li>
            <li class="mb-2">Internet of Things (IoT) for asset monitoring</li>
          </ul>
        </div>
      `
    }
  },
  3: {
    es: {
      title: "El futuro de la minería: tecnologías emergentes y su impacto",
      content: `
        <div class="mb-6">
          <p class="mb-4">La industria minera se encuentra en la cúspide de una transformación tecnológica sin precedentes. Las tecnologías emergentes están redefiniendo cómo operan las minas, desde la exploración hasta el cierre. En este artículo, exploramos las tecnologías que darán forma al futuro de la minería.</p>
          
          <h3 class="text-xl font-bold mb-3">Inteligencia Artificial y Aprendizaje Automático</h3>
          <p class="mb-4">La IA está revolucionando la minería en múltiples frentes:</p>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">Análisis predictivo para mantenimiento de equipos</li>
            <li class="mb-2">Optimización de procesos de extracción y procesamiento</li>
            <li class="mb-2">Detección temprana de fallas operacionales</li>
            <li class="mb-2">Mejora en la seguridad mediante monitoreo predictivo</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Internet de las Cosas (IoT)</h3>
          <p class="mb-4">La conectividad de dispositivos está transformando las operaciones mineras:</p>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">Sensores inteligentes para monitoreo en tiempo real</li>
            <li class="mb-2">Sistemas de gestión de flotas conectadas</li>
            <li class="mb-2">Monitoreo remoto de condiciones ambientales</li>
            <li class="mb-2">Optimización del consumo energético</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Blockchain y Trazabilidad</h3>
          <p class="mb-4">La tecnología blockchain está introduciendo transparencia y eficiencia:</p>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">Trazabilidad completa de minerales desde la mina hasta el mercado</li>
            <li class="mb-2">Contratos inteligentes para transacciones automatizadas</li>
            <li class="mb-2">Verificación de cumplimiento normativo</li>
            <li class="mb-2">Gestión transparente de la cadena de suministro</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Realidad Aumentada y Virtual</h3>
          <p class="mb-4">Las tecnologías inmersivas están mejorando la formación y operaciones:</p>
          <ul class="list-disc pl-6">
            <li class="mb-2">Entrenamiento seguro para operaciones de alto riesgo</li>
            <li class="mb-2">Visualización de datos geológicos en 3D</li>
            <li class="mb-2">Asistencia remota para mantenimiento de equipos</li>
            <li class="mb-2">Simulación de escenarios operacionales</li>
          </ul>
        </div>
      `
    },
    en: {
      title: "The Future of Mining: Emerging Technologies and Their Impact",
      content: `
        <div class="mb-6">
          <p class="mb-4">The mining industry is on the cusp of an unprecedented technological transformation. Emerging technologies are redefining how mines operate, from exploration to closure. In this article, we explore the technologies that will shape the future of mining.</p>
          
          <h3 class="text-xl font-bold mb-3">Artificial Intelligence and Machine Learning</h3>
          <p class="mb-4">AI is revolutionizing mining on multiple fronts:</p>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">Predictive analytics for equipment maintenance</li>
            <li class="mb-2">Optimization of extraction and processing processes</li>
            <li class="mb-2">Early detection of operational failures</li>
            <li class="mb-2">Safety improvement through predictive monitoring</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Internet of Things (IoT)</h3>
          <p class="mb-4">Device connectivity is transforming mining operations:</p>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">Smart sensors for real-time monitoring</li>
            <li class="mb-2">Connected fleet management systems</li>
            <li class="mb-2">Remote monitoring of environmental conditions</li>
            <li class="mb-2">Optimization of energy consumption</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Blockchain and Traceability</h3>
          <p class="mb-4">Blockchain technology is introducing transparency and efficiency:</p>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">Complete traceability of minerals from mine to market</li>
            <li class="mb-2">Smart contracts for automated transactions</li>
            <li class="mb-2">Verification of regulatory compliance</li>
            <li class="mb-2">Transparent supply chain management</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Augmented and Virtual Reality</h3>
          <p class="mb-4">Immersive technologies are improving training and operations:</p>
          <ul class="list-disc pl-6">
            <li class="mb-2">Safe training for high-risk operations</li>
            <li class="mb-2">3D visualization of geological data</li>
            <li class="mb-2">Remote assistance for equipment maintenance</li>
            <li class="mb-2">Simulation of operational scenarios</li>
          </ul>
        </div>
      `
    }
  }
};

// DOM Elements
const progressBar = document.getElementById('progressBar');
const backToTop = document.getElementById('backToTop');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const themeIconMobile = document.getElementById('themeIconMobile');
const languageToggle = document.getElementById('languageToggle');
const languageDropdown = document.getElementById('languageDropdown');
const languageToggleMobile = document.getElementById('languageToggleMobile');
const languageDropdownMobile = document.getElementById('languageDropdownMobile');
const languageOptions = document.querySelectorAll('.language-option');
const logoLink = document.getElementById('logoLink');
const blogPosts = document.querySelectorAll('.blog-post, .blog-read-more');
const blogModal = document.getElementById('blogModal');
const blogModalTitle = document.getElementById('blogModalTitle');
const blogModalContent = document.getElementById('blogModalContent');
const closeBlogModal = document.getElementById('closeBlogModal');
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileNav = document.getElementById('mobileNav');
const desktopNav = document.getElementById('desktopNav');

// Current settings
let currentLanguage = 'es';
let currentTheme = 'dark';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Load saved settings
  loadSettings();
  
  // Initialize progress bar
  initProgressBar();
  
  // Initialize back to top button
  initBackToTop();
  
  // Initialize theme toggle
  initThemeToggle();
  
  // Initialize language selector
  initLanguageSelector();
  
  // Initialize blog modals
  initBlogModals();
  
  // Initialize logo scrolling
  initLogoScrolling();
  
  // Initialize mobile menu
  initMobileMenu();
});

// Load saved settings from localStorage
function loadSettings() {
  const savedLanguage = localStorage.getItem('digdev-language');
  const savedTheme = localStorage.getItem('digdev-theme');
  
  if (savedLanguage) {
    currentLanguage = savedLanguage;
    updateLanguageIndicator();
  }
  
  if (savedTheme) {
    currentTheme = savedTheme;
    document.documentElement.className = currentTheme;
    updateThemeIcon();
  }
  
  // Apply current language
  applyLanguage(currentLanguage);
}

// Initialize progress bar
function initProgressBar() {
  window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / documentHeight) * 100;
    
    progressBar.style.width = scrollPercent + '%';
  });
}

// Initialize back to top button
function initBackToTop() {
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTop.classList.remove('opacity-0', 'invisible');
      backToTop.classList.add('opacity-100', 'visible');
    } else {
      backToTop.classList.remove('opacity-100', 'visible');
      backToTop.classList.add('opacity-0', 'invisible');
    }
  });
  
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize theme toggle
function initThemeToggle() {
  // Desktop theme toggle
  themeToggle.addEventListener('click', function() {
    toggleTheme();
  });
  
  // Mobile theme toggle
  themeToggleMobile.addEventListener('click', function() {
    toggleTheme();
  });
}

// Toggle theme function
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.className = currentTheme;
  updateThemeIcon();
  localStorage.setItem('digdev-theme', currentTheme);
}

// Update theme icon based on current theme
function updateThemeIcon() {
  if (currentTheme === 'dark') {
    themeIcon.className = 'fa-solid fa-sun text-xl';
    themeIconMobile.className = 'fa-solid fa-sun text-xl';
  } else {
    themeIcon.className = 'fa-solid fa-moon text-xl';
    themeIconMobile.className = 'fa-solid fa-moon text-xl';
  }
}

// Initialize language selector
function initLanguageSelector() {
  // Desktop language toggle
  languageToggle.addEventListener('click', function() {
    languageDropdown.classList.toggle('hidden');
  });
  
  // Mobile language toggle
  languageToggleMobile.addEventListener('click', function() {
    languageDropdownMobile.classList.toggle('hidden');
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(event) {
    if (!languageToggle.contains(event.target) && !languageDropdown.contains(event.target)) {
      languageDropdown.classList.add('hidden');
    }
    
    if (!languageToggleMobile.contains(event.target) && !languageDropdownMobile.contains(event.target)) {
      languageDropdownMobile.classList.add('hidden');
    }
  });
  
  // Language selection
  languageOptions.forEach(option => {
    option.addEventListener('click', function() {
      const selectedLang = this.getAttribute('data-lang');
      currentLanguage = selectedLang;
      applyLanguage(selectedLang);
      updateLanguageIndicator();
      localStorage.setItem('digdev-language', selectedLang);
      languageDropdown.classList.add('hidden');
      languageDropdownMobile.classList.add('hidden');
    });
  });
}

// Update language selection indicator
function updateLanguageIndicator() {
  // Desktop indicators
  document.querySelectorAll('.language-check').forEach(check => {
    check.classList.add('hidden');
  });
  
  const currentCheck = document.getElementById(`check-${currentLanguage}`);
  if (currentCheck) {
    currentCheck.classList.remove('hidden');
  }
  
  // Mobile indicators
  document.querySelectorAll('.language-check-mobile').forEach(check => {
    check.classList.add('hidden');
  });
  
  const currentCheckMobile = document.getElementById(`check-${currentLanguage}-mobile`);
  if (currentCheckMobile) {
    currentCheckMobile.classList.remove('hidden');
  }
}

// Apply language to the page
function applyLanguage(lang) {
  const elements = document.querySelectorAll('[data-lang]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-lang');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.value = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
}

// Initialize blog modals
function initBlogModals() {
  blogPosts.forEach(post => {
    post.addEventListener('click', function() {
      const blogId = this.getAttribute('data-blog');
      openBlogModal(blogId);
    });
  });
  
  closeBlogModal.addEventListener('click', function() {
    blogModal.classList.add('hidden');
  });
  
  // Close modal when clicking outside
  blogModal.addEventListener('click', function(event) {
    if (event.target === blogModal) {
      blogModal.classList.add('hidden');
    }
  });
}

// Open blog modal with content
function openBlogModal(blogId) {
  if (blogContent[blogId] && blogContent[blogId][currentLanguage]) {
    blogModalTitle.textContent = blogContent[blogId][currentLanguage].title;
    blogModalContent.innerHTML = blogContent[blogId][currentLanguage].content;
    blogModal.classList.remove('hidden');
  }
}

// Initialize logo scrolling
function initLogoScrolling() {
  logoLink.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize mobile menu
function initMobileMenu() {
  mobileMenuButton.addEventListener('click', function() {
    mobileNav.classList.toggle('hidden');
    
    // Change icon based on menu state
    if (mobileNav.classList.contains('hidden')) {
      mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
    } else {
      mobileMenuButton.innerHTML = '<i class="fas fa-times text-xl"></i>';
    }
  });
  
  // Close mobile menu when clicking on a link
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileNav.classList.add('hidden');
      mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!mobileMenuButton.contains(event.target) && !mobileNav.contains(event.target)) {
      mobileNav.classList.add('hidden');
      mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
    }
  });
}
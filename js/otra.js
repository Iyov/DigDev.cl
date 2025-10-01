// Texts for multilingual support
const texts = {
    es: {
        // Navigation
        "nav-services": "Servicios",
        "nav-mining": "Minería",
        "nav-about": "Quiénes Somos",
        "nav-testimonials": "Testimonios",
        "nav-blog": "Blog",
        "nav-faq": "FAQ",
        "nav-contact": "Contacto",
        
        // Footer Navigation
        "footer-services": "Servicios",
        "footer-mining": "Minería",
        "footer-about": "Quiénes Somos",
        "footer-testimonials": "Testimonios",
        "footer-blog": "Blog",
        "footer-faq": "FAQ",
        "footer-contact": "Contacto",
        
        // Hero Section
        "hero-title": "Soluciones Digitales para la Industria Minera",
        "hero-description": "Desarrollamos software especializado, aplicaciones móviles y soluciones web para optimizar procesos en la minería chilena y otros sectores.",
        "hero-button": "Contáctanos",
        
        // Services Section
        "services-title": "Nuestros Servicios",
        "services-description": "Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio",
        "service-1-title": "Desarrollo Web",
        "service-1-description": "Creación de sitios web modernos, responsivos y optimizados para SEO que impulsan tu presencia digital.",
        "service-2-title": "Aplicaciones Móviles",
        "service-2-description": "Desarrollo de apps nativas e híbridas para iOS y Android, diseñadas para mejorar la productividad.",
        "service-3-title": "Soluciones Personalizadas",
        "service-3-description": "Software a medida que se adapta a tus procesos específicos, optimizando operaciones y reduciendo costos.",
        
        // Mining Section
        "mining-title": "Software para la Minería",
        "mining-description": "Soluciones especializadas para los desafíos únicos de la industria minera",
        "mining-1-title": "Sistemas de Gestión Minera",
        "mining-1-description": "Plataformas integrales para la gestión de operaciones mineras, desde la planificación hasta la ejecución y control.",
        "mining-2-title": "Monitoreo en Tiempo Real",
        "mining-2-description": "Sistemas de seguimiento y control que permiten supervisar operaciones mineras en tiempo real para una toma de decisiones más eficiente.",
        "mining-3-title": "Integración de Datos",
        "mining-3-description": "Soluciones que unifican datos de múltiples fuentes para proporcionar una visión completa de las operaciones mineras.",
        
        // About Section
        "about-title": "Quiénes Somos",
        "about-description-1": "DigDev Solutions es una empresa chilena especializada en el desarrollo de soluciones digitales para la industria minera y otros sectores. Con años de experiencia en el mercado, nos hemos posicionado como referentes en la creación de software especializado que optimiza procesos y mejora la eficiencia operacional.",
        "about-description-2": "Nuestro equipo está compuesto por profesionales altamente capacitados en diversas áreas de la tecnología, lo que nos permite ofrecer soluciones integrales y personalizadas que se adaptan a las necesidades específicas de cada cliente.",
        "about-description-3": "En DigDev Solutions, creemos en la innovación constante y en el poder transformador de la tecnología para impulsar el crecimiento de las empresas en Chile y más allá.",
        
        // Testimonials Section
        "testimonials-title": "Testimonios",
        "testimonials-description": "Lo que nuestros clientes dicen sobre nuestros servicios",
        "testimonial-1": "\"DigDev Solutions transformó completamente nuestros procesos operativos. Su software de gestión minera nos ha permitido optimizar recursos y aumentar nuestra productividad en un 30%.\"",
        "testimonial-author-1": "Carlos Méndez",
        "testimonial-position-1": "Gerente de Operaciones, Minera Andina",
        "testimonial-2": "\"La aplicación móvil desarrollada por DigDev ha revolucionado la forma en que nuestro equipo reporta incidentes en terreno. Es intuitiva, rápida y ha reducido nuestros tiempos de respuesta significativamente.\"",
        "testimonial-author-2": "Ana Rodríguez",
        "testimonial-position-2": "Supervisora de Seguridad, Minera del Norte",
        "testimonial-3": "\"Trabajar con DigDev ha sido una experiencia excepcional. Su equipo entendió perfectamente nuestras necesidades y desarrolló una solución personalizada que ha superado todas nuestras expectativas.\"",
        "testimonial-author-3": "Roberto Silva",
        "testimonial-position-3": "Director de TI, Corporación Minera Central",
        
        // Blog Section
        "blog-title": "Blog",
        "blog-description": "Artículos destacados sobre nuestras soluciones y la industria",
        "blog-1-title": "La Transformación Digital en la Minería Chilena",
        "blog-1-preview": "Exploramos cómo la tecnología está revolucionando la industria minera en Chile y las oportunidades que presenta.",
        "blog-2-title": "Ventajas del Monitoreo en Tiempo Real para Operaciones Mineras",
        "blog-2-preview": "Descubre cómo nuestros sistemas de monitoreo pueden mejorar la eficiencia y seguridad en tus operaciones.",
        "blog-3-title": "Desarrollo de Aplicaciones Móviles para la Industria",
        "blog-3-preview": "Conoce nuestro proceso para crear apps móviles que resuelven problemas específicos del sector minero.",
        
        // Blog Modals
        "blog-modal-1-title": "La Transformación Digital en la Minería Chilena",
        "blog-modal-1-p1": "La industria minera en Chile está experimentando una revolución tecnológica sin precedentes. La transformación digital ha llegado para optimizar procesos, mejorar la seguridad y aumentar la eficiencia en todas las etapas de la operación minera.",
        "blog-modal-1-p2": "En DigDev Solutions, hemos desarrollado soluciones específicas para este sector, incluyendo sistemas de gestión integral, plataformas de monitoreo en tiempo real y aplicaciones móviles especializadas. Estas herramientas permiten a las empresas mineras tomar decisiones basadas en datos precisos y actualizados.",
        "blog-modal-1-p3": "La adopción de tecnologías como IoT, inteligencia artificial y análisis de big data está transformando la forma en que se planifican y ejecutan las operaciones mineras. Nuestro equipo de expertos trabaja constantemente para integrar estas tecnologías en soluciones prácticas y accesibles para la industria.",
        
        "blog-modal-2-title": "Ventajas del Monitoreo en Tiempo Real para Operaciones Mineras",
        "blog-modal-2-p1": "El monitoreo en tiempo real se ha convertido en una herramienta esencial para las operaciones mineras modernas. Permite supervisar constantemente diversos aspectos de la producción, desde el estado de la maquinaria hasta las condiciones ambientales y de seguridad.",
        "blog-modal-2-p2": "Nuestros sistemas de monitoreo ofrecen ventajas significativas, incluyendo la detección temprana de problemas, la optimización del uso de recursos y la mejora en la toma de decisiones. Los datos recopilados se presentan en dashboards intuitivos que facilitan su interpretación y aplicación.",
        "blog-modal-2-p3": "Además, estas soluciones contribuyen a crear entornos de trabajo más seguros al alertar sobre condiciones peligrosas y permitir una respuesta rápida ante emergencias. La implementación de sistemas de monitoreo representa una inversión que se recupera rápidamente a través de la mejora en la eficiencia operacional.",
        
        "blog-modal-3-title": "Desarrollo de Aplicaciones Móviles para la Industria",
        "blog-modal-3-p1": "Las aplicaciones móviles han revolucionado la forma en que se realizan las operaciones en la industria minera. Desde el reporte de incidentes hasta la gestión de inventarios, estas herramientas permiten a los trabajadores realizar sus tareas de manera más eficiente, incluso en ubicaciones remotas.",
        "blog-modal-3-p2": "En DigDev Solutions, desarrollamos aplicaciones móviles nativas e híbridas adaptadas a las necesidades específicas del sector minero. Nuestro proceso incluye un análisis detallado de los requerimientos, diseño de interfaces intuitivas y desarrollo con las mejores prácticas de seguridad y rendimiento.",
        "blog-modal-3-p3": "Las aplicaciones que creamos pueden funcionar sin conexión a internet en áreas con cobertura limitada, sincronizando los datos cuando se restablece la conectividad. Esta característica es especialmente valiosa en yacimientos mineros donde la conectividad puede ser intermitente.",
        
        // FAQ Section
        "faq-title": "Preguntas Frecuentes",
        "faq-description": "Respuestas a las consultas más comunes sobre nuestros servicios",
        "faq-1-question": "¿Qué tipos de empresas pueden beneficiarse de sus servicios?",
        "faq-1-answer": "Nuestras soluciones están diseñadas principalmente para la industria minera, pero también trabajamos con empresas de diversos sectores que requieran desarrollo de software personalizado, aplicaciones móviles o sitios web. Hemos desarrollado proyectos para retail, logística, educación y servicios financieros, entre otros.",
        "faq-2-question": "¿Cuál es el tiempo promedio de desarrollo de un proyecto?",
        "faq-2-answer": "El tiempo de desarrollo varía según la complejidad y alcance del proyecto. Para un sitio web corporativo básico, podemos entregar en 2-4 semanas. Proyectos de software más complejos pueden tomar de 3 a 6 meses. Siempre proporcionamos un cronograma detallado después de analizar los requerimientos específicos.",
        "faq-3-question": "¿Ofrecen soporte y mantenimiento después del lanzamiento?",
        "faq-3-answer": "Sí, ofrecemos planes de soporte y mantenimiento continuo para todas nuestras soluciones. Esto incluye actualizaciones de seguridad, corrección de errores, mejoras funcionales y asistencia técnica. Los planes pueden ser mensuales o anuales, según las necesidades del cliente.",
        "faq-4-question": "¿Trabajan con tecnologías específicas?",
        "faq-4-answer": "Utilizamos una variedad de tecnologías modernas según los requerimientos del proyecto. Para desarrollo web trabajamos con HTML5, CSS3, JavaScript, React, Angular y Vue.js. Para backend utilizamos Node.js, Python, PHP y .NET. En aplicaciones móviles, desarrollamos tanto nativas (Swift, Kotlin) como híbridas (React Native, Flutter).",
        "faq-5-question": "¿Cómo es el proceso de trabajo con DigDev Solutions?",
        "faq-5-answer": "Nuestro proceso incluye: 1) Consulta inicial para entender tus necesidades, 2) Análisis y propuesta detallada, 3) Diseño de la solución, 4) Desarrollo iterativo con revisiones periódicas, 5) Pruebas exhaustivas, 6) Implementación y lanzamiento, 7) Soporte continuo. Mantenemos una comunicación constante durante todo el proyecto.",
        
        // Contact Section
        "contact-title": "Contacto",
        "contact-description": "Ponte en contacto con nosotros para discutir tu proyecto",
        "contact-phone-title": "Teléfono",
        "contact-email-title": "Email",
        "contact-whatsapp-title": "WhatsApp",
        "contact-linkedin-title": "LinkedIn",
        "contact-instagram-title": "Instagram",
        "contact-facebook-title": "Facebook",
        "contact-threads-title": "Threads",
        "contact-tiktok-title": "TikTok",
        "contact-youtube-title": "YouTube",
        "contact-twitter-title": "Twitter (X)",
        "contact-website-title": "Sitio Web",
        
        // Footer
        "footer-description": "Soluciones digitales especializadas para la industria minera y otros sectores en Chile.",
        "footer-links-title": "Enlaces Rápidos",
        "footer-contact-title": "Contacto",
        "copyright-text": "© 2025 DigDev Solutions. Todos los derechos reservados."
    },
    en: {
        // Navigation
        "nav-services": "Services",
        "nav-mining": "Mining",
        "nav-about": "About Us",
        "nav-testimonials": "Testimonials",
        "nav-blog": "Blog",
        "nav-faq": "FAQ",
        "nav-contact": "Contact",
        
        // Footer Navigation
        "footer-services": "Services",
        "footer-mining": "Mining",
        "footer-about": "About Us",
        "footer-testimonials": "Testimonials",
        "footer-blog": "Blog",
        "footer-faq": "FAQ",
        "footer-contact": "Contact",
        
        // Hero Section
        "hero-title": "Digital Solutions for the Mining Industry",
        "hero-description": "We develop specialized software, mobile applications and web solutions to optimize processes in Chilean mining and other sectors.",
        "hero-button": "Contact Us",
        
        // Services Section
        "services-title": "Our Services",
        "services-description": "We offer comprehensive technological solutions to boost your business",
        "service-1-title": "Web Development",
        "service-1-description": "Creation of modern, responsive and SEO-optimized websites that boost your digital presence.",
        "service-2-title": "Mobile Applications",
        "service-2-description": "Development of native and hybrid apps for iOS and Android, designed to improve productivity.",
        "service-3-title": "Custom Solutions",
        "service-3-description": "Tailored software that adapts to your specific processes, optimizing operations and reducing costs.",
        
        // Mining Section
        "mining-title": "Mining Software",
        "mining-description": "Specialized solutions for the unique challenges of the mining industry",
        "mining-1-title": "Mining Management Systems",
        "mining-1-description": "Comprehensive platforms for managing mining operations, from planning to execution and control.",
        "mining-2-title": "Real-Time Monitoring",
        "mining-2-description": "Tracking and control systems that allow monitoring mining operations in real time for more efficient decision making.",
        "mining-3-title": "Data Integration",
        "mining-3-description": "Solutions that unify data from multiple sources to provide a complete view of mining operations.",
        
        // About Section
        "about-title": "About Us",
        "about-description-1": "DigDev Solutions is a Chilean company specialized in developing digital solutions for the mining industry and other sectors. With years of experience in the market, we have positioned ourselves as references in the creation of specialized software that optimizes processes and improves operational efficiency.",
        "about-description-2": "Our team is composed of highly qualified professionals in various technology areas, which allows us to offer comprehensive and customized solutions that adapt to the specific needs of each client.",
        "about-description-3": "At DigDev Solutions, we believe in constant innovation and the transformative power of technology to drive the growth of companies in Chile and beyond.",
        
        // Testimonials Section
        "testimonials-title": "Testimonials",
        "testimonials-description": "What our clients say about our services",
        "testimonial-1": "\"DigDev Solutions completely transformed our operational processes. Their mining management software has allowed us to optimize resources and increase our productivity by 30%.\"",
        "testimonial-author-1": "Carlos Méndez",
        "testimonial-position-1": "Operations Manager, Minera Andina",
        "testimonial-2": "\"The mobile application developed by DigDev has revolutionized how our team reports incidents in the field. It's intuitive, fast and has significantly reduced our response times.\"",
        "testimonial-author-2": "Ana Rodríguez",
        "testimonial-position-2": "Safety Supervisor, Minera del Norte",
        "testimonial-3": "\"Working with DigDev has been an exceptional experience. Their team perfectly understood our needs and developed a customized solution that has exceeded all our expectations.\"",
        "testimonial-author-3": "Roberto Silva",
        "testimonial-position-3": "IT Director, Corporación Minera Central",
        
        // Blog Section
        "blog-title": "Blog",
        "blog-description": "Featured articles about our solutions and the industry",
        "blog-1-title": "Digital Transformation in Chilean Mining",
        "blog-1-preview": "We explore how technology is revolutionizing the mining industry in Chile and the opportunities it presents.",
        "blog-2-title": "Advantages of Real-Time Monitoring for Mining Operations",
        "blog-2-preview": "Discover how our monitoring systems can improve efficiency and safety in your operations.",
        "blog-3-title": "Mobile Application Development for the Industry",
        "blog-3-preview": "Learn about our process for creating mobile apps that solve specific problems in the mining sector.",
        
        // Blog Modals
        "blog-modal-1-title": "Digital Transformation in Chilean Mining",
        "blog-modal-1-p1": "The mining industry in Chile is experiencing an unprecedented technological revolution. Digital transformation has arrived to optimize processes, improve safety and increase efficiency at all stages of mining operations.",
        "blog-modal-1-p2": "At DigDev Solutions, we have developed specific solutions for this sector, including comprehensive management systems, real-time monitoring platforms and specialized mobile applications. These tools allow mining companies to make decisions based on accurate and updated data.",
        "blog-modal-1-p3": "The adoption of technologies such as IoT, artificial intelligence and big data analytics is transforming how mining operations are planned and executed. Our team of experts constantly works to integrate these technologies into practical and accessible solutions for the industry.",
        
        "blog-modal-2-title": "Advantages of Real-Time Monitoring for Mining Operations",
        "blog-modal-2-p1": "Real-time monitoring has become an essential tool for modern mining operations. It allows constant supervision of various aspects of production, from machinery status to environmental and safety conditions.",
        "blog-modal-2-p2": "Our monitoring systems offer significant advantages, including early problem detection, optimization of resource use and improved decision making. The collected data is presented in intuitive dashboards that facilitate interpretation and application.",
        "blog-modal-2-p3": "Additionally, these solutions contribute to creating safer work environments by alerting about dangerous conditions and enabling quick response to emergencies. The implementation of monitoring systems represents an investment that quickly pays off through improved operational efficiency.",
        
        "blog-modal-3-title": "Mobile Application Development for the Industry",
        "blog-modal-3-p1": "Mobile applications have revolutionized how operations are conducted in the mining industry. From incident reporting to inventory management, these tools allow workers to perform their tasks more efficiently, even in remote locations.",
        "blog-modal-3-p2": "At DigDev Solutions, we develop native and hybrid mobile applications adapted to the specific needs of the mining sector. Our process includes detailed requirement analysis, intuitive interface design and development with the best security and performance practices.",
        "blog-modal-3-p3": "The applications we create can function without internet connection in areas with limited coverage, synchronizing data when connectivity is restored. This feature is especially valuable in mining sites where connectivity can be intermittent.",
        
        // FAQ Section
        "faq-title": "Frequently Asked Questions",
        "faq-description": "Answers to the most common questions about our services",
        "faq-1-question": "What types of companies can benefit from your services?",
        "faq-1-answer": "Our solutions are primarily designed for the mining industry, but we also work with companies from various sectors that require custom software development, mobile applications or websites. We have developed projects for retail, logistics, education and financial services, among others.",
        "faq-2-question": "What is the average development time for a project?",
        "faq-2-answer": "Development time varies depending on the complexity and scope of the project. For a basic corporate website, we can deliver in 2-4 weeks. More complex software projects can take 3 to 6 months. We always provide a detailed schedule after analyzing the specific requirements.",
        "faq-3-question": "Do you offer support and maintenance after launch?",
        "faq-3-answer": "Yes, we offer continuous support and maintenance plans for all our solutions. This includes security updates, bug fixes, functional improvements and technical assistance. Plans can be monthly or annual, depending on the client's needs.",
        "faq-4-question": "Do you work with specific technologies?",
        "faq-4-answer": "We use a variety of modern technologies according to project requirements. For web development we work with HTML5, CSS3, JavaScript, React, Angular and Vue.js. For backend we use Node.js, Python, PHP and .NET. In mobile applications, we develop both native (Swift, Kotlin) and hybrid (React Native, Flutter).",
        "faq-5-question": "What is the working process with DigDev Solutions?",
        "faq-5-answer": "Our process includes: 1) Initial consultation to understand your needs, 2) Analysis and detailed proposal, 3) Solution design, 4) Iterative development with periodic reviews, 5) Exhaustive testing, 6) Implementation and launch, 7) Continuous support. We maintain constant communication throughout the project.",
        
        // Contact Section
        "contact-title": "Contact",
        "contact-description": "Get in touch with us to discuss your project",
        "contact-phone-title": "Phone",
        "contact-email-title": "Email",
        "contact-whatsapp-title": "WhatsApp",
        "contact-linkedin-title": "LinkedIn",
        "contact-instagram-title": "Instagram",
        "contact-facebook-title": "Facebook",
        "contact-threads-title": "Threads",
        "contact-tiktok-title": "TikTok",
        "contact-youtube-title": "YouTube",
        "contact-twitter-title": "Twitter (X)",
        "contact-website-title": "Website",
        
        // Footer
        "footer-description": "Specialized digital solutions for the mining industry and other sectors in Chile.",
        "footer-links-title": "Quick Links",
        "footer-contact-title": "Contact",
        "copyright-text": "© 2025 DigDev Solutions. All rights reserved."
    }
};

// Progress Bar
window.onscroll = function() {
    updateProgressBar();
    toggleBackToTop();
};

function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

// Back to Top Button
function toggleBackToTop() {
    const backToTop = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }
}

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

// Check for saved theme preference or respect OS preference
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Language Toggle
const languageToggle = document.getElementById("languageToggle");
let currentLanguage = localStorage.getItem('language') || 'es';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update all text elements
    Object.keys(texts[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = texts[lang][key];
        }
    });
    
    // Update language toggle button
    languageToggle.innerHTML = `<i class="fas fa-globe"></i>&#160;${lang.toUpperCase()}`;
}

languageToggle.addEventListener('click', () => {
    const newLang = currentLanguage === 'es' ? 'en' : 'es';
    setLanguage(newLang);
});

// Initialize language
setLanguage(currentLanguage);

// Mobile Menu
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle("active");
    const icon = mobileMenuBtn.querySelector("i");
    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-times");
    } else {
        icon.classList.replace("fa-times", "fa-bars");
    }
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');
        
        // Close all other answers
        document.querySelectorAll('.faq-answer').forEach(item => {
            if (item !== answer) {
                item.classList.remove('active');
                item.previousElementSibling.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });
        
        // Toggle current answer
        answer.classList.toggle('active');
        if (answer.classList.contains('active')) {
            icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
        } else {
            icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
        }
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove("active");
        mobileMenuBtn.querySelector("i").classList.replace("fa-times", "fa-bars");
    });
});

// Logo click to scroll to top
document.getElementById('logo').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Blog Modals
const blogCards = document.querySelectorAll('.blog-card');
const blogModals = document.querySelectorAll('.blog-modal');
const closeButtons = document.querySelectorAll('.modal-close');

blogCards.forEach(card => {
    card.addEventListener('click', () => {
        const blogId = card.getAttribute('data-blog');
        const modal = document.getElementById(`blogModal${blogId}`);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.blog-modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close modal when clicking outside
blogModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
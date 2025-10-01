// Sistema de traducción
const translations = {
    'es': {
        'nav.services': 'Servicios',
        'nav.mining': 'Minería',
        'nav.about': 'Nosotros',
        'nav.testimonials': 'Testimonios',
        'nav.blog': 'Blog',
        'nav.faq': 'FAQ',
        'nav.contact': 'Contacto',
        'hero.title': 'Transformamos ideas en soluciones digitales',
        'hero.subtitle': 'En DigDev desarrollamos sistemas innovadores que resuelven problemas reales. Especialistas en desarrollo de software para la minería con 10 años de experiencia.',
        'hero.button': 'Comenzar proyecto',
        'services.title': 'Nuestros Servicios',
        'services.web.title': 'Desarrollo Web',
        'services.web.description': 'Creación de sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.',
        'services.mobile.title': 'Aplicaciones Móviles',
        'services.mobile.description': 'Desarrollamos apps nativas e híbridas para iOS y Android con interfaces intuitivas y atractivas.',
        'services.custom.title': 'Soluciones Personalizadas',
        'services.custom.description': 'Sistemas a medida que se adaptan a tus procesos específicos y necesidades únicas.',
        'mining.title': 'Desarrollo de Software para la Minería',
        'mining.text1': 'Con más de 10 años de experiencia especializada en el rubro minero chileno, hemos desarrollado soluciones tecnológicas que optimizan procesos, aumentan la eficiencia y reducen costos operativos.',
        'mining.text2': 'Nuestro equipo comprende los desafíos específicos de la industria minera y ha trabajado con algunas de las principales empresas del sector, desarrollando sistemas que se adaptan a las exigentes condiciones operativas.',
        'mining.feature1.title': 'Sistemas de Gestión Minera',
        'mining.feature1.desc': 'Desarrollo de software especializado para control de producción, inventarios y mantenimiento.',
        'mining.feature2.title': 'Monitoreo en Tiempo Real',
        'mining.feature2.desc': 'Sistemas de seguimiento y control de operaciones mineras con reporting automatizado.',
        'mining.feature3.title': 'Integración de Datos',
        'mining.feature3.desc': 'Soluciones ETL para consolidar información de múltiples fuentes operativas.',
        'about.title': '¿Quiénes Somos?',
        'about.text1': 'DigDev (Digital Developers) es una empresa de TI con especialización en el sector minero, conformada por profesionales con más de 10 años de experiencia en el rubro.',
        'about.text2': 'Creemos que la tecnología debe servir para resolver problemas reales y mejorar la vida de las personas. Nos especializamos en entender las necesidades específicas de cada cliente y traducirlas en sistemas eficientes y escalables.',
        'about.text3': 'Nuestra misión es impulsar la transformación digital de negocios y organizaciones a través de desarrollo de software de calidad, interfaces intuitivas y experiencias digitales memorables.',
        'testimonials.title': 'Testimonios',
        'testimonials.testimonial1.text': '"El equipo de DigDev transformó completamente nuestros procesos mineros. Su software personalizado nos permitió aumentar la eficiencia en un 40%. ¡Increíble trabajo!"',
        'testimonials.testimonial1.author': 'Carlos Rodríguez',
        'testimonials.testimonial1.role': 'Operaciones, Minera Andina',
        'testimonials.testimonial2.text': '"Trabajar con DigDev fue una experiencia excepcional. Su aplicación móvil para reportes en terreno ha revolucionado nuestra forma de trabajar. ¡Altamente recomendados!"',
        'testimonials.testimonial2.author': 'María González',
        'testimonials.testimonial2.role': 'Jefa de Proyectos, Codelco',
        'testimonials.testimonial3.text': '"La plataforma web desarrollada por DigDev superó todas nuestras expectativas. Su atención al detalle y comprensión de nuestras necesidades fue impresionante."',
        'testimonials.testimonial3.author': 'Roberto Silva',
        'testimonials.testimonial3.role': 'TI, Antofagasta Minerals',
        'blog.title': 'Blog',
        'blog.readmore': 'Leer más',
        'blog.post1.title': 'Transformación Digital en la Industria Minera',
        'blog.post1.excerpt': 'Descubre cómo la tecnología está revolucionando los procesos mineros y aumentando la eficiencia operacional.',
        'blog.post1.content1': 'La industria minera está experimentando una revolución tecnológica sin precedentes. En DigDev, hemos sido testigos de primera mano cómo la implementación de soluciones digitales personalizadas puede transformar completamente las operaciones mineras.',
        'blog.post1.content2': 'Nuestro equipo ha desarrollado sistemas que permiten el monitoreo en tiempo real de operaciones, la automatización de procesos críticos y la integración de datos desde múltiples fuentes. Esto ha resultado en aumentos de eficiencia de hasta el 40% para nuestros clientes.',
        'blog.post1.content3': 'La clave del éxito radica en comprender las necesidades específicas del sector minero y desarrollar soluciones que se adapten a las condiciones operativas únicas de cada faena. Con más de 10 años de experiencia en el rubro, hemos perfeccionado nuestra metodología para entregar resultados tangibles.',
        'blog.post2.title': 'Ventajas del Desarrollo de Software Personalizado',
        'blog.post2.excerpt': '¿Por qué elegir soluciones a medida en lugar de software genérico? Te contamos las ventajas competitivas.',
        'blog.post2.content1': 'En un mundo donde el software genérico parece ser la solución más accesible, muchas empresas se preguntan por qué invertir en desarrollo personalizado. La respuesta es simple: el software a medida se adapta perfectamente a tus procesos específicos, mientras que el software genérico fuerza a tu empresa a adaptarse a él.',
        'blog.post2.content2': 'En DigDev, creemos que cada negocio es único. Nuestro enfoque personalizado nos permite crear soluciones que se integran perfectamente con tus operaciones existentes, escalan según tus necesidades y te brindan una ventaja competitiva real.',
        'blog.post2.content3': 'Las principales ventajas incluyen mayor eficiencia operacional, mejor experiencia de usuario, integración perfecta con sistemas existentes, y la capacidad de evolucionar junto con tu negocio. Nuestros clientes han experimentado retornos de inversión significativos al optar por soluciones personalizadas.',
        'blog.post3.title': 'Tendencias Tecnológicas que Marcarán el 2024',
        'blog.post3.excerpt': 'Exploramos las tecnologías emergentes que están transformando el panorama digital empresarial.',
        'blog.post3.content1': 'El panorama tecnológico evoluciona a un ritmo acelerado, y 2024 promete traer innovaciones que transformarán la forma en que las empresas operan. En DigDev, estamos constantemente investigando y adoptando estas tendencias para ofrecer soluciones de vanguardia a nuestros clientes.',
        'blog.post3.content2': 'Entre las tendencias más destacadas se encuentran la inteligencia artificial aplicada a procesos empresariales, el edge computing para procesamiento de datos en tiempo real, y las plataformas low-code que aceleran el desarrollo de aplicaciones. También vemos un crecimiento significativo en soluciones de ciberseguridad avanzada y tecnologías de realidad aumentada para entrenamiento y mantenimiento.',
        'blog.post3.content3': 'Nuestro equipo está preparado para integrar estas tecnologías emergentes en soluciones personalizadas que impulsen la transformación digital de tu empresa. Mantenerse a la vanguardia tecnológica no es solo una ventaja competitiva, sino una necesidad en el panorama empresarial actual.',
        'faq.title': 'Preguntas Frecuentes',
        'faq.q1.text': '¿Qué tipos de proyectos desarrollan?',
        'faq.a1.1': 'Desarrollamos una amplia variedad de proyectos digitales, incluyendo:',
        'faq.a1.2': '- Sitios web corporativos y landing pages',
        'faq.a1.3': '- Aplicaciones web progresivas (PWA)',
        'faq.a1.4': '- Aplicaciones móviles nativas e híbridas',
        'faq.a1.5': '- Sistemas de gestión empresarial (ERP, CRM)',
        'faq.a1.6': '- Plataformas de comercio electrónico',
        'faq.a1.7': '- Soluciones personalizadas según necesidades específicas',
        'faq.q2.text': '¿Cuál es el tiempo promedio de desarrollo?',
        'faq.a2.1': 'El tiempo de desarrollo varía según la complejidad del proyecto:',
        'faq.a2.2': '- Landing page básica: 1-2 semanas',
        'faq.a2.3': '- Sitio web corporativo: 3-6 semanas',
        'faq.a2.4': '- Aplicación web: 4-12 semanas',
        'faq.a2.5': '- Aplicación móvil: 6-16 semanas',
        'faq.a2.6': '- Sistemas complejos: 12+ semanas',
        'faq.a2.7': 'Trabajamos con metodologías ágiles, entregando versiones funcionales desde las primeras semanas.',
        'faq.q3.text': '¿Ofrecen mantenimiento después del desarrollo?',
        'faq.a3.1': 'Sí, ofrecemos planes de mantenimiento post-desarrollo que incluyen:',
        'faq.a3.2': '- Actualizaciones de seguridad',
        'faq.a3.3': '- Soporte técnico prioritario',
        'faq.a3.4': '- Mejoras y nuevas funcionalidades',
        'faq.a3.5': '- Monitoreo del rendimiento',
        'faq.a3.6': '- Backup regular de información',
        'faq.a3.7': 'Nuestros clientes pueden elegir entre planes mensuales, trimestrales o anuales según sus necesidades.',
        'faq.q4.text': '¿Trabajan con empresas internacionales?',
        'faq.a4.1': 'Sí, trabajamos con clientes de diferentes partes del mundo. Nuestro equipo está preparado para:',
        'faq.a4.2': '- Comunicación en español e inglés',
        'faq.a4.3': '- Adaptación a diferentes zonas horarias',
        'faq.a4.4': '- Conocimiento de regulaciones internacionales',
        'faq.a4.5': '- Experiencia en proyectos multiculturales',
        'faq.a4.6': 'Utilizamos herramientas de colaboración remota que nos permiten trabajar eficientemente sin importar la ubicación geográfica.',
        'faq.q5.text': '¿Cómo es el proceso de trabajo?',
        'faq.a5.1': 'Nuestro proceso se divide en 5 fases principales:',
        'faq.a5.2': '1. Descubrimiento:',
        'faq.a5.3': 'Entendemos tus necesidades y objetivos.',
        'faq.a5.4': '2. Planificación:',
        'faq.a5.5': 'Creamos un plan detallado con cronograma y presupuesto.',
        'faq.a5.6': '3. Diseño:',
        'faq.a5.7': 'Desarrollamos prototipos y diseños de interfaces.',
        'faq.a5.8': '4. Desarrollo:',
        'faq.a5.9': 'Implementamos la solución con metodologías ágiles.',
        'faq.a5.10': '5. Lanzamiento & Mantenimiento:',
        'faq.a5.11': 'Publicamos y damos soporte continuo.',
        'faq.a5.12': 'Mantenemos comunicación constante durante todo el proceso con entregas regulares.',
        'contact.title': 'Contacto',
        'contact.subtitle': 'Contáctanos y convirtamos tu idea en una solución digital efectiva. Estamos aquí para ayudarte en cada paso del proceso.',
        'footer.tagline': 'Digital Developers - Transformando ideas en soluciones',
        'footer.contact': 'Contacto',
        'footer.follow': 'Síguenos',
        'footer.rights': 'Todos los derechos reservados'
    },
    'en': {
        'nav.services': 'Services',
        'nav.mining': 'Mining',
        'nav.about': 'About Us',
        'nav.testimonials': 'Testimonials',
        'nav.blog': 'Blog',
        'nav.faq': 'FAQ',
        'nav.contact': 'Contact',
        'hero.title': 'We transform ideas into digital solutions',
        'hero.subtitle': 'At DigDev we develop innovative systems that solve real problems. Specialists in mining software development with 10 years of experience.',
        'hero.button': 'Start project',
        'services.title': 'Our Services',
        'services.web.title': 'Web Development',
        'services.web.description': 'Creation of modern, responsive and optimized websites to convert visitors into customers.',
        'services.mobile.title': 'Mobile Applications',
        'services.mobile.description': 'We develop native and hybrid apps for iOS and Android with intuitive and attractive interfaces.',
        'services.custom.title': 'Custom Solutions',
        'services.custom.description': 'Tailor-made systems that adapt to your specific processes and unique needs.',
        'mining.title': 'Mining Software Development',
        'mining.text1': 'With over 10 years of specialized experience in the Chilean mining sector, we have developed technological solutions that optimize processes, increase efficiency and reduce operational costs.',
        'mining.text2': 'Our team understands the specific challenges of the mining industry and has worked with some of the main companies in the sector, developing systems that adapt to demanding operational conditions.',
        'mining.feature1.title': 'Mining Management Systems',
        'mining.feature1.desc': 'Development of specialized software for production control, inventories and maintenance.',
        'mining.feature2.title': 'Real-time Monitoring',
        'mining.feature2.desc': 'Mining operations tracking and control systems with automated reporting.',
        'mining.feature3.title': 'Data Integration',
        'mining.feature3.desc': 'ETL solutions to consolidate information from multiple operational sources.',
        'about.title': 'Who We Are?',
        'about.text1': 'DigDev (Digital Developers) is an IT company specialized in the mining sector, made up of professionals with more than 10 years of experience in the field.',
        'about.text2': 'We believe that technology should serve to solve real problems and improve people\'s lives. We specialize in understanding the specific needs of each client and translating them into efficient and scalable systems.',
        'about.text3': 'Our mission is to drive the digital transformation of businesses and organizations through quality software development, intuitive interfaces and memorable digital experiences.',
        'testimonials.title': 'Testimonials',
        'testimonials.testimonial1.text': '"The DigDev team completely transformed our mining processes. Their custom software allowed us to increase efficiency by 40%. Amazing work!"',
        'testimonials.testimonial1.author': 'Carlos Rodríguez',
        'testimonials.testimonial1.role': 'Operations, Minera Andina',
        'testimonials.testimonial2.text': '"Working with DigDev was an exceptional experience. Their mobile app for field reports has revolutionized our way of working. Highly recommended!"',
        'testimonials.testimonial2.author': 'María González',
        'testimonials.testimonial2.role': 'Project Manager, Codelco',
        'testimonials.testimonial3.text': '"The web platform developed by DigDev exceeded all our expectations. Their attention to detail and understanding of our needs was impressive."',
        'testimonials.testimonial3.author': 'Roberto Silva',
        'testimonials.testimonial3.role': 'IT, Antofagasta Minerals',
        'blog.title': 'Blog',
        'blog.readmore': 'Read more',
        'blog.post1.title': 'Digital Transformation in the Mining Industry',
        'blog.post1.excerpt': 'Discover how technology is revolutionizing mining processes and increasing operational efficiency.',
        'blog.post1.content1': 'The mining industry is experiencing an unprecedented technological revolution. At DigDev, we have witnessed firsthand how the implementation of customized digital solutions can completely transform mining operations.',
        'blog.post1.content2': 'Our team has developed systems that allow real-time monitoring of operations, automation of critical processes, and integration of data from multiple sources. This has resulted in efficiency increases of up to 40% for our clients.',
        'blog.post1.content3': 'The key to success lies in understanding the specific needs of the mining sector and developing solutions that adapt to the unique operational conditions of each site. With more than 10 years of experience in the field, we have perfected our methodology to deliver tangible results.',
        'blog.post2.title': 'Advantages of Custom Software Development',
        'blog.post2.excerpt': 'Why choose custom solutions instead of generic software? We tell you the competitive advantages.',
        'blog.post2.content1': 'In a world where generic software seems to be the most accessible solution, many companies wonder why invest in custom development. The answer is simple: custom software adapts perfectly to your specific processes, while generic software forces your company to adapt to it.',
        'blog.post2.content2': 'At DigDev, we believe every business is unique. Our personalized approach allows us to create solutions that integrate seamlessly with your existing operations, scale according to your needs, and give you a real competitive advantage.',
        'blog.post2.content3': 'The main advantages include greater operational efficiency, better user experience, seamless integration with existing systems, and the ability to evolve along with your business. Our clients have experienced significant returns on investment when opting for custom solutions.',
        'blog.post3.title': 'Technological Trends That Will Mark 2024',
        'blog.post3.excerpt': 'We explore emerging technologies that are transforming the business digital landscape.',
        'blog.post3.content1': 'The technological landscape evolves at an accelerated pace, and 2024 promises to bring innovations that will transform the way companies operate. At DigDev, we are constantly researching and adopting these trends to offer cutting-edge solutions to our clients.',
        'blog.post3.content2': 'Among the most prominent trends are artificial intelligence applied to business processes, edge computing for real-time data processing, and low-code platforms that accelerate application development. We also see significant growth in advanced cybersecurity solutions and augmented reality technologies for training and maintenance.',
        'blog.post3.content3': 'Our team is prepared to integrate these emerging technologies into customized solutions that drive the digital transformation of your company. Staying at the technological forefront is not only a competitive advantage, but a necessity in today\'s business landscape.',
        'faq.title': 'Frequently Asked Questions',
        'faq.q1.text': 'What types of projects do you develop?',
        'faq.a1.1': 'We develop a wide variety of digital projects, including:',
        'faq.a1.2': '- Corporate websites and landing pages',
        'faq.a1.3': '- Progressive web applications (PWA)',
        'faq.a1.4': '- Native and hybrid mobile applications',
        'faq.a1.5': '- Business management systems (ERP, CRM)',
        'faq.a1.6': '- E-commerce platforms',
        'faq.a1.7': '- Custom solutions according to specific needs',
        'faq.q2.text': 'What is the average development time?',
        'faq.a2.1': 'Development time varies depending on the complexity of the project:',
        'faq.a2.2': '- Basic landing page: 1-2 weeks',
        'faq.a2.3': '- Corporate website: 3-6 weeks',
        'faq.a2.4': '- Web application: 4-12 weeks',
        'faq.a2.5': '- Mobile application: 6-16 weeks',
        'faq.a2.6': '- Complex systems: 12+ weeks',
        'faq.a2.7': 'We work with agile methodologies, delivering functional versions from the first weeks.',
        'faq.q3.text': 'Do you offer maintenance after development?',
        'faq.a3.1': 'Yes, we offer post-development maintenance plans that include:',
        'faq.a3.2': '- Security updates',
        'faq.a3.3': '- Priority technical support',
        'faq.a3.4': '- Improvements and new features',
        'faq.a3.5': '- Performance monitoring',
        'faq.a3.6': '- Regular information backup',
        'faq.a3.7': 'Our clients can choose between monthly, quarterly or annual plans according to their needs.',
        'faq.q4.text': 'Do you work with international companies?',
        'faq.a4.1': 'Yes, we work with clients from different parts of the world. Our team is prepared for:',
        'faq.a4.2': '- Communication in Spanish and English',
        'faq.a4.3': '- Adaptation to different time zones',
        'faq.a4.4': '- Knowledge of international regulations',
        'faq.a4.5': '- Experience in multicultural projects',
        'faq.a4.6': 'We use remote collaboration tools that allow us to work efficiently regardless of geographic location.',
        'faq.q5.text': 'How is the work process?',
        'faq.a5.1': 'Our process is divided into 5 main phases:',
        'faq.a5.2': '1. Discovery:',
        'faq.a5.3': 'We understand your needs and objectives.',
        'faq.a5.4': '2. Planning:',
        'faq.a5.5': 'We create a detailed plan with schedule and budget.',
        'faq.a5.6': '3. Design:',
        'faq.a5.7': 'We develop prototypes and interface designs.',
        'faq.a5.8': '4. Development:',
        'faq.a5.9': 'We implement the solution with agile methodologies.',
        'faq.a5.10': '5. Launch & Maintenance:',
        'faq.a5.11': 'We publish and provide continuous support.',
        'faq.a5.12': 'We maintain constant communication throughout the process with regular deliveries.',
        'contact.title': 'Contact',
        'contact.subtitle': 'Contact us and let\'s turn your idea into an effective digital solution. We are here to help you every step of the way.',
        'footer.tagline': 'Digital Developers - Transforming ideas into solutions',
        'footer.contact': 'Contact',
        'footer.follow': 'Follow Us',
        'footer.rights': 'All rights reserved'
    }
};

let currentLang = 'es';

// Función para cambiar idioma
function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Actualizar botón de idioma
    const langToggle = document.getElementById('langToggle');
    langToggle.innerHTML = `<i class="fas fa-globe"></i>&#160;${lang.toUpperCase()}`;
    
    // Guardar preferencia
    localStorage.setItem('preferredLanguage', lang);
}

// Sistema de modo claro/oscuro
function toggleDarkMode() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
}

// Menú móvil
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        
        // Actualizar clase activa
        document.querySelectorAll('.nav-links a').forEach(item => {
            item.classList.remove('active');
        });
        link.classList.add('active');
    });
});

// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Actualizar elemento activo del menú al hacer scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Event listeners para los botones de toggle
document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);
document.getElementById('langToggle').addEventListener('click', () => {
    changeLanguage(currentLang === 'es' ? 'en' : 'es');
});

// Funcionalidad para Blog Modals
function initBlogModals() {
    const blogCards = document.querySelectorAll('.blog-card');
    const blogModals = document.querySelectorAll('.blog-modal');
    const closeButtons = document.querySelectorAll('.blog-modal-close');
    
    // Abrir modal al hacer clic en tarjeta de blog
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
    
    // Cerrar modal al hacer clic en botón de cerrar
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.blog-modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Cerrar modal al hacer clic fuera del contenido
    blogModals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            blogModals.forEach(modal => {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }
    });
}

// Cargar preferencias guardadas
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const savedLang = localStorage.getItem('preferredLanguage');
    
    if (savedTheme === 'dark') {
        toggleDarkMode();
    }
    
    if (savedLang) {
        changeLanguage(savedLang);
    }
    
    // Inicializar FAQ
    initFAQ();
    
    // Inicializar progress bar
    initProgressBar();
    
    // Inicializar botón "volver arriba"
    initBackToTop();
    
    // Inicializar funcionalidad del logo
    initLogoFunctionality();
    
    // Inicializar modales de blog
    initBlogModals();
});

// Funcionalidad para FAQ
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.classList.contains('open');
            
            // Cerrar todas las respuestas
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('open');
            });
            
            // Remover clase active de todas las preguntas
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
            });
            
            // Abrir la respuesta clickeada si estaba cerrada
            if (!isOpen) {
                answer.classList.add('open');
                question.classList.add('active');
            }
        });
    });
}

// Progress bar al hacer scroll
function initProgressBar() {
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('progressBar').style.width = scrolled + '%';
    });
}

// Botón "volver arriba"
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Funcionalidad del logo para volver arriba
function initLogoFunctionality() {
    const logo = document.getElementById('logo');
    
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Actualizar clase activa del menú
        document.querySelectorAll('.nav-links a').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector('.nav-links a[href="#servicios"]').classList.add('active');
    });
}
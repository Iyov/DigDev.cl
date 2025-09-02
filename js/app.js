// Sistema de traducción
const translations = {
    'es': {
        'nav.home': 'Inicio',
        'nav.services': 'Servicios',
        'nav.about': 'Nosotros',
        'nav.contact': 'Contacto',
        'hero.title': 'Transformamos ideas en soluciones digitales',
        'hero.subtitle': 'En DigDev desarrollamos sistemas innovadores que resuelven problemas reales. Somos tu partner tecnológico para impulsar tu negocio en la era digital.',
        'hero.button': 'Comenzar proyecto',
        'services.title': 'Nuestros Servicios',
        'services.web.title': 'Desarrollo Web',
        'services.web.description': 'Creación de sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.',
        'services.mobile.title': 'Aplicaciones Móviles',
        'services.mobile.description': 'Desarrollamos apps nativas e híbridas para iOS y Android con interfaces intuitivas y atractivas.',
        'services.custom.title': 'Soluciones Personalizadas',
        'services.custom.description': 'Sistemas a medida que se adaptan a tus procesos específicos y necesidades únicas.',
        'about.title': '¿Quiénes Somos?',
        'about.text1': 'DigDev (Digital Developers) es una joven empresa de TI apasionada por crear soluciones tecnológicas que marcan la diferencia. Nuestro equipo está compuesto por desarrolladores talentosos y creativos que aman los desafíos.',
        'about.text2': 'Creemos que la tecnología debe servir para resolver problemas reales y mejorar la vida de las personas. Nos especializamos en entender las necesidades específicas de cada cliente y traducirlas en sistemas eficientes y escalables.',
        'about.text3': 'Nuestra misión es impulsar la transformación digital de negocios y organizaciones a través de desarrollo de software de calidad, interfaces intuitivas y experiencias digitales memorables.',
        'contact.title': '¿Listo para comenzar?',
        'contact.subtitle': 'Contáctanos y convirtamos tu idea en una solución digital efectiva. Estamos aquí para ayudarte en cada paso del proceso.',
        'footer.tagline': 'Digital Developers - Transformando ideas en soluciones',
        'footer.contact': 'Contacto',
        'footer.follow': 'Síguenos',
        'footer.rights': 'Todos los derechos reservados'
    },
    'en': {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.about': 'About Us',
        'nav.contact': 'Contact',
        'hero.title': 'We transform ideas into digital solutions',
        'hero.subtitle': 'At DigDev we develop innovative systems that solve real problems. We are your technology partner to boost your business in the digital age.',
        'hero.button': 'Start project',
        'services.title': 'Our Services',
        'services.web.title': 'Web Development',
        'services.web.description': 'Creation of modern, responsive and optimized websites to convert visitors into customers.',
        'services.mobile.title': 'Mobile Applications',
        'services.mobile.description': 'We develop native and hybrid apps for iOS and Android with intuitive and attractive interfaces.',
        'services.custom.title': 'Custom Solutions',
        'services.custom.description': 'Tailor-made systems that adapt to your specific processes and unique needs.',
        'about.title': 'Who We Are?',
        'about.text1': 'DigDev (Digital Developers) is a young IT company passionate about creating technological solutions that make a difference. Our team is made up of talented and creative developers who love challenges.',
        'about.text2': 'We believe that technology should serve to solve real problems and improve people\'s lives. We specialize in understanding the specific needs of each client and translating them into efficient and scalable systems.',
        'about.text3': 'Our mission is to drive the digital transformation of businesses and organizations through quality software development, intuitive interfaces and memorable digital experiences.',
        'contact.title': 'Ready to get started?',
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
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
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
});

// Traducciones
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
    
    // Inicializar FAQ
    initFAQ();
    
    // Inicializar progress bar
    initProgressBar();
    
    // Inicializar botón "volver arriba"
    initBackToTop();
    
    // Inicializar funcionalidad del logo
    initLogoFunctionality();
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
        document.querySelector('.nav-links a[href="#inicio"]').classList.add('active');
    });
}
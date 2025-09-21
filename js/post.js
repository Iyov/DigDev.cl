// Sistema de traducción
const translations = {
    'es': {
        'post.logo': 'DigDev.cl',
        'post.tagline': 'Digital Developers - Soluciones Tecnológicas',
        'post.title': '¡Nueva Web con Superpoderes! ?',
        'post.description': 'Descubre nuestra nueva página web con diseño responsive, modo oscuro y multidioma. Creamos soluciones digitales que transforman tu negocio.',
        'post.feature1': 'Responsive Design',
        'post.feature2': 'Modo Oscuro',
        'post.feature3': 'Multidioma',
        'post.feature4': 'Ultra Rápida',
        'post.qrtext': 'Escanea para visitar',
        'post.cta': 'Visitar DigDev.cl',
        'post.hashtags': '#DigDev #DigitalDevelopers #Tecnología'
    },
    'en': {
        'post.logo': 'DigDev.cl',
        'post.tagline': 'Digital Developers - Technology Solutions',
        'post.title': 'New Website with Superpowers! ?',
        'post.description': 'Discover our new website with responsive design, dark mode and multilingual support. We create digital solutions that transform your business.',
        'post.feature1': 'Responsive Design',
        'post.feature2': 'Dark Mode',
        'post.feature3': 'Multilingual',
        'post.feature4': 'Ultra Fast',
        'post.qrtext': 'Scan to visit',
        'post.cta': 'Visit DigDev.cl',
        'post.hashtags': '#DigDev #DigitalDevelopers #Technology'
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
    langToggle.innerHTML = `<i class="fas fa-globe"></i> ${lang.toUpperCase()}`;
    
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
});
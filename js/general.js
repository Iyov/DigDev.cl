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
});
# Guía de Contribución

## 🚀 Inicio Rápido

### Requisitos
- Node.js 16+
- npm 7+

### Instalación

```bash
# 1. Clonar repositorio
git clone https://github.com/tu-usuario/DigDev.cl.git
cd DigDev.cl

# 2. Instalar dependencias
npm install

# 3. Generar CSS
npm run build:css

# 4. Iniciar servidor local
python -m http.server 8000
# O: php -S localhost:8000
# O: npx http-server -p 8000
```

## 🛠️ Desarrollo

### Scripts Disponibles

```bash
npm run build:css    # Generar CSS de producción (minificado)
npm run watch:css    # Watch mode para desarrollo
```

### Modo Desarrollo

Activar logs de consola:

```javascript
// En js/index.js y sw.js
const DEV_MODE = true;
```

Iniciar watch mode:

```bash
npm run watch:css
```

### Modo Producción

Desactivar logs:

```javascript
// En js/index.js y sw.js
const DEV_MODE = false; // ⚠️ IMPORTANTE
```

Generar build:

```bash
npm run build:css
```

## 📦 Deployment

### Pre-Deployment

1. **Configurar producción**:
   - `DEV_MODE = false` en `js/index.js` y `sw.js`
   - Reemplazar `G-XXXXXXXXXX` con tu Google Analytics ID en `index.html`

2. **Generar assets**:
   ```bash
   npm run build:css
   ```

3. **Verificar archivos**:
   - `css/tailwind.min.css` generado (~17 KB)
   - No hay errores en consola

### Archivos a Subir

```
✅ index.html
✅ css/ (todos los archivos)
✅ js/ (todos los archivos)
✅ img/
✅ webfonts/
✅ sw.js
✅ manifest.json
✅ robots.txt
✅ sitemap.xml
✅ .htaccess
✅ 404.html
```

### Archivos a NO Subir

```
❌ node_modules/
❌ package-lock.json
❌ .env*
❌ .git/
❌ .vscode/
❌ *.log
```

### Post-Deployment

Verificar:
- [ ] Sitio carga sin errores
- [ ] No hay warnings en consola
- [ ] PWA instalable
- [ ] Service Worker activo
- [ ] Analytics funciona

## 🏗️ Estructura del Proyecto

```
DigDev.cl/
├── css/
│   ├── index.min.css          # CSS personalizado
│   ├── tailwind.min.css       # Tailwind compilado
│   └── tailwind-input.css     # Input de Tailwind
├── js/
│   └── index.js               # JavaScript principal
├── img/                       # Imágenes
├── webfonts/                  # Font Awesome
├── docs/
│   └── CHANGELOG.md           # Historial de cambios
├── .htaccess                  # Configuración Apache
├── .gitignore                 # Archivos a ignorar
├── .env.example               # Ejemplo de variables
├── package.json               # Dependencias
├── tailwind.config.js         # Config de Tailwind
├── config.js                  # Configuración del proyecto
├── sw.js                      # Service Worker
├── manifest.json              # PWA Manifest
├── index.html                 # Página principal
├── README.md                  # Documentación
├── CONTRIBUTING.md            # Esta guía
├── SECURITY.md                # Política de seguridad
└── LICENSE                    # Licencia MIT
```

## 🔧 Configuración

### Variables de Entorno

Copiar `.env.example` a `.env`:

```env
DEV_MODE=true
GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Tailwind CSS

Configuración en `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      // Personalizaciones
    }
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ]
}
```

## 🧪 Testing

### Verificación Local

```bash
# Lighthouse (Chrome DevTools)
# Objetivo: 90+ en todas las categorías

# Security Headers
https://securityheaders.com/

# PageSpeed Insights
https://pagespeed.web.dev/
```

## 📝 Commits

Usar mensajes descriptivos:

```bash
git commit -m "feat: agregar nueva funcionalidad"
git commit -m "fix: corregir bug en formulario"
git commit -m "docs: actualizar README"
git commit -m "style: mejorar estilos del header"
git commit -m "refactor: optimizar código JS"
```

## 🐛 Troubleshooting

### CSS no se aplica

```bash
npm run build:css
# Limpiar caché del navegador (Ctrl+Shift+Delete)
```

### Service Worker no actualiza

```javascript
// Incrementar versión en sw.js
const CACHE_VERSION = '2026-02-08_6';
```

### Tailwind no funciona

```bash
# Verificar que el archivo existe
ls -lh css/tailwind.min.css

# Regenerar
npm run build:css
```

## 📚 Recursos

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 📞 Contacto

**Email**: colivares@digdev.cl  
**WhatsApp**: +56 9 9989 6880

---

**Versión**: 2026-02-08_5

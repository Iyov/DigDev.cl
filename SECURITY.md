# Política de Seguridad

## 🔒 Seguridad en DigDev Solutions

En DigDev Solutions tomamos la seguridad muy en serio. Agradecemos a la comunidad de seguridad por ayudarnos a mantener nuestros sistemas seguros.

---

## 📋 Tabla de Contenidos

- [Versiones Soportadas](#versiones-soportadas)
- [Reportar una Vulnerabilidad](#reportar-una-vulnerabilidad)
- [Proceso de Divulgación](#proceso-de-divulgación)
- [Alcance](#alcance)
- [Medidas de Seguridad Implementadas](#medidas-de-seguridad-implementadas)
- [Mejores Prácticas](#mejores-prácticas)
- [Reconocimientos](#reconocimientos)

---

## 🛡️ Versiones Soportadas

Actualmente damos soporte de seguridad a las siguientes versiones del sitio web:

| Versión | Soportada          | Notas |
| ------- | ------------------ | ----- |
| 2026.x  | ✅ Sí              | Versión actual en producción |
| 2025.x  | ⚠️ Soporte limitado | Actualizaciones críticas solamente |
| < 2025  | ❌ No              | No soportada, actualizar recomendado |

---

## 🚨 Reportar una Vulnerabilidad

Si descubres una vulnerabilidad de seguridad en nuestro sitio web o sistemas, te pedimos que nos lo comuniques de manera responsable.

### Canales de Reporte

#### Email Seguro (Preferido)
📧 **colivares@digdev.cl**

Por favor incluye "SECURITY" en el asunto del email.

#### Security.txt
🔗 https://digdev.cl/.well-known/security.txt

Seguimos el estándar RFC 9116 para divulgación de seguridad.

### Información a Incluir

Para ayudarnos a entender y resolver el problema rápidamente, por favor incluye:

1. **Descripción detallada** de la vulnerabilidad
2. **Pasos para reproducir** el problema
3. **Impacto potencial** de la vulnerabilidad
4. **Tipo de vulnerabilidad** (XSS, CSRF, SQLi, etc.)
5. **Versión afectada** del sitio/sistema
6. **Prueba de concepto** (PoC) si es posible
7. **Capturas de pantalla** o videos si aplica
8. **Tu información de contacto** para seguimiento

### Ejemplo de Reporte

```
Asunto: SECURITY - XSS Reflejado en formulario de contacto

Descripción:
He encontrado una vulnerabilidad XSS reflejado en el formulario de contacto
de https://digdev.cl/#Contacto

Pasos para reproducir:
1. Navegar a https://digdev.cl/#Contacto
2. En el campo "Nombre", ingresar: <script>alert('XSS')</script>
3. Enviar el formulario
4. El script se ejecuta en el navegador

Impacto:
Un atacante podría robar cookies de sesión o ejecutar código malicioso
en el contexto del usuario.

Tipo: Cross-Site Scripting (XSS) Reflejado
Severidad: Media
Navegador: Chrome 120.0.6099.109

PoC adjunto: [screenshot.png]

Contacto: researcher@example.com
```

---

## 📝 Proceso de Divulgación

Seguimos un proceso de divulgación responsable coordinada:

### Timeline Esperado

| Fase | Tiempo | Descripción |
|------|--------|-------------|
| **Confirmación inicial** | 24-48 horas | Confirmamos recepción del reporte |
| **Evaluación** | 3-5 días | Evaluamos y reproducimos la vulnerabilidad |
| **Desarrollo de parche** | 7-30 días | Desarrollamos y probamos la solución |
| **Despliegue** | 1-3 días | Implementamos el parche en producción |
| **Divulgación pública** | 30-90 días | Publicamos detalles (coordinado contigo) |

### Nuestros Compromisos

✅ **Responderemos** a tu reporte dentro de 48 horas  
✅ **Te mantendremos informado** del progreso de la resolución  
✅ **Reconoceremos** tu contribución (si lo deseas)  
✅ **No tomaremos acciones legales** contra investigadores que actúen de buena fe  
✅ **Trabajaremos contigo** para entender y resolver el problema

### Tus Compromisos

Como investigador de seguridad, te pedimos que:

❌ **No divulgues** la vulnerabilidad públicamente antes de que sea parcheada  
❌ **No explotes** la vulnerabilidad más allá de lo necesario para demostrarla  
❌ **No accedas** a datos de otros usuarios  
❌ **No realices** ataques de denegación de servicio (DoS)  
❌ **No uses** técnicas de ingeniería social o phishing  
✅ **Actúes** de buena fe en todo momento

---

## 🎯 Alcance

### En Alcance

Las siguientes áreas están dentro del alcance de nuestro programa de seguridad:

✅ **Sitio web principal**: https://digdev.cl  
✅ **Subdominios**: *.digdev.cl  
✅ **Aplicaciones web** públicas  
✅ **APIs** públicas  
✅ **Formularios** de contacto y envío de datos

### Fuera de Alcance

Las siguientes áreas están fuera del alcance:

❌ **Ataques de fuerza bruta** o rate limiting  
❌ **Ataques de denegación de servicio** (DoS/DDoS)  
❌ **Ingeniería social** contra empleados  
❌ **Phishing** o pretexting  
❌ **Vulnerabilidades** en servicios de terceros  
❌ **Problemas de SPF/DKIM/DMARC** sin impacto demostrable  
❌ **Clickjacking** en páginas sin información sensible  
❌ **Ausencia de headers** de seguridad sin explotación demostrable

### Tipos de Vulnerabilidades de Interés

Estamos particularmente interesados en:

🔴 **Críticas**
- Ejecución remota de código (RCE)
- Inyección SQL (SQLi)
- Autenticación rota
- Exposición de datos sensibles

🟠 **Altas**
- Cross-Site Scripting (XSS) almacenado
- Cross-Site Request Forgery (CSRF)
- Escalación de privilegios
- Inyección de comandos

🟡 **Medias**
- XSS reflejado
- Divulgación de información
- Configuraciones incorrectas de seguridad
- Validación de entrada inadecuada

🟢 **Bajas**
- XSS basado en DOM
- Problemas de headers de seguridad
- Problemas de cookies
- Información de versiones expuesta

---

## 🛠️ Medidas de Seguridad Implementadas

### Seguridad de Transporte

- ✅ **HTTPS obligatorio** en todo el sitio
- ✅ **HSTS** (HTTP Strict Transport Security)
- ✅ **TLS 1.2+** únicamente
- ✅ **Certificados SSL/TLS** válidos y actualizados

### Headers de Seguridad

```apache
# Content Security Policy
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-*' cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com cdn.tailwindcss.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'

# X-Frame-Options
X-Frame-Options: SAMEORIGIN

# X-Content-Type-Options
X-Content-Type-Options: nosniff

# X-XSS-Protection
X-XSS-Protection: 1; mode=block

# Referrer-Policy
Referrer-Policy: strict-origin-when-cross-origin

# Permissions-Policy
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Validación y Sanitización

- ✅ Validación de entrada en todos los formularios
- ✅ Sanitización de datos antes de procesamiento
- ✅ Escape de salida para prevenir XSS
- ✅ Protección CSRF en formularios

### Autenticación y Autorización

- ✅ Contraseñas hasheadas con algoritmos seguros
- ✅ Sesiones seguras con tokens aleatorios
- ✅ Timeout de sesión apropiado
- ✅ Protección contra fuerza bruta

### Monitoreo y Logging

- ✅ Logs de acceso y errores
- ✅ Monitoreo de actividad sospechosa
- ✅ Alertas automáticas de seguridad
- ✅ Auditorías regulares de seguridad

---

## 📚 Mejores Prácticas

### Para Desarrolladores

Si contribuyes al código, por favor sigue estas prácticas:

#### Validación de Entrada
```javascript
// ❌ Malo
const userInput = req.body.name;
db.query(`SELECT * FROM users WHERE name = '${userInput}'`);

// ✅ Bueno
const userInput = sanitize(req.body.name);
db.query('SELECT * FROM users WHERE name = ?', [userInput]);
```

#### Escape de Salida
```javascript
// ❌ Malo
element.innerHTML = userInput;

// ✅ Bueno
element.textContent = userInput;
// o
element.innerHTML = DOMPurify.sanitize(userInput);
```

#### Manejo de Secretos
```javascript
// ❌ Malo
const apiKey = "sk_live_123456789";

// ✅ Bueno
const apiKey = process.env.API_KEY;
```

### Para Usuarios

- 🔐 Usa contraseñas fuertes y únicas
- 🔄 Mantén tu navegador actualizado
- 🚫 No compartas tus credenciales
- ✅ Verifica la URL antes de ingresar datos
- 📧 Reporta actividad sospechosa

---

## 🏆 Reconocimientos

Agradecemos a los siguientes investigadores de seguridad por sus contribuciones responsables:

### Hall of Fame

<!-- Será actualizado cuando recibamos reportes -->

*Actualmente no hay reportes de seguridad confirmados.*

Si reportas una vulnerabilidad válida y deseas ser reconocido, con gusto te agregaremos aquí (con tu permiso).

---

## 📞 Contacto de Seguridad

### Equipo de Seguridad

**Email**: colivares@digdev.cl  
**Asunto**: SECURITY - [Descripción breve]

### Información Adicional

- **PGP Key**: Disponible bajo solicitud
- **Security.txt**: https://digdev.cl/.well-known/security.txt
- **Tiempo de respuesta**: 24-48 horas
- **Idiomas**: Español, Inglés

---

## 📖 Referencias

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [CWE Top 25](https://cwe.mitre.org/top25/)
- [RFC 9116 - security.txt](https://www.rfc-editor.org/rfc/rfc9116.html)
- [Responsible Disclosure](https://en.wikipedia.org/wiki/Responsible_disclosure)

---

## 📅 Actualizaciones

**Última actualización**: 8 de febrero de 2026  
**Versión**: 1.0  
**Próxima revisión**: Mayo 2026

Esta política de seguridad se revisa y actualiza regularmente para reflejar las mejores prácticas actuales.

---

<div align="center">

**Gracias por ayudarnos a mantener DigDev Solutions seguro** 🔒

© 2026 DigDev Solutions. Todos los derechos reservados.

</div>

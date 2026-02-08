# Política de Seguridad

## 🔒 Versiones Soportadas

| Versión | Soportada |
| ------- | --------- |
| 2026.x  | ✅ Sí |
| < 2026  | ❌ No |

## 🚨 Reportar Vulnerabilidades

### Contacto

📧 **Email**: colivares@digdev.cl (Asunto: SECURITY)  
🔗 **Security.txt**: https://digdev.cl/.well-known/security.txt

### Información a Incluir

1. Descripción detallada de la vulnerabilidad
2. Pasos para reproducir
3. Impacto potencial
4. Tipo de vulnerabilidad (XSS, CSRF, etc.)
5. Versión afectada
6. Prueba de concepto (si es posible)

### Timeline Esperado

| Fase | Tiempo |
|------|--------|
| Confirmación | 24-48 horas |
| Evaluación | 3-5 días |
| Desarrollo de parche | 7-30 días |
| Despliegue | 1-3 días |

## 🛡️ Medidas de Seguridad

### Headers Activos (6/6)

- Content Security Policy (CSP Score: A)
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy

### Características

- ✅ HTTPS obligatorio
- ✅ HSTS habilitado
- ✅ CSP sin unsafe-inline
- ✅ Validación de formularios
- ✅ Sanitización de datos
- ✅ 0 vulnerabilidades conocidas

## 📊 Métricas

| Métrica | Valor |
|---------|-------|
| Headers de Seguridad | 6/6 ✅ |
| CSP Score | A ✅ |
| Vulnerabilidades | 0 ✅ |
| SSL/TLS | A+ ✅ |

## 📝 Compromisos

**Nuestros**:
- ✅ Respuesta en 48 horas
- ✅ Actualizaciones de progreso
- ✅ Reconocimiento (si lo deseas)
- ✅ Sin acciones legales contra investigadores de buena fe

**Tuyos**:
- ❌ No divulgar públicamente antes del parche
- ❌ No explotar más allá de lo necesario
- ❌ No acceder a datos de otros usuarios
- ✅ Actuar de buena fe

## 🔗 Referencias

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [RFC 9116 - security.txt](https://www.rfc-editor.org/rfc/rfc9116.html)

---

**Última actualización**: 8 de febrero de 2026  
**Versión**: 2.0

© 2026 DigDev Solutions

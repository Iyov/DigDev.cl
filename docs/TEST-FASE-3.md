# 🧪 Guía de Pruebas - Fase 3

**Versión**: 2026-02-08_2  
**Fecha**: 8 de Febrero de 2026

---

## 📋 Checklist de Pruebas

### 1. Sistema de Notificaciones

#### Test 1.1: Notificación de Éxito
**Pasos**:
1. Abrir el sitio web
2. Cambiar el idioma (ES ↔ EN)
3. **Resultado esperado**: Notificación verde con mensaje "Idioma cambiado"

#### Test 1.2: Notificación de Información
**Pasos**:
1. Hacer clic en el botón de tema (sol/luna)
2. **Resultado esperado**: Notificación azul con mensaje "Modo claro/oscuro activado"

#### Test 1.3: Cierre Manual
**Pasos**:
1. Generar cualquier notificación
2. Hacer clic en la X de cierre
3. **Resultado esperado**: Notificación se cierra con animación suave

#### Test 1.4: Cierre Automático
**Pasos**:
1. Generar cualquier notificación
2. Esperar 3 segundos
3. **Resultado esperado**: Notificación se cierra automáticamente

---

### 2. Estados de Carga

#### Test 2.1: Loading al Cambiar Idioma
**Pasos**:
1. Hacer clic en el selector de idioma
2. Seleccionar un idioma diferente
3. **Resultado esperado**: 
   - Overlay oscuro con spinner
   - Mensaje "Cambiando idioma..."
   - Desaparece después de ~500ms

#### Test 2.2: Loading al Abrir Blog
**Pasos**:
1. Hacer clic en cualquier artículo del blog
2. **Resultado esperado**:
   - Overlay con spinner
   - Mensaje "Cargando artículo..."
   - Modal se abre después de ~300ms

---

### 3. Accesibilidad

#### Test 3.1: Navegación por Teclado
**Pasos**:
1. Usar solo el teclado (Tab, Shift+Tab, Enter)
2. Navegar por todos los elementos interactivos
3. **Resultado esperado**:
   - Foco visible en todos los elementos (outline azul 2px)
   - Orden lógico de tabulación
   - Todos los elementos accesibles

#### Test 3.2: Skip Link
**Pasos**:
1. Recargar la página
2. Presionar Tab una vez
3. **Resultado esperado**:
   - Aparece botón "Saltar al contenido principal"
   - Fondo azul (#1193d4)
   - Al hacer clic, salta al contenido

#### Test 3.3: Tecla ESC
**Pasos**:
1. Abrir el modal de blog
2. Presionar ESC
3. **Resultado esperado**: Modal se cierra

**Pasos alternos**:
1. Abrir menú móvil
2. Presionar ESC
3. **Resultado esperado**: Menú se cierra

#### Test 3.4: ARIA Labels
**Pasos**:
1. Inspeccionar elementos con DevTools
2. Verificar botones, menús, modal
3. **Resultado esperado**:
   - Todos los botones tienen aria-label
   - Menús tienen role="menu"
   - Modal tiene role="dialog" y aria-modal="true"

---

### 4. Navegación Móvil

#### Test 4.1: Animación de Apertura
**Pasos**:
1. Reducir ventana a tamaño móvil (<768px)
2. Hacer clic en el botón de menú (☰)
3. **Resultado esperado**:
   - Menú se desliza hacia abajo suavemente
   - Icono cambia de ☰ a ✕
   - Animación de 0.3s

#### Test 4.2: Cierre al Hacer Clic en Enlace
**Pasos**:
1. Abrir menú móvil
2. Hacer clic en cualquier enlace
3. **Resultado esperado**: Menú se cierra automáticamente

#### Test 4.3: Cierre al Hacer Clic Fuera
**Pasos**:
1. Abrir menú móvil
2. Hacer clic fuera del menú
3. **Resultado esperado**: Menú se cierra

---

### 5. Feedback Visual

#### Test 5.1: Hover en Blog Posts
**Pasos**:
1. Pasar el mouse sobre un artículo del blog
2. **Resultado esperado**:
   - Elemento se eleva 2px (translateY(-2px))
   - Sombra más pronunciada
   - Transición suave de 0.3s

#### Test 5.2: Hover en FAQ
**Pasos**:
1. Pasar el mouse sobre una pregunta del FAQ
2. **Resultado esperado**:
   - Elemento se eleva 2px
   - Sombra más pronunciada
   - Transición suave

#### Test 5.3: Hover en Botones
**Pasos**:
1. Pasar el mouse sobre cualquier botón
2. **Resultado esperado**:
   - Botón se eleva 1px
   - Transición suave

---

### 6. Contraste y Colores

#### Test 6.1: Modo Claro
**Pasos**:
1. Activar modo claro
2. Verificar contraste de textos
3. **Resultado esperado**:
   - Ratio de contraste ≥ 4.5:1
   - Textos legibles
   - Colores consistentes

#### Test 6.2: Modo Oscuro
**Pasos**:
1. Activar modo oscuro
2. Verificar contraste de textos
3. **Resultado esperado**:
   - Ratio de contraste ≥ 4.5:1
   - Textos legibles
   - Sombras con color primary

---

### 7. Responsive

#### Test 7.1: Notificaciones en Móvil
**Pasos**:
1. Reducir ventana a <640px
2. Generar una notificación
3. **Resultado esperado**:
   - Notificación aparece en la parte inferior
   - Ocupa todo el ancho (con margen)
   - Animación desde abajo

#### Test 7.2: Loading en Móvil
**Pasos**:
1. En vista móvil, abrir un blog post
2. **Resultado esperado**:
   - Loading overlay cubre toda la pantalla
   - Spinner centrado
   - Funciona correctamente

---

## 🔧 Herramientas de Prueba

### Navegadores
- ✅ Chrome 90+
- ✅ Edge 90+
- ✅ Firefox 90+
- ✅ Safari 14+

### Dispositivos
- ✅ Desktop (1920x1080)
- ✅ Tablet (768x1024)
- ✅ Móvil (375x667)

### Herramientas de Accesibilidad
- ✅ Chrome DevTools > Lighthouse
- ✅ WAVE Extension
- ✅ axe DevTools
- ✅ NVDA (lector de pantalla)
- ✅ VoiceOver (Mac)

---

## 📊 Resultados Esperados

### Lighthouse Scores
- **Performance**: 90-95
- **Accessibility**: 95-98
- **Best Practices**: 95-100
- **SEO**: 95-100
- **PWA**: 100

### WAVE
- **Errors**: 0-2
- **Contrast Errors**: 0
- **Alerts**: <5

### Manual Testing
- **Keyboard Navigation**: 100% funcional
- **Screen Reader**: 100% anunciado correctamente
- **Responsive**: Funciona en todos los tamaños
- **Animations**: Suaves y sin lag

---

## 🐛 Reporte de Bugs

Si encuentras algún problema, documéntalo aquí:

### Bug Template
```
**Título**: [Descripción breve]
**Severidad**: [Crítico/Alto/Medio/Bajo]
**Pasos para reproducir**:
1. 
2. 
3. 

**Resultado esperado**: 
**Resultado actual**: 
**Navegador**: 
**Dispositivo**: 
**Screenshot**: [Si aplica]
```

---

## ✅ Checklist Final

- [ ] Todas las notificaciones funcionan
- [ ] Loading states funcionan
- [ ] Navegación por teclado completa
- [ ] Skip link funcional
- [ ] ESC cierra modales y menús
- [ ] ARIA labels correctos
- [ ] Animaciones suaves
- [ ] Hover states funcionan
- [ ] Contraste adecuado
- [ ] Responsive en todos los tamaños
- [ ] Sin errores en consola
- [ ] Lighthouse 90+ en todas las métricas
- [ ] WAVE 0-2 errores

---

## 📞 Contacto

Si necesitas ayuda con las pruebas:

**Email**: colivares@digdev.cl  
**WhatsApp**: +56 9 9989 6880

---

<div align="center">

**¡Pruebas de Fase 3! 🧪**

Verifica que todas las mejoras funcionen correctamente

© 2026 DigDev Solutions

</div>

# SEO, Search Console y Medicion

## Estado implementado

- Home y `post.html` quedan como URLs indexables prioritarias.
- `old.html`, `presentacion.html`, `Propuesta*.html`, `webmail.html` y `google-site-verification.html` quedan fuera de indexacion.
- `robots.txt` y `sitemap.xml` ya estan alineados con esa estrategia.
- El tracking ahora usa GTM como canal principal y deja GA4 directo solo como fallback para evitar duplicidad de mediciones.

## Google Search Console

1. Verifica el dominio `digdev.cl` idealmente con propiedad de dominio por DNS.
2. Si usaras verificacion por HTML, crea el archivo exacto que entregue Google en la raiz del sitio.
3. Si usaras meta tag, agregalo solo en la home, dentro de `index.html`.
4. Envia `https://digdev.cl/sitemap.xml`.
5. Solicita indexacion de:
   - `https://digdev.cl/`
   - `https://digdev.cl/post.html`

## Google Tag Manager

1. Manten un contenedor web unico: `GTM-5B3B68K7`.
2. Configura dentro de GTM la etiqueta de Google tag o GA4 Configuration usando el measurement ID activo.
3. Usa el evento `page_view` del `dataLayer` como pageview principal.
4. Revisa que no exista una segunda etiqueta de GA4 disparando pageviews duplicados.
5. Publica variables para `page_title`, `page_location`, `page_path` y `ga_measurement_id`.

## Google Analytics 4

1. Usa una sola propiedad GA4 para el sitio principal.
2. Si GTM ya dispara GA4, no agregues un segundo snippet manual de `gtag.js`.
3. Marca como conversiones los eventos de contacto relevantes:
   - `form_submit`
   - `contact`
   - `whatsapp_click`
4. Crea audiencias separadas para trafico organico y visitas de alto engagement.

## Validacion recomendada

1. Search Console: inspeccion de URL para la home y `post.html`.
2. Rich Results Test: validar JSON-LD de la home y del post.
3. GA4 DebugView o GTM Preview: confirmar un solo `page_view` por carga.
4. Lighthouse SEO: comprobar canonical, robots y structured data.

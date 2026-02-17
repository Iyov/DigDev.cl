// GTM & GA loader — exposes `initGTM(options)` and `dataLayerPush(eventName, payload)`
// Usage: <script src="js/gtm-loader.min.js" defer data-gtm-id="GTM-XXXXX"></script>
(function () {
  'use strict';

  // Idempotent initializer
  function initGTM(options = {}) {
    if (window.__GTM_LOADER_INITIALIZED__) return;

    const scriptTag = document.currentScript || document.querySelector('script[src$="gtm-loader.js"]');

    const dataset = (scriptTag && scriptTag.dataset) || {};

    const gtmId = options.gtmId || dataset.gtmId || (window.CONFIG && window.CONFIG.gtmId) || options.containerId || 'GTM-5B3B68K7';
    const gaId = options.gaId || dataset.gaId || (window.CONFIG && window.CONFIG.gaId) || null;
    const anonymizeIp = typeof options.anonymizeIp !== 'undefined' ? options.anonymizeIp : true;
    const sendPageView = typeof options.sendPageView !== 'undefined' ? options.sendPageView : false;

    // Ensure dataLayer exists
    window.dataLayer = window.dataLayer || [];

    // Standard GTM boot push
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    // Insert GTM script
    if (gtmId) {
      const gtmScriptId = 'gtm-loader-script-' + gtmId.replace(/[^a-z0-9_-]/gi, '');
      if (!document.getElementById(gtmScriptId)) {
        const j = document.createElement('script');
        j.id = gtmScriptId;
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(gtmId);
        const f = document.getElementsByTagName('script')[0];
        f.parentNode.insertBefore(j, f);
      }
    }

    // Optionally insert GA4 (gtag) if measurement ID provided
    if (gaId) {
      // load gtag.js
      const gtagScriptId = 'gtag-js-' + gaId.replace(/[^a-z0-9_-]/gi, '');
      if (!document.getElementById(gtagScriptId)) {
        const s = document.createElement('script');
        s.id = gtagScriptId;
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(gaId);
        document.head.appendChild(s);
      }

      // gtag helper
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);} // eslint-disable-line no-inner-declarations
      window.gtag = window.gtag || gtag;

      // init
      window.gtag('js', new Date());
      window.gtag('config', gaId, {
        anonymize_ip: anonymizeIp,
        allow_ad_personalization_signals: false,
        send_page_view: sendPageView
      });
    }

    // Helper to push events into dataLayer
    window.dataLayerPush = function(eventName, payload) {
      window.dataLayer = window.dataLayer || [];
      const entry = Object.assign({ event: eventName }, payload || {});
      window.dataLayer.push(entry);
      return entry;
    };

    window.__GTM_LOADER_INITIALIZED__ = true;
    return true;
  }

  // Expose
  window.initGTM = initGTM;

  // Auto-init when script tag provides data attributes
  try {
    const current = document.currentScript || document.querySelector('script[src$="gtm-loader.js"]');
    if (current && (current.dataset && (current.dataset.gtmId || current.dataset.gaId))) {
      // defer until DOM ready if needed
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
          initGTM();
        });
      } else {
        initGTM();
      }
    }
  } catch (e) {
    // silent
  }

})();

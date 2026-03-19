// Google Tracking Loader — Unified GTM & GA4 implementation
// Exposes `initGoogleTracking(options)` and `dataLayerPush(eventName, payload)`
// Usage: <script src="js/google-tracking.min.js" defer data-gtm-id="GTM-XXXXX" data-ga-id="G-XXXXX"></script>
(function () {
  'use strict';

  function getPageContext() {
    return {
      page_title: document.title || '',
      page_location: window.location.href,
      page_path: window.location.pathname + window.location.search
    };
  }

  // Idempotent initializer
  function initGoogleTracking(options = {}) {
    if (window.__GOOGLE_TRACKING_INITIALIZED__) return;

    const scriptTag = document.currentScript || document.querySelector('script[src*="google-tracking"]');
    const dataset = (scriptTag && scriptTag.dataset) || {};

    // Get GTM ID from options, data attributes, or config
    const gtmId = options.gtmId || dataset.gtmId || (window.CONFIG && window.CONFIG.gtmId) || options.containerId || 'GTM-5B3B68K7';
    
    // Get GA4 ID from options, data attributes, or config
    const gaId = options.gaId || dataset.gaId || (window.CONFIG && window.CONFIG.gaId) || 'G-227Z6EMS7R';
    
    const anonymizeIp = typeof options.anonymizeIp !== 'undefined' ? options.anonymizeIp : true;
    const sendPageView = typeof options.sendPageView !== 'undefined' ? options.sendPageView : true;
    const pageContext = getPageContext();

    // Ensure dataLayer exists
    window.dataLayer = window.dataLayer || [];

    // ========================================
    // Google Tag Manager (GTM) Implementation
    // ========================================
    if (gtmId) {
      // Standard GTM boot push
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

      // Insert GTM script
      const gtmScriptId = 'google-tracking-gtm-' + gtmId.replace(/[^a-z0-9_-]/gi, '');
      if (!document.getElementById(gtmScriptId)) {
        const j = document.createElement('script');
        j.id = gtmScriptId;
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(gtmId);
        const f = document.getElementsByTagName('script')[0];
        f.parentNode.insertBefore(j, f);
      }
    }

    // ========================================
    // Google Analytics 4 (GA4) Implementation
    // ========================================
    if (gaId) {
      // Load gtag.js
      const gtagScriptId = 'google-tracking-gtag-' + gaId.replace(/[^a-z0-9_-]/gi, '');
      if (!document.getElementById(gtagScriptId)) {
        const s = document.createElement('script');
        s.id = gtagScriptId;
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(gaId);
        document.head.appendChild(s);
      }

      // gtag helper function
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);} // eslint-disable-line no-inner-declarations
      window.gtag = window.gtag || gtag;

      // Initialize GA4
      window.gtag('js', new Date());
      window.gtag('config', gaId, {
        anonymize_ip: anonymizeIp,
        allow_ad_personalization_signals: false,
        send_page_view: false,
        page_title: pageContext.page_title,
        page_location: pageContext.page_location,
        page_path: pageContext.page_path
      });

      if (sendPageView) {
        window.gtag('event', 'page_view', pageContext);
      }
    }

    // ========================================
    // Helper Functions
    // ========================================
    
    // Helper to push events into dataLayer
    window.dataLayerPush = function(eventName, payload) {
      window.dataLayer = window.dataLayer || [];
      const entry = Object.assign({ event: eventName }, payload || {});
      window.dataLayer.push(entry);
      return entry;
    };

    window.__GOOGLE_TRACKING_INITIALIZED__ = true;
    window.__GOOGLE_TRACKING_CONFIG__ = {
      gtmId: gtmId,
      gaId: gaId,
      anonymizeIp: anonymizeIp,
      sendPageView: sendPageView,
      pageContext: pageContext
    };
    return true;
  }

  // Expose initialization function
  window.initGoogleTracking = initGoogleTracking;
  window.initGTM = window.initGTM || initGoogleTracking;

  // Auto-init when script tag provides data attributes
  try {
    const current = document.currentScript || document.querySelector('script[src*="google-tracking"]');
    if (current && current.dataset && (current.dataset.gtmId || current.dataset.gaId)) {
      // defer until DOM ready if needed
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
          initGoogleTracking();
        });
      } else {
        initGoogleTracking();
      }
    }
  } catch (e) {
    // silent
  }

})();

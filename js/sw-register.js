// Service Worker Registration for DigDev Solutions
// Version: 2.0.0

(function() {
  'use strict';
  
  if (!('serviceWorker' in navigator)) {
    return;
  }
  
  const SW_VERSION = '2026-02-18_1';
  const UPDATE_INTERVAL = 3600000; // 1 hour
  
  let refreshing = false;
  
  function registerServiceWorker() {
    navigator.serviceWorker.register('/sw.js?v=' + SW_VERSION)
      .then(registration => {
        console.log('✅ Service Worker registered:', registration.scope);
        
        setInterval(() => {
          registration.update();
        }, UPDATE_INTERVAL);
        
        registration.addEventListener('updatefound', handleUpdate);
      })
      .catch(error => {
        console.log('❌ Service Worker registration failed:', error);
      });
    
    navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);
  }
  
  function handleUpdate() {
    const registration = navigator.serviceWorker;
    const newWorker = registration.installing;
    
    if (!newWorker) return;
    
    newWorker.addEventListener('statechange', () => {
      if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
        if (confirm('Nueva version disponible. ¿Actualizar ahora?')) {
          newWorker.postMessage({ type: 'SKIP_WAITING' });
          window.location.reload();
        }
      }
    });
  }
  
  function handleControllerChange() {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  }
  
  window.addEventListener('load', registerServiceWorker);
})();

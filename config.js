// DigDev Solutions - Configuration
// This file should be included before other scripts

const CONFIG = {
  // Environment
  isDevelopment: false, // Set to true for development
  
  // Google Analytics
  gaId: 'G-XXXXXXXXXX', // Replace with your actual GA4 Measurement ID
  
  // API Configuration (if needed)
  api: {
    baseUrl: 'https://api.digdev.cl',
    timeout: 10000
  },
  
  // Feature Flags
  features: {
    analytics: true,
    serviceWorker: true,
    notifications: true,
    offlineMode: true
  },
  
  // Debug Settings
  debug: {
    enabled: false, // Set to true to enable console logs
    logLevel: 'error' // 'error', 'warn', 'info', 'debug'
  },
  
  // Cache Settings
  cache: {
    version: '2026-02-08_5',
    name: 'digdev-v1.0.0'
  },
  
  // Contact Information
  contact: {
    email: 'colivares@digdev.cl',
    phone: '+56999896880',
    whatsapp: '+56999896880'
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}

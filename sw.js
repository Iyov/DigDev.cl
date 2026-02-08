// Service Worker para DigDev Solutions PWA
// Versión: 1.0.0

// Development mode flag (set to false for production)
const DEV_MODE = false;

// Development console logger
const devLog = (...args) => {
  if (DEV_MODE) {
    console.log(...args);
  }
};

const CACHE_NAME = 'digdev-v1.0.0';
const CACHE_VERSION = '2026-02-08_4';

// Recursos críticos para cachear
const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/css/index.min.css',
  '/css/font-awesome_6.5.1_all.min.css',
  '/js/index.js',
  '/img/DigDev_logo.png',
  '/img/DigDev_logo_200.png',
  '/img/DigDev_logo_100.png',
  '/img/favicon.png',
  '/manifest.json'
];

// Recursos secundarios (se cachean bajo demanda)
const SECONDARY_ASSETS = [
  '/post.html',
  '/presentacion.html',
  '/Propuesta.html',
  '/css/post.css',
  '/css/presentacion.css',
  '/css/propuesta.css',
  '/js/post.js',
  '/js/presentacion.js',
  '/js/propuesta.js'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  devLog('[SW] Instalando Service Worker v' + CACHE_VERSION);
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        devLog('[SW] Cacheando recursos críticos');
        return cache.addAll(CRITICAL_ASSETS);
      })
      .then(() => {
        devLog('[SW] Recursos críticos cacheados exitosamente');
        return self.skipWaiting(); // Activar inmediatamente
      })
      .catch(error => {
        console.error('[SW] Error al cachear recursos:', error);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  devLog('[SW] Activando Service Worker v' + CACHE_VERSION);
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        // Eliminar cachés antiguos
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => {
              devLog('[SW] Eliminando caché antiguo:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        devLog('[SW] Service Worker activado');
        return self.clients.claim(); // Tomar control inmediatamente
      })
  );
});

// Estrategia de caché: Network First con fallback a Cache
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Solo cachear requests del mismo origen
  if (url.origin !== location.origin) {
    // Para recursos externos (CDN, Google Fonts, etc.)
    event.respondWith(
      fetch(request)
        .catch(() => {
          // Si falla, intentar desde caché
          return caches.match(request);
        })
    );
    return;
  }
  
  // Estrategia para recursos locales
  event.respondWith(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Intentar obtener desde la red primero
        return fetch(request)
          .then(response => {
            // Si la respuesta es válida, cachearla
            if (response && response.status === 200) {
              cache.put(request, response.clone());
            }
            return response;
          })
          .catch(() => {
            // Si falla la red, usar caché
            return cache.match(request)
              .then(cachedResponse => {
                if (cachedResponse) {
                  devLog('[SW] Sirviendo desde caché:', request.url);
                  return cachedResponse;
                }
                
                // Si no está en caché y es una navegación, mostrar página offline
                if (request.mode === 'navigate') {
                  return cache.match('/index.html');
                }
                
                // Para otros recursos, retornar error
                return new Response('Recurso no disponible offline', {
                  status: 503,
                  statusText: 'Service Unavailable',
                  headers: new Headers({
                    'Content-Type': 'text/plain'
                  })
                });
              });
          });
      })
  );
});

// Manejo de mensajes desde el cliente
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => cache.addAll(event.data.urls))
    );
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys()
        .then(cacheNames => Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        ))
    );
  }
});

// Sincronización en segundo plano (para futuras funcionalidades)
self.addEventListener('sync', event => {
  devLog('[SW] Sincronización en segundo plano:', event.tag);
  
  if (event.tag === 'sync-data') {
    event.waitUntil(
      // Aquí se pueden agregar tareas de sincronización
      Promise.resolve()
    );
  }
});

// Notificaciones push (para futuras funcionalidades)
self.addEventListener('push', event => {
  devLog('[SW] Push recibido');
  
  const options = {
    body: event.data ? event.data.text() : 'Nueva actualización disponible',
    icon: '/img/DigDev_logo_200.png',
    badge: '/img/DigDev_logo_100.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver más',
        icon: '/img/DigDev_logo_100.png'
      },
      {
        action: 'close',
        title: 'Cerrar',
        icon: '/img/DigDev_logo_100.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('DigDev Solutions', options)
  );
});

// Manejo de clicks en notificaciones
self.addEventListener('notificationclick', event => {
  devLog('[SW] Click en notificación:', event.action);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

devLog('[SW] Service Worker cargado - v' + CACHE_VERSION);

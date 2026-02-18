// Service Worker para DigDev Solutions PWA
// Version: 2.0.0 - Enhanced Performance

const DEV_MODE = false;

const devLog = (...args) => {
  if (DEV_MODE) {
    console.log(...args);
  }
};

const CACHE_VERSION = '2026-02-18_1';
const STATIC_CACHE = `digdev-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `digdev-dynamic-${CACHE_VERSION}`;
const IMAGE_CACHE = `digdev-images-${CACHE_VERSION}`;

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/index.min.css',
  '/css/tailwind.min.css',
  '/css/font-awesome_6.5.1_all.min.css',
  '/js/index.min.js',
  '/js/google-tracking.min.js',
  '/js/sw-register.min.js',
  '/img/DigDev_logo.png',
  '/img/DigDev_logo_200.png',
  '/img/DigDev_logo_100.png',
  '/img/favicon.png',
  '/img/optimized/hero-bg-1920.webp',
  '/img/optimized/caso-exito-1-800.webp',
  '/img/optimized/caso-exito-2-800.webp',
  '/img/optimized/caso-exito-3-800.webp',
  '/img/optimized/blog-automatizacion-800.webp',
  '/img/optimized/blog-logistica-800.webp',
  '/img/optimized/blog-futuro-800.webp',
  '/img/optimized/testimonial-francisca-200.webp',
  '/img/optimized/testimonial-david-200.webp',
  '/img/optimized/testimonial-emilia-200.webp',
  '/manifest.json',
  '/offline.html'
];

const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
};

const ROUTE_CONFIGS = [
  {
    match: /\.(?:css|js|woff2?|ttf|eot)$/,
    strategy: CACHE_STRATEGIES.CACHE_FIRST,
    cacheName: STATIC_CACHE,
    maxAge: 365 * 24 * 60 * 60 * 1000
  },
  {
    match: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
    strategy: CACHE_STRATEGIES.CACHE_FIRST,
    cacheName: IMAGE_CACHE,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    maxEntries: 100
  },
  {
    match: /\.html$/,
    strategy: CACHE_STRATEGIES.NETWORK_FIRST,
    cacheName: DYNAMIC_CACHE,
    maxAge: 1 * 60 * 60 * 1000
  },
  {
    match: /\/(?:api|data)\//,
    strategy: CACHE_STRATEGIES.STALE_WHILE_REVALIDATE,
    cacheName: DYNAMIC_CACHE,
    maxAge: 5 * 60 * 1000
  }
];

self.addEventListener('install', event => {
  devLog('[SW] Installing Service Worker v' + CACHE_VERSION);
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        devLog('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS.map(url => new Request(url, { cache: 'reload' })));
      })
      .then(() => self.skipWaiting())
      .catch(error => console.error('[SW] Install failed:', error))
  );
});

self.addEventListener('activate', event => {
  devLog('[SW] Activating Service Worker v' + CACHE_VERSION);
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => {
              return !cacheName.includes(CACHE_VERSION) && 
                     !cacheName.includes('digdev-static-') &&
                     !cacheName.includes('digdev-dynamic-') &&
                     !cacheName.includes('digdev-images-');
            })
            .map(cacheName => {
              devLog('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        devLog('[SW] Service Worker activated');
        return self.clients.claim();
      })
  );
});

async function cacheFirst(request, cacheName, maxAge) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    const cacheDate = cachedResponse.headers.get('sw-cache-date');
    if (cacheDate && maxAge) {
      const age = Date.now() - parseInt(cacheDate);
      if (age < maxAge) {
        return cachedResponse;
      }
    } else {
      return cachedResponse;
    }
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      const headers = new Headers(networkResponse.headers);
      headers.set('sw-cache-date', Date.now().toString());
      const cachedResponse = new Response(await networkResponse.clone().arrayBuffer(), {
        status: networkResponse.status,
        statusText: networkResponse.statusText,
        headers
      });
      cache.put(request, cachedResponse);
    }
    return networkResponse;
  } catch (error) {
    return cachedResponse || new Response('Offline', { status: 503 });
  }
}

async function networkFirst(request, cacheName, maxAge) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      const headers = new Headers(networkResponse.headers);
      headers.set('sw-cache-date', Date.now().toString());
      const cachedResponse = new Response(await networkResponse.clone().arrayBuffer(), {
        status: networkResponse.status,
        statusText: networkResponse.statusText,
        headers
      });
      cache.put(request, cachedResponse);
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    if (request.mode === 'navigate') {
      return caches.match('/index.html');
    }
    
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

async function staleWhileRevalidate(request, cacheName, maxAge) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      const headers = new Headers(networkResponse.headers);
      headers.set('sw-cache-date', Date.now().toString());
      const cachedResponse = new Response(networkResponse.clone().body, {
        status: networkResponse.status,
        statusText: networkResponse.statusText,
        headers
      });
      cache.put(request, cachedResponse);
    }
    return networkResponse;
  }).catch(() => cachedResponse);
  
  return cachedResponse || fetchPromise;
}

async function cleanupCache(cacheName, maxEntries) {
  if (!maxEntries) return;
  
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  
  if (keys.length > maxEntries) {
    const deleteCount = keys.length - maxEntries;
    for (let i = 0; i < deleteCount; i++) {
      await cache.delete(keys[i]);
    }
    devLog(`[SW] Cleaned up ${deleteCount} entries from ${cacheName}`);
  }
}

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  if (request.method !== 'GET') return;
  
  if (url.origin !== location.origin) {
    if (url.hostname === 'fonts.googleapis.com' || 
        url.hostname === 'fonts.gstatic.com') {
      event.respondWith(
        cacheFirst(request, STATIC_CACHE, 365 * 24 * 60 * 60 * 1000)
      );
      return;
    }
    
    if (url.hostname === 'lh3.googleusercontent.com' ||
        url.hostname === 'images.unsplash.com') {
      event.respondWith(
        cacheFirst(request, IMAGE_CACHE, 30 * 24 * 60 * 60 * 1000)
          .then(response => {
            cleanupCache(IMAGE_CACHE, 100);
            return response;
          })
      );
      return;
    }
    
    event.respondWith(
      fetch(request).catch(() => caches.match(request))
    );
    return;
  }
  
  for (const config of ROUTE_CONFIGS) {
    if (config.match.test(url.pathname)) {
      switch (config.strategy) {
        case CACHE_STRATEGIES.CACHE_FIRST:
          event.respondWith(cacheFirst(request, config.cacheName, config.maxAge));
          break;
        case CACHE_STRATEGIES.NETWORK_FIRST:
          event.respondWith(networkFirst(request, config.cacheName, config.maxAge));
          break;
        case CACHE_STRATEGIES.STALE_WHILE_REVALIDATE:
          event.respondWith(staleWhileRevalidate(request, config.cacheName, config.maxAge));
          break;
      }
      return;
    }
  }
  
  event.respondWith(networkFirst(request, DYNAMIC_CACHE, 1 * 60 * 60 * 1000));
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(DYNAMIC_CACHE)
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
  
  if (event.data && event.data.type === 'GET_CACHE_STATS') {
    event.waitUntil(
      Promise.all([
        caches.open(STATIC_CACHE).then(c => c.keys()),
        caches.open(DYNAMIC_CACHE).then(c => c.keys()),
        caches.open(IMAGE_CACHE).then(c => c.keys())
      ]).then(([staticKeys, dynamicKeys, imageKeys]) => {
        event.ports[0].postMessage({
          static: staticKeys.length,
          dynamic: dynamicKeys.length,
          images: imageKeys.length
        });
      })
    );
  }
});

self.addEventListener('sync', event => {
  devLog('[SW] Background sync:', event.tag);
  
  if (event.tag === 'sync-data') {
    event.waitUntil(Promise.resolve());
  }
});

self.addEventListener('push', event => {
  devLog('[SW] Push received');
  
  const options = {
    body: event.data ? event.data.text() : 'Nueva actualizacion disponible',
    icon: '/img/DigDev_logo_200.png',
    badge: '/img/DigDev_logo_100.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      { action: 'explore', title: 'Ver mas', icon: '/img/DigDev_logo_100.png' },
      { action: 'close', title: 'Cerrar', icon: '/img/DigDev_logo_100.png' }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('DigDev Solutions', options)
  );
});

self.addEventListener('notificationclick', event => {
  devLog('[SW] Notification click:', event.action);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(clients.openWindow('/'));
  }
});

devLog('[SW] Service Worker loaded - v' + CACHE_VERSION);

const CACHE_NAME = 'iamai-awanbyru-v5';
const urlsToCache = [
  '/',
  '/index.html',
  '/index.css',
  'https://cdn.jsdelivr.net/npm/tailwindcss@3.4.4/dist/tailwind.min.css',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://awanbyru.com/favicon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    // We only want to cache GET requests.
    if (event.request.method !== 'GET') {
        return;
    }
  
    event.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(event.request).then(response => {
                // Return from cache if found
                const fetchPromise = fetch(event.request).then(networkResponse => {
                    // Check if we received a valid response to cache it
                    if (networkResponse && networkResponse.status === 200 && !event.request.url.startsWith('chrome-extension://')) {
                        // Don't cache demo images from picsum
                        if (!event.request.url.includes('picsum.photos')) {
                            cache.put(event.request, networkResponse.clone());
                        }
                    }
                    return networkResponse;
                });

                // Return cached response immediately if available, and fetch in background (stale-while-revalidate)
                // Or, for cache-first, just return response || fetchPromise;
                return response || fetchPromise;
            });
        })
    );
});
const CACHE_NAME = 'iamai-awanbyru-v6';
const urlsToCache = [
  '/',
  '/index.html',
  '/index.tsx',
  '/index.css',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
  'https://aistudiocdn.com/react@^19.2.0',
  'https://aistudiocdn.com/react-dom@^19.2.0',
  'https://aistudiocdn.com/react-router-dom@^6.24.1',
  'https://aistudiocdn.com/@google/genai@^1.24.0',
  '/manifest.json',
  '/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Failed to cache during install:', error);
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

                // Stale-while-revalidate strategy: Return cached response immediately if available, 
                // and fetch in background to update the cache for next time.
                return response || fetchPromise;
            });
        })
    );
});

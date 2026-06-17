const CACHE_NAME = 'flagforge-v1';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/db.js',
  './js/platforms_db.js',
  './js/symbols_db.js',
  './manifest.json',
  './icons/favicon.svg',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request).then(fetchRes => {
        return caches.open(CACHE_NAME).then(cache => {
          if (event.request.url.startsWith('http') && event.request.method === 'GET') {
            cache.put(event.request.url, fetchRes.clone());
          }
          return fetchRes;
        });
      });
    })
  );
});

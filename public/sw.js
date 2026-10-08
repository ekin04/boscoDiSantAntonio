// Self-unregistering service worker
// Automatically unregisters any previous service worker registered on this domain/port
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.registration
      .unregister()
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => {
        // Any connected clients will now be free of the obsolete service worker
        clients.forEach((client) => {
          client.navigate(client.url);
        });
      })
  );
});

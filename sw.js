// Service worker minimal agar bisa dipasang sebagai aplikasi (tanpa cache data keuangan)
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});

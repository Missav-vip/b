// Service Worker untuk cache halaman
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('my-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/welcome.html',
                '/upload.html',
                '/home.html',
                '/style.css',
                'pemandangan-alam.jpg' // Tambahkan gambar di cache jika diperlukan
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

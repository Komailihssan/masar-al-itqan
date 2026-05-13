const CACHE_NAME = 'masar-al-itqan-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
  // أضف هنا أي ملفات أخرى مثل الصور أو المكتبات الخارجية
];

// تثبيت ملفات الكاش
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// جلب البيانات من الكاش عند فقدان الاتصال
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

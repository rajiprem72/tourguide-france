self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("tourguide-cache").then((cache) => {
      return cache.addAll(["./", "./index.html", "./manifest.json","./places.html"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("tourguide-cache-v2").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./places.html",
        "./manifest.json",
        "./icons/icon-192.png",
        "./icons/icon-512.png"
      ]);
    })
  );
  console.log("Service Worker Installed - version 2");
});

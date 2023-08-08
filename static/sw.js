importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js",
);

const HTML_CACHE = "html";
const JS_CACHE = "javascript";
const STYLE_CACHE = "stylesheets";
const IMAGE_CACHE = "images";
const FONT_CACHE = "fonts";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === "document",
  new workbox.strategies.NetworkFirst({
    cacheName: HTML_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === "script",
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: JS_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 15,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === "style",
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: STYLE_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 15,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === "image",
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: IMAGE_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  ({ url }) => url.pathname.startsWith("/img/"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "questionImages",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 6000,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === "font",
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: FONT_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 15,
      }),
    ],
  }),
);

addEventListener("install", (event) => {
  event.waitUntil(registerCache());
});

async function registerCache() {
  const cache = await caches.open("FITST");
  const urlsToCache = [
    "/",
    "/favicon.ico",
    "/categoria/c/0",
    "/categoria/c/1",
    "/categoria/c/2",
  ];
  console.info("Service worker caching all");
  await cache.addAll(urlsToCache);
}

addEventListener("fetch", (event) => {
  event.respondWith(handleCache(event));
});

async function handleCache(networkEvent) {
  try {
    console.info("Service Worker Trying Fetch from Network");
    return await fetch(networkEvent.request);
  } catch (error) {
    console.info(`${error} | Service Worker using cache`);
    const cache = await caches.open("FIRST");
    return cache.match(networkEvent.request);
  }
}

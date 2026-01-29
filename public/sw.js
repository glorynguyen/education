// Service Worker for Dalat Trip Timeline
const CACHE_NAME = 'dalat-timeline-v1';
const STATIC_ASSETS = [
    './',
    './dalat.html',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap'
];

// Firebase SDK URLs to cache
const FIREBASE_ASSETS = [
    'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/10.7.1/firebase-database-compat.js',
    'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching static assets');
                return cache.addAll([...STATIC_ASSETS, ...FIREBASE_ASSETS]);
            })
            .then(() => self.skipWaiting())
            .catch((err) => console.log('[SW] Cache failed:', err))
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => name !== CACHE_NAME)
                        .map((name) => {
                            console.log('[SW] Deleting old cache:', name);
                            return caches.delete(name);
                        })
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') return;

    // Skip Firebase Realtime Database requests (need real-time data)
    if (url.hostname.includes('firebaseio.com') ||
        url.hostname.includes('firebasedatabase.app')) {
        return;
    }

    // For Firebase Auth requests, try network first
    if (url.hostname.includes('googleapis.com') ||
        url.hostname.includes('accounts.google.com')) {
        event.respondWith(
            fetch(request).catch(() => caches.match(request))
        );
        return;
    }

    // Stale-while-revalidate strategy for other requests
    event.respondWith(
        caches.match(request)
            .then((cachedResponse) => {
                // Return cached response immediately
                const fetchPromise = fetch(request)
                    .then((networkResponse) => {
                        // Update cache with new response
                        if (networkResponse && networkResponse.status === 200) {
                            const responseClone = networkResponse.clone();
                            caches.open(CACHE_NAME)
                                .then((cache) => cache.put(request, responseClone));
                        }
                        return networkResponse;
                    })
                    .catch(() => {
                        // If network fails and we have cache, that's fine
                        // If no cache either, return offline fallback
                        if (!cachedResponse) {
                            return new Response(
                                '<html><body style="font-family:sans-serif;text-align:center;padding:50px;"><h1>Offline</h1><p>Vui lòng kiểm tra kết nối mạng.</p></body></html>',
                                { headers: { 'Content-Type': 'text/html' } }
                            );
                        }
                    });

                return cachedResponse || fetchPromise;
            })
    );
});

// Listen for messages from the main thread
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    // Cache timeline data for offline viewing
    if (event.data && event.data.type === 'CACHE_TIMELINE') {
        const timelineData = event.data.payload;
        caches.open(CACHE_NAME)
            .then((cache) => {
                const response = new Response(JSON.stringify(timelineData));
                cache.put('offline-timeline-data', response);
                console.log('[SW] Timeline data cached for offline');
            });
    }
});

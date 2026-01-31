const CACHE_NAME = 'dayoung-status-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// 설치 - 즉시 활성화
self.addEventListener('install', event => {
  console.log('[SW] 설치 중...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] 캐시 저장 중...');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[SW] 캐시 저장 완료');
        return self.skipWaiting(); // 즉시 활성화
      })
      .catch(err => {
        console.error('[SW] 캐시 설치 오류:', err);
      })
  );
});

// 활성화 - 즉시 클라이언트 제어
self.addEventListener('activate', event => {
  console.log('[SW] 활성화 중...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] 오래된 캐시 삭제:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('[SW] 활성화 완료');
      return self.clients.claim(); // 즉시 제어권 획득
    })
  );
});

// 요청 처리
self.addEventListener('fetch', event => {
  // API 요청은 항상 네트워크에서 가져오기 (Network First)
  if (event.request.url.includes('workers.dev')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          console.log('[SW] API 응답:', event.request.url);
          return response;
        })
        .catch(err => {
          console.log('[SW] API 오류, 캐시 시도:', err);
          return caches.match(event.request);
        })
    );
    return;
  }

  // 정적 파일은 캐시 우선 (Cache First)
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('[SW] 캐시에서 제공:', event.request.url);
          return response;
        }
        console.log('[SW] 네트워크에서 가져옴:', event.request.url);
        return fetch(event.request);
      })
      .catch(err => {
        console.log('[SW] 오류 발생, index.html 제공:', err);
        return caches.match('./index.html');
      })
  );
});

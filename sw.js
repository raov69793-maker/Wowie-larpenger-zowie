self.addEventListener('install', (event) => {
  console.log('Service Worker установлен');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker активен');
});

// Слушатель входящих PUSH-уведомлений
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.text() : 'Новое сообщение!';
  event.waitUntil(
    self.registration.showNotification('P2P Chat', {
      body: data,
      icon: 'https://via.placeholder.com/192'
    })
  );
});

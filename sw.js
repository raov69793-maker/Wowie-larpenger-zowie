importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBJsk9oUrKLMV0L7tgyxTzMZ-WgRwVgYDA",
  authDomain: "larpessenger.firebaseapp.com",
  projectId: "larpessenger",
  storageBucket: "larpessenger.firebasestorage.app",
  messagingSenderId: "25247732078",
  appId: "1:25247732078:web:cf9fca7a55f452ba1b317f"
});

const messaging = firebase.messaging();

// Фоновая обработка входящего пуша (когда приложение ЗАКРЫТО)
messaging.onBackgroundMessage((payload) => {
  console.log('Получено фоновое пуш-уведомление:', payload);

  const notificationTitle = payload.notification?.title || 'Larpessenger';
  const notificationOptions = {
    body: payload.notification?.body || 'У вас новое сообщение!',
    icon: 'https://via.placeholder.com/192'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
                              

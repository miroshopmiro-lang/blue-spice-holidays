import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register the service worker with immediate update checking and automatic page reload on controller change
const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    updateSW(true); // force activate new SW
  },
  onOfflineReady() {
    console.info('[BlueSpice SW] App is ready to work offline.');
  },
  onRegisterError(error) {
    console.error('[BlueSpice SW] Registration failed:', error);
  },
});

// Auto-reload open tabs when a new service worker takes over control
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });

  // Check for updates every 30 seconds & when tab regains focus
  setInterval(() => {
    updateSW();
  }, 30000);

  window.addEventListener('focus', () => {
    updateSW();
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

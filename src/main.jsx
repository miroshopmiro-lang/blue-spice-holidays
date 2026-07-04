import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register the service worker.
// onNeedRefresh fires when a new SW has installed and is waiting.
// onOfflineReady fires when the app is fully cached for offline use.
const updateSW = registerSW({
  // A new SW installed → skip waiting is already set in workbox config,
  // so the SW will activate itself. We then force a full page reload so
  // the user instantly gets the latest assets — zero stale-content risk.
  onNeedRefresh() {
    updateSW(true); // true = force reload immediately
  },

  onOfflineReady() {
    console.info('[BlueSPice SW] App is ready to work offline.');
  },

  onRegisterError(error) {
    console.error('[BlueSPice SW] Registration failed:', error);
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

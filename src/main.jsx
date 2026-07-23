import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// This site no longer ships a service worker (see vite.config.js for why —
// neither reference site, keralatourism.org or blacktomato.com, uses one).
// This call still has one job: find any service worker a past build left
// registered in a visitor's browser and let its kill switch run — it
// unregisters itself, clears its caches, and reloads the tab on its own.
// Once that has rolled out to returning visitors, this call (and the
// virtual:pwa-register import) can be deleted entirely.
registerSW({ immediate: true });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // 'autoUpdate' → new SW skips waiting and claims clients immediately.
      // Combined with the reload listener in main.jsx, this ensures users
      // always see fresh content without ever having to manually clear cache.
      registerType: 'autoUpdate',

      // Inject the SW registration script into index.html automatically.
      injectRegister: 'auto',

      // Dev mode: enable SW in development so you can test caching locally.
      devOptions: {
        enabled: true,
        type: 'module',
      },

      workbox: {
        // Take control of all open tabs as soon as the new SW activates.
        skipWaiting: true,
        clientsClaim: true,

        // Cache name includes a version → when you bump it, all old caches
        // are purged on the next SW activation (manual cache busting lever).
        cacheId: 'bluespice-v5',

        // Precache all Vite-built assets (they have content hashes in their
        // filenames, so they are always fresh and safe to serve from cache).
        globPatterns: ['**/*.{js,css,html,ico,svg,woff2}'],

        // Runtime caching: strategies for assets NOT in the precache manifest.
        runtimeCaching: [
          {
            // Navigation requests (HTML pages): always try the network first.
            // Falls back to cache only if offline. This guarantees code/content
            // changes are always visible immediately on a live connection.
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'bluespice-pages',
              networkTimeoutSeconds: 5,
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // Large media (WebM videos, WebP images) in /images/.
            // Serve from cache instantly after first load; expire after 30 days.
            urlPattern: /\/images\/.+\.(webm|webp|mp4|png|jpg|jpeg|gif)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'bluespice-media',
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
          {
            // Google Fonts stylesheets: stale-while-revalidate keeps them fast.
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'bluespice-google-fonts-stylesheets',
            },
          },
          {
            // Google Fonts files (woff2 etc): cache for 1 year, they never change.
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'bluespice-google-fonts-webfonts',
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
            },
          },
        ],
      },

      // Web app manifest — required for PWA installability.
      manifest: {
        name: 'Blue Spice Holidays',
        short_name: 'Blue Spice',
        description: 'Curators of Luxury & Slow Travel since 2008',
        theme_color: '#0B2D6B',
        background_color: '#F7F5F0',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '48x48',
            type: 'image/x-icon',
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer-motion';
            }
            if (id.includes('gsap')) {
              return 'vendor-gsap';
            }
            return 'vendor-core';
          }
        },
      },
    },
    chunkSizeWarningLimit: 800,
  },
});

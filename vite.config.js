import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // Retiring the PWA/service-worker layer entirely. Neither reference site
    // (keralatourism.org, blacktomato.com) runs one — a static marketing site
    // doesn't need offline support, and the SW was the direct cause of two
    // production bugs: updates not showing for hours (stale precache) and the
    // hero video stalling (SW rejected the CDN's 206 Range responses and
    // re-proxied all 28MB of video every loop instead of ever caching it).
    // 30-day HTTP cache headers in public/_headers now do the caching job
    // without a fetch-intercepting middle layer.
    //
    // `selfDestroying: true` is the officially supported full-removal path:
    // it ships a kill-switch SW that unregisters itself, wipes every cache it
    // created, and reloads any open tab — required because visitors (incl.
    // the client, seconds ago) have a real SW actively registered right now;
    // simply deleting this config would leave those installs running
    // indefinitely with no reliable way to clean them up.
    // `manifest: false` is required alongside selfDestroying — the plugin
    // otherwise still generates manifest.webmanifest and injects a second
    // <link rel="manifest"> into index.html even with no manifest config
    // supplied. The site's own hand-authored public/site.webmanifest (already
    // linked in index.html) covers this, so the plugin's copy is redundant.
    //
    // The plugin's generated dist/sw.js has two bugs verified by directly
    // registering it against a browser holding pre-seeded caches: its
    // 'activate' handler never calls event.waitUntil() (so the browser can
    // tear the worker down before its promise chain settles), and its final
    // .then() doesn't return the inner caches.keys().then(...) promise (so
    // even a waitUntil wrapper wouldn't await the actual deletions). Result:
    // unregister reliably lands (fixes both real bugs — an unregistered SW
    // stops intercepting fetches at all) but caches.delete() doesn't (0/2 runs
    // actually cleared, leaving harmless but needless disk usage). Fixed by
    // scripts/patch-self-destroying-sw.js, run after this build (see
    // package.json's "build" script) — a separate process, not a plugin hook,
    // specifically to avoid racing the plugin's own async dist/sw.js write.
    VitePWA({ selfDestroying: true, manifest: false }),
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

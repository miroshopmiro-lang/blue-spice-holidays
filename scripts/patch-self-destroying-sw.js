// Overwrites dist/sw.js with a correct, fully-awaited self-destroying service
// worker after vite-plugin-pwa's build step has finished writing its own.
//
// Why this exists: vite-plugin-pwa's `selfDestroying: true` output is the
// officially supported way to fully retire a previously-shipped PWA (it ships
// a kill-switch SW that unregisters itself, wipes its caches, and reloads any
// open tab), but its generated code has two bugs, verified directly by
// registering the built file against a browser holding pre-seeded caches:
//
//   1. Its 'activate' handler never calls event.waitUntil(), so the browser
//      is free to terminate the worker as soon as the handler function
//      returns, without waiting for the unregister/cleanup promise chain.
//   2. Its final .then() doesn't `return` the inner
//      self.caches.keys().then(...) promise, so even wrapping the outer
//      chain in waitUntil() wouldn't await the actual cache deletions — the
//      outer chain resolves the moment caches.keys() is *called*, not when
//      caches.delete() finishes.
//
// Result measured across repeated runs: unregister() reliably lands
// (registrations -> 0 every time) but caches.delete() does not (0/2 runs
// actually cleared anything). Unregistering is what fixes both real bugs
// this migration exists for — an unregistered SW stops intercepting fetches
// entirely — so this wasn't a functional regression, but leftover caches are
// needless disk usage on every visitor's device.
//
// First fix attempt (waitUntil + returned promise chain, unregister still
// first) was ALSO verified not to work: polling registration.installing's
// statechange showed installed -> activating -> redundant within ~1ms of
// calling self.registration.unregister(), and caches were still unwiped after
// a 6s poll. Calling unregister() on your own worker appears to end its
// execution guarantee in this browser regardless of a pending waitUntil.
// Reordering to unregister LAST (clean caches first, unregister only once
// that's done) fixed it — re-running the same repeated register-and-poll
// test against this order showed reliable cache deletion.
//
// This runs as a separate `node` process after `vite build` (see
// package.json), not as a Vite plugin hook, specifically to avoid racing
// vite-plugin-pwa's own async write of dist/sw.js within the same build.
import { existsSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const swPath = resolve(__dirname, '..', 'dist', 'sw.js');

if (!existsSync(swPath)) {
  console.log('[patch-self-destroying-sw] dist/sw.js not found — skipping (selfDestroying may be off).');
  process.exit(0);
}

const correctKillSwitch = `self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Clean up and reload BEFORE unregistering — calling
      // registration.unregister() first was tested and found to end this
      // worker's execution guarantee almost immediately (installing ->
      // activating -> redundant within ~1ms), even under waitUntil, leaving
      // the cache deletion below unreached. Unregister must be the last call.
      const cacheNames = await self.caches.keys();
      await Promise.all(cacheNames.map((name) => self.caches.delete(name)));
      // Best-effort reload of any open tab. This worker intentionally does not
      // clients.claim(), so navigate() is a no-op that rejects on uncontrolled
      // clients — swallow that so it can't surface as an unhandled rejection.
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        if ('navigate' in client) {
          Promise.resolve(client.navigate(client.url)).catch(() => {});
        }
      }
      await self.registration.unregister();
    })()
  );
});
`;

writeFileSync(swPath, correctKillSwitch);
console.log('[patch-self-destroying-sw] dist/sw.js replaced with a correct, fully-awaited kill switch.');

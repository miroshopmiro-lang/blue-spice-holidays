// vite.config.js
import { defineConfig } from "file:///G:/Blue%20Spice%20Holidays%20Website/Blue%20spice%20holiday%20rebuild/node_modules/vite/dist/node/index.js";
import react from "file:///G:/Blue%20Spice%20Holidays%20Website/Blue%20spice%20holiday%20rebuild/node_modules/@vitejs/plugin-react/dist/index.js";
import { VitePWA } from "file:///G:/Blue%20Spice%20Holidays%20Website/Blue%20spice%20holiday%20rebuild/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
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
    VitePWA({ selfDestroying: true, manifest: false })
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash]-${Date.now()}.js`,
        chunkFileNames: `assets/[name]-[hash]-${Date.now()}.js`,
        assetFileNames: `assets/[name]-[hash]-${Date.now()}[extname]`,
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom") || id.includes("react-router-dom")) {
              return "vendor-react";
            }
            if (id.includes("framer-motion")) {
              return "vendor-framer-motion";
            }
            if (id.includes("gsap")) {
              return "vendor-gsap";
            }
            return "vendor-core";
          }
        }
      }
    },
    chunkSizeWarningLimit: 800
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxCbHVlIFNwaWNlIEhvbGlkYXlzIFdlYnNpdGVcXFxcQmx1ZSBzcGljZSBob2xpZGF5IHJlYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXEJsdWUgU3BpY2UgSG9saWRheXMgV2Vic2l0ZVxcXFxCbHVlIHNwaWNlIGhvbGlkYXkgcmVidWlsZFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRzovQmx1ZSUyMFNwaWNlJTIwSG9saWRheXMlMjBXZWJzaXRlL0JsdWUlMjBzcGljZSUyMGhvbGlkYXklMjByZWJ1aWxkL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgLy8gUmV0aXJpbmcgdGhlIFBXQS9zZXJ2aWNlLXdvcmtlciBsYXllciBlbnRpcmVseS4gTmVpdGhlciByZWZlcmVuY2Ugc2l0ZVxyXG4gICAgLy8gKGtlcmFsYXRvdXJpc20ub3JnLCBibGFja3RvbWF0by5jb20pIHJ1bnMgb25lIFx1MjAxNCBhIHN0YXRpYyBtYXJrZXRpbmcgc2l0ZVxyXG4gICAgLy8gZG9lc24ndCBuZWVkIG9mZmxpbmUgc3VwcG9ydCwgYW5kIHRoZSBTVyB3YXMgdGhlIGRpcmVjdCBjYXVzZSBvZiB0d29cclxuICAgIC8vIHByb2R1Y3Rpb24gYnVnczogdXBkYXRlcyBub3Qgc2hvd2luZyBmb3IgaG91cnMgKHN0YWxlIHByZWNhY2hlKSBhbmQgdGhlXHJcbiAgICAvLyBoZXJvIHZpZGVvIHN0YWxsaW5nIChTVyByZWplY3RlZCB0aGUgQ0ROJ3MgMjA2IFJhbmdlIHJlc3BvbnNlcyBhbmRcclxuICAgIC8vIHJlLXByb3hpZWQgYWxsIDI4TUIgb2YgdmlkZW8gZXZlcnkgbG9vcCBpbnN0ZWFkIG9mIGV2ZXIgY2FjaGluZyBpdCkuXHJcbiAgICAvLyAzMC1kYXkgSFRUUCBjYWNoZSBoZWFkZXJzIGluIHB1YmxpYy9faGVhZGVycyBub3cgZG8gdGhlIGNhY2hpbmcgam9iXHJcbiAgICAvLyB3aXRob3V0IGEgZmV0Y2gtaW50ZXJjZXB0aW5nIG1pZGRsZSBsYXllci5cclxuICAgIC8vXHJcbiAgICAvLyBgc2VsZkRlc3Ryb3lpbmc6IHRydWVgIGlzIHRoZSBvZmZpY2lhbGx5IHN1cHBvcnRlZCBmdWxsLXJlbW92YWwgcGF0aDpcclxuICAgIC8vIGl0IHNoaXBzIGEga2lsbC1zd2l0Y2ggU1cgdGhhdCB1bnJlZ2lzdGVycyBpdHNlbGYsIHdpcGVzIGV2ZXJ5IGNhY2hlIGl0XHJcbiAgICAvLyBjcmVhdGVkLCBhbmQgcmVsb2FkcyBhbnkgb3BlbiB0YWIgXHUyMDE0IHJlcXVpcmVkIGJlY2F1c2UgdmlzaXRvcnMgKGluY2wuXHJcbiAgICAvLyB0aGUgY2xpZW50LCBzZWNvbmRzIGFnbykgaGF2ZSBhIHJlYWwgU1cgYWN0aXZlbHkgcmVnaXN0ZXJlZCByaWdodCBub3c7XHJcbiAgICAvLyBzaW1wbHkgZGVsZXRpbmcgdGhpcyBjb25maWcgd291bGQgbGVhdmUgdGhvc2UgaW5zdGFsbHMgcnVubmluZ1xyXG4gICAgLy8gaW5kZWZpbml0ZWx5IHdpdGggbm8gcmVsaWFibGUgd2F5IHRvIGNsZWFuIHRoZW0gdXAuXHJcbiAgICAvLyBgbWFuaWZlc3Q6IGZhbHNlYCBpcyByZXF1aXJlZCBhbG9uZ3NpZGUgc2VsZkRlc3Ryb3lpbmcgXHUyMDE0IHRoZSBwbHVnaW5cclxuICAgIC8vIG90aGVyd2lzZSBzdGlsbCBnZW5lcmF0ZXMgbWFuaWZlc3Qud2VibWFuaWZlc3QgYW5kIGluamVjdHMgYSBzZWNvbmRcclxuICAgIC8vIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCI+IGludG8gaW5kZXguaHRtbCBldmVuIHdpdGggbm8gbWFuaWZlc3QgY29uZmlnXHJcbiAgICAvLyBzdXBwbGllZC4gVGhlIHNpdGUncyBvd24gaGFuZC1hdXRob3JlZCBwdWJsaWMvc2l0ZS53ZWJtYW5pZmVzdCAoYWxyZWFkeVxyXG4gICAgLy8gbGlua2VkIGluIGluZGV4Lmh0bWwpIGNvdmVycyB0aGlzLCBzbyB0aGUgcGx1Z2luJ3MgY29weSBpcyByZWR1bmRhbnQuXHJcbiAgICAvL1xyXG4gICAgLy8gVGhlIHBsdWdpbidzIGdlbmVyYXRlZCBkaXN0L3N3LmpzIGhhcyB0d28gYnVncyB2ZXJpZmllZCBieSBkaXJlY3RseVxyXG4gICAgLy8gcmVnaXN0ZXJpbmcgaXQgYWdhaW5zdCBhIGJyb3dzZXIgaG9sZGluZyBwcmUtc2VlZGVkIGNhY2hlczogaXRzXHJcbiAgICAvLyAnYWN0aXZhdGUnIGhhbmRsZXIgbmV2ZXIgY2FsbHMgZXZlbnQud2FpdFVudGlsKCkgKHNvIHRoZSBicm93c2VyIGNhblxyXG4gICAgLy8gdGVhciB0aGUgd29ya2VyIGRvd24gYmVmb3JlIGl0cyBwcm9taXNlIGNoYWluIHNldHRsZXMpLCBhbmQgaXRzIGZpbmFsXHJcbiAgICAvLyAudGhlbigpIGRvZXNuJ3QgcmV0dXJuIHRoZSBpbm5lciBjYWNoZXMua2V5cygpLnRoZW4oLi4uKSBwcm9taXNlIChzb1xyXG4gICAgLy8gZXZlbiBhIHdhaXRVbnRpbCB3cmFwcGVyIHdvdWxkbid0IGF3YWl0IHRoZSBhY3R1YWwgZGVsZXRpb25zKS4gUmVzdWx0OlxyXG4gICAgLy8gdW5yZWdpc3RlciByZWxpYWJseSBsYW5kcyAoZml4ZXMgYm90aCByZWFsIGJ1Z3MgXHUyMDE0IGFuIHVucmVnaXN0ZXJlZCBTV1xyXG4gICAgLy8gc3RvcHMgaW50ZXJjZXB0aW5nIGZldGNoZXMgYXQgYWxsKSBidXQgY2FjaGVzLmRlbGV0ZSgpIGRvZXNuJ3QgKDAvMiBydW5zXHJcbiAgICAvLyBhY3R1YWxseSBjbGVhcmVkLCBsZWF2aW5nIGhhcm1sZXNzIGJ1dCBuZWVkbGVzcyBkaXNrIHVzYWdlKS4gRml4ZWQgYnlcclxuICAgIC8vIHNjcmlwdHMvcGF0Y2gtc2VsZi1kZXN0cm95aW5nLXN3LmpzLCBydW4gYWZ0ZXIgdGhpcyBidWlsZCAoc2VlXHJcbiAgICAvLyBwYWNrYWdlLmpzb24ncyBcImJ1aWxkXCIgc2NyaXB0KSBcdTIwMTQgYSBzZXBhcmF0ZSBwcm9jZXNzLCBub3QgYSBwbHVnaW4gaG9vayxcclxuICAgIC8vIHNwZWNpZmljYWxseSB0byBhdm9pZCByYWNpbmcgdGhlIHBsdWdpbidzIG93biBhc3luYyBkaXN0L3N3LmpzIHdyaXRlLlxyXG4gICAgVml0ZVBXQSh7IHNlbGZEZXN0cm95aW5nOiB0cnVlLCBtYW5pZmVzdDogZmFsc2UgfSksXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBlbnRyeUZpbGVOYW1lczogYGFzc2V0cy9bbmFtZV0tW2hhc2hdLSR7RGF0ZS5ub3coKX0uanNgLFxyXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiBgYXNzZXRzL1tuYW1lXS1baGFzaF0tJHtEYXRlLm5vdygpfS5qc2AsXHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IGBhc3NldHMvW25hbWVdLVtoYXNoXS0ke0RhdGUubm93KCl9W2V4dG5hbWVdYCxcclxuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcclxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcclxuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdyZWFjdCcpIHx8IGlkLmluY2x1ZGVzKCdyZWFjdC1kb20nKSB8fCBpZC5pbmNsdWRlcygncmVhY3Qtcm91dGVyLWRvbScpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3ItcmVhY3QnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnZnJhbWVyLW1vdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3ItZnJhbWVyLW1vdGlvbic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdnc2FwJykpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gJ3ZlbmRvci1nc2FwJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJ3ZlbmRvci1jb3JlJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogODAwLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStXLFNBQVMsb0JBQW9CO0FBQzVZLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFFeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBa0NOLFFBQVEsRUFBRSxnQkFBZ0IsTUFBTSxVQUFVLE1BQU0sQ0FBQztBQUFBLEVBQ25EO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixnQkFBZ0Isd0JBQXdCLEtBQUssSUFBSSxDQUFDO0FBQUEsUUFDbEQsZ0JBQWdCLHdCQUF3QixLQUFLLElBQUksQ0FBQztBQUFBLFFBQ2xELGdCQUFnQix3QkFBd0IsS0FBSyxJQUFJLENBQUM7QUFBQSxRQUNsRCxhQUFhLElBQUk7QUFDZixjQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IsZ0JBQUksR0FBRyxTQUFTLE9BQU8sS0FBSyxHQUFHLFNBQVMsV0FBVyxLQUFLLEdBQUcsU0FBUyxrQkFBa0IsR0FBRztBQUN2RixxQkFBTztBQUFBLFlBQ1Q7QUFDQSxnQkFBSSxHQUFHLFNBQVMsZUFBZSxHQUFHO0FBQ2hDLHFCQUFPO0FBQUEsWUFDVDtBQUNBLGdCQUFJLEdBQUcsU0FBUyxNQUFNLEdBQUc7QUFDdkIscUJBQU87QUFBQSxZQUNUO0FBQ0EsbUJBQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSx1QkFBdUI7QUFBQSxFQUN6QjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

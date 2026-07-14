// vite.config.js
import { defineConfig } from "file:///G:/Blue%20Spice%20Holidays%20Website/Blue%20spice%20holiday%20rebuild/node_modules/vite/dist/node/index.js";
import react from "file:///G:/Blue%20Spice%20Holidays%20Website/Blue%20spice%20holiday%20rebuild/node_modules/@vitejs/plugin-react/dist/index.js";
import { VitePWA } from "file:///G:/Blue%20Spice%20Holidays%20Website/Blue%20spice%20holiday%20rebuild/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      // 'autoUpdate' → new SW skips waiting and claims clients immediately.
      // Combined with the reload listener in main.jsx, this ensures users
      // always see fresh content without ever having to manually clear cache.
      registerType: "autoUpdate",
      // Inject the SW registration script into index.html automatically.
      injectRegister: "auto",
      // Dev mode: enable SW in development so you can test caching locally.
      devOptions: {
        enabled: true,
        type: "module"
      },
      workbox: {
        // Take control of all open tabs as soon as the new SW activates.
        skipWaiting: true,
        clientsClaim: true,
        // Cache name includes a version → when you bump it, all old caches
        // are purged on the next SW activation (manual cache busting lever).
        cacheId: "bluespice-v6",
        // Precache all Vite-built assets (they have content hashes in their
        // filenames, so they are always fresh and safe to serve from cache).
        globPatterns: ["**/*.{js,css,html,ico,svg,woff2}"],
        // Runtime caching: strategies for assets NOT in the precache manifest.
        runtimeCaching: [
          {
            // Navigation requests (HTML pages): always try the network first.
            // Falls back to cache only if offline. This guarantees code/content
            // changes are always visible immediately on a live connection.
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "bluespice-pages",
              networkTimeoutSeconds: 5,
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            // Large media (WebM videos, WebP images) in /images/.
            // Serve from cache instantly after first load; expire after 30 days.
            urlPattern: /\/images\/.+\.(webm|webp|mp4|png|jpg|jpeg|gif)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "bluespice-media",
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30
                // 30 days
              }
            }
          },
          {
            // Google Fonts stylesheets: stale-while-revalidate keeps them fast.
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "bluespice-google-fonts-stylesheets"
            }
          },
          {
            // Google Fonts files (woff2 etc): cache for 1 year, they never change.
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "bluespice-google-fonts-webfonts",
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365
                // 1 year
              }
            }
          }
        ]
      },
      // Web app manifest — required for PWA installability.
      manifest: {
        name: "Blue Spice Holidays",
        short_name: "Blue Spice",
        description: "Curators of Luxury & Slow Travel since 2008",
        theme_color: "#0B2D6B",
        background_color: "#F7F5F0",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/favicon.ico",
            sizes: "48x48",
            type: "image/x-icon"
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxCbHVlIFNwaWNlIEhvbGlkYXlzIFdlYnNpdGVcXFxcQmx1ZSBzcGljZSBob2xpZGF5IHJlYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXEJsdWUgU3BpY2UgSG9saWRheXMgV2Vic2l0ZVxcXFxCbHVlIHNwaWNlIGhvbGlkYXkgcmVidWlsZFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRzovQmx1ZSUyMFNwaWNlJTIwSG9saWRheXMlMjBXZWJzaXRlL0JsdWUlMjBzcGljZSUyMGhvbGlkYXklMjByZWJ1aWxkL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIFZpdGVQV0Eoe1xuICAgICAgLy8gJ2F1dG9VcGRhdGUnIFx1MjE5MiBuZXcgU1cgc2tpcHMgd2FpdGluZyBhbmQgY2xhaW1zIGNsaWVudHMgaW1tZWRpYXRlbHkuXG4gICAgICAvLyBDb21iaW5lZCB3aXRoIHRoZSByZWxvYWQgbGlzdGVuZXIgaW4gbWFpbi5qc3gsIHRoaXMgZW5zdXJlcyB1c2Vyc1xuICAgICAgLy8gYWx3YXlzIHNlZSBmcmVzaCBjb250ZW50IHdpdGhvdXQgZXZlciBoYXZpbmcgdG8gbWFudWFsbHkgY2xlYXIgY2FjaGUuXG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcblxuICAgICAgLy8gSW5qZWN0IHRoZSBTVyByZWdpc3RyYXRpb24gc2NyaXB0IGludG8gaW5kZXguaHRtbCBhdXRvbWF0aWNhbGx5LlxuICAgICAgaW5qZWN0UmVnaXN0ZXI6ICdhdXRvJyxcblxuICAgICAgLy8gRGV2IG1vZGU6IGVuYWJsZSBTVyBpbiBkZXZlbG9wbWVudCBzbyB5b3UgY2FuIHRlc3QgY2FjaGluZyBsb2NhbGx5LlxuICAgICAgZGV2T3B0aW9uczoge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICB0eXBlOiAnbW9kdWxlJyxcbiAgICAgIH0sXG5cbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgLy8gVGFrZSBjb250cm9sIG9mIGFsbCBvcGVuIHRhYnMgYXMgc29vbiBhcyB0aGUgbmV3IFNXIGFjdGl2YXRlcy5cbiAgICAgICAgc2tpcFdhaXRpbmc6IHRydWUsXG4gICAgICAgIGNsaWVudHNDbGFpbTogdHJ1ZSxcblxuICAgICAgICAvLyBDYWNoZSBuYW1lIGluY2x1ZGVzIGEgdmVyc2lvbiBcdTIxOTIgd2hlbiB5b3UgYnVtcCBpdCwgYWxsIG9sZCBjYWNoZXNcbiAgICAgICAgLy8gYXJlIHB1cmdlZCBvbiB0aGUgbmV4dCBTVyBhY3RpdmF0aW9uIChtYW51YWwgY2FjaGUgYnVzdGluZyBsZXZlcikuXG4gICAgICAgIGNhY2hlSWQ6ICdibHVlc3BpY2UtdjYnLFxuXG4gICAgICAgIC8vIFByZWNhY2hlIGFsbCBWaXRlLWJ1aWx0IGFzc2V0cyAodGhleSBoYXZlIGNvbnRlbnQgaGFzaGVzIGluIHRoZWlyXG4gICAgICAgIC8vIGZpbGVuYW1lcywgc28gdGhleSBhcmUgYWx3YXlzIGZyZXNoIGFuZCBzYWZlIHRvIHNlcnZlIGZyb20gY2FjaGUpLlxuICAgICAgICBnbG9iUGF0dGVybnM6IFsnKiovKi57anMsY3NzLGh0bWwsaWNvLHN2Zyx3b2ZmMn0nXSxcblxuICAgICAgICAvLyBSdW50aW1lIGNhY2hpbmc6IHN0cmF0ZWdpZXMgZm9yIGFzc2V0cyBOT1QgaW4gdGhlIHByZWNhY2hlIG1hbmlmZXN0LlxuICAgICAgICBydW50aW1lQ2FjaGluZzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIE5hdmlnYXRpb24gcmVxdWVzdHMgKEhUTUwgcGFnZXMpOiBhbHdheXMgdHJ5IHRoZSBuZXR3b3JrIGZpcnN0LlxuICAgICAgICAgICAgLy8gRmFsbHMgYmFjayB0byBjYWNoZSBvbmx5IGlmIG9mZmxpbmUuIFRoaXMgZ3VhcmFudGVlcyBjb2RlL2NvbnRlbnRcbiAgICAgICAgICAgIC8vIGNoYW5nZXMgYXJlIGFsd2F5cyB2aXNpYmxlIGltbWVkaWF0ZWx5IG9uIGEgbGl2ZSBjb25uZWN0aW9uLlxuICAgICAgICAgICAgdXJsUGF0dGVybjogKHsgcmVxdWVzdCB9KSA9PiByZXF1ZXN0Lm1vZGUgPT09ICduYXZpZ2F0ZScsXG4gICAgICAgICAgICBoYW5kbGVyOiAnTmV0d29ya0ZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnYmx1ZXNwaWNlLXBhZ2VzJyxcbiAgICAgICAgICAgICAgbmV0d29ya1RpbWVvdXRTZWNvbmRzOiA1LFxuICAgICAgICAgICAgICBjYWNoZWFibGVSZXNwb25zZTogeyBzdGF0dXNlczogWzAsIDIwMF0gfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBMYXJnZSBtZWRpYSAoV2ViTSB2aWRlb3MsIFdlYlAgaW1hZ2VzKSBpbiAvaW1hZ2VzLy5cbiAgICAgICAgICAgIC8vIFNlcnZlIGZyb20gY2FjaGUgaW5zdGFudGx5IGFmdGVyIGZpcnN0IGxvYWQ7IGV4cGlyZSBhZnRlciAzMCBkYXlzLlxuICAgICAgICAgICAgdXJsUGF0dGVybjogL1xcL2ltYWdlc1xcLy4rXFwuKHdlYm18d2VicHxtcDR8cG5nfGpwZ3xqcGVnfGdpZikkL2ksXG4gICAgICAgICAgICBoYW5kbGVyOiAnQ2FjaGVGaXJzdCcsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogJ2JsdWVzcGljZS1tZWRpYScsXG4gICAgICAgICAgICAgIGNhY2hlYWJsZVJlc3BvbnNlOiB7IHN0YXR1c2VzOiBbMCwgMjAwXSB9LFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogNjAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzAsIC8vIDMwIGRheXNcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBHb29nbGUgRm9udHMgc3R5bGVzaGVldHM6IHN0YWxlLXdoaWxlLXJldmFsaWRhdGUga2VlcHMgdGhlbSBmYXN0LlxuICAgICAgICAgICAgdXJsUGF0dGVybjogL15odHRwczpcXC9cXC9mb250c1xcLmdvb2dsZWFwaXNcXC5jb21cXC8uKi9pLFxuICAgICAgICAgICAgaGFuZGxlcjogJ1N0YWxlV2hpbGVSZXZhbGlkYXRlJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnYmx1ZXNwaWNlLWdvb2dsZS1mb250cy1zdHlsZXNoZWV0cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gR29vZ2xlIEZvbnRzIGZpbGVzICh3b2ZmMiBldGMpOiBjYWNoZSBmb3IgMSB5ZWFyLCB0aGV5IG5ldmVyIGNoYW5nZS5cbiAgICAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvZm9udHNcXC5nc3RhdGljXFwuY29tXFwvLiovaSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdDYWNoZUZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnYmx1ZXNwaWNlLWdvb2dsZS1mb250cy13ZWJmb250cycsXG4gICAgICAgICAgICAgIGNhY2hlYWJsZVJlc3BvbnNlOiB7IHN0YXR1c2VzOiBbMCwgMjAwXSB9LFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMjAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzY1LCAvLyAxIHllYXJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG5cbiAgICAgIC8vIFdlYiBhcHAgbWFuaWZlc3QgXHUyMDE0IHJlcXVpcmVkIGZvciBQV0EgaW5zdGFsbGFiaWxpdHkuXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnQmx1ZSBTcGljZSBIb2xpZGF5cycsXG4gICAgICAgIHNob3J0X25hbWU6ICdCbHVlIFNwaWNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDdXJhdG9ycyBvZiBMdXh1cnkgJiBTbG93IFRyYXZlbCBzaW5jZSAyMDA4JyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjMEIyRDZCJyxcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogJyNGN0Y1RjAnLFxuICAgICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXG4gICAgICAgIHN0YXJ0X3VybDogJy8nLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9mYXZpY29uLmljbycsXG4gICAgICAgICAgICBzaXplczogJzQ4eDQ4JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS94LWljb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3JlYWN0JykgfHwgaWQuaW5jbHVkZXMoJ3JlYWN0LWRvbScpIHx8IGlkLmluY2x1ZGVzKCdyZWFjdC1yb3V0ZXItZG9tJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3ItcmVhY3QnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdmcmFtZXItbW90aW9uJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3ItZnJhbWVyLW1vdGlvbic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ2dzYXAnKSkge1xuICAgICAgICAgICAgICByZXR1cm4gJ3ZlbmRvci1nc2FwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAndmVuZG9yLWNvcmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDgwMCxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVyxTQUFTLG9CQUFvQjtBQUM1WSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBRXhCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlOLGNBQWM7QUFBQTtBQUFBLE1BR2QsZ0JBQWdCO0FBQUE7QUFBQSxNQUdoQixZQUFZO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsTUFDUjtBQUFBLE1BRUEsU0FBUztBQUFBO0FBQUEsUUFFUCxhQUFhO0FBQUEsUUFDYixjQUFjO0FBQUE7QUFBQTtBQUFBLFFBSWQsU0FBUztBQUFBO0FBQUE7QUFBQSxRQUlULGNBQWMsQ0FBQyxrQ0FBa0M7QUFBQTtBQUFBLFFBR2pELGdCQUFnQjtBQUFBLFVBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUlFLFlBQVksQ0FBQyxFQUFFLFFBQVEsTUFBTSxRQUFRLFNBQVM7QUFBQSxZQUM5QyxTQUFTO0FBQUEsWUFDVCxTQUFTO0FBQUEsY0FDUCxXQUFXO0FBQUEsY0FDWCx1QkFBdUI7QUFBQSxjQUN2QixtQkFBbUIsRUFBRSxVQUFVLENBQUMsR0FBRyxHQUFHLEVBQUU7QUFBQSxZQUMxQztBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUE7QUFBQTtBQUFBLFlBR0UsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLGNBQ1gsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFO0FBQUEsY0FDeEMsWUFBWTtBQUFBLGdCQUNWLFlBQVk7QUFBQSxnQkFDWixlQUFlLEtBQUssS0FBSyxLQUFLO0FBQUE7QUFBQSxjQUNoQztBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBO0FBQUEsWUFFRSxZQUFZO0FBQUEsWUFDWixTQUFTO0FBQUEsWUFDVCxTQUFTO0FBQUEsY0FDUCxXQUFXO0FBQUEsWUFDYjtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUE7QUFBQSxZQUVFLFlBQVk7QUFBQSxZQUNaLFNBQVM7QUFBQSxZQUNULFNBQVM7QUFBQSxjQUNQLFdBQVc7QUFBQSxjQUNYLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxHQUFHLEdBQUcsRUFBRTtBQUFBLGNBQ3hDLFlBQVk7QUFBQSxnQkFDVixZQUFZO0FBQUEsZ0JBQ1osZUFBZSxLQUFLLEtBQUssS0FBSztBQUFBO0FBQUEsY0FDaEM7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUE7QUFBQSxNQUdBLFVBQVU7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLGFBQWE7QUFBQSxRQUNiLGFBQWE7QUFBQSxRQUNiLGtCQUFrQjtBQUFBLFFBQ2xCLFNBQVM7QUFBQSxRQUNULFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sYUFBYSxJQUFJO0FBQ2YsY0FBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLGdCQUFJLEdBQUcsU0FBUyxPQUFPLEtBQUssR0FBRyxTQUFTLFdBQVcsS0FBSyxHQUFHLFNBQVMsa0JBQWtCLEdBQUc7QUFDdkYscUJBQU87QUFBQSxZQUNUO0FBQ0EsZ0JBQUksR0FBRyxTQUFTLGVBQWUsR0FBRztBQUNoQyxxQkFBTztBQUFBLFlBQ1Q7QUFDQSxnQkFBSSxHQUFHLFNBQVMsTUFBTSxHQUFHO0FBQ3ZCLHFCQUFPO0FBQUEsWUFDVDtBQUNBLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsdUJBQXVCO0FBQUEsRUFDekI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

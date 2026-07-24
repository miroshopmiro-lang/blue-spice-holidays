- [x] Locate hero + stats text sources.
- [x] Update HeroSection: change “ESTABLISHED 2008 · CURATORS OF SLOW TRAVEL” → “BORN IN 2008 · MICRO LEVEL CUSTOMISED PLANNING”.
- [x] Update TrustRibbon stats: remove “MOT / Ministry Approved / Govt. Registered Operator · MOT-11/984”.
- [x] Add worldwide destinations stat using approximate count (50+).
- [x] Convert and compress Rajasthan FPV drone video to WebM and set as the first slide in HeroSection.
- [x] Convert and compress Dubai drone video to WebM and set as the first slide in HeroSection.
- [x] Convert and compress Goa drone video to WebM and add it to the HeroSection.
- [x] Recompress other large video assets (Taj Mahal, Munnar, Maya Beach, Himalaya) to target the optimal size range (~2.5–3.2 MB) without losing quality.
- [x] Reorder and configure all 8 active hero slides in the exact sequence requested by the client.
- [x] Convert and compress London drone video to WebM and insert it in the HeroSection.
- [x] Optimize HeroSection video playback performance using Page Visibility API, GPU promotion, and browser media controls restrictions on both PC and mobile.
- [x] Convert and compress Kerala Waterfalls drone video to WebM and insert it in the HeroSection.
- [x] Restore missing Thailand travel asset (thailand-phiphi.webp) from Git history for the Thailand getaway package.
- [x] Convert and compress Kerala Wildlife drone video to WebM and insert it in the HeroSection.
- [x] Build to ensure changes compile.

## Menu restructure (2026-07-23)
- [x] Rebuilt nav to match client's 9-menu spec (Holidays / Services / SPL Tour / Gallery / Brochures / About / Contact / Collaborate / Refer) with mega-menu + "More" overflow on desktop, matching accordion on mobile.
- [x] Fixed a pre-existing bug: "Enquire Now" CTAs on every page except the homepage silently did nothing (the itinerary form only existed on `/`). New `useEnquiry` hook navigates home and retries until the form mounts.
- [x] Folded Darshan into Spiritual Tours (`/holidays/spiritual`); `/darshan` now redirects there.
- [x] Added 23 sub-pages across Holidays/Services/SPL Tour, a Gallery (Photos/Videos), Contact, Collaborate, and Refer pages.
- [x] `/wellness` and `/cruises` kept live, footer-linked only (not in the client's menu list).
- [ ] **Waiting on client**: Gallery photos/videos (client said "I will share"), office contact details (address/hours — none exist in the repo), per-category copy for the 16 new generic pages, Collaborate program terms, Refer referral incentive.
- [ ] Security: a GitHub personal access token is in plaintext in `.git/config`'s remote URL — revoke it, and move credentials to `~/.claude/credentials/git-credentials` via a `store` credential helper.

## Client feedback round (2026-07-24)
- [x] Language flags removed from the nav (desktop dropdown + mobile drawer). Switching now lives only on the hero flag row, per the client.
- [x] Fixed "Worldwide" overflowing the stats ribbon on mobile — stat values now size by string length (`valueSizeClass`) instead of a fixed `text-4xl`, so word values step down rather than spilling past the section edge.
- [x] Wired the 8 new brochures to their matching pages. `src/data/brochures.js` is the single source of truth (each brochure lists the routes it belongs on); `BrochureStrip` renders the matches per page and `BrochureGallery` holds the shared grid + lightbox. `/brochures` shows all 12.
- [x] Renamed brochure files from WhatsApp export names (several had stray typo characters, e.g. `2026-0a7-23`, `18.14.s03`) to descriptive slugs.
- [x] Forex page now pulls live rates — `useForexRates` hits open.er-api.com with a jsdelivr currency-api fallback (both free, keyless, CORS-enabled) and falls back to a hardcoded snapshot only if both fail, labelled as such. The old hardcoded table had USD at ₹83.45 against a real ~₹96.72. Currency list widened from 6 to 12; converter is now live-updating rather than button-driven; copy states these are mid-market reference rates, not the retail card/cash rate.
- [x] Orphaned `/manifest.webmanifest` (left by the retired vite-plugin-pwa layer) now 301s to `/site.webmanifest` via `public/_redirects`, and both manifest paths are `no-cache` in `public/_headers` so the edge can't hold a stale copy long-term again.


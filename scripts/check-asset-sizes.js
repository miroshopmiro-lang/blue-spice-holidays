// Fails the build if anything in dist/ would be rejected by Cloudflare Pages.
//
// Why this exists: on 2026-07-28 a 26.19 MiB gallery video was committed into
// public/. Vite copies public/ through verbatim and never looks at file sizes,
// so `npm run build` kept succeeding locally while every Cloudflare Pages
// deployment failed at the asset-upload stage. Five consecutive pushes went
// nowhere and the live site silently sat on a build from two hours earlier —
// the failure was only visible in the Cloudflare dashboard, which nobody
// checks after a routine push.
//
// The limits below are Cloudflare Pages platform limits, not preferences:
//   - 25 MiB per file (hard reject, fails the whole deployment)
//   - 20,000 files per deployment (hard reject)
// See https://developers.cloudflare.com/pages/platform/limits/
//
// The warning threshold is ours, not Cloudflare's. A 15+ MiB asset is legal but
// expensive for the audience this site is built for — Indian mobile data — so it
// should be a deliberate decision, not something that slips in from a WhatsApp
// export. Re-encode oversized video with ffmpeg (H.264 + AAC, CRF ~28,
// -movflags +faststart) rather than deleting it; the gallery clips sit around
// 9-10 MiB after that treatment with no visible quality loss at their size.
import { readdirSync, statSync, existsSync } from 'node:fs';
import { resolve, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '..', 'dist');

const MAX_FILE_BYTES = 25 * 1024 * 1024; // Cloudflare Pages hard limit
const WARN_FILE_BYTES = 15 * 1024 * 1024; // ours — "are you sure?"
const MAX_FILE_COUNT = 20000; // Cloudflare Pages hard limit

if (!existsSync(distDir)) {
  console.error('[check-asset-sizes] dist/ not found — run `vite build` first.');
  process.exit(1);
}

const mib = (bytes) => (bytes / 1024 / 1024).toFixed(2);

function walk(dir) {
  const found = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = resolve(dir, entry.name);
    if (entry.isDirectory()) found.push(...walk(full));
    else if (entry.isFile()) found.push({ path: full, size: statSync(full).size });
  }
  return found;
}

const files = walk(distDir);
const rel = (p) => relative(distDir, p).split(sep).join('/');

const tooBig = files.filter((f) => f.size > MAX_FILE_BYTES).sort((a, b) => b.size - a.size);
const heavy = files
  .filter((f) => f.size > WARN_FILE_BYTES && f.size <= MAX_FILE_BYTES)
  .sort((a, b) => b.size - a.size);

for (const f of heavy) {
  console.warn(`[check-asset-sizes] WARNING: ${rel(f.path)} is ${mib(f.size)} MiB — heavy for mobile data.`);
}

let failed = false;

if (tooBig.length > 0) {
  console.error(
    `\n[check-asset-sizes] BUILD BLOCKED — ${tooBig.length} file(s) exceed Cloudflare Pages' 25 MiB per-file limit.\n` +
      `Cloudflare will reject the entire deployment, and the live site will silently keep serving the previous build.\n`
  );
  for (const f of tooBig) {
    console.error(`  ${mib(f.size)} MiB  dist/${rel(f.path)}`);
  }
  console.error(
    `\nFix the source file in public/ (not dist/ — it is regenerated every build).\n` +
      `For video: ffmpeg -i in.mp4 -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart out.mp4\n`
  );
  failed = true;
}

if (files.length > MAX_FILE_COUNT) {
  console.error(
    `\n[check-asset-sizes] BUILD BLOCKED — dist/ contains ${files.length} files, over Cloudflare Pages' ${MAX_FILE_COUNT}-file limit.\n`
  );
  failed = true;
}

if (failed) process.exit(1);

console.log(
  `[check-asset-sizes] OK — ${files.length} files, largest ${mib(Math.max(...files.map((f) => f.size)))} MiB (limit 25.00 MiB).`
);

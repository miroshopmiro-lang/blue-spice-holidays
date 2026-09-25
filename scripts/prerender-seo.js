// Post-build: writes one static HTML file per route so crawlers get the right
// <title>, description, canonical and structured data without running the app.
//
// Why: the site is a client-rendered SPA. Before this, every URL returned the same
// index.html with the homepage title and description, and Google indexed only a
// handful of pages (one of them under the homepage title). Package pages also carry
// their itinerary as plain HTML inside #root; React's createRoot replaces it on load.
//
// Output: dist/<path>.html (Cloudflare Pages serves /packages/x from packages/x.html
// with no trailing-slash redirect) and dist/sitemap.xml built from the same routes.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DESTINATIONS } from '../src/data/travelData.js';
import {
  ALL_ROUTES,
  BASE_URL,
  SITE_NAME,
  destinationPlans,
  packagePath,
  packageSEO,
  tripFacts,
} from '../src/data/seo.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const shell = readFileSync(join(dist, 'index.html'), 'utf8');

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const urlFor = (path) => `${BASE_URL}${path === '/' ? '' : path}`;

function setMetaContent(html, attr, name, value) {
  const re = new RegExp(`(<meta\\s+${attr}="${name}"\\s+content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`index.html is missing <meta ${attr}="${name}">`);
  return html.replace(re, `$1${esc(value)}$2`);
}

function jsonLd(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;
}

function packageBody(dest) {
  const seo = packageSEO(dest);
  const plans = destinationPlans(dest);
  const parts = [
    `<nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/packages">Tour Packages</a> / ${esc(dest.name)}</nav>`,
    `<h1>${esc(seo.h1)}</h1>`,
    `<p>${esc(dest.tagline)}</p>`,
  ];
  const facts = tripFacts(dest, plans[0]);
  if (facts.length) {
    parts.push('<h2>Trip details</h2><dl>' + facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('') + '</dl>');
  }
  for (const plan of plans) {
    parts.push(`<h2>${esc(plans.length > 1 ? plan.name : `${dest.name} day-by-day itinerary`)}</h2>`);
    parts.push(
      '<ol>' +
        plan.itinerary
          .map((d) => `<li><h3>Day ${d.day}: ${esc(d.title)}</h3><p>${esc(d.detail).replace(/\n/g, '<br>')}</p></li>`)
          .join('') +
        '</ol>'
    );
  }
  parts.push(
    `<p>Every itinerary is customised. Call or WhatsApp <a href="https://wa.me/919388599000">+91 93885 99000</a> or <a href="/custom-itinerary">send an enquiry</a>.</p>`
  );
  const others = DESTINATIONS.filter((d) => d.id !== dest.id)
    .map((d) => `<li><a href="${packagePath(d)}">${esc(d.name)} Tour Packages</a></li>`)
    .join('');
  parts.push(`<h2>More tour packages</h2><ul>${others}</ul>`);
  return `<main>${parts.join('')}</main>`;
}

function packageSchema(dest) {
  const seo = packageSEO(dest);
  const plans = destinationPlans(dest);
  const url = urlFor(seo.path);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: seo.h1,
      description: seo.description,
      url,
      ...(dest.image ? { image: `${BASE_URL}${dest.image}` } : {}),
      touristType: dest.categories,
      provider: { '@id': `${BASE_URL}/#organization` },
      itinerary: {
        '@type': 'ItemList',
        itemListElement: (plans[0]?.itinerary || []).map((d, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: `Day ${d.day}: ${d.title}`,
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Tour Packages', item: `${BASE_URL}/packages` },
        { '@type': 'ListItem', position: 3, name: dest.name, item: url },
      ],
    },
  ];
}

function hubBody() {
  const items = DESTINATIONS.map((d) => `<li><a href="${packagePath(d)}">${esc(d.name)} Tour Packages</a>: ${esc(d.tagline)}</li>`).join('');
  return `<main><h1>Tour Packages</h1><p>Day-by-day itineraries across India and abroad, each one customised by our team in Kochi.</p><ul>${items}</ul></main>`;
}

const destByPath = Object.fromEntries(DESTINATIONS.map((d) => [packagePath(d), d]));
let written = 0;

for (const route of ALL_ROUTES) {
  const url = urlFor(route.path);
  let html = shell.replace(/<title>[^<]*<\/title>/, `<title>${esc(route.title)}</title>`);
  html = setMetaContent(html, 'name', 'description', route.description);
  html = setMetaContent(html, 'property', 'og:title', route.title);
  html = setMetaContent(html, 'property', 'og:description', route.description);
  html = setMetaContent(html, 'property', 'twitter:title', route.title);
  html = setMetaContent(html, 'property', 'twitter:description', route.description);

  let head = `<link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />`;
  let body = '';
  const dest = destByPath[route.path];
  if (dest) {
    head += '\n    ' + packageSchema(dest).map(jsonLd).join('\n    ');
    body = packageBody(dest);
  } else if (route.path === '/packages') {
    body = hubBody();
  }
  html = html.replace('</head>', `    ${head}\n  </head>`);
  if (body) html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  const out = route.path === '/' ? join(dist, 'index.html') : join(dist, `${route.path.slice(1)}.html`);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  written++;
}

const today = new Date().toISOString().slice(0, 10);
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  ALL_ROUTES.map((r) => `  <url><loc>${urlFor(r.path)}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
  '\n</urlset>\n';
writeFileSync(join(dist, 'sitemap.xml'), sitemap);

console.log(`prerender-seo: ${written} route files, sitemap with ${ALL_ROUTES.length} URLs (${SITE_NAME})`);

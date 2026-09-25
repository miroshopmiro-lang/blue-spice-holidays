// Per-route SEO: one source of truth for titles, descriptions and canonical URLs.
// Read by RouteSEO.jsx in the browser and by scripts/prerender-seo.js at build time,
// which writes a static HTML file per route so Google sees the right head (and, for
// package pages, the itinerary itself) without having to run the app first.
// Keep this file plain JS: no JSX, no image imports, so Node can import it.
import { DESTINATIONS } from './travelData.js';

export const BASE_URL = 'https://bluespiceholidays.com';
export const SITE_NAME = 'Blue Spice Holidays';

export const packageSlug = (dest) => `${dest.id}-tour-packages`;
export const packagePath = (dest) => `/packages/${packageSlug(dest)}`;

// referenceInfo mixes real trip facts with prompts to the customer ("Pls provide
// information"). Only the facts are shown or used in copy.
const isFact = (v) => typeof v === 'string' && !/\bpls\b|provide information|inform information/i.test(v);

export function tripFacts(dest, plan) {
  const merged = { ...(dest.referenceInfo || {}), ...(plan?.referenceInfo || {}) };
  return Object.entries(merged).filter(([, v]) => isFact(v));
}

export function destinationPlans(dest) {
  if (dest.plans?.length) return dest.plans;
  if (dest.sampleItinerary?.length) return [{ name: 'Suggested Itinerary', itinerary: dest.sampleItinerary }];
  return [];
}

function factValue(dest, keys) {
  const facts = Object.fromEntries(tripFacts(dest));
  for (const k of keys) if (facts[k]) return facts[k];
  return '';
}

export function packageSEO(dest) {
  const duration = factValue(dest, ['Duration of Tour', 'Duration']);
  const places = factValue(dest, ['Destinations', 'Destinations Covered']);
  const plans = destinationPlans(dest);
  const lead = duration
    ? `${duration} ${dest.name} tour package`
    : plans.length > 1
      ? `${dest.name} tour packages: ${plans.map((p) => p.name.replace(/^Plan \d+:\s*/, '')).join(' or ')}`
      : `${dest.name} tour packages`;
  const description = [
    `${lead}${places ? `: ${places}` : ''}.`,
    'Day-by-day itinerary, customised by Blue Spice Holidays, Kochi. Enquire for a quote.',
  ].join(' ');
  return {
    path: packagePath(dest),
    title: `${dest.name} Tour Packages | ${SITE_NAME}, Kochi`,
    description,
    h1: `${dest.name} Tour Packages`,
  };
}

// Real routes only. Paths match siteMenu.js; the old sitemap listed six slugs that
// don't exist (e.g. /holidays/family) and silently redirected to /holidays.
export const STATIC_ROUTES = [
  { path: '/', title: `${SITE_NAME} · Tour Packages & Bespoke Journeys from Kochi`, description: '5-star rated travel agency in Kochi since 2009. Customised tour packages across India and abroad: Kerala, Kashmir, Dubai, Thailand, Maldives, Bali and more, planned at micro level.' },
  { path: '/packages', title: `Tour Packages from Kochi: India & International | ${SITE_NAME}`, description: 'Browse Blue Spice Holidays tour packages with day-by-day itineraries: Kerala, Rajasthan, Kashmir, Manali, Dubai, Thailand, Maldives, Bali, Singapore, Sri Lanka and more. Customised from Kochi.' },
  { path: '/holidays', title: `Holiday Tours | ${SITE_NAME}`, description: 'Domestic, international, honeymoon, group, family, senior citizen, ladies-only and spiritual tours, planned end to end by Blue Spice Holidays, Kochi.' },
  { path: '/holidays/domestic', title: `Domestic Tour Packages in India | ${SITE_NAME}`, description: 'Domestic tour packages across India: Kerala, Rajasthan, Kashmir, Manali, Gangtok, Andaman and more. Customised itineraries from Blue Spice Holidays, Kochi.' },
  { path: '/holidays/international', title: `International Tour Packages from Kochi | ${SITE_NAME}`, description: 'International tour packages: Dubai, Thailand, Maldives, Bali, Singapore, Vietnam, Sri Lanka, Nepal and Bhutan. Planned and supported by Blue Spice Holidays, Kochi.' },
  { path: '/holidays/ladies', title: `Ladies Only Tours | ${SITE_NAME}`, description: 'Ladies-only group tours planned for comfort and safety by Blue Spice Holidays, Kochi.' },
  { path: '/holidays/spiritual', title: `Spiritual & Pilgrimage Tours | ${SITE_NAME}`, description: 'Pilgrimage and darshan tours with VIP passes, comfortable transfers and pure vegetarian catering, planned by Blue Spice Holidays, Kochi.' },
  { path: '/holidays/senior-citizen', title: `Senior Citizen Tours | ${SITE_NAME}`, description: 'Slow-paced senior citizen tours with shorter travel legs, accessible stays and a team that never rushes a departure.' },
  { path: '/holidays/group', title: `Group Tour Packages | ${SITE_NAME}`, description: 'Group tours for friends, families and reunions: room blocks, coach transfers and logistics handled as one plan by Blue Spice Holidays, Kochi.' },
  { path: '/holidays/honeymoon', title: `Honeymoon Packages from Kochi | ${SITE_NAME}`, description: 'Honeymoon tour packages designed around privacy: quiet stays, private transfers and unhurried itineraries in India and abroad, from Blue Spice Holidays, Kochi.' },
  { path: '/holidays/office', title: `Corporate Tours & Office Offsites | ${SITE_NAME}`, description: 'Team offsites and incentive trips with predictable logistics, planned by Blue Spice Holidays, Kochi.' },
  { path: '/holidays/educational', title: `School, College & Educational Tours | ${SITE_NAME}`, description: 'Heritage, history and nature tours for student groups, with the safety and supervision institutions require.' },
  { path: '/services', title: `Travel Services | ${SITE_NAME}`, description: 'Hotel booking, flights, visa guidance, forex, destination weddings, events and more from Blue Spice Holidays, Kochi.' },
  { path: '/services/hotels', title: `Resort & Hotel Booking | ${SITE_NAME}`, description: 'From boutique heritage stays to full resorts, we shortlist and book properties that match how you actually want to travel.' },
  { path: '/services/flights', title: `Flight Booking | ${SITE_NAME}`, description: 'Domestic and international flight booking with Blue Spice Holidays, Kochi.' },
  { path: '/services/visa', title: `Tourist Visa Guidance | ${SITE_NAME}`, description: 'Document preparation, application checklists and connections to authorised visa processing agencies.' },
  { path: '/services/forex', title: `Forex Assistance | ${SITE_NAME}`, description: 'Forex assistance for your trip abroad from Blue Spice Holidays, Kochi.' },
  { path: '/services/destination-weddings', title: `Destination Weddings & Events | ${SITE_NAME}`, description: 'Destination weddings, luxury wedding cars and full event logistics curated by Blue Spice Holidays.' },
  { path: '/services/events', title: `Event Planning | ${SITE_NAME}`, description: 'Venue sourcing, vendor coordination and on-ground execution for private and corporate events.' },
  { path: '/services/conferences', title: `Conference & MICE Logistics | ${SITE_NAME}`, description: 'Meeting-ready venues, delegate travel and production support for conferences and corporate gatherings.' },
  { path: '/services/anniversary', title: `Anniversary Function Planning | ${SITE_NAME}`, description: 'Milestone celebrations planned around the venue, guest list and details that make the day personal.' },
  { path: '/services/birthday', title: `Birthday Party Planning | ${SITE_NAME}`, description: 'Themed venues and full guest logistics for birthday celebrations.' },
  { path: '/services/yacht-parties', title: `Yacht Parties in Kochi | ${SITE_NAME}`, description: 'Private charters and on-water celebrations arranged with catering, crew and route planned in advance.' },
  { path: '/special-tours', title: `Special Tours | ${SITE_NAME}`, description: 'Celebrity, diplomat and culinary group tours arranged with discretion by Blue Spice Holidays.' },
  { path: '/special-tours/celebrity', title: `Celebrity Tours | ${SITE_NAME}`, description: 'Discreet, high-touch travel arrangements for celebrities and high-profile guests, coordinated end to end.' },
  { path: '/special-tours/diplomats', title: `Diplomat's Tour | ${SITE_NAME}`, description: 'Protocol-aware travel arrangements for diplomatic delegations.' },
  { path: '/special-tours/bouncers', title: `Security for VIPs & Celebrities | ${SITE_NAME}`, description: 'Professional, vetted security personnel arranged for high-profile guests and events.' },
  { path: '/special-tours/kitchen-tours', title: `Kitchen & Culinary Tours for Groups | ${SITE_NAME}`, description: "Guided culinary experiences for groups who want to go beyond sightseeing into the region's food culture." },
  { path: '/wellness', title: `Wellness Retreats | ${SITE_NAME}`, description: 'Wellness and Ayurveda retreats planned by Blue Spice Holidays, Kochi.' },
  { path: '/cruises', title: `Cruise Holidays | ${SITE_NAME}`, description: 'Cruise holidays planned and booked by Blue Spice Holidays, Kochi.' },
  { path: '/custom-itinerary', title: `Plan a Custom Itinerary | ${SITE_NAME}`, description: 'Tell us where and when. Blue Spice Holidays plans a private, customised itinerary around you.' },
  { path: '/gallery', title: `Tour Gallery | ${SITE_NAME}`, description: 'Photos and videos from Blue Spice Holidays tours.' },
  { path: '/brochures', title: `Travel Brochures | ${SITE_NAME}`, description: 'Download Blue Spice Holidays tour brochures and curation guides.' },
  { path: '/about', title: `About Us | ${SITE_NAME}`, description: 'Blue Spice Holidays: a 5-star rated travel agency in Kochi, planning customised journeys since 2009.' },
  { path: '/contact', title: `Contact Us | ${SITE_NAME}, Kochi`, description: 'Call or WhatsApp Blue Spice Holidays on +91 93885 99000 to plan your trip.' },
  { path: '/collaborate', title: `Collaborate With Us | ${SITE_NAME}`, description: 'Partner and collaborate with Blue Spice Holidays.' },
  { path: '/refer', title: `Refer Us | ${SITE_NAME}`, description: 'Refer friends and family to Blue Spice Holidays.' },
  { path: '/privacy-policy', title: `Privacy Policy | ${SITE_NAME}`, description: 'How Blue Spice Holidays handles your information.' },
  { path: '/terms', title: `Terms of Use | ${SITE_NAME}`, description: 'Terms of use for bluespiceholidays.com.' },
];

export const PACKAGE_ROUTES = DESTINATIONS.map(packageSEO);

export const ALL_ROUTES = [...STATIC_ROUTES, ...PACKAGE_ROUTES];

const BY_PATH = Object.fromEntries(ALL_ROUTES.map((r) => [r.path, r]));

export function getRouteSEO(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return BY_PATH[clean] || null;
}

export const findDestinationBySlug = (slug) => DESTINATIONS.find((d) => packageSlug(d) === slug);

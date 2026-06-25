// Destinations + service tiers sourced from blue_spice_holidays_info.md
export const destinationCategories = ['India', 'International', 'Trending']

export const destinations = [
  { id: 'kerala', name: 'Kerala', categories: ['India'], tagline: 'Backwaters, stillness, and unhurried luxury.', image: '/images/kerala.webp' },
  { id: 'manali', name: 'Manali', categories: ['India'], tagline: 'Mountain air, mapped to your pace.', image: '/images/manali.webp' },
  { id: 'gangtok', name: 'Gangtok', categories: ['India'], tagline: 'Himalayan calm, elevated.', image: '/images/gangtok.webp' },
  { id: 'kashmir', name: 'Kashmir', categories: ['India'], tagline: 'Alpine grandeur with five-star comfort.', image: '/images/kashmir.webp' },
  { id: 'dubai', name: 'Dubai', categories: ['International'], tagline: 'Where ambition meets indulgence.', image: '/images/dubai.webp' },
  { id: 'thailand', name: 'Thailand', categories: ['International'], tagline: 'Coastlines curated for you.', image: '/images/thailand.webp' },
  { id: 'maldives', name: 'Maldives', categories: ['International'], tagline: 'Island serenity, expertly held.', image: '/images/maldives.webp' },
  { id: 'bali', name: 'Bali', categories: ['International'], tagline: 'Sanctuary, ceremony, and sea.', image: '/images/bali.webp' },
  { id: 'singapore', name: 'Singapore', categories: ['International'], tagline: 'Precision, polish, and pace.', image: '/images/singapore.webp' },
  { id: 'andaman', name: 'Andaman', categories: ['Trending', 'India'], tagline: 'Private shores and turquoise solitude.', image: '/images/andaman.webp' },
  { id: 'vietnam', name: 'Vietnam', categories: ['Trending', 'International'], tagline: 'Heritage and horizon in one journey.', image: '/images/vietnam.webp' },
  { id: 'georgia', name: 'Georgia', categories: ['Trending', 'International'], tagline: 'Old-world charm, new-world ease.', image: '/images/georgia.webp' },
  {
    id: 'taj-mahal',
    name: 'Agra & Taj Mahal',
    categories: ['India', 'Trending'],
    tagline: 'Sunrise over white marble, a monument to timeless love.',
    image: '/images/taj-mahal.webp',
    videoLandscapeMp4: '/images/taj-mahal-landscape.mp4',
    videoPortrait: '/images/taj-mahal-portrait.webm',
    videoPortraitMp4: '/images/taj-mahal-portrait.mp4',
  },
]

// Service tiers replace fixed pricing (Blue Spice offers no-obligation quotes)
export const serviceTiers = [
  {
    id: 'general',
    name: 'General Travel',
    theme: 'dark',
    blurb: 'Flights, holiday packages, visa and forex assistance, and curated cruise experiences with a single point of contact.',
    includes: ['Domestic & International Flights', 'Holiday Packages', 'Visa Assistance', 'Forex Assistance', 'Cruise Experiences'],
  },
  {
    id: 'vip',
    name: 'VIP & Executive',
    theme: 'light',
    featured: true,
    blurb: 'Private aviation, executive transportation, and confidential end-to-end travel for VIPs, celebrities, and delegations.',
    includes: ['Private Aviation & VIP Charters', 'Ground & Executive Transport', 'Celebrity & High-Profile Travel', 'Executive Protection', 'Airport Meet & Assist'],
  },
  {
    id: 'events',
    name: 'Weddings & Events',
    theme: 'dark',
    blurb: 'Destination weddings, luxury fleets, security, and full conference & MICE production handled end to end.',
    includes: ['Destination Weddings', 'Luxury Wedding Cars', 'Luxury Coach & Group Bus', 'Bouncer & Security', 'Conferences & MICE'],
  },
]

export const serviceBadges = [
  'Domestic & International Flights',
  'Bespoke Holiday Packages',
  'Visa & Forex Assistance',
  'Luxury Cruises & Yacht Charters',
  'VIP Aviation & Private Charters',
  'Destination Weddings & Events',
  'Luxury Wedding Cars & Fleets',
  'Group Coaches & Corporate Transport',
  'Executive Protection & Security',
  'Corporate MICE & Conferences',
]

export const bookingSteps = [
  { n: '01', title: 'Share Your Vision', text: 'Tell us your destination, dates, and the experience you want. No planning fees, ever.' },
  { n: '02', title: 'Get a Tailored Quote', text: 'Receive a transparent, no-obligation itinerary and quote with no hidden charges.' },
  { n: '03', title: 'Confirm & Plan', text: 'Approve your itinerary and we handle flights, visas, forex, stays, and logistics.' },
  { n: '04', title: 'Travel with Support', text: 'Depart with confidence backed by expert guides and 24/7 ground support.' },
]

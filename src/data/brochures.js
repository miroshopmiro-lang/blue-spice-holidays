// Single source of truth for all Blue Spice Holidays brochures.
//
// The /brochures page renders them organized in menu-connected categories;
// individual Holidays / Services / Special Tours pages render only the brochures
// tagged for that specific route.

export const BROCHURES = [
  // -------------------------------------------------------------
  // 1. HOLIDAYS & DESTINATIONS
  // -------------------------------------------------------------
  {
    id: 'group-tour',
    title: 'Group Tours & Community Journeys',
    category: 'holidays',
    categoryLabel: 'Holidays & Group Journeys',
    src: '/brochures/group-tour.jpeg',
    alt: 'Blue Spice Holidays Group Tour brochure — Friends getaways, family vacations, corporate outings, school and college trips',
    routes: ['/holidays', '/holidays/domestic', '/holidays/international', '/holidays/group'],
  },
  {
    id: 'central-kerala',
    title: 'Central Kerala (Kochi, Munnar, Thekkady, Alleppey)',
    category: 'holidays',
    categoryLabel: 'Holidays & Group Journeys',
    src: '/brochures/central-kerala.jpeg',
    alt: 'Blue Spice Holidays Central Kerala brochure — Kochi, Munnar, Thekkady and Alleppey',
    routes: ['/holidays', '/holidays/domestic'],
  },
  {
    id: 'kashmir',
    title: 'Kashmir Paradise Valley',
    category: 'holidays',
    categoryLabel: 'Holidays & Group Journeys',
    src: '/brochures/kashmir.jpeg',
    alt: 'Blue Spice Holidays Kashmir brochure — Srinagar, Dal Lake, Gulmarg and Pehelgam',
    routes: ['/holidays', '/holidays/domestic'],
  },
  {
    id: 'andaman',
    title: 'Amazing Andaman Islands',
    category: 'holidays',
    categoryLabel: 'Holidays & Group Journeys',
    src: '/brochures/andaman.jpeg',
    alt: 'Blue Spice Holidays Amazing Andaman brochure — Havelock Island, Port Blair, Radhanagar Beach, Cellular Jail',
    routes: ['/holidays', '/holidays/domestic'],
  },
  {
    id: 'nepal',
    title: 'Explore Nepal Tour',
    category: 'holidays',
    categoryLabel: 'Holidays & Group Journeys',
    src: '/brochures/nepal.jpeg',
    alt: 'Blue Spice Holidays Explore Nepal brochure — Lumbini, Pokhra, Phewa Lake, Kathmandu, Boudhanath Stupa',
    routes: ['/holidays', '/holidays/international', '/holidays/spiritual'],
  },
  {
    id: 'london',
    title: 'Explore London & UK Escapes',
    category: 'holidays',
    categoryLabel: 'Holidays & Group Journeys',
    src: '/brochures/london.jpeg',
    alt: 'Blue Spice Holidays Explore London brochure — Buckingham Palace, Wembley Stadium, London Bridge, London Eye',
    routes: ['/holidays', '/holidays/international'],
  },
  {
    id: 'office-tour',
    title: 'Office Tours & Corporate Offsites',
    category: 'holidays',
    categoryLabel: 'Holidays & Group Journeys',
    src: '/brochures/office-tour.jpeg',
    alt: 'Blue Spice Holidays Office Tour brochure — team bonding, fun activities, campfire and music',
    routes: ['/holidays', '/holidays/office'],
  },

  // -------------------------------------------------------------
  // 2. TRAVEL SERVICES & VISAS
  // -------------------------------------------------------------
  {
    id: 'all-services',
    title: 'Resort, Flight, Visa & Forex Services',
    category: 'services',
    categoryLabel: 'Travel Services & Assistance',
    src: '/brochures/all-services.jpeg',
    alt: 'Blue Spice Holidays Travel Services brochure — Resort Booking, Flight Booking, Tourist Visa Assistance, Forex Assistance',
    routes: ['/services', '/services/flights', '/services/forex', '/services/visas', '/contact', '/flights', '/forex'],
  },
  {
    id: 'celebrations',
    title: 'Anniversary, Birthday & Yacht Parties',
    category: 'services',
    categoryLabel: 'Travel Services & Assistance',
    src: '/brochures/celebrations-anniversary-birthday-yacht.jpeg',
    alt: 'Blue Spice Holidays celebrations brochure — anniversary party, birthday party and yacht party planning',
    routes: [
      '/services',
      '/services/anniversary',
      '/services/birthday',
      '/services/yacht-parties',
      '/services/events',
    ],
  },
  {
    id: 'destination-weddings',
    title: 'Destination Weddings & Venue Curation',
    category: 'services',
    categoryLabel: 'Travel Services & Assistance',
    src: '/brochures/destination-weddings.jpeg',
    alt: 'Blue Spice Holidays Destination Weddings brochure — resorts, venues, planning, catering, decor and guest management',
    routes: ['/services', '/services/destination-weddings'],
  },

  // -------------------------------------------------------------
  // 3. SPECIALTY & EXPERIENTIAL TOURS
  // -------------------------------------------------------------
  {
    id: 'spiritual-tour',
    title: 'Spiritual Tours & Sacred Yatras',
    category: 'special-tours',
    categoryLabel: 'Specialty & Signature Tours',
    src: '/brochures/spiritual-tour.jpeg',
    alt: 'Blue Spice Holidays Spiritual Tour brochure — Guruvayur Temple, Sree Padmanabha Swamy Temple, Banaras, Chardham Yatra',
    routes: ['/special-tours', '/special-tours/spiritual', '/spiritual-tours'],
  },
  {
    id: 'honeymoon-tour',
    title: 'Honeymoon & Romantic Getaways',
    category: 'special-tours',
    categoryLabel: 'Specialty & Signature Tours',
    src: '/brochures/honeymoon-tour.jpeg',
    alt: 'Blue Spice Holidays Honeymoon Tour brochure — Candle light dinners, room decoration, romantic stays, tailor-made couples experiences',
    routes: ['/special-tours', '/special-tours/destination-weddings', '/destination-weddings'],
  },
  {
    id: 'special-kitchen-tour',
    title: 'Special Kitchen Tour (Live Home-Style Food)',
    category: 'special-tours',
    categoryLabel: 'Specialty & Signature Tours',
    src: '/brochures/special-kitchen-tour.jpeg',
    alt: 'Blue Spice Holidays Kitchen Tour brochure — Taste of home, live home cooking, Jain & vegetarian options for group tours',
    routes: ['/special-tours', '/special-tours/ladies-only', '/ladies-tours'],
  },
  {
    id: 'ladies-only-tour',
    title: 'Ladies Only Escapes',
    category: 'special-tours',
    categoryLabel: 'Specialty & Signature Tours',
    src: '/brochures/ladies-only-tour.jpeg',
    alt: 'Blue Spice Holidays Ladies Only Tour brochure — women-only groups, female tour managers, handpicked stays',
    routes: ['/special-tours', '/special-tours/ladies-only', '/ladies-tours', '/holidays/ladies'],
  },
  {
    id: 'senior-citizen-tour',
    title: 'Senior Citizens Friendly Tours',
    category: 'special-tours',
    categoryLabel: 'Specialty & Signature Tours',
    src: '/brochures/senior-citizen-tour.jpeg',
    alt: 'Blue Spice Holidays Senior Citizens Tour brochure — senior friendly itineraries, wheelchair assistance, care taker available',
    routes: ['/special-tours', '/holidays/senior-citizen'],
  },
  {
    id: 'school-college-industrial-tours',
    title: 'School, College & Industrial Visits',
    category: 'special-tours',
    categoryLabel: 'Specialty & Signature Tours',
    src: '/brochures/school-college-industrial-tours.jpeg',
    alt: 'Blue Spice Holidays School Tours, College Tours and Industrial Visits brochure — group travel for students and institutions',
    routes: ['/special-tours', '/holidays/educational', '/holidays/group'],
  },
  {
    id: 'celebrity-diplomatic-tour',
    title: 'Celebrity, Diplomatic & VIP Security Tours',
    category: 'special-tours',
    categoryLabel: 'Specialty & Signature Tours',
    src: '/brochures/celebrity-diplomatic-tour.jpeg',
    alt: 'Blue Spice Holidays Celebrity Tour and Diplomatic Tour brochure — VIP airport assistance, protocol handling, bouncers available',
    routes: [
      '/special-tours',
      '/special-tours/celebrity',
      '/special-tours/diplomats',
      '/special-tours/bouncers',
    ],
  },
];

// CATEGORIES CONFIGURATION FOR THE BROCHURES PAGE
export const BROCHURE_CATEGORIES = [
  {
    id: 'all',
    title: 'All Brochures',
    description: 'Explore our complete library of travel itineraries, services, and specialty guides.',
  },
  {
    id: 'holidays',
    title: 'Holidays & Group Journeys',
    description: 'Domestic & international group packages, hill stations, islands, and corporate offsites.',
    linkedRoute: '/holidays',
    menuLabel: 'Holidays Menu',
  },
  {
    id: 'services',
    title: 'Travel Services & Assistance',
    description: 'Resort bookings, flight tickets, visa assistance, forex, events, and wedding venues.',
    linkedRoute: '/services',
    menuLabel: 'Services Menu',
  },
  {
    id: 'special-tours',
    title: 'Specialty & Signature Tours',
    description: 'Spiritual Yatras, Honeymoon packages, Kitchen Tours, Ladies-only escapes, and VIP tours.',
    linkedRoute: '/special-tours',
    menuLabel: 'Special Tours Menu',
  },
];

// Brochures to show on a given page
export function brochuresForRoute(pathname) {
  return BROCHURES.filter((b) => b.routes.includes(pathname));
}

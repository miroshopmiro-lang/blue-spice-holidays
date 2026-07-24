// Single source of truth for the brochures the client has sent us.
//
// The /brochures page renders all of them; individual Holidays / Services /
// SPL Tour pages render only the ones tagged for that page, so a visitor
// reading about e.g. Office Tours sees the Office Tour brochure right there
// instead of having to go hunting in the Brochures tab.
//
// `routes` holds the exact pathnames a brochure should surface on. One brochure
// can appear on several pages — the celebrations sheet covers anniversary,
// birthday and yacht parties on one page, so it is tagged for all of them.
// Titles below describe what is actually printed on each sheet; nothing here is
// invented copy.

export const BROCHURES = [
  {
    id: 'office-tour',
    title: 'Office Tours & Corporate Offsites',
    src: '/brochures/office-tour.jpeg',
    alt: 'Blue Spice Holidays Office Tour brochure — team bonding, fun activities, campfire and music',
    routes: ['/holidays/office'],
  },
  {
    id: 'senior-citizen-tour',
    title: 'Senior Citizens Tour',
    src: '/brochures/senior-citizen-tour.jpeg',
    alt: 'Blue Spice Holidays Senior Citizens Tour brochure — senior friendly itineraries, wheelchair assistance, care taker available',
    routes: ['/holidays/senior-citizen'],
  },
  {
    id: 'ladies-only-tour',
    title: 'Ladies Only Tour',
    src: '/brochures/ladies-only-tour.jpeg',
    alt: 'Blue Spice Holidays Ladies Only Tour brochure — women-only groups, female tour managers, handpicked stays',
    routes: ['/holidays/ladies'],
  },
  {
    id: 'school-college-industrial-tours',
    title: 'School, College & Industrial Visits',
    src: '/brochures/school-college-industrial-tours.jpeg',
    alt: 'Blue Spice Holidays School Tours, College Tours and Industrial Visits brochure — group travel for students and institutions',
    routes: ['/holidays/educational', '/holidays/group'],
  },
  {
    id: 'celebrity-diplomatic-tour',
    title: 'Celebrity & Diplomatic Tours',
    src: '/brochures/celebrity-diplomatic-tour.jpeg',
    alt: 'Blue Spice Holidays Celebrity Tour and Diplomatic Tour brochure — VIP airport assistance, protocol handling, bouncers available',
    routes: [
      '/special-tours/celebrity',
      '/special-tours/diplomats',
      '/special-tours/bouncers',
    ],
  },
  {
    id: 'celebrations',
    title: 'Anniversary, Birthday & Yacht Parties',
    src: '/brochures/celebrations-anniversary-birthday-yacht.jpeg',
    alt: 'Blue Spice Holidays celebrations brochure — anniversary party, birthday party and yacht party planning',
    routes: [
      '/services/anniversary',
      '/services/birthday',
      '/services/yacht-parties',
      '/services/events',
    ],
  },
  {
    id: 'destination-weddings',
    title: 'Destination Weddings',
    src: '/brochures/destination-weddings.jpeg',
    alt: 'Blue Spice Holidays Destination Weddings brochure — resorts, venues, planning, catering, decor and guest management',
    routes: ['/services/destination-weddings'],
  },
  {
    id: 'nepal',
    title: 'Nepal Tour',
    src: '/brochures/nepal.jpeg',
    alt: 'Blue Spice Holidays Explore Nepal brochure — Lumbini, Pokhra, Phewa Lake, Kathmandu, Boudhanath Stupa',
    routes: ['/holidays/international', '/holidays/spiritual'],
  },
  {
    id: 'london',
    title: 'London',
    src: '/brochures/london.jpeg',
    alt: 'Blue Spice Holidays Explore London brochure — Buckingham Palace, Wembley Stadium, London Bridge, London Eye',
    routes: ['/holidays/international'],
  },
  {
    id: 'central-kerala',
    title: 'Central Kerala',
    src: '/brochures/central-kerala.jpeg',
    alt: 'Blue Spice Holidays Central Kerala brochure — Kochi, Munnar, Thekkady and Alleppey',
    routes: ['/holidays/domestic'],
  },
  {
    id: 'kashmir',
    title: 'Kashmir',
    src: '/brochures/kashmir.jpeg',
    alt: 'Blue Spice Holidays Kashmir brochure — Srinagar, Dal Lake, Gulmarg and Pehelgam',
    routes: ['/holidays/domestic'],
  },
  {
    id: 'andaman',
    title: 'Andaman',
    src: '/brochures/andaman.jpeg',
    alt: 'Blue Spice Holidays Amazing Andaman brochure — Havelock Island, Port Blair, Radhanagar Beach, Cellular Jail',
    routes: ['/holidays/domestic'],
  },
];

// Brochures to show on a given page, in the order declared above.
export function brochuresForRoute(pathname) {
  return BROCHURES.filter((b) => b.routes.includes(pathname));
}

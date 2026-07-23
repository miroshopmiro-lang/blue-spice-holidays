// Single source of truth for site navigation.
// Header (desktop mega menu + mobile accordion) and Footer both render from this file
// so the two navs can never drift apart.

export const MEGA_MENUS = [
  {
    id: 'holidays',
    label: 'Holidays',
    path: '/holidays',
    children: [
      { label: 'International Tours', path: '/holidays/international' },
      { label: 'Domestic Tours', path: '/holidays/domestic' },
      { label: 'Ladies Tours', path: '/holidays/ladies' },
      { label: 'Senior Citizen Tours', path: '/holidays/senior-citizen' },
      { label: 'Group Tours', path: '/holidays/group' },
      { label: 'Honeymoon Tours', path: '/holidays/honeymoon' },
      { label: 'Office Tours', path: '/holidays/office' },
      { label: 'School, College & Educational Tours', path: '/holidays/educational' },
      { label: 'Spiritual Tours', path: '/holidays/spiritual' },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Resort & Hotel Booking', path: '/services/hotels' },
      { label: 'Flight Booking', path: '/services/flights' },
      { label: 'Tourist Visa Assistance', path: '/services/visa' },
      { label: 'Forex Assistance', path: '/services/forex' },
      { label: 'Destination Wedding', path: '/services/destination-weddings' },
      { label: 'Events', path: '/services/events' },
      { label: 'Conference', path: '/services/conferences' },
      { label: 'Anniversary Function', path: '/services/anniversary' },
      { label: 'Birthday Party', path: '/services/birthday' },
      { label: 'Yacht Parties', path: '/services/yacht-parties' },
    ],
  },
  {
    id: 'special-tours',
    label: 'SPL Tour',
    path: '/special-tours',
    children: [
      { label: 'Celebrity Tours', path: '/special-tours/celebrity' },
      { label: "Diplomat's Tour", path: '/special-tours/diplomats' },
      { label: 'Bouncers for VIPs & Celebrities', path: '/special-tours/bouncers' },
      { label: 'SPL Kitchen Tours for Groups', path: '/special-tours/kitchen-tours' },
    ],
  },
];

// Single flat link shown at top level alongside the mega menus.
export const FLAT_LINKS = [
  { id: 'gallery', label: 'Gallery', path: '/gallery' },
];

// Folded under a "More" trigger on desktop so the bar doesn't run out of room.
export const OVERFLOW_LINKS = [
  { id: 'brochures', label: 'Brochures', path: '/brochures' },
  { id: 'about', label: 'About Us', path: '/about' },
  { id: 'contact', label: 'Contact Us', path: '/contact' },
  { id: 'collaborate', label: 'Collaborate With Us', path: '/collaborate' },
  { id: 'refer', label: 'Refer Us', path: '/refer' },
];

// Pages that exist but aren't part of the client's 9-menu spec — kept reachable via footer only.
export const FOOTER_ONLY_LINKS = [
  { label: 'Wellness Retreats', path: '/wellness' },
  { label: 'Cruises', path: '/cruises' },
];

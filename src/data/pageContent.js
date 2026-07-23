// Content for the 16 category pages that don't have a bespoke hand-built page.
// Deliberately generic marketing copy only — no invented prices, durations, named
// itineraries or testimonials. Those get added once Blue Spice sends real package
// details for each category; until then the page still works end-to-end (hero +
// highlights + working enquiry form).

export const PAGE_CONTENT = {
  holidays: {
    'senior-citizen': {
      eyebrow: 'Comfort-First Travel',
      title: 'Senior Citizen Tours, Paced for Comfort',
      lead: 'Slow-paced itineraries with shorter travel legs, accessible stays, and a team that never rushes a departure.',
      image: '/images/kashmir.webp',
      highlights: [
        'Relaxed day-by-day pacing with built-in rest windows',
        'Wheelchair and low-mobility support arranged on request',
        'Low-height vehicles and ground-floor or lift-access rooms',
        'A single point of contact reachable throughout the trip',
      ],
    },
    group: {
      eyebrow: 'Group Curation',
      title: 'Group Tours, Coordinated Without the Chaos',
      lead: 'From college friend circles to large family reunions, we handle group logistics, room blocks, and coach transfers as one coordinated plan.',
      image: '/images/luxury-coach.webp',
      highlights: [
        'Bulk accommodation blocks with group rates',
        'Coach and multi-vehicle transfers kept in sync',
        'One itinerary, one point of contact for the whole group',
        'Flexible group sizes, from 10 to 100+',
      ],
    },
    honeymoon: {
      eyebrow: 'Honeymoon Curation',
      title: 'Honeymoon Tours, Designed Around Privacy',
      lead: 'Quiet stays, private transfers, and itineraries with room to slow down — built for couples, not crowds.',
      image: '/images/maldives.webp',
      highlights: [
        'Private transfers and candlelight dinner arrangements on request',
        'Curated stays selected for privacy and setting',
        'Loosely paced days with no mandatory group schedules',
        'Optional add-ons: spa, sunset cruises, private excursions',
      ],
    },
    office: {
      eyebrow: 'Corporate Curation',
      title: 'Office Tours & Corporate Offsites',
      lead: 'Team offsites and incentive trips run on predictable logistics, so the focus stays on the team, not the travel admin.',
      image: '/images/services/corporate.webp',
      highlights: [
        'Policy-aligned booking with clear, consolidated billing',
        'Meeting-ready venues and breakout spaces on request',
        'Group activity and team-building add-ons',
        'One coordinator for the full delegation, start to finish',
      ],
    },
    educational: {
      eyebrow: 'Educational Curation',
      title: 'School, College & Institutional Tours',
      lead: 'Heritage, history and nature-focused itineraries for student groups, with the safety and supervision institutions require.',
      image: '/images/taj-mahal.webp',
      highlights: [
        'Age-appropriate, education-focused itinerary design',
        'Dedicated chaperone coordination with faculty',
        'Verified accommodation and transport safety standards',
        'Group rates for institutional bookings',
      ],
    },
  },

  services: {
    hotels: {
      eyebrow: 'Stay Curation',
      title: 'Resort & Hotel Booking',
      lead: 'From boutique heritage stays to full resorts, we shortlist and book properties that match how you actually want to travel.',
      image: '/images/services/holidays.webp',
      highlights: [
        'Curated shortlist matched to budget and travel style',
        'Direct property relationships for room upgrades where possible',
        'Special requests (dietary, accessibility, connecting rooms) handled upfront',
        'One booking confirmation across multi-city stays',
      ],
    },
    visa: {
      eyebrow: 'Documentation Support',
      title: 'Tourist Visa Assistance',
      lead: 'Application checklists, document review, and appointment coordination handled so deadlines are never at risk.',
      image: '/images/services/visa.webp',
      highlights: [
        'Country-specific document checklists',
        'Application and appointment scheduling support',
        'Status tracking until the visa is in hand',
        'Guidance for individual, family and group applications',
      ],
    },
    events: {
      eyebrow: 'Event Production',
      title: 'Events, Planned End to End',
      lead: 'Venue sourcing, vendor coordination, and on-ground execution for private and corporate events alike.',
      image: '/images/Conferences,meeting.training.webp',
      highlights: [
        'Venue sourcing and vendor coordination',
        'On-ground event day management',
        'Guest logistics: transport, stay, and hospitality',
        'Scales from intimate gatherings to large events',
      ],
    },
    conferences: {
      eyebrow: 'MICE Curation',
      title: 'Conference & MICE Logistics',
      lead: 'Meeting-ready venues, delegate travel, and production support for conferences and corporate gatherings.',
      image: '/images/services/corporate.webp',
      highlights: [
        'Venue sourcing with AV and breakout space requirements',
        'Delegate travel and accommodation coordinated centrally',
        'On-site production and logistics support',
        'Consolidated billing for finance teams',
      ],
    },
    anniversary: {
      eyebrow: 'Celebration Curation',
      title: 'Anniversary Function Planning',
      lead: 'Milestone celebrations planned around the venue, guest list, and details that make the day feel personal.',
      image: '/images/bali.webp',
      highlights: [
        'Venue and catering coordination',
        'Décor and theming arranged through vetted vendors',
        'Guest travel and stay support for out-of-town families',
        'Flexible for intimate or large celebrations',
      ],
    },
    birthday: {
      eyebrow: 'Celebration Curation',
      title: 'Birthday Party Planning',
      lead: 'From themed venues to full guest logistics, birthday celebrations planned so you get to actually attend your own party.',
      image: '/images/dubai.webp',
      highlights: [
        'Venue sourcing matched to theme and guest count',
        'Catering and entertainment vendor coordination',
        'Guest travel support for destination celebrations',
        'Planning for kids\', milestone, and adult celebrations',
      ],
    },
    'yacht-parties': {
      eyebrow: 'On-Water Curation',
      title: 'Yacht Parties',
      lead: 'Private charters and on-water celebrations arranged with catering, crew, and route planned in advance.',
      image: '/images/goa_cruise.webp',
      highlights: [
        'Private yacht charters for small and large groups',
        'On-board catering and beverage arrangements',
        'Route and duration planned around the occasion',
        'Available across multiple coastal and island destinations',
      ],
    },
  },

  'special-tours': {
    celebrity: {
      eyebrow: 'VIP Curation',
      title: 'Celebrity Tours',
      lead: 'Discreet, high-touch travel arrangements for celebrities and high-profile guests, coordinated end to end.',
      image: '/images/luxury -car.webp',
      highlights: [
        'Discreet airport meet & assist',
        'Private transport and secured accommodation',
        'Confidential itinerary handling',
        'Dedicated on-ground coordinator throughout the visit',
      ],
    },
    diplomats: {
      eyebrow: 'VIP Curation',
      title: "Diplomat's Tour",
      lead: 'Protocol-aware travel arrangements for diplomatic delegations, coordinated with the discretion the role requires.',
      image: '/images/services/corporate.webp',
      highlights: [
        'Protocol-aware itinerary and transport planning',
        'Secure, private accommodation arrangements',
        'Coordination with delegation security teams',
        'Dedicated single point of contact for the visit',
      ],
    },
    bouncers: {
      eyebrow: 'Executive Protection',
      title: 'Bouncers for VIPs, Celebrities & Diplomats',
      lead: 'Professional, vetted security personnel arranged for high-profile guests and events.',
      image: '/images/bouncer.webp',
      highlights: [
        'Vetted, professional security personnel',
        'Event and personal protection coverage',
        'Coordinated with venue and travel security teams',
        'Available for short engagements and full-tour coverage',
      ],
    },
    'kitchen-tours': {
      eyebrow: 'Culinary Curation',
      title: 'SPL Kitchen Tours for Groups',
      lead: 'Guided culinary experiences for groups wanting to go beyond sightseeing into the region\'s food culture.',
      image: '/images/kerala.webp',
      highlights: [
        'Local kitchen and market visits guided by regional hosts',
        'Group-sized culinary sessions and tastings',
        'Dietary and catering preferences accommodated',
        'Paired with sightseeing itineraries on request',
      ],
    },
  },
};

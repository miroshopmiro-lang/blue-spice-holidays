export const PACKAGE_CATEGORIES = [
  'All',
  'Family Heritage',
  'Couples Escapes',
  'Adventure Curation',
];

export const CURATED_PACKAGES = [
  {
    id: 1,
    title: "Misty Hills & Spice Plantations of Munnar",
    location: "Kerala",
    duration: "5 Nights / 6 Days",
    rating: "4.9",
    reviews: "42",
    tag: "Couples Escapes",
    price: "₹32,500",
    inclusions: "Private Chauffeur, Heritage Bungalows, Tea Trails Guide",
    image: "/images/munnar.webp",
    metadata: { stay: "Heritage Bungalows", driver: "Private Chauffeur", guide: "Tea Trails Guide" },
    itinerary: [
      { day: 1, title: "Arrival & Tea Country Drive", detail: "Private transfer into the hills, evening at a colonial tea bungalow." },
      { day: 2, title: "Spice Plantation Walk", detail: "Guided morning through cardamom and pepper estates with a resident planter." },
      { day: 3, title: "Eravikulam & Misty Trails", detail: "Early national park visit, slow afternoon by the lake." },
      { day: 4, title: "Tea Tasting & Local Kitchen", detail: "Factory tour, hands-on Kerala cooking session with a homestay family." },
      { day: 5, title: "Free Day at Your Pace", detail: "Optional backwater add-on or a quiet day at the estate." },
      { day: 6, title: "Departure", detail: "Unhurried breakfast and assisted transfer to your onward journey." },
    ],
    accommodations: "Restored tea-estate bungalows and boutique hill homestays.",
  },
  {
    id: 2,
    title: "Royal Forts & Desert Camps of Rajasthan",
    location: "Rajasthan",
    duration: "7 Nights / 8 Days",
    rating: "4.8",
    reviews: "56",
    tag: "Family Heritage",
    price: "₹48,900",
    inclusions: "Palace Stays, Private Jeep Safari, Local Scholar Guides",
    image: "/images/rajasthan.webp",
    metadata: { stay: "Palace & Haveli Stays", driver: "Private Chauffeur", guide: "Local Scholar Guides" },
    itinerary: [
      { day: 1, title: "Arrival in the Pink City", detail: "Settle into a heritage haveli, evening rooftop welcome." },
      { day: 2, title: "Amber Fort & Old City", detail: "Scholar-led tour of forts, stepwells and artisan quarters." },
      { day: 3, title: "Drive to Jodhpur", detail: "Scenic transfer, evening in the blue lanes below Mehrangarh." },
      { day: 4, title: "Mehrangarh & Markets", detail: "Private fort access and a family spice-market walk." },
      { day: 5, title: "Into the Desert", detail: "Jeep safari to dunes, luxury desert camp under the stars." },
      { day: 6, title: "Jaisalmer Living Fort", detail: "Golden-stone ramparts and Jain temple curation." },
      { day: 7, title: "Free Day", detail: "Camel cart, folk evening or simply rest at the camp." },
      { day: 8, title: "Departure", detail: "Assisted transfer onward." },
    ],
    accommodations: "Converted palaces, family-run havelis and a private desert camp.",
  },
  {
    id: 3,
    title: "Ladakh High Passes & Monasteries Route",
    location: "Ladakh",
    duration: "6 Nights / 7 Days",
    rating: "4.9",
    reviews: "38",
    tag: "Adventure Curation",
    price: "₹42,000",
    inclusions: "Acclimatized Camp Stays, 4x4 Transfers, Local Spotters",
    image: "/images/ladakh.webp",
    metadata: { stay: "Acclimatized Camps", driver: "4x4 Transfers", guide: "Local Spotters" },
    itinerary: [
      { day: 1, title: "Arrive Leh & Acclimatize", detail: "Gentle first day, slow walk through the old town." },
      { day: 2, title: "Monasteries of the Indus", detail: "Thiksey and Hemis with a local Buddhist scholar." },
      { day: 3, title: "Nubra Valley Crossing", detail: "Khardung La pass, camp beside the dunes of Hunder." },
      { day: 4, title: "Pangong Lake", detail: "4x4 route to the high-altitude lake, lakeside camp." },
      { day: 5, title: "Hidden Villages", detail: "Quiet hamlets and high passes with local spotters." },
      { day: 6, title: "Return to Leh", detail: "Rest, markets and a farewell dinner." },
      { day: 7, title: "Departure", detail: "Assisted transfer to Leh airport." },
    ],
    accommodations: "Boutique Leh guesthouses and acclimatized luxury camps.",
  },
  {
    id: 4,
    title: "Himachal Spectacular (Shimla & Manali)",
    location: "Himachal",
    duration: "5 Nights / 6 Days",
    rating: "4.8",
    reviews: "29",
    tag: "Family Heritage",
    price: "₹31,500",
    inclusions: "Valley Resorts, Private SUV Transfer, Local Guide Curation",
    image: "/images/himachal.webp",
    metadata: { stay: "Valley Resorts", driver: "Private SUV", guide: "Local Guides" },
    itinerary: [
      { day: 1, title: "Arrive Shimla", detail: "Transfer from Chandigarh, settle into your valley view resort, evening walk on Mall Road." },
      { day: 2, title: "Kufri & Ridge Curation", detail: "Explore Kufri cedar forests and heritage colonial ridge buildings." },
      { day: 3, title: "Shimla to Manali Drive", detail: "Scenic transfer along Beas river, check into riverside cottages." },
      { day: 4, title: "Solang Valley Adventure", detail: "Paragliding and snow activities, visit ancient Hadimba temple." },
      { day: 5, title: "Atal Tunnel & Rohtang Pass", detail: "Cross the high tunnel, explore snow-draped valleys at Rohtang." },
      { day: 6, title: "Departure", detail: "Return transfer to Chandigarh airport." }
    ],
    accommodations: "Boutique Shimla cottages and luxury riverside Manali resorts."
  },
  {
    id: 5,
    title: "Thailand Beaches & Bangkok Getaway",
    location: "Thailand",
    duration: "5 Nights / 6 Days",
    rating: "4.9",
    reviews: "45",
    tag: "Couples Escapes",
    price: "₹38,900",
    inclusions: "4-Star Hotels, Private Island Tour, Dual City Transfers",
    image: "/images/thailand-phiphi.webp",
    metadata: { stay: "Boutique Beachfront Hotels", driver: "Private Car", guide: "Local City Curation" },
    itinerary: [
      { day: 1, title: "Arrive Phuket", detail: "Private airport pickup, evening sunset walk on Patong beach." },
      { day: 2, title: "Phi Phi Islands Speedboat Tour", detail: "Snorkel in Maya Bay, lunch on Phi Phi Don, explore coral reefs." },
      { day: 3, title: "Phuket to Bangkok", detail: "Internal flight transfer, evening dinner cruise on Chao Phraya river." },
      { day: 4, title: "Bangkok Temples Curation", detail: "Guided visits to Golden Buddha & Wat Pho temples, shopping time." },
      { day: 5, title: "Safari World Adventure", detail: "Day excursion to safari parks and marine showcases." },
      { day: 6, title: "Departure", detail: "Assisted transfer to Suvarnabhumi airport." }
    ],
    accommodations: "Premium beach resorts in Phuket and luxury high-rise hotels in Bangkok."
  },
  {
    id: 6,
    title: "Singapore City Getaway & Sentosa Curation",
    location: "Singapore",
    duration: "4 Nights / 5 Days",
    rating: "4.9",
    reviews: "38",
    tag: "Family Heritage",
    price: "₹62,000",
    inclusions: "High-Rise Hotels, Sentosa Fun Pass, Night Safari VIP Access",
    image: "/images/singapore.webp",
    metadata: { stay: "City Center Hotels", driver: "MRT Pass & Coach", guide: "VIP Attractions Access" },
    itinerary: [
      { day: 1, title: "Arrive Singapore & Night Safari", detail: "Check into your hotel, evening tram ride through the world’s first night zoo." },
      { day: 2, title: "Gardens by the Bay & Marina Bay", detail: "Visit Flower Dome, Cloud Forest, and walk the Supertree observatory." },
      { day: 3, title: "Sentosa Island Day Out", detail: "Cable car ride, S.E.A. Aquarium visit, and Wings of Time sunset show." },
      { day: 4, title: "Universal Studios Singapore", detail: "All-day pass to ride film-themed rollercoasters and explore zones." },
      { day: 5, title: "Departure", detail: "Transfer to Jewel Changi airport for shopping and flight connection." }
    ],
    accommodations: "4-star luxury hotels centrally located in Orchard Road or Marina Bay."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "We had an absolutely wonderful experience with Blue Spice Holidays on our trip to Thailand! From flights and hotels to daily tours, everything was perfectly organized. The team was professional, responsive, and attentive to every detail. Highly recommended for anyone planning an international vacation!",
    author: "Shobhit Vishal",
    city: "Delhi",
    trip: "Thailand Family Getaway",
    date: "December 2025",
    photo: "/images/avatar-shobhit.webp"
  },
  {
    id: 2,
    quote: "Great experience with the Blue Spice team. We did a huge group booking and they treated each one of us like family. They travelled with us till 3 am every day with a smile. 100% recommend.",
    author: "Keshava Narayan",
    city: "Bangalore",
    trip: "Corporate Group Retreat",
    date: "September 2025",
    photo: "/images/avatar-keshava.webp"
  },
  {
    id: 3,
    quote: "We booked a Kerala tour through Blue Spice Holidays. Very friendly and proactive group. Nimesh bhai personally addresses all queries. The cars and drivers are great. A memorable trip - we love it!",
    author: "Ameena Sarfani",
    city: "Ahmedabad",
    trip: "Kerala Heritage Tour",
    date: "October 2025",
    photo: "/images/avatar-proof-3.webp"
  }
];

export const DESTINATIONS = [
  // Matches blue-spice-inspo popular destination images for overlapping names.
  // Keep rebuild-only destinations as-is (e.g., Rajasthan, Maldives, Georgia, Agra & Taj Mahal).
  { id: 'kerala', name: 'Kerala', categories: ['India'], tagline: 'Backwaters, stillness, and unhurried luxury.', image: '/images/munnar.webp' },
  { id: 'rajasthan', name: 'Rajasthan', categories: ['India'], tagline: 'Fortresses, royalty, and glowing desert dunes.', image: '/images/rajasthan.webp' },
  { id: 'manali', name: 'Manali', categories: ['India'], tagline: 'Mountain air, mapped to your pace.', image: '/images/himachal.webp' },
  { id: 'gangtok', name: 'Gangtok', categories: ['India'], tagline: 'Himalayan calm, elevated.', image: '/images/gangtok.webp' },
  { id: 'kashmir', name: 'Kashmir', categories: ['India'], tagline: 'Alpine grandeur with five-star comfort.', image: '/images/kashmir.webp' },
  { id: 'dubai', name: 'Dubai', categories: ['International'], tagline: 'Where ambition meets indulgence.', image: '/images/dubai.webp' },
  { id: 'thailand', name: 'Thailand', categories: ['International'], tagline: 'Pristine coastlines curated for you.', image: '/images/thailand-phiphi.webp' },
  { id: 'maldives', name: 'Maldives', categories: ['International'], tagline: 'Island serenity, expertly held.', image: '/images/maldives.webp' },
  { id: 'bali', name: 'Bali', categories: ['International'], tagline: 'Sanctuary, temple ceremonies, and sea.', image: '/images/bali.webp' },
  { id: 'singapore', name: 'Singapore', categories: ['International'], tagline: 'Precision, polish, and metropolitan pace.', image: '/images/singapore.webp' },
  { id: 'andaman', name: 'Andaman', categories: ['India', 'Trending'], tagline: 'Private shores and turquoise solitude.', image: '/images/andaman.webp' },
  { id: 'vietnam', name: 'Vietnam', categories: ['International', 'Trending'], tagline: 'Heritage and green horizon in one journey.', image: '/images/vietnam.webp' },
  { id: 'georgia', name: 'Georgia', categories: ['International', 'Trending'], tagline: 'Old-world charm, new-world ease.', image: '/images/georgia.webp' },
  { id: 'taj-mahal', name: 'Agra & Taj Mahal', categories: ['India', 'Trending'], tagline: 'Sunrise over white marble, timeless love.', image: '/images/taj-mahal.webp' }
];

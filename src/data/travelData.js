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
  },
  {
    id: 7,
    title: "Classic London Discovery & City Curation",
    location: "London, UK",
    duration: "6 Nights / 7 Days",
    rating: "4.9",
    reviews: "32",
    tag: "Couples Escapes",
    price: "On Request",
    inclusions: "Bespoke Accommodations, Wembley Stadium Pass, River Cruise, In association with Rediscover Tourism",
    image: "/images/london.webp",
    metadata: { stay: "Premium Hotel Stays", driver: "Airport Transfers & City Tour", guide: "Rediscover Tourism Curation" },
    itinerary: [
      { day: 1, title: "Welcome to London", detail: "Warm welcome and private transfer from London airport to your premium accommodation." },
      { day: 2, title: "Wembley & Ealing Road Curation", detail: "Day trip to the world-famous Wembley Stadium, beautiful Hindu temples, and boutique shopping on Ealing Road (the 'Delhi of UK'). Experience London's iconic nightlife in the evening." },
      { day: 3, title: "Historic Westminster & London Eye", detail: "Guided day trip to Westminster Abbey, Houses of Parliament, Parliament Square, Big Ben, and a flight on the iconic London Eye." },
      { day: 4, title: "Royal Palaces & Squares", detail: "Excursion to Buckingham Palace, Trafalgar Square, National Gallery, and the lively Leicester Square." },
      { day: 5, title: "Hyde Park & Science Museum", detail: "Unwind at Hyde Park, stroll through Covent Garden's markets, and explore the interactive exhibits at the Science Museum." },
      { day: 6, title: "Royal Park Leisure & River Cruise", detail: "A relaxing day in the Royal Parks followed by an enchanting River Thames cruise to view the city skyline." },
      { day: 7, title: "Farewell London", detail: "Private transfer from your accommodation to the airport. End of your 7-day tour with happy memories." }
    ],
    accommodations: "Curated premium accommodations in central London, organized in association with our UK partner Rediscover Tourism."
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
  {
    id: 'kerala',
    name: 'Kerala',
    categories: ['India'],
    tagline: 'Backwaters, stillness, and unhurried luxury.',
    image: '/images/munnar.webp',
    sampleItinerary: [
      { day: 1, title: "Cochin Arrival & Heritage Walk", detail: "Check into a boutique Fort Kochi hotel. Explore historic spice markets and Chinese fishing nets." },
      { day: 2, title: "Drive to Munnar Tea Country", detail: "Scenic drive past cascading waterfalls into emerald tea plantations. Guided cardamom estate walk." },
      { day: 3, title: "Kumarakom Backwater Houseboat", detail: "Board a private, luxury wood-carved houseboat. Slow cruise along palm-fringed backwater canals." },
      { day: 4, title: "Departure", detail: "Unhurried breakfast on the water followed by private transfer to Kochi airport." }
    ]
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    categories: ['India'],
    tagline: 'Fortresses, royalty, and glowing desert dunes.',
    image: '/images/rajasthan.webp',
    sampleItinerary: [
      { day: 1, title: "Jaipur Pink City Welcomes", detail: "Settle into a restored royal haveli. Explore the local gemstone and textile bazaars at leisure." },
      { day: 2, title: "Amber Fort & Scholar Tour", detail: "Scholar-led tour of Amber Fort, Stepwells, and Jantar Mantar royal observatory." },
      { day: 3, title: "Desert Luxury in Jaisalmer", detail: "Drive to the Golden City, private camel safari, and sunset dinner at a luxury desert camp." },
      { day: 4, title: "Departure", detail: "Assisted transfer to Udaipur/Jodhpur for onward flights." }
    ]
  },
  {
    id: 'manali',
    name: 'Manali',
    categories: ['India'],
    tagline: 'Mountain air, mapped to your pace.',
    image: '/images/himachal.webp',
    sampleItinerary: [
      { day: 1, title: "Arrive Manali & Riverside Chalet", detail: "Check into a cozy valley chalet. Slow walk through old pine-forested lanes and local cafes." },
      { day: 2, title: "Solang Valley & Cedar Trails", detail: "Trek through majestic deodar forests and visit the ancient Hadimba Temple shrine." },
      { day: 3, title: "Rohtang Pass & Atal Tunnel", detail: "Cross the high engineering wonder into the stark, snow-capped valleys of Lahaul." },
      { day: 4, title: "Departure", detail: "Assisted private transfer back to Chandigarh airport." }
    ]
  },
  {
    id: 'gangtok',
    name: 'Gangtok',
    categories: ['India'],
    tagline: 'Himalayan calm, elevated.',
    image: '/images/gangtok.webp',
    sampleItinerary: [
      { day: 1, title: "Himalayan Drive & MG Marg", detail: "Scenic drive along the Teesta river. Evening walk on the clean, pedestrian MG Marg." },
      { day: 2, title: "Tsomgo Glacial Lake Route", detail: "Excursion to the sacred high-altitude lake at 12,400 ft and Baba Mandir border pass." },
      { day: 3, title: "Pelling Glass Skywalk", detail: "Scenic transfer to Pelling. Walk the glass bridge and explore ancient Rabdentse royal ruins." },
      { day: 4, title: "Departure", detail: "Assisted private transfer back to Bagdogra airport." }
    ]
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    categories: ['India'],
    tagline: 'Alpine grandeur with five-star comfort.',
    image: '/images/kashmir.webp',
    sampleItinerary: [
      { day: 1, title: "Srinagar Cedar Houseboat", detail: "Board a luxury hand-carved cedar houseboat on Dal Lake. Evening sunset shikara ride." },
      { day: 2, title: "Pahalgam Valley & Pines", detail: "Drive to the valley of shepherds, horse ride through pine glades, and watch the Lidder river." },
      { day: 3, title: "Gulmarg Meadow Gondola", detail: "Ride the world's highest cable car to Apharwat peak. Slow walk through wildflower meadows." },
      { day: 4, title: "Departure", detail: "Transfer to Srinagar airport for your flight home." }
    ]
  },
  {
    id: 'dubai',
    name: 'Dubai',
    categories: ['International'],
    tagline: 'Where ambition meets indulgence.',
    image: '/images/dubai.webp',
    sampleItinerary: [
      { day: 1, title: "Arrive Dubai & Burj Skyline", detail: "Private transfer to a premium hotel. Sunset at the world's highest observatory." },
      { day: 2, title: "Private Desert Safari Curation", detail: "Jeep dune bashing, sunset photography, and luxury Bedouin camp dining under stars." },
      { day: 3, title: "Heritage Al Fahidi & Souks", detail: "Slow walk through old wind-tower lanes, Abra boat ride, and spice/gold souks." },
      { day: 4, title: "Departure", detail: "Assisted transfer to Dubai International airport." }
    ]
  },
  {
    id: 'thailand',
    name: 'Thailand',
    categories: ['International'],
    tagline: 'Pristine coastlines curated for you.',
    image: '/images/thailand-phiphi.webp',
    sampleItinerary: [
      { day: 1, title: "Arrive Phuket Beachfront", detail: "Private pickup. Evening sunset drinks overlooking the Andaman Sea." },
      { day: 2, title: "Speedboat Curation to Maya Bay", detail: "Private speedboat charter to Phi Phi Leh. Snorkel in Maya Bay's pristine reefs." },
      { day: 3, title: "Bangkok Cruise & Temples", detail: "Fly to Bangkok. Evening dinner cruise on Chao Phraya. Guided Wat Pho temple walk." },
      { day: 4, title: "Departure", detail: "Private transfer to Suvarnabhumi airport." }
    ]
  },
  {
    id: 'maldives',
    name: 'Maldives',
    categories: ['International'],
    tagline: 'Island serenity, expertly held.',
    image: '/images/maldives.webp',
    sampleItinerary: [
      { day: 1, title: "Seaplane over Coral Atolls", detail: "Scenic flight to your private overwater pool villa. Champagne sunset welcome." },
      { day: 2, title: "Marine Scholar Snorkeling", detail: "Guided excursion with a resident marine biologist to check healthy house reefs." },
      { day: 3, title: "Private Sandbank Curation", detail: "Escape by speedboat to a deserted sandbank for a private picnic lunch and swim." },
      { day: 4, title: "Departure", detail: "Assisted seaplane return transfer to Malé airport." }
    ]
  },
  {
    id: 'bali',
    name: 'Bali',
    categories: ['International'],
    tagline: 'Sanctuary, temple ceremonies, and sea.',
    image: '/images/bali.webp',
    sampleItinerary: [
      { day: 1, title: "Arrive Ubud Jungle Villa", detail: "Private transfer to a luxury pool villa overlooking deep tropical valleys." },
      { day: 2, title: "Sacred Groves & Rice Terraces", detail: "Walk the Tegalalang terraces, experience jungle swings, and monkey forest sanctuary." },
      { day: 3, title: "Uluwatu Sunset Kecak Curation", detail: "Cliff temple visit followed by the dramatic traditional Kecak fire dance." },
      { day: 4, title: "Departure", detail: "Private transfer to Denpasar airport." }
    ]
  },
  {
    id: 'singapore',
    name: 'Singapore',
    categories: ['International'],
    tagline: 'Precision, polish, and metropolitan pace.',
    image: '/images/singapore.webp',
    sampleItinerary: [
      { day: 1, title: "Arrive Singapore & Night Safari", detail: "Check into a luxury city center hotel. Evening tram safari through the rainforest zoo." },
      { day: 2, title: "Gardens by the Bay Domes", detail: "Explore the massive domes, Cloud Forest, and walk the high OCBC Skyway." },
      { day: 3, title: "Sentosa Yacht & Cable Car", detail: "Cable car crossing to Sentosa, SEA Aquarium VIP tour, and sunset beach club relaxation." },
      { day: 4, title: "Departure", detail: "Transfer to Jewel Changi airport for shopping and flight connection." }
    ]
  },
  {
    id: 'andaman',
    name: 'Andaman',
    categories: ['India', 'Trending'],
    tagline: 'Private shores and turquoise solitude.',
    image: '/images/andaman.webp',
    sampleItinerary: [
      { day: 1, title: "Port Blair Historical Welcomes", detail: "Arrive at Port Blair. Check in and visit Cellular Jail for the evening light show." },
      { day: 2, title: "Private Ferry to Havelock Island", detail: "Board a high-speed private catamaran. Sunset walk on the famous Radhanagar Beach." },
      { day: 3, title: "Coral Snorkeling at Elephant Beach", detail: "Guided marine snorkel through shallow reefs. Afternoon forest trail walk." },
      { day: 4, title: "Departure", detail: "Return ferry to Port Blair and assisted transfer to the airport." }
    ]
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    categories: ['International', 'Trending'],
    tagline: 'Heritage and green horizon in one journey.',
    image: '/images/vietnam.webp',
    sampleItinerary: [
      { day: 1, title: "Hanoi French Quarter Cyclo", detail: "Arrive Hanoi, private hotel check-in. Evening cyclo tour and local street food walk." },
      { day: 2, title: "Halong Bay Luxury Cruise", detail: "Board a heritage boutique cruise. Kayak past limestone islets and sleep under stars." },
      { day: 3, title: "Hoi An Ancient Lantern Walk", detail: "Fly to Da Nang. Slow walk in Hoi An's lantern-lit streets and tailor shops." },
      { day: 4, title: "Departure", detail: "Private transfer to Da Nang airport." }
    ]
  },
  {
    id: 'georgia',
    name: 'Georgia',
    categories: ['International', 'Trending'],
    tagline: 'Old-world charm, new-world ease.',
    image: '/images/georgia.webp',
    sampleItinerary: [
      { day: 1, title: "Tbilisi Cable Car & Sulfur Baths", detail: "Check in. Panoramic cable car ride, evening sulfur bath soak in Old Town." },
      { day: 2, title: "Kakheti Clay Jar Wine Trails", detail: "Excursion to the cradle of winemaking. Qvevri tasting with a local master." },
      { day: 3, title: "Kazbegi Gergeti Church Crossing", detail: "Drive the military highway, explore high peaks and Gergeti church at 7,000 ft." },
      { day: 4, title: "Departure", detail: "Assisted transfer to Tbilisi International airport." }
    ]
  },
  {
    id: 'taj-mahal',
    name: 'Agra & Taj Mahal',
    categories: ['India', 'Trending'],
    tagline: 'Sunrise over white marble, timeless love.',
    image: '/images/taj-mahal.webp',
    sampleItinerary: [
      { day: 1, title: "Agra Mughal Sunset View", detail: "Private transfer from Delhi. Settle in and enjoy sunset Taj views from Mehtab Bagh gardens." },
      { day: 2, title: "Taj Mahal Sunrise & Agra Fort", detail: "Private sunrise entry to the Taj. Afternoon tour of Agra Fort with a historian." },
      { day: 3, title: "Fatehpur Sikri & Return Delhi", detail: "Guided walk of the ghost city of Fatehpur Sikri, followed by private drive to Delhi." }
    ]
  },
  {
    id: 'london',
    name: 'London',
    categories: ['International', 'Trending'],
    tagline: 'Royal heritage, historic streets, and partner-curated charm.',
    image: '/images/london.webp',
    sampleItinerary: [
      { day: 1, title: "London Welcome & Thames Walk", detail: "Private airport pickup. Settle into central hotel. Evening Thames riverside stroll." },
      { day: 2, title: "Westminster Abbey & London Eye", detail: "Guided Westminster history walk, Big Ben, and high flight on the London Eye." },
      { day: 3, title: "Wembley Stadium & Ealing Road Curation", detail: "VIP Wembley Stadium access. Shopping and street snacks at the Delhi of UK." },
      { day: 4, title: "Departure", detail: "Private transfer to London Heathrow or Gatwick airport." }
    ]
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    categories: ['India'],
    tagline: 'Ancient Dravidian temples, rich heritage, and green hills of Ooty.',
    image: '/images/tamilnadu.png',
    sampleItinerary: [
      { day: 1, title: "Madurai Meenakshi Temple", detail: "Guided historical walkthrough of the towering gopurams and pillared halls of the ancient Meenakshi Sundareswarar temple." },
      { day: 2, title: "Chettinad Mansion Heritage", detail: "Explore the majestic, teakwood-laden merchant mansions of Karaikudi and taste authentic Chettinad cuisine." },
      { day: 3, title: "Nilgiri Mountain Railway to Ooty", detail: "Board the heritage toy train winding up through dense forests and tea gardens into the cool Nilgiri Hills." },
      { day: 4, title: "Departure", detail: "Assisted private transfer to Coimbatore airport for onward journey." }
    ]
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    categories: ['India'],
    tagline: 'Cascade waterfalls, coffee valleys, and royal palace gardens.',
    image: '/images/karnataka.png',
    sampleItinerary: [
      { day: 1, title: "Mysore Palace Royal Splendour", detail: "Arrive in Mysore. Guided private tour of the illuminated Amba Vilas Palace and Devaraja market." },
      { day: 2, title: "Coorg Coffee Estate Walk", detail: "Drive into the misty hills of Coorg. Walk through lush cardamom and Robusta coffee estates with a local planter." },
      { day: 3, title: "Shivanasamudra Falls Excursion", detail: "Witness the roaring Gaganachukki and Bharachukki waterfalls amidst beautiful river valleys." },
      { day: 4, title: "Departure", detail: "Assisted private transfer to Bangalore airport." }
    ]
  },
  {
    id: 'bhutan',
    name: 'Bhutan',
    categories: ['International'],
    tagline: 'High mountain dzongs, prayer flags, and land of tranquility.',
    image: '/images/bhutan.png',
    sampleItinerary: [
      { day: 1, title: "Paro Valley Arrival & Rinpung Dzong", detail: "Scenic mountain flight landing. Visit the massive Paro Rinpung Dzong fortress and watch traditional archery." },
      { day: 2, title: "Tiger’s Nest Sacred Hike", detail: "Hike to the legendary Taktsang Monastery clinging to a granite cliff 3,000 feet above the valley floor." },
      { day: 3, title: "Thimphu City Curation", detail: "Explore Thimphu's folk heritage museums, Tashichho Dzong, and the giant golden Buddha Dordenma statue." },
      { day: 4, title: "Departure", detail: "Assisted transfer to Paro International airport." }
    ]
  }
];

export const GROUND_TEAMS = [
  {
    id: 'gangtok',
    name: 'Ms Doma ji and team',
    location: 'Gangtok, Sikkim',
    role: 'Gangtok Operations Lead',
    scope: 'Domestic Curation',
    description: 'Gangtok ground operation is headed by Ms Doma ji and beautiful team.'
  },
  {
    id: 'thailand',
    name: 'Mr Prasad ji and team',
    location: 'Phuket & Bangkok, Thailand',
    role: 'Thailand Operations Director',
    scope: 'International Curation',
    description: 'Thailand\'s ground operation is headed by Mr Prasad ji and his highly professional team.'
  },
  {
    id: 'vietnam',
    name: 'Ms Han and team',
    location: 'Hanoi & Saigon, Vietnam',
    role: 'Vietnam Operations Lead',
    scope: 'International Curation',
    description: 'Vietnam ground operation is headed by Ms Han and her lovely team.'
  },
  {
    id: 'srilanka',
    name: 'Mr Senaka and Mr Siva\'s team',
    location: 'Colombo & Kandy, Sri Lanka',
    role: 'Sri Lanka Operations Director',
    scope: 'International Curation',
    description: 'Srilanka ground operation is headed by Mr Senaka and Mr Siva\'s team.'
  },
  {
    id: 'dubai',
    name: 'Mr Hussain and team',
    location: 'Dubai, UAE',
    role: 'Dubai Operations Director',
    scope: 'International Curation',
    description: 'Dubai ground operation is headed by Mr Hussain and his prompt team.'
  },
  {
    id: 'malaysia',
    name: 'Mr Sahil and team',
    location: 'Kuala Lumpur, Malaysia',
    role: 'Malaysia Operations Director',
    scope: 'International Curation',
    description: 'Malaysia ground operation is headed by Mr Sahil and his dashing team.'
  },
  {
    id: 'andaman',
    name: 'Ms Tohfa ji and team',
    location: 'Port Blair, Andaman',
    role: 'Andaman Operations Lead',
    scope: 'Domestic Curation',
    description: 'Andaman ground operation is headed by Ms Tohfa ji and her lovely team.'
  },
  {
    id: 'london',
    name: 'Mr Vineesh',
    location: 'London, UK',
    role: 'UK Operations Director',
    scope: 'International Curation',
    description: 'Directs central London airport arrivals, chauffeured transfers, and exclusive VIP entry to Wembley Stadium and historic landmarks in partnership with Rediscover Tourism.'
  }
];


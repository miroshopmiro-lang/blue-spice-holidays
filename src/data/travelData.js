export const PACKAGE_CATEGORIES = [
  'All',
  'Family Heritage',
  'Couples Escapes',
  'Adventure Curation',
];

export const CURATED_PACKAGES = [
  {
    id: 1,
    title: "Central Kerala Tour (Plan 1)",
    location: "Kerala",
    duration: "5 Nights / 6 Days",
    rating: "4.9",
    reviews: "42",
    tag: "Family Heritage",
    price: "On Request",
    inclusions: "Private Chauffeur, Kochi & Munnar Curation, Backwater Boating",
    image: "/images/munnar.webp",
    metadata: { stay: "Premium Stays", driver: "Private Vehicle", guide: "Local Sightseeing" },
    itinerary: [
      { day: 1, title: "Kochi Arrival & Sightseeing", detail: "Warm welcome at Kochi airport or rw stn and proceed to Kochi city. Eroute visit the following points.\n\n•	Vasco Memorial\n•	St Francis Church\n•	Jain Temple\n•	Chinese Fishing Nets\n•	Fort Kochi beach\n•	Dutch Palace (Fri Closed)\n•	Jew Synagogue (Fri Closed)\n•	Marine Drive sunset visit\n•	Drive through MG Road.\n\nOvernight stay at Kochi. End of day 1" },
      { day: 2, title: "Checkout & Drive to Munnar", detail: "After breakfast, checkout and proceed to Munnar enroute local sightseeing options \n\n•	Cheeyappara waterfalls\n•	Valara waterfalls\n•	Spice garden\n•	Animal park \n•	Zip line\n\nOvernight stay at Munnar. End of day 2" },
      { day: 3, title: "Munnar Local Sightseeing", detail: "After breakfast, proceed for Munnar local sightseeing options\n\n•	National park \n•	Flower garden\n•	Echo point\n•	Mattupetty Dam\n\nOvernight stay at Munnar. End of day 3" },
      { day: 4, title: "Checkout & Drive to Thekkady", detail: "After breakfast, checkout and proceed to Thekkady local sightseeing options \n\n•	Periyar sanctuary \n•	Option of boating\n•	Kalari martial art show\n•	Kathakali show\n•	Jeep ride\n•	Elephant ride & Bath\n\nOvernight stay at Thekkady. End of day 4" },
      { day: 5, title: "Checkout & Drive to Alleppey", detail: "After breakfast Checkout and proceed to Alleppey.4 to 5 hrs drive.\n\n•	Boating in back waters (2-3 hrs)\n•	Visit Alleppey beach, Enjoy sunset and beach bath by 6 pm\n\nOvernight stay at Alleppey hotel. End of day 5." },
      { day: 6, title: "Checkout & Departure via Kochi", detail: "After breakfast, checkout and drop to Kochi airport or rw stn. End of day 6 and tour with happy memories." }
    ],
    accommodations: "Premium heritage and boutique properties in Kochi, Munnar, Thekkady, and Alleppey.",
  },
  {
    id: 2,
    title: "Rajasthan Tour (3 Cities)",
    location: "Rajasthan",
    duration: "4 Nights / 5 Days",
    rating: "4.8",
    reviews: "56",
    tag: "Family Heritage",
    price: "On Request",
    inclusions: "Jaipur, Pushkar, Jodhpur Curation, Meals Included, Private Vehicle",
    image: "/images/rajasthan.webp",
    metadata: { stay: "Heritage Haveli Stays", driver: "Private Chauffeur", guide: "Sightseeing Guide" },
    itinerary: [
      { day: 1, title: "Jaipur Airport Arrival & Sightseeing", detail: "Warm welcome at Jaipur airport and half day sightseeing from 1 pm to 6 pm.\n\n•	Hawa Mahal\n•	City palace \n•	Jantan Mantar\n•	Jal Mahal \n•	Shopping at Amer road\n\nOvernight stay at Jaipur. End of day 1" },
      { day: 2, title: "Jaipur to Pushkar Transfer", detail: "After breakfast check out and proceed to Pushkar (3 hrs drive)\n\n•	Pushkar Lake\n•	Varaha Temple\n•	Brahma Temple\n•	Man mahal\n\nOvernight stay at Pushkar. End of day 2" },
      { day: 3, title: "Pushkar to Jodhpur Transfer", detail: "After breakfast check out and proceed to Jodhpur (4-5 hrs drive)\n\n•	Ranakpur Jain temple 1200 years old \n•	Mehranghar fort at Jodhpur\n\n\tOvernight stay at Jodhpur. End of day 3" },
      { day: 4, title: "Jodhpur to Jaipur via Sightseeing", detail: "After breakfast check out and proceed to Jaipur (5 - 6 hrs drive)\n\n* Jai ghad fort\n* Getor\n* Albert hall\n*Choki dhani in evening\n\nOvernight stay. End of day 4" },
      { day: 5, title: "Jaipur Sightseeing & Departure", detail: "After breakfast check out and proceed to local sightseeing and shopping and drop to Jaipur airport / rw stn. End of day 5 & tour with happy memories 😊" }
    ],
    accommodations: "Heritage hotels and havelis in Jaipur, Pushkar, and Jodhpur.",
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
  },
  {
    id: 8,
    title: "Central & South Kerala (Plan 2)",
    location: "Kerala",
    duration: "8 Nights / 9 Days",
    rating: "4.9",
    reviews: "35",
    tag: "Family Heritage",
    price: "On Request",
    inclusions: "Private Chauffeur, Backwaters Cruise, Jatayu Earth Center, Varkala Cliff",
    image: "/images/munnar.webp",
    metadata: { stay: "Boutique & Beach Resorts", driver: "Private SUV", guide: "Sightseeing Included" },
    itinerary: [
      { day: 1, title: "Kochi Arrival & Sightseeing", detail: "Warm welcome at Kochi airport / rw stn and transfer to hotel (std checkin time 1 pm). Visiting Local sightseeing,\n\n•	Vasco Memorial\n•	St Francis Church\n•	Jain Temple\n•	Chinese Fishing Nets\n•	Fort Kochi beach\n•	Dutch Palace (Fri Closed)\n\nEvening at Marine drive sunset and boating. Overnight stay at Kochi. End of day 1." },
      { day: 2, title: "Checkout & Proceed to Munnar", detail: "After breakfast checkout and proceed to Munnar. Visiting local sightseeing at Munnar\n\n•	Chiyapara waterfalls\n•	Vallara waterfalls\n•	Animal Park\n•	Spice garden\n\n Overnight stay at Munnar. End of day 2." },
      { day: 3, title: "Munnar Tea Country & National Park", detail: "After breakfast proceed to \n\n•	Tea museum \n•	Floral garden\n•	Eco point \n•	Mattupeatti dam\n•	National park\n\nOvernight stay at Munnar. End of day 3" },
      { day: 4, title: "Munnar Jeep Safari or Leisure", detail: "After breakfast proceed for Jeep safari / Leisure day. \n\nOvernight stay at Munnar. End of day 4" },
      { day: 5, title: "Checkout & Proceed to Thekkady", detail: "After breakfast checkout and proceed to Thekkady. Sightseeing / Activities options\n\n•	Periyar wild life sanctuary\n•	Elephant ride and bath \n•	Kalari martial art show\n•	Kathakali show\n\nOvernight stay at Thekkady. End of day 5" },
      { day: 6, title: "Checkout & Proceed to Alleppey", detail: "After breakfast checkout and proceed to Alleppey.\n\n•	Backwaters in Alleppey\n\nOvernight stay at Alleppey hotel. End of day 6." },
      { day: 7, title: "Alleppey Sightseeing & Varkala Transfer", detail: "After breakfast checkout and proceed to sightseeing \n\n•	Alleppey light house\n•	Alleppey beach\n•	Enroute visit Jadayu rock.\n\nOvernight stay at Varkala. End of day 7." },
      { day: 8, title: "Varkala Leisure & Activities", detail: "Free and easy / activities if time permits. Overnight stay at Varkala. End of day 8." },
      { day: 9, title: "Checkout & Drop to Trivandrum", detail: "Check out and proceed to local sightseeing and shopping and drop to Trivandrum airport." }
    ],
    accommodations: "Premium hotels and beachside resorts in Kochi, Munnar, Thekkady, Alleppey, and Varkala.",
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
  {
    id: 'kerala',
    name: 'Kerala',
    categories: ['India'],
    tagline: 'Backwaters, stillness, and unhurried luxury.',
    image: '/images/munnar.webp',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "Pls provide information",
      "Meals Included": "Breakfast by default (inform if specific dietary requirements exist)"
    },
    plans: [
      {
        name: 'Plan 1: Central Kerala (6 Days 5 Nights)',
        referenceInfo: {
          "Vehicle": "Kochi Airport - Kochi Airport",
          "Type of Vehicle": "(Sedan / Ertiga / Innova / Tempo / Others)"
        },
        itinerary: [
          { day: 1, title: "Kochi Arrival & Sightseeing", detail: "Warm welcome at Kochi airport or rw stn and proceed to Kochi city. Eroute visit the following points.\n\n•	Vasco Memorial\n•	St Francis Church\n•	Jain Temple\n•	Chinese Fishing Nets\n•	Fort Kochi beach\n•	Dutch Palace (Fri Closed)\n•	Jew Synagogue (Fri Closed)\n•	Marine Drive sunset visit\n•	Drive through MG Road.\n\nOvernight stay at Kochi. End of day 1" },
          { day: 2, title: "Checkout & Drive to Munnar", detail: "After breakfast, checkout and proceed to Munnar enroute local sightseeing options \n\n•	Cheeyappara waterfalls\n•	Valara waterfalls\n•	Spice garden\n•	Animal park \n•	Zip line\n\nOvernight stay at Munnar. End of day 2" },
          { day: 3, title: "Munnar Local Sightseeing", detail: "After breakfast, proceed for Munnar local sightseeing options\n\n•	National park \n•	Flower garden\n•	Echo point\n•	Mattupetty Dam\n\nOvernight stay at Munnar. End of day 3" },
          { day: 4, title: "Checkout & Drive to Thekkady", detail: "After breakfast, checkout and proceed to Thekkady local sightseeing options \n\n•	Periyar sanctuary \n•	Option of boating\n•	Kalari martial art show\n•	Kathakali show\n•	Jeep ride\n•	Elephant ride & Bath\n\nOvernight stay at Thekkady. End of day 4" },
          { day: 5, title: "Checkout & Drive to Alleppey", detail: "After breakfast Checkout and proceed to Alleppey.4 to 5 hrs drive.\n\n•	Boating in back waters (2-3 hrs)\n•	Visit Alleppey beach, Enjoy sunset and beach bath by 6 pm\n\nOvernight stay at Alleppey hotel. End of day 5." },
          { day: 6, title: "Checkout & Departure", detail: "After breakfast, checkout and drop to Kochi airport or rw stn. End of day 6 and tour with happy memories." }
        ]
      },
      {
        name: 'Plan 2: Central & South Kerala (9 Days 8 Nights)',
        referenceInfo: {
          "Vehicle": "Kochi Airport - Trivandrum Airport",
          "Type of Vehicle": "(Sedan / Ertiga / Innova / Tempo / Others)"
        },
        itinerary: [
          { day: 1, title: "Kochi Arrival & Sightseeing", detail: "Warm welcome at Kochi airport / rw stn and transfer to hotel (std checkin time 1 pm). Visiting Local sightseeing,\n\n•	Vasco Memorial\n•	St Francis Church\n•	Jain Temple\n•	Chinese Fishing Nets\n•	Fort Kochi beach\n•	Dutch Palace (Fri Closed)\n\nEvening at Marine drive sunset and boating. Overnight stay at Kochi. End of day 1." },
          { day: 2, title: "Checkout & Proceed to Munnar", detail: "After breakfast checkout and proceed to Munnar. Visiting local sightseeing at Munnar\n\n•	Chiyapara waterfalls\n•	Vallara waterfalls\n•	Animal Park\n•	Spice garden\n\n Overnight stay at Munnar. End of day 2." },
          { day: 3, title: "Munnar Tea Country & National Park", detail: "After breakfast proceed to \n\n•	Tea museum \n•	Floral garden\n•	Eco point \n•	Mattupeatti dam\n•	National park\n\nOvernight stay at Munnar. End of day 3" },
          { day: 4, title: "Jeep Safari & Leisure", detail: "After breakfast proceed for Jeep safari / Leisure day. \n\nOvernight stay at Munnar. End of day 4" },
          { day: 5, title: "Checkout & Proceed to Thekkady", detail: "After breakfast checkout and proceed to Thekkady. Sightseeing / Activities options\n\n•	Periyar wild life sanctuary\n•	Elephant ride and bath \n•	Kalari martial art show\n•	Kathakali show\n\nOvernight stay at Thekkady. End of day 5" },
          { day: 6, title: "Checkout & Proceed to Alleppey", detail: "After breakfast checkout and proceed to Alleppey.\n\n•	Backwaters in Alleppey\n\nOvernight stay at Alleppey hotel. End of day 6." },
          { day: 7, title: "Alleppey Sightseeing & Varkala Transfer", detail: "After breakfast checkout and proceed to sightseeing \n\n•	Alleppey light house\n•	Alleppey beach\n•	Enroute visit Jadayu rock.\n\nOvernight stay at Varkala. End of day 7." },
          { day: 8, title: "Varkala Leisure & Activities", detail: "Free and easy / activities if time permits. Overnight stay at Varkala. End of day 8." },
          { day: 9, title: "Checkout & Departure", detail: "Check out and proceed to local sightseeing and shopping and drop to Trivandrum airport." }
        ]
      }
    ]
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    categories: ['India'],
    tagline: 'Fortresses, royalty, and glowing desert dunes.',
    image: '/images/rajasthan.webp',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls inform information",
      "Kids below 11 Years": "Pls inform information with age of each kid",
      "Accommodation": "Pls inform information",
      "Travel Date": "Pls inform information",
      "Duration": "5 Days 4 Nights",
      "Destinations": "Jaipur (2 Nights), Pushkar (1 Night), Jodhpur (1 Night)",
      "Pick up & Drop": "Jaipur airport / rw stn",
      "Facilities": "3* / 4* / Luxury Pls inform information",
      "Meals Included": "Breakfast is included by default (Pls inform if specific dietary requirements exist)",
      "Vehicle": "As per Group size"
    },
    sampleItinerary: [
      { day: 1, title: "Jaipur Airport Arrival & Sightseeing", detail: "Warm welcome at Jaipur airport and half day sightseeing from 1 pm to 6 pm.\n\n•	Hawa Mahal\n•	City palace \n•	Jantan Mantar\n•	Jal Mahal \n•	Shopping at Amer road\n\nOvernight stay at Jaipur. End of day 1" },
      { day: 2, title: "Jaipur to Pushkar Transfer", detail: "After breakfast check out and proceed to Pushkar (3 hrs drive)\n\n•	Pushkar Lake\n•	Varaha Temple\n•	Brahma Temple\n•	Man mahal\n\nOvernight stay at Pushkar. End of day 2" },
      { day: 3, title: "Pushkar to Jodhpur Transfer", detail: "After breakfast check out and proceed to Jodhpur (4-5 hrs drive)\n\n•	Ranakpur Jain temple 1200 years old \n•	Mehranghar fort at Jodhpur\n\n\tOvernight stay at Jodhpur. End of day 3" },
      { day: 4, title: "Jodhpur to Jaipur via Sightseeing", detail: "After breakfast check out and proceed to Jaipur (5 - 6 hrs drive)\n\n* Jai ghad fort\n* Getor\n* Albert hall\n*Choki dhani in evening\n\nOvernight stay. End of day 4" },
      { day: 5, title: "Jaipur Sightseeing & Departure", detail: "After breakfast check out and proceed to local sightseeing and shopping and drop to Jaipur airport / rw stn. End of day 5 & tour with happy memories 😊" }
    ]
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    categories: ['India'],
    tagline: 'Alpine grandeur with five-star comfort.',
    image: '/images/kashmir.webp',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "5 Days / 4 Nights",
      "Vehicle": "From Srinagar Airport / Jammu Airport",
      "Type of Vehicle": "(Sedan / Ertiga / Innova / Tempo / Others)",
      "Meals Included": "Dinner & Breakfast by default",
      "Destinations Covered": "1. Srinagar, 2. Gulmarg, 3. Pehelgam, 4. Sonemarg"
    },
    sampleItinerary: [
      { day: 1, title: "Srinagar Arrival & Dal Lake Shikara", detail: "Warm welcome at Srinagar airport at 2.30 pm. Check in to hotel. After some rest proceed for Complimentary one hour skikarra boat ride in Dal Lake. Proceed back to hotel. Dinner & Overnight stay at Srinagar hotel. End of day 1." },
      { day: 2, title: "Gulmarg Day Trip", detail: "After breakfast proceed to Gulmarg day trip. 2 hours’ drive one way. Cable car phase I ticket is included and subject to advance booking and availability. Additional union car 🚗. Visiting the following points,\n\n•	Durang valley\n•	Maharaja palace \n•	Strawberry valley \n•	Museum\n\nDinner & Overnight stay at Srinagar hotel. End of day 2" },
      { day: 3, title: "Pahalgam Day Trip", detail: "After breakfast proceed to Pehelgam day trip. 2 hours’ drive one way. Some points have to be covered using local union car. Visit the following points,\n\n•	Saffron field \n•	Avanti swamy temple \n•	Apple 🍎 valley for juice\n•	By extra vehicle to visit Mini Switzerland\n•	Kashmir valley\n \nSome points have to be covered using Pony on extra charges. Dinner & Overnight stay at Srinagar hotel. End of day 3" },
      { day: 4, title: "Sonamarg Day Trip", detail: "After breakfast proceed to Sonemarg. 2.5 hours’ drive.\n\t\n•	Meadow of gold (day trip)\n•	Enjoy trip to zero point\t\n•	War Memorial\n•	Baltal, fishing point at extra cost through union cab.\n•	Or visit the Thajiwas glacier by ponies at extra cost. \n\n Additional union car 🚗 provided. Dinner & Overnight stay at Srinagar hotel. End of day 4" },
      { day: 5, title: "Srinagar City Tour & Departure", detail: "Check out and proceed for Srinagar city tour. After shopping drop to Srinagar airport. End of day 5 with happy memories 😊" }
    ]
  },
  {
    id: 'manali',
    name: 'Manali',
    categories: ['India'],
    tagline: 'Mountain air, mapped to your pace.',
    image: '/images/himachal.webp',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "5 Days / 4 Nights",
      "Meals Included": "Breakfast by default",
      "Vehicle": "Private AC SUV from Chandigarh Airport",
      "Destinations": "Manali, Solang Valley, Rohtang Pass, Kasol Curation"
    },
    sampleItinerary: [
      { day: 1, title: "Chandigarh to Manali Drive", detail: "Warm welcome at Chandigarh airport. Proceed by private AC SUV on a scenic drive along the Beas River to Manali. Check in to your cosy riverside chalet.\n\n•	Scenic river valley vistas\n•	Mall road evening walk\n•	Chalet welcome tea\n\nOvernight stay in Manali." },
      { day: 2, title: "Solang Valley & Cedar Trails", detail: "After breakfast, proceed to Solang Valley for adventure activities and sightseeing.\n\n•	Hadimba Temple visit\n•	Club House walks\n•	Solang Valley paragliding & zorbing\n•	Vashisht hot water springs\n\nOvernight stay in Manali." },
      { day: 3, title: "Atal Tunnel & Lahaul Valley Excursion", detail: "After breakfast, proceed to cross the engineering marvel Atal Tunnel into the snowbound, majestic Lahaul Valley.\n\n•	Atal Tunnel crossing (9.02 km long)\n•	Sissu waterfalls views\n•	Keylong Valley panoramas\n\nOvernight stay in Manali." },
      { day: 4, title: "Rohtang Pass Snow View", detail: "After breakfast, proceed for a day trip to the spectacular Rohtang Pass at 13,058 ft (subject to permission and local union cabs).\n\n•	Rohtang snow activities\n•	Rahala waterfalls enroute\n•	Nehru Kund photography\n\nOvernight stay in Manali." },
      { day: 5, title: "Manali to Chandigarh & Departure", detail: "Check out after breakfast, proceed to local shopping for apples and wood crafts, then transfer back to Chandigarh airport." }
    ]
  },
  {
    id: 'gangtok',
    name: 'Gangtok',
    categories: ['India'],
    tagline: 'Himalayan calm, elevated.',
    image: '/images/gangtok.webp',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "5 Days / 4 Nights",
      "Meals Included": "Breakfast by default",
      "Vehicle": "Private 4x4 SUV from Bagdogra Airport",
      "Destinations": "Gangtok, Tsomgo Lake, Baba Mandir, Pelling Curation"
    },
    sampleItinerary: [
      { day: 1, title: "Bagdogra to Gangtok Transfer", detail: "Warm welcome at Bagdogra airport by our team. Scenic private drive along the roaring Teesta River. Check in to a premium Himalayan view resort. Evening walk on Gangtok's pedestrian MG Marg.\n\n•	Teesta River view stops\n•	MG Marg local food exploration\n\nOvernight stay in Gangtok." },
      { day: 2, title: "Tsomgo Lake & Baba Mandir Excursion", detail: "After breakfast, proceed to the high-altitude, sacred Tsomgo Lake at 12,400 ft and Baba Harbhajan Singh Mandir.\n\n•	Tsomgo glacial lake walk\n•	Nathu La pass (border permit, extra charges)\n•	Baba Mandir shrine visit\n\nOvernight stay in Gangtok." },
      { day: 3, title: "Gangtok City Sightseeing", detail: "After breakfast, proceed to explore the cultural landmarks and viewpoints of Gangtok.\n\n•	Rumtek Monastery (UNESCO-inspired heritage)\n•	Banjhakri waterfalls\n•	Do Drul Chorten stupa\n•	Tashi Viewpoint sunset\n\nOvernight stay in Gangtok." },
      { day: 4, title: "Pelling Day Excursion & Skywalk", detail: "After breakfast, proceed to Pelling. Walk the famous glass skywalk and explore the ancient royal ruins.\n\n•	Pelling glass bridge skywalk\n•	Rabdentse palace ruins walk\n•	Chenrezig giant statue\n\nOvernight stay in Gangtok." },
      { day: 5, title: "Gangtok to Bagdogra & Departure", detail: "Check out, proceed for local handicraft shopping, and transfer back to Bagdogra airport for your flight home." }
    ]
  },
  {
    id: 'dubai',
    name: 'Dubai',
    categories: ['International'],
    tagline: 'Where ambition meets indulgence.',
    image: '/images/dubai.webp',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "5 Days / 4 Nights",
      "Meals Included": "Breakfast by default (Desert safari buffet dinner included)",
      "Vehicle": "Private Luxury Car & SUV Curation",
      "Destinations": "Burj Khalifa, Desert Safari, Old Dubai, Marina Cruise"
    },
    sampleItinerary: [
      { day: 1, title: "Arrive Dubai & Marina Dhow Cruise", detail: "Warm welcome at Dubai International Airport. Private luxury transfer to your hotel. Evening Marina Dhow Cruise with dinner.\n\n•	Marina yacht skyline views\n•	Tanoura cultural dance on board\n•	International buffet dinner\n\nOvernight stay in Dubai." },
      { day: 2, title: "Modern Dubai Curation & Burj Khalifa", detail: "After breakfast, proceed for a guided city tour of modern Dubai's record-breaking architecture.\n\n•	Burj Al Arab beach photo-op\n•	Palm Jumeirah monorail ride\n•	Burj Khalifa observatory (124th floor entry)\n•	Dubai Mall fountain show\n\nOvernight stay in Dubai." },
      { day: 3, title: "Old Dubai Heritage & Desert Safari", detail: "After breakfast, explore old souks, then proceed for a private 4x4 desert safari in the afternoon.\n\n•	Gold and Spice souk walk\n•	Abra boat ride on Dubai Creek\n•	Jeep dune bashing & sunset photography\n•	Desert camp dinner, belly dance & fire show\n\nOvernight stay in Dubai." },
      { day: 4, title: "Future Curation & Shopping", detail: "After breakfast, proceed to visit the Museum of the Future and spend the evening shopping.\n\n•	Museum of the Future entry\n•	Global Village (seasonal) or Mall of the Emirates\n\nOvernight stay in Dubai." },
      { day: 5, title: "Departure", detail: "Check out, spend your morning at leisure for last-minute shopping, and transfer to Dubai Airport." }
    ]
  },
  {
    id: 'thailand',
    name: 'Thailand',
    categories: ['International'],
    tagline: 'Pristine coastlines curated for you.',
    image: '/images/thailand-phiphi.webp',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "6 Days / 5 Nights",
      "Meals Included": "Breakfast by default",
      "Vehicle": "Private Chauffeur Car & Speedboat charters",
      "Destinations": "Phuket, Phi Phi Islands, Bangkok Temple Curation"
    },
    sampleItinerary: [
      { day: 1, title: "Arrive Phuket & Patong Sunset", detail: "Warm welcome at Phuket airport. Private transfer to Patong beach resort. Evening sunset stroll.\n\n•	Patong beach welcome sunset drinks\n•	Phuket nightlife exploration\n\nOvernight stay in Phuket." },
      { day: 2, title: "Phi Phi Islands Speedboat Charter", detail: "After breakfast, board a speed boat charter to the famous Phi Phi Islands.\n\n•	Maya Bay snorkeling (Loh Samah Bay)\n•	Monkey Beach photography\n•	Buffet lunch on Phi Phi Don\n\nOvernight stay in Phuket." },
      { day: 3, title: "Phuket City Sightseeing", detail: "After breakfast, proceed to explore Phuket's old heritage and viewpoints.\n\n•	Big Buddha hill statue\n•	Wat Chalong temple\n•	Karon Viewpoint panorama\n•	Phuket Old Town heritage walk\n\nOvernight stay in Phuket." },
      { day: 4, title: "Phuket to Bangkok Transfer", detail: "Checkout, transfer to Phuket airport for flight to Bangkok. Private airport transfer to hotel. Evening Chao Phraya River dinner cruise.\n\n•	Chao Phraya River cruise with live band\n•	International seafood buffet\n\nOvernight stay in Bangkok." },
      { day: 5, title: "Bangkok Golden Temples & Safari World", detail: "After breakfast, proceed to visit Safari World and Bangkok's famous temples.\n\n•	Safari World & Marine Park (animal shows)\n•	Wat Pho (Reclining Buddha)\n•	Wat Traimit (Golden Buddha)\n\nOvernight stay in Bangkok." },
      { day: 6, title: "Departure", detail: "Check out, enjoy free time for shopping at MBK or Siam Paragon, and transfer to Suvarnabhumi Airport." }
    ]
  },
  {
    id: 'maldives',
    name: 'Maldives',
    categories: ['International'],
    tagline: 'Island serenity, expertly held.',
    image: '/images/maldives.webp',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "5 Days / 4 Nights",
      "Meals Included": "All-Inclusive Default (Breakfast, Lunch, Dinner & Drinks)",
      "Vehicle": "Speedboat / Seaplane depending on Atoll Resort location",
      "Destinations": "Private Maldives Island Resort Villa Stay"
    },
    sampleItinerary: [
      { day: 1, title: "Male Airport Arrival & Seaplane Transfer", detail: "Warm welcome at Malé Airport. Fly over coral atolls by seaplane. Settle into your premium overwater villa. Champagne welcome.\n\n•	Seaplane aerial photography\n•	Villa sunset deck relaxation\n\nOvernight stay at Maldives Resort." },
      { day: 2, title: "Marine Biologist Coral Reef Snorkel", detail: "After breakfast, proceed for a guided house reef snorkeling excursion with our resident marine biologist.\n\n•	Marine life spotting (sea turtles, reef sharks)\n•	Underwater GoPro photography session\n\nOvernight stay at Maldives Resort." },
      { day: 3, title: "Private Sandbank Lunch Escape", detail: "After breakfast, board a private boat to a remote sandbank for a private picnic lunch and swim.\n\n•	Deserted sandbank privacy\n•	Snorkeling in crystal clear shallow water\n•	Gourmet picnic basket\n\nOvernight stay at Maldives Resort." },
      { day: 4, title: "Sunset Dolphin Cruise & Beach Dinner", detail: "Enjoy a relaxing day at your villa pool, followed by a sunset spinner dolphin cruise in the evening.\n\n•	Dolphin corridor cruise\n•	Private candlelit seafood dinner on the beach\n\nOvernight stay at Maldives Resort." },
      { day: 5, title: "Resort Checkout & Male Airport Departure", detail: "Check out after breakfast. Board your seaplane return transfer to Malé International Airport." }
    ]
  },
  {
    id: 'bali',
    name: 'Bali',
    categories: ['International'],
    tagline: 'Sanctuary, temple ceremonies, and sea.',
    image: '/images/bali.webp',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "6 Days / 5 Nights",
      "Meals Included": "Breakfast by default",
      "Vehicle": "Private AC SUV with English Speaking Chauffeur",
      "Destinations": "Ubud, Tegalalang, Uluwatu Cliff Temple, Nusa Dua Beach"
    },
    sampleItinerary: [
      { day: 1, title: "Arrive Bali & Ubud Valley Villa", detail: "Warm welcome at Denpasar Airport. Transfer by private SUV to your luxury jungle pool villa in Ubud. Welcome Balinese tea.\n\n•	Ubud rainforest resort views\n•	Local market evening walk\n\nOvernight stay in Ubud." },
      { day: 2, title: "Tegalalang Rice Terraces & Jungle Swing", detail: "After breakfast, proceed to explore Ubud's nature and spiritual sites.\n\n•	Tegalalang scenic rice terraces walk\n•	Jungle swing adventure\n•	Sacred Monkey Forest sanctuary\n•	Tirta Empul temple water blessing\n\nOvernight stay in Ubud." },
      { day: 3, title: "Mount Batur Sunrise & Coffee Trails", detail: "Optional 4:00 AM Mount Batur active volcano jeep sunrise trek, followed by a coffee plantation visit.\n\n•	Jeep sunrise viewing over Lake Batur\n•	Luwak coffee estate tasting walk\n\nOvernight stay in Ubud." },
      { day: 4, title: "Uluwatu Temple & Fire Dance", detail: "Checkout after breakfast, proceed to Nusa Dua beach resort. Afternoon visit to Uluwatu Temple.\n\n•	Uluwatu cliff-top temple views\n•	Traditional Sunset Kecak Fire Dance\n•	Jimbaran Bay beach seafood dinner\n\nOvernight stay in Nusa Dua." },
      { day: 5, title: "Nusa Penida Island Speedboat Day Trip", detail: "After breakfast, board a shared fast boat to Nusa Penida Island for sightseeing.\n\n•	Kelingking Beach T-Rex cliff\n•	Angel's Billabong & Broken Beach\n•	Crystal Bay snorkeling\n\nOvernight stay in Nusa Dua." },
      { day: 6, title: "Departure", detail: "Check out, enjoy free time for beach sports and shopping, then transfer back to Denpasar Airport." }
    ]
  },
  {
    id: 'singapore',
    name: 'Singapore',
    categories: ['International'],
    tagline: 'Precision, polish, and metropolitan pace.',
    image: '/images/singapore.webp',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "5 Days / 4 Nights",
      "Meals Included": "Breakfast by default",
      "Vehicle": "Private Sedan Airport Transfers & Tourist MRT Card",
      "Destinations": "Gardens by the Bay, Night Safari, Sentosa Island, Universal Studios"
    },
    sampleItinerary: [
      { day: 1, title: "Arrive Singapore & Night Safari", detail: "Warm welcome at Changi Airport. Transfer to your downtown luxury hotel. Evening excursion to Night Safari.\n\n•	Night Safari tram ride\n•	Creatures of the Night show\n\nOvernight stay in Singapore." },
      { day: 2, title: "Gardens by the Bay & Marina Bay Curation", detail: "After breakfast, proceed to explore the futurist greenhouses and skyways.\n\n•	Flower Dome & Cloud Forest greenhouses\n•	Supertree Grove OCBC Skyway walk\n•	Marina Bay Sands Observation Deck\n•	Spectra light & water show\n\nOvernight stay in Singapore." },
      { day: 3, title: "Sentosa Island Day Out", detail: "After breakfast, take the scenic cable car crossing to Sentosa Island for a day of activities.\n\n•	Singapore Cable Car ride\n•	S.E.A. Aquarium (world's largest reef tanks)\n•	Wings of Time water and fire show\n\nOvernight stay in Singapore." },
      { day: 4, title: "Universal Studios Singapore", detail: "After breakfast, proceed for a full-day ticket entry to Universal Studios.\n\n•	Sci-Fi City & Battlestar Galactica coasters\n•	Ancient Egypt & Jurassic Park zones\n•	Hollywood walk of fame\n\nOvernight stay in Singapore." },
      { day: 5, title: "Departure via Changi Jewel", detail: "Check out, transfer to Changi Airport, explore Jewel Changi indoor waterfall, and connect to your flight." }
    ]
  },
  {
    id: 'andaman',
    name: 'Andaman',
    categories: ['India', 'Trending'],
    tagline: 'Private shores and turquoise solitude.',
    image: '/images/andaman.webp',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "5 Days / 4 Nights",
      "Meals Included": "Breakfast by default",
      "Vehicle": "Private Catamaran Ferry & Private AC SUV",
      "Destinations": "Port Blair, Havelock Island, Radhanagar Beach, Elephant Reefs"
    },
    sampleItinerary: [
      { day: 1, title: "Port Blair Arrival & Cellular Jail History", detail: "Warm welcome at Port Blair airport. Private transfer to hotel. Afternoon visit to Cellular Jail.\n\n•	Cellular Jail historical tour\n•	Sound & Light Show evening\n\nOvernight stay in Port Blair." },
      { day: 2, title: "Private High-Speed Catamaran to Havelock", detail: "After breakfast, checkout and board a luxury private catamaran to Havelock Island. Settle into a beachfront cottage.\n\n•	Catamaran cruise\n•	Radhanagar Beach sunset walk (Asia's cleanest beach)\n\nOvernight stay in Havelock." },
      { day: 3, title: "Elephant Beach Coral Reef Snorkel", detail: "After breakfast, proceed to Elephant Beach via speedboat charter for water sports.\n\n•	Reef snorkeling (complimentary session)\n•	Glass bottom boat ride options\n•	Trekking through the coastal forest\n\nOvernight stay in Havelock." },
      { day: 4, title: "Kalapathar Beach & Return Port Blair", detail: "After breakfast, visit Kalapathar Beach, then board your catamaran back to Port Blair.\n\n•	Kalapathar Beach sunrise views\n•	Shopping for local sea-shell crafts\n\nOvernight stay in Port Blair." },
      { day: 5, title: "Departure", detail: "Check out after breakfast and transfer to Port Blair airport for your onward flight." }
    ]
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    categories: ['International', 'Trending'],
    tagline: 'Heritage and green horizon in one journey.',
    image: '/images/vietnam.webp',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "6 Days / 5 Nights",
      "Meals Included": "Breakfast (Lunch included on Halong Cruise)",
      "Vehicle": "Private Sedan Transfers & Regional Flights",
      "Destinations": "Hanoi, Halong Bay Cruise, Da Nang, Hoi An Lanterns"
    },
    sampleItinerary: [
      { day: 1, title: "Arrive Hanoi & Street Food Cyclo Tour", detail: "Warm welcome at Hanoi Airport. Private transfer to your hotel in the French Quarter. Evening street food cyclo tour.\n\n•	French Quarter cyclo ride\n•	Pho and Banh Mi local tastings\n\nOvernight stay in Hanoi." },
      { day: 2, title: "Halong Bay Luxury Boutique Cruise", detail: "Checkout after breakfast, drive to Halong Bay. Board a luxury wooden cruise. Kayak among limestone cliffs.\n\n•	Limestone islet cruise views\n•	Sung Sot (Surprise) Cave walk\n•	Sunset deck cocktails & kayak tour\n\nOvernight stay on Halong Cruise." },
      { day: 3, title: "Halong Bay Sunrise to Da Nang flight", detail: "Morning Tai Chi on deck, cruise return, and transfer to Hanoi Airport. Flight to Da Nang. Private transfer to your hotel.\n\n•	Tai Chi sunrise class\n•	Da Nang Dragon Bridge sunset walk\n\nOvernight stay in Da Nang." },
      { day: 4, title: "Bana Hills Golden Bridge & Hoi An Walk", detail: "After breakfast, proceed to Ba Na Hills by cable car. Evening transfer to Hoi An ancient town.\n\n•	Bana Hills cable car (longest in region)\n•	Golden Bridge (held by giant stone hands)\n•	Hoi An ancient lantern-lit street walk\n\nOvernight stay in Da Nang." },
      { day: 5, title: "Hoi An Coconut Forest Basket Boat Tour", detail: "After breakfast, proceed to Cam Thanh coconut forest for a traditional basket boat ride.\n\n•	Basket boat spinning performance\n•	Crab fishing with locals\n\nOvernight stay in Da Nang." },
      { day: 6, title: "Departure", detail: "Check out, enjoy free time for beach relaxation, and transfer to Da Nang Airport." }
    ]
  },
  {
    id: 'georgia',
    name: 'Georgia',
    categories: ['International', 'Trending'],
    tagline: 'Old-world charm, new-world ease.',
    image: '/images/georgia.webp',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "6 Days / 5 Nights",
      "Meals Included": "Breakfast & Wine Château Tasting Dinner",
      "Vehicle": "Private 4x4 SUV Chauffeur",
      "Destinations": "Tbilisi Old Town, Kakheti Wine Region, Kazbegi Peaks"
    },
    sampleItinerary: [
      { day: 1, title: "Arrive Tbilisi & Old Town Walk", detail: "Warm welcome at Tbilisi airport. Private transfer to hotel. Evening walk through the Old Town.\n\n•	Tbilisi sulfur bath district photos\n•	Shardeni Street cafe walk\n\nOvernight stay in Tbilisi." },
      { day: 2, title: "Tbilisi Cable Car & Botanical Gardens", detail: "After breakfast, explore the city's sights using the public cable car.\n\n•	Narikala Fortress panorama\n•	Mother of Georgia statue walk\n•	Tbilisi Botanical Garden walks\n•	Traditional sulfur bath soak (optional, extra cost)\n\nOvernight stay in Tbilisi." },
      { day: 3, title: "Kakheti Wine Valley Château Excursion", detail: "Checkout after breakfast, drive to Kakheti wine region. Settle into a restored vineyard château.\n\n•	Bodbe Monastery walk\n•	Sighnaghi City of Love medieval walls\n•	UNESCO-heritage clay jar (Qvevri) wine tasting\n\nOvernight stay in Kakheti Château." },
      { day: 4, title: "Kazbegi Peak & Gergeti Church 4x4", detail: "Checkout after breakfast, drive the military highway. Settle into your mountain hotel in Stepantsminda.\n\n•	Ananuri fortress castle views\n•	4x4 mountain route to Gergeti Trinity Church at 7,119 ft\n\nOvernight stay in Kazbegi." },
      { day: 5, title: "Return Tbilisi via Mtskheta", detail: "Checkout after breakfast, return to Tbilisi. Enroute visit the ancient capital Mtskheta.\n\n•	Svetitskhoveli Cathedral (UNESCO World Heritage)\n•	Jvari Monastery cliff viewpoint\n\nOvernight stay in Tbilisi." },
      { day: 6, title: "Departure", detail: "Check out, enjoy free time for shopping at Dry Bridge flea market, and transfer to Tbilisi airport." }
    ]
  },
  {
    id: 'taj-mahal',
    name: 'Agra & Taj Mahal',
    categories: ['India', 'Trending'],
    tagline: 'Sunrise over white marble, timeless love.',
    image: '/images/taj-mahal.webp',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "3 Days / 2 Nights",
      "Meals Included": "Breakfast by default",
      "Vehicle": "Private AC Sedan from Delhi Airport",
      "Destinations": "Agra Taj Mahal, Mehtab Bagh Gardens, Fatehpur Sikri"
    },
    sampleItinerary: [
      { day: 1, title: "Delhi to Agra & Mehtab Bagh Sunset", detail: "Warm welcome at Delhi Airport. Private AC sedan transfer to Agra. Check in to your hotel. Evening sunset view of the Taj Mahal from Mehtab Bagh gardens.\n\n•	Yamuna Expressway drive\n•	Mehtab Bagh Taj Mahal backdrop sunset views\n\nOvernight stay in Agra." },
      { day: 2, title: "Sunrise Taj Mahal & Agra Fort Curation", detail: "Early morning sunrise entry to the Taj Mahal. Return to hotel for breakfast, followed by a guided tour of Agra Fort.\n\n•	Taj Mahal sunrise walk with private historian guide\n•	Agra Fort marble palaces tour\n•	Local marble inlay art workshops\n\nOvernight stay in Agra." },
      { day: 3, title: "Fatehpur Sikri & Return Delhi Departure", detail: "Checkout after breakfast, visit the ghost capital Fatehpur Sikri, then transfer back to Delhi Airport.\n\n•	Fatehpur Sikri Buland Darwaza gate\n•	Panch Mahal walks\n\nAssisted departure at Delhi airport." }
    ]
  },
  {
    id: 'london',
    name: 'London',
    categories: ['International', 'Trending'],
    tagline: 'Royal heritage, historic streets, and partner-curated charm.',
    image: '/images/london.webp',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "4 Days / 3 Nights",
      "Meals Included": "Breakfast by default",
      "Vehicle": "Private airport pickup & London public transit oyster cards",
      "Destinations": "Wembley Stadium, Ealing Road, Westminster Abbey, London Eye"
    },
    sampleItinerary: [
      { day: 1, title: "London Arrival & Thames Sunset Walk", detail: "Warm welcome at London airport. Private transfer to your premium hotel. Evening walk along the River Thames.\n\n•	London skyline walk\n•	Thames River twilight views\n\nOvernight stay in London." },
      { day: 2, title: "Wembley Stadium & Ealing Road Curation", detail: "After breakfast, proceed to Wembley Stadium and Ealing Road for shopping.\n\n•	Wembley Stadium tour\n•	Hindu temples and boutique shopping at Ealing Road\n•	London traditional pub dinner\n\nOvernight stay in London." },
      { day: 3, title: "Westminster & London Eye Flight", detail: "After breakfast, proceed for a historic Westminster walk and a ride on the London Eye.\n\n•	Westminster Abbey & Big Ben guided walks\n•	London Eye flight (skip-the-line tickets)\n•	Trafalgar Square & National Gallery\n\nOvernight stay in London." },
      { day: 4, title: "Departure", detail: "Check out, enjoy free time for shopping at Harrods or Oxford Street, and private transfer to airport." }
    ]
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    categories: ['India'],
    tagline: 'Ancient Dravidian temples, rich heritage, and green hills of Ooty.',
    image: '/images/tamilnadu.png',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "4 Days / 3 Nights",
      "Meals Included": "Breakfast (Traditional Chettinad lunch included on Day 2)",
      "Vehicle": "Private AC Sedan / SUV",
      "Destinations": "Madurai Meenakshi Temple, Chettinad Mansions, Nilgiri Railway"
    },
    sampleItinerary: [
      { day: 1, title: "Madurai Meenakshi Temple Curation", detail: "Warm welcome at Madurai airport. Private transfer to hotel. Guided walkthrough of the ancient Meenakshi Temple.\n\n•	Madurai Meenakshi Temple giant gopurams tour\n•	Thousand Pillared Hall walks\n•	Nayakar Palace light show\n\nOvernight stay in Madurai." },
      { day: 2, title: "Chettinad Heritage Mansion Walk", detail: "Checkout after breakfast, drive to Chettinad region. Walk through the teakwood merchant mansions.\n\n•	Athangudi handmade tile workshop\n•	Chettinad palace mansions photography\n•	Traditional banana-leaf Chettinad lunch\n\nOvernight stay in Chettinad." },
      { day: 3, title: "Nilgiri Mountain Railway to Ooty", detail: "Checkout after breakfast, proceed to Mettupalayam. Board the heritage toy train steam engine up to Ooty.\n\n•	UNESCO-heritage Nilgiri Toy Train ride\n•	Ooty tea garden twilight walks\n\nOvernight stay in Ooty." },
      { day: 4, title: "Ooty Sightseeing & Coimbatore Departure", detail: "Checkout, proceed to botanical gardens and Ooty Lake, and private transfer to Coimbatore airport for onward flight." }
    ]
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    categories: ['India'],
    tagline: 'Cascade waterfalls, coffee valleys, and royal palace gardens.',
    image: '/images/karnataka.png',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "4 Days / 3 Nights",
      "Meals Included": "Breakfast by default",
      "Vehicle": "Private AC Sedan / SUV",
      "Destinations": "Mysore Palace, Coorg Coffee Estates, Shivanasamudra Waterfalls"
    },
    sampleItinerary: [
      { day: 1, title: "Mysore Palace Royal Splendour", detail: "Warm welcome at Bangalore airport. Private transfer to Mysore. Settle into hotel. Guided tour of Mysore Palace.\n\n•	Amba Vilas Palace evening illumination\n•	Devaraja Market perfume and spice walks\n\nOvernight stay in Mysore." },
      { day: 2, title: "Coorg Coffee Estate Planter Walk", detail: "Checkout after breakfast, proceed to Coorg hills. Walk through coffee estates.\n\n•	Cardamom & Robusta coffee plantations guided walk\n•	Golden Temple Buddhist Monastery (Bylakuppe)\n•	Abbey waterfalls\n\nOvernight stay in Coorg." },
      { day: 3, title: "Shivanasamudra Falls Excursion", detail: "After breakfast, proceed to Shivanasamudra river valley waterfalls.\n\n•	Gaganachukki & Bharachukki roaring waterfalls\n•	Raja's Seat sunset viewpoints\n\nOvernight stay in Coorg." },
      { day: 4, title: "Checkout & Bangalore Departure", detail: "Check out after breakfast, transfer back to Bangalore airport for onward journey." }
    ]
  },
  {
    id: 'bhutan',
    name: 'Bhutan',
    categories: ['International'],
    tagline: 'High mountain dzongs, prayer flags, and land of tranquility.',
    image: '/images/bhutan.png',
    referenceInfo: {
      "Adults (Above 11 Years)": "Pls provide information",
      "Children with Age": "Pls provide information",
      "Rooms Required": "Pls provide information",
      "Travel Dates": "Pls provide information",
      "Duration of Tour": "4 Days / 3 Nights",
      "Meals Included": "Breakfast (Traditional Bhutanese dinner included on Day 2)",
      "Vehicle": "Private Mountain SUV",
      "Destinations": "Paro Valley, Tiger's Nest Hike, Thimphu Golden Buddha"
    },
    sampleItinerary: [
      { day: 1, title: "Paro Airport Arrival & Rinpung Dzong", detail: "Warm welcome at Paro Airport. Visit the massive fortress Dzong.\n\n•	Paro Rinpung Dzong architecture walk\n•	Traditional Bhutanese archery watch\n\nOvernight stay in Paro." },
      { day: 2, title: "Tiger's Nest Cliff Hike Curation", detail: "After breakfast, proceed for a guided hike to the legendary Taktsang Monastery.\n\n•	Hike to Tiger's Nest temple (10,000 ft above sea level)\n•	Scenic valley viewpoints\n•	Traditional stone bath evening (optional, extra charges)\n\nOvernight stay in Paro." },
      { day: 3, title: "Thimphu Capital City Curation", detail: "Checkout after breakfast, drive to Thimphu. Visit museum and Buddha statue.\n\n•	Buddha Dordenma golden statue (169 ft tall)\n•	Simply Bhutan living museum\n•	Tashichho Dzong government fortress\n\nOvernight stay in Thimphu." },
      { day: 4, title: "Departure", detail: "Checkout after breakfast, transfer back to Paro International Airport for departure." }
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

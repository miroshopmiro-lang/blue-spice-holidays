import { useState } from 'react';
import { CURATED_PACKAGES } from '../data/travelData';
import GroundTeams from '../components/GroundTeams';
import useEnquiry from '../hooks/useEnquiry';

// Filter packages that are domestic (location in India)
const DOMESTIC_PACKAGES = [
  ...CURATED_PACKAGES.filter(p => ['Kerala', 'Rajasthan', 'Ladakh'].includes(p.location)),
  // Add another couple of domestic ones for richness
  {
    id: 101,
    title: "Suggested Kashmir Itinerary",
    location: "Kashmir",
    duration: "4 Nights / 5 Days",
    rating: "4.9",
    reviews: "32",
    tag: "Family Heritage",
    price: "On Request",
    inclusions: "Meals (Breakfast & Dinner), Complimentary Shikara Ride, Gulmarg Phase I Ticket, Union Cars",
    image: "/images/kashmir.webp",
    metadata: { stay: "Boutique Srinagar Houseboats & Resorts" },
    itinerary: [
      { day: 1, title: "Srinagar Arrival & Dal Lake Shikara", detail: "Warm welcome at Srinagar airport at 2.30 pm. Check in to hotel. After some rest proceed for Complimentary one hour skikarra boat ride in Dal Lake. Proceed back to hotel. Dinner & Overnight stay at Srinagar hotel. End of day 1." },
      { day: 2, title: "Gulmarg Day Trip", detail: "After breakfast proceed to Gulmarg day trip. 2 hours’ drive one way. Cable car phase I ticket is included and subject to advance booking and availability. Additional union car 🚗. Visiting the following points,\n\n•	Durang valley\n•	Maharaja palace \n•	Strawberry valley \n•	Museum\n\nDinner & Overnight stay at Srinagar hotel. End of day 2" },
      { day: 3, title: "Pahalgam Day Trip", detail: "After breakfast proceed to Pehelgam day trip. 2 hours’ drive one way. Some points have to be covered using local union car. Visit the following points,\n\n•	Saffron field \n•	Avanti swamy temple \n•	Apple 🍎 valley for juice\n•	By extra vehicle to visit Mini Switzerland\n•	Kashmir valley\n \nSome points have to be covered using Pony on extra charges. Dinner & Overnight stay at Srinagar hotel. End of day 3" },
      { day: 4, title: "Sonamarg Day Trip", detail: "After breakfast proceed to Sonemarg. 2.5 hours’ drive.\n\t\n•	Meadow of gold (day trip)\n•	Enjoy trip to zero point\t\n•	War Memorial\n•	Baltal, fishing point at extra cost through union cab.\n•	Or visit the Thajiwas glacier by ponies at extra cost. \n\n Additional union car 🚗 provided. Dinner & Overnight stay at Srinagar hotel. End of day 4" },
      { day: 5, title: "Srinagar City Tour & Departure", detail: "Check out and proceed for Srinagar city tour. After shopping drop to Srinagar airport. End of day 5 with happy memories 😊" }
    ],
    accommodations: "Premium Srinagar hotels/houseboats and scenic Pahalgam resorts."
  },
  {
    id: 102,
    title: "Solitude & Coral Coves of Andaman",
    location: "Andaman",
    duration: "5 Nights / 6 Days",
    rating: "4.8",
    reviews: "26",
    tag: "Couples Escapes",
    price: "₹38,900",
    inclusions: "Boutique Beachside Cottages, Private Ferry Clearances",
    image: "/images/andaman.webp",
    metadata: { stay: "Boutique Beachside Cottages" },
    itinerary: [
      { day: 1, title: "Arrive Port Blair", detail: "Check into your hotel, evening visit to Cellular jail light & sound showcase." },
      { day: 2, title: "Private Ferry to Havelock", detail: "Fast-track boarding, settle into a beachfront cottage." },
      { day: 3, title: "Radhanagar BeachSolitude", detail: "Quiet morning walks on Asia's finest stretch of sand, sunset photography." },
      { day: 4, title: "Coral Reef Snorkeling", detail: "Boat ride to Elephant beach for private guided reef snorkel." },
      { day: 5, title: "Neil Island Island Walk", detail: "Private ferry transfer, quiet exploration of natural rock bridge formations." },
      { day: 6, title: "Departure Port Blair", detail: "Return ferry and airport connection." }
    ],
    accommodations: "Premium beach resorts and eco-luxe cottages directly on the shore."
  }
];

export default function DomesticHolidaysPage() {
  const [activePkg, setActivePkg] = useState(null);
  const enquire = useEnquiry();

  const handleRequest = (pkgTitle) => {
    enquire(`Domestic Package: ${pkgTitle}`);
  };

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      {/* Banner */}
      <section className="relative bg-brand-ink text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            Slow Travel India
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Discover India’s <span className="accent-serif text-brand-accent">Wonders</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Immerse yourself in heritage, backwaters, mountain valleys, and tropical coastlines. Slow-paced, highly personalized journeys.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {DOMESTIC_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="bg-white border border-brand-surface-cool rounded-premium overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="relative h-64 w-full overflow-hidden bg-brand-ink">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    width={600}
                    height={256}
                    className="h-full w-full object-cover opacity-95"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-brand-ink/80 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                    {pkg.location}
                  </div>
                  <div className="absolute top-4 right-4 bg-brand-accent text-brand-ink text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                    {pkg.tag}
                  </div>
                </div>

                <div className="p-8">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block mb-1">{pkg.duration}</span>
                  <h3 className="serif-font text-2xl font-bold text-brand-ink mb-4">{pkg.title}</h3>
                  
                  <div className="mb-6 flex items-center gap-4 text-xs font-semibold text-brand-muted border-b border-brand-surface-cool pb-4">
                    <span className="[font-variant-numeric:tabular-nums]">★ {pkg.rating} ({pkg.reviews} Reviews)</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-surface-cool shrink-0" />
                    <span>{pkg.inclusions.split(',')[0]}</span>
                  </div>

                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {pkg.accommodations || "Premium boutique properties and heritage stays aligned to your comfort."}
                  </p>

                  {/* Toggle Itinerary Preview */}
                  <button 
                    onClick={() => setActivePkg(activePkg === pkg.id ? null : pkg.id)}
                    className="text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-accent transition-colors flex items-center gap-1 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                  >
                    {activePkg === pkg.id ? 'Hide Itinerary Curation' : 'View Suggested Itinerary'}
                    <svg className={`w-3.5 h-3.5 transform transition-transform ${activePkg === pkg.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {activePkg === pkg.id && (
                    <div className="mt-4 border-t border-brand-surface-cool pt-4 space-y-4">
                      {pkg.itinerary.map((step) => (
                        <div key={step.day} className="flex gap-4">
                          <span className="serif-font font-bold text-brand-accent text-sm shrink-0 [font-variant-numeric:tabular-nums]">Day {step.day}</span>
                          <div>
                            <h4 className="font-bold text-xs text-brand-ink uppercase tracking-wide">{step.title}</h4>
                            <p className="text-xs text-brand-muted mt-1 leading-relaxed whitespace-pre-line">{step.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-8 border-t border-brand-surface-cool bg-brand-surface/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-brand-muted block font-semibold">Price</span>
                  <span className="serif-font text-lg font-bold text-brand-ink">On Request</span>
                </div>
                <button 
                  onClick={() => handleRequest(pkg.title)}
                  className="bg-brand-ink text-white font-bold uppercase tracking-wider text-xs px-6 py-4 rounded-premium hover:bg-brand-accent hover:text-brand-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  Request Custom Quote
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      <GroundTeams filterScope="Domestic Curation" />
    </div>
  );
}

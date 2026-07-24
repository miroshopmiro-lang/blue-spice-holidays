import { useState } from 'react';
import GroundTeams from '../components/GroundTeams';
import BrochureStrip from '../components/BrochureStrip';
import useEnquiry from '../hooks/useEnquiry';

const INT_PACKAGES = [
  {
    id: 201,
    title: "Lagoon Overwater Villas & Sands of Maldives",
    location: "Maldives",
    duration: "4 Nights / 5 Days",
    rating: "4.9",
    reviews: "64",
    tag: "Couples Escapes",
    price: "₹85,000",
    inclusions: "Overwater Pool Villa, Seaplane Transfers, All-Inclusive Dining",
    image: "/images/maldives.webp",
    accommodations: "5-star luxury overwater lagoon villas with private pool access.",
    itinerary: [
      { day: 1, title: "Seaplane Flight & Lagoon Arrival", detail: "Scenic seaplane flyover, check-in to your overwater private villa, evening sunset sunset views." },
      { day: 2, title: "Reef Snorkel & Spa", detail: "House reef guided snorkeling session, followed by a customized couples massage." },
      { day: 3, title: "Sandbank Picnic", detail: "Private boat excursion to a remote sandbank with gourmet lunch basket." },
      { day: 4, title: "Sunset Dolphin Cruise", detail: "Champagne cruise along the spinner dolphin corridors, candlelit beach dinner." },
      { day: 5, title: "Departure", detail: "Assisted seaplane transfer back to Malé airport." }
    ]
  },
  {
    id: 202,
    title: "Temples & Cliffside Sanctum of Bali",
    location: "Bali",
    duration: "6 Nights / 7 Days",
    rating: "4.8",
    reviews: "48",
    tag: "Adventure Curation",
    price: "₹52,000",
    inclusions: "Private Pool Ubud Villa, Uluwatu Fire Dance Curation",
    image: "/images/bali.webp",
    accommodations: "Jungle-view private pool villas in Ubud and luxury beach resorts in Nusa Dua.",
    itinerary: [
      { day: 1, title: "Arrive Ubud", detail: "Private transfer into Ubud's rainforest valleys, evening flower bath relaxation." },
      { day: 2, title: "Ubud Art & Monkey Forest", detail: "Artisan woodcarving studio visits and a slow forest sanctuary walk." },
      { day: 3, title: "Volcano Sunrise Trek", detail: "Optional early Mt Batur sunrise climb or a slow gourmet breakfast overlooking terraces." },
      { day: 4, title: "Temple Pilgrimage", detail: "Water purification ritual at Tirta Empul with a local guide." },
      { day: 5, title: "Uluwatu Sunset", detail: "Cliffside temple visit, sunset Kecak fire dance, beach seafood dinner." },
      { day: 6, title: "Free Beach Day", detail: "Surf lessons, ocean swimming, or lounge relaxation." },
      { day: 7, title: "Departure", detail: "Assisted transfer to Denpasar airport." }
    ]
  },
  {
    id: 203,
    title: "Old-World Valleys & Wine Trails of Georgia",
    location: "Georgia",
    duration: "6 Nights / 7 Days",
    rating: "4.9",
    reviews: "22",
    tag: "Family Heritage",
    price: "₹74,900",
    inclusions: "Château Accommodation, Kakheti Wine Guide, Tbilisi Cable Transfers",
    image: "/images/georgia.webp",
    accommodations: "Boutique hotels in Tbilisi Old Town and a restored wine château in Kakheti.",
    itinerary: [
      { day: 1, title: "Arrive Tbilisi", detail: "Private airport pickup, evening walk through Tbilisi Old Town." },
      { day: 2, title: "Tbilisi Cable Car & Sulfur Baths", detail: "Narikhala fortress views, traditional warm bath curation, evening feast." },
      { day: 3, title: "Drive to Kakheti", detail: "Scenic mountain crossing, check into a restored vineyard château." },
      { day: 4, title: "Clay Jar Qvevri Tasting", detail: "Learn the 8,000-year UNESCO winemaking tradition with a master sommelier." },
      { day: 5, title: "Sighnaghi City of Love", detail: "Walk the medieval stone walls overlooking Alazani valley." },
      { day: 6, title: "Ananuri & Kazbegi", detail: "Mountain roads to Gergeti Trinity church under high peaks." },
      { day: 7, title: "Departure", detail: "Transfer to Tbilisi airport." }
    ]
  },
  {
    id: 204,
    title: "Classic London Discovery & City Curation",
    location: "London, UK",
    duration: "6 Nights / 7 Days",
    rating: "4.9",
    reviews: "32",
    tag: "Couples Escapes",
    price: "On Request",
    inclusions: "Bespoke Accommodations, Wembley Stadium Pass, River Cruise, In association with Rediscover Tourism",
    image: "/images/london.webp",
    accommodations: "Curated premium accommodations in central London, organized in association with our UK partner Rediscover Tourism.",
    itinerary: [
      { day: 1, title: "Welcome to London", detail: "Warm welcome and private transfer from London airport to your premium accommodation." },
      { day: 2, title: "Wembley & Ealing Road Curation", detail: "Day trip to the world-famous Wembley Stadium, beautiful Hindu temples, and boutique shopping on Ealing Road (the 'Delhi of UK'). Experience London's iconic nightlife in the evening." },
      { day: 3, title: "Historic Westminster & London Eye", detail: "Guided day trip to Westminster Abbey, Houses of Parliament, Parliament Square, Big Ben, and a flight on the iconic London Eye." },
      { day: 4, title: "Royal Palaces & Squares", detail: "Excursion to Buckingham Palace, Trafalgar Square, National Gallery, and the lively Leicester Square." },
      { day: 5, title: "Hyde Park & Science Museum", detail: "Unwind at Hyde Park, stroll through Covent Garden's markets, and explore the interactive exhibits at the Science Museum." },
      { day: 6, title: "Royal Park Leisure & River Cruise", detail: "A relaxing day in the Royal Parks followed by an enchanting River Thames cruise to view the city skyline." },
      { day: 7, title: "Farewell London", detail: "Private transfer from your accommodation to the airport. End of your 7-day tour with happy memories." }
    ]
  }
];

export default function InternationalHolidaysPage() {
  const [activePkg, setActivePkg] = useState(null);
  const enquire = useEnquiry();

  const handleRequest = (pkgTitle) => {
    enquire(`International Package: ${pkgTitle}`);
  };

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      {/* Banner */}
      <section className="relative bg-brand-ink text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            Slow Travel Global
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Discover International <span className="accent-serif text-brand-accent">Paradises</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Ocean villas, mountain valleys, and ancient cultural trails. We take care of everything, from visa processes to bespoke local itineraries.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {INT_PACKAGES.map((pkg) => (
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
                    {pkg.accommodations}
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

      <BrochureStrip />

      <GroundTeams filterScope="International Curation" />
    </div>
  );
}

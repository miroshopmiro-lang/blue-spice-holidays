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
    id: 205,
    title: "Emerald Hills & Serene Coast of Sri Lanka",
    location: "Sri Lanka",
    duration: "4 Nights / 5 Days",
    rating: "4.9",
    reviews: "28",
    tag: "Family Heritage",
    price: "On Request",
    inclusions: "Private Chauffeur, Kandy & Nuwara Eliya Curation, Bentota Beach Stays",
    image: "/images/placeholder.svg",
    accommodations: "Boutique heritage stays in Kandy, hill resort chalets in Nuwara Eliya, and beachfront villas in Bentota.",
    itinerary: [
      { day: 1, title: "Colombo Arrival & Galle Face Stroll", detail: "Warm welcome at Colombo airport, private transfer to hotel, evening sunset stroll along Galle Face Green." },
      { day: 2, title: "Pinnawala Elephants & Kandy Temple", detail: "Enroute to Kandy visit Pinnawala Elephant Sanctuary. Evening visit to sacred Temple of the Tooth Relic." },
      { day: 3, title: "Nuwara Eliya Tea Trails & Waterfalls", detail: "Scenic hill country drive, visit Ramboda Waterfalls and lush tea factory estates." },
      { day: 4, title: "Bentota Golden Beaches & Boat Safari", detail: "Transfer to Bentota coastal town, Madu River boat safari, and sea turtle sanctuary visit." },
      { day: 5, title: "Departure", detail: "Check out, local shopping in Colombo, and private transfer to airport." }
    ]
  },
  {
    id: 206,
    title: "Himalayan Sacred Valleys & Lakes of Nepal",
    location: "Nepal",
    duration: "4 Nights / 5 Days",
    rating: "4.9",
    reviews: "35",
    tag: "Adventure Curation",
    price: "On Request",
    inclusions: "Kathmandu Valley Curation, Pokhara Lake Views, Private Transfers",
    image: "/images/placeholder.svg",
    accommodations: "Luxury Kathmandu heritage hotels and lakeside boutique resort suites in Pokhara.",
    itinerary: [
      { day: 1, title: "Kathmandu Arrival & Thamel Stroll", detail: "Warm welcome at Kathmandu airport, private transfer to hotel, evening walk through Thamel market." },
      { day: 2, title: "Pashupatinath & Boudhanath Stupa", detail: "Guided visits to sacred Pashupatinath temple, Boudhanath stupa, and historic Patan Durbar Square." },
      { day: 3, title: "Drive to Pokhara & Phewa Lake Cruise", detail: "Scenic mountain drive to Pokhara, sunset boat cruise on serene Phewa Lake." },
      { day: 4, title: "Sarangkot Sunrise & Davis Falls", detail: "Early morning Sarangkot Annapurna sunrise view, Davis Falls, and Peace Pagoda visit." },
      { day: 5, title: "Departure", detail: "Scenic return transfer to Kathmandu, local craft shopping, and airport connection." }
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

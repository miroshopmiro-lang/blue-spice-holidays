import { useState } from 'react';

const FEATURED_CRUISES = [
  { 
    id: 1, 
    liner: 'Cordelia Cruises', 
    name: 'Goa & Lakshadweep Explorer', 
    duration: '5 Nights / 6 Days', 
    route: 'Mumbai ➔ Goa ➔ Lakshadweep ➔ Mumbai',
    price: '₹42,500', 
    image: '/images/goa_cruise.jpg',
    highlights: ['Ocean View Cabins', 'Casino & Lounges', 'Pure Veg Dining Options']
  },
  { 
    id: 2, 
    liner: 'Royal Caribbean', 
    name: 'Singapore & Malaysia Getaway', 
    duration: '4 Nights / 5 Days', 
    route: 'Singapore ➔ Penang ➔ Phuket ➔ Singapore',
    price: '₹54,900', 
    image: '/images/singapore_malaysia_cruise.jpg',
    highlights: ['Broadway-style Shows', 'FlowRider Surf Simulator', 'Multiple Theme Restaurants']
  },
  { 
    id: 3, 
    liner: 'Celebrity Cruises', 
    name: 'Grecian Islands Curation', 
    duration: '7 Nights / 8 Days', 
    route: 'Athens ➔ Santorini ➔ Mykonos ➔ Ephesus ➔ Athens',
    price: '₹1,28,000', 
    image: '/images/grecian_island_cruise.jpg',
    highlights: ['Luxury Staterooms', 'Infinite Verandas', 'Michelin-starred Menus']
  },
];

export default function CruisesPage() {
  const [activeCruise, setActiveCruise] = useState(FEATURED_CRUISES[0].name);
  const [submitted, setSubmitted] = useState(false);

  const handleRequest = (name) => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      window.dispatchEvent(
        new CustomEvent('prefill-itinerary', { 
          detail: { 
            destination: `Cruise request: ${name}`, 
            month: 'Any month' 
          } 
        })
      );
      const el = document.getElementById('custom');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      {/* Banner / Header */}
      <section className="relative bg-brand-ink text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            Luxury Sea Curation
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Sail in Style with <span className="accent-serif text-brand-accent">Bespoke Cruises</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Ocean voyages, river cruises, and luxury liners handled end-to-end. Stateroom upgrades, onboard credits, and shore excursions curated.
          </p>
        </div>
      </section>

      {/* Featured Cruise Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">CRUISE LINERS</p>
          <h2 className="serif-font text-3xl font-bold text-brand-ink mt-2 sm:text-4xl">Featured Voyage Curations</h2>
          <p className="mt-3 text-brand-muted text-sm sm:text-base">Experience floating 5-star resorts sailing through local coastlines or international channels.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FEATURED_CRUISES.map((cruise) => (
            <div key={cruise.id} className="bg-white border border-brand-surface-cool rounded-premium overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-brand-ink">
                  <img 
                    src={cruise.image} 
                    alt={cruise.name} 
                    width={400}
                    height={224}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-brand-ink/75 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                    {cruise.liner}
                  </div>
                </div>
                
                <div className="p-6">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block mb-1">{cruise.duration}</span>
                  <h3 className="serif-font text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-accent transition-colors">
                    {cruise.name}
                  </h3>
                  <p className="text-xs font-medium text-brand-muted bg-brand-surface-cool/30 border border-brand-surface-cool rounded-sm px-3 py-2.5 mb-4">
                    <span className="text-brand-ink font-semibold">Route:</span> {cruise.route}
                  </p>
                  
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">Onboard Inclusions:</h4>
                  <ul className="space-y-1.5">
                    {cruise.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-brand-ink">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t border-brand-surface-cool bg-brand-surface/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-brand-muted block font-semibold">Starting Price</span>
                  <span className="serif-font text-lg font-bold text-brand-ink [font-variant-numeric:tabular-nums]">{cruise.price}</span>
                </div>
                <button 
                  onClick={() => handleRequest(cruise.name)}
                  className="bg-brand-ink text-white font-bold uppercase tracking-wider text-[10px] px-5 py-3 rounded-premium hover:bg-brand-accent hover:text-brand-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  Request Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Onboard Curation Highlights */}
      <section className="bg-brand-ink text-white py-20 px-6 border-t border-brand-surface-cool">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">THE LUXURY RETREAT ON SEA</p>
              <h2 className="serif-font text-3xl font-bold mt-2 sm:text-4xl">Ultimate Onboard Experience</h2>
              <p className="mt-4 text-white/70 text-sm sm:text-base leading-relaxed">
                Modern mega-liners provide exceptional dining experiences matching land-based Michelin guides, wellness spas, multi-story theaters, private pools, and bespoke butler service options.
              </p>
              <p className="mt-4 text-white/70 text-sm sm:text-base leading-relaxed">
                Whether you prefer the high-energy activities of large ships or the quiet elegance of boutique luxury yachts, we align the right liner and cabin configurations to match your family’s dynamic.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-white/10 p-6 rounded-premium bg-white/5">
                <span className="text-brand-accent serif-font text-3xl font-bold block">100%</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/60 mt-1 block">Custom Shore Excursions</span>
              </div>
              <div className="border border-white/10 p-6 rounded-premium bg-white/5">
                <span className="text-brand-accent serif-font text-3xl font-bold block">12+</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/60 mt-1 block">World-Class Liners Partnered</span>
              </div>
              <div className="border border-white/10 p-6 rounded-premium bg-white/5">
                <span className="text-brand-accent serif-font text-3xl font-bold block">VIP</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/60 mt-1 block">Stateroom Upgrades</span>
              </div>
              <div className="border border-white/10 p-6 rounded-premium bg-white/5">
                <span className="text-brand-accent serif-font text-3xl font-bold block">24/7</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/60 mt-1 block">Direct Concierge Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

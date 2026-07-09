import { useState } from 'react';

const RETREATS = [
  { 
    id: 1, 
    name: 'Somatheeram Ayurvedic Curation', 
    location: 'Chowara beach, Kerala backwaters', 
    duration: '7 Nights / 8 Days', 
    price: '₹95,000', 
    image: '/images/ayurveda.webp',
    focus: 'Ayurveda & Panchakarma Detoxification',
    inclusions: ['Resident Doctor Consultation', 'Daily Herb-oil Abhyangam massage', 'Sattvik Vegetarian Meals', 'Morning & Evening Hatha Yoga']
  },
  { 
    id: 2, 
    name: 'Ananda In The Himalayas Escape', 
    location: 'Narendra Nagar, Uttarakhand Himalayas', 
    duration: '5 Nights / 6 Days', 
    price: '₹1,45,000', 
    image: '/images/ananda.webp',
    focus: 'Stress Management & Mind Rejuvenation',
    inclusions: ['Individual Ayurvedic Body-type profiling', 'Ganges water hydrotherapy', 'Pranayama & Tibetan singing bowl sessions', 'Organic farm-to-table dining']
  },
];

export default function WellnessRetreatsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleRequest = (name) => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      window.dispatchEvent(
        new CustomEvent('prefill-itinerary', { 
          detail: { 
            destination: `Wellness Curation: ${name}`, 
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
            Holistic Wellness & Healing
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Reclaim Solitude with <span className="accent-serif text-brand-accent">Wellness Retreats</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Panchakarma detoxifications, stress releases, and wellness escapes in Kerala backwaters and the high valley sanctuaries of the Himalayas.
          </p>
        </div>
      </section>

      {/* Wellness Retreats Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">CURATED RETREATS</p>
          <h2 className="serif-font text-3xl font-bold text-brand-ink mt-2 sm:text-4xl">Sattvik & Ayurvedic Sanctuaries</h2>
          <p className="mt-3 text-brand-muted text-sm sm:text-base">Slow-paced retreats curated for physical healing and mental tranquility.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {RETREATS.map((retreat) => (
            <div key={retreat.id} className="bg-white border border-brand-surface-cool rounded-premium overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="relative h-64 w-full overflow-hidden bg-brand-ink">
                  <img 
                    src={retreat.image} 
                    alt={retreat.name} 
                    width={600}
                    height={256}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-brand-ink/75 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                    {retreat.location.split(',')[1]}
                  </div>
                </div>
                
                <div className="p-8">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block mb-1">{retreat.duration}</span>
                  <h3 className="serif-font text-2xl font-bold text-brand-ink mb-2 group-hover:text-brand-accent transition-colors">
                    {retreat.name}
                  </h3>
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-wide block mb-4">{retreat.focus}</span>
                  <p className="text-xs text-brand-muted mb-4">{retreat.location}</p>
                  
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-3 border-t border-brand-surface-cool pt-4">Retreat Curation Includes:</h4>
                  <ul className="space-y-2">
                    {retreat.inclusions.map((inclusion, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-ink leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-brand-accent shrink-0 mt-1.5" />
                        {inclusion}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-8 border-t border-brand-surface-cool bg-brand-surface/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-brand-muted block font-semibold">Price</span>
                  <span className="serif-font text-lg font-bold text-brand-ink">On Request</span>
                </div>
                <button 
                  onClick={() => handleRequest(retreat.name)}
                  className="bg-brand-ink text-white font-bold uppercase tracking-wider text-xs px-6 py-4 rounded-premium hover:bg-brand-accent hover:text-brand-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  Connect with Wellness Coordinator
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wellness Philosophy Section */}
      <section className="bg-brand-surface-cool/60 py-20 px-6 border-t border-brand-surface-cool">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">AYURVEDA & MINDFULNESS</span>
            <h2 className="serif-font text-3xl font-bold text-brand-ink mt-2 sm:text-4xl">Our Curation Philosophy</h2>
            <p className="mt-3 text-brand-muted text-sm sm:text-base max-w-2xl mx-auto">How we ensure the highest standards of safety, authenticity, and personalized healing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-premium border border-brand-surface-cool shadow-soft flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 font-display font-semibold text-sm">01</div>
                <h3 className="serif-font text-xl font-bold text-brand-ink mb-4">Certified Ayurvedic Partners</h3>
                <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                  We partner exclusively with authentic Ayurvedic resorts and wellness properties holding valid credentials, premium hospitality standards, and certified resident doctors.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-premium border border-brand-surface-cool shadow-soft flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 font-display font-semibold text-sm">02</div>
                <h3 className="serif-font text-xl font-bold text-brand-ink mb-4">Dedicated Wellness Coordinator</h3>
                <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                  Every booking is paired with a dedicated wellness coordinator who ensures your dietary preferences, medical focus areas, and travel loops are communicated directly to the resident physicians at the properties before your arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

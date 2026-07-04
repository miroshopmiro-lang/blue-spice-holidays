import { Link } from 'react-router-dom';

export default function HolidaysHubPage() {
  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      {/* Banner / Header */}
      <section className="relative bg-brand-ink text-white py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            Slow Travel Curations
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Journeys Handcrafted for <span className="accent-serif text-brand-accent">Slow Travel</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            We move away from dense group itineraries and transactional checklists. Discover unhurried domestic sanctuaries and international paradises.
          </p>
        </div>
      </section>

      {/* Gateway Cards */}
      <section className="py-20 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Domestic Curation card */}
          <div className="relative group overflow-hidden rounded-premium border border-brand-surface-cool shadow-lg h-[450px] flex flex-col justify-end p-8 bg-brand-ink">
            <img 
              src="/images/munnar.webp" 
              alt="Discover India’s Wonders" 
              width={540}
              height={450}
              className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10" />
            <div className="relative z-20 text-white">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest block mb-2">DOMESTIC CURATION</span>
              <h2 className="serif-font text-3xl font-bold mb-3">Discover India’s Wonders</h2>
              <p className="text-sm text-white/80 mb-6 leading-relaxed">
                Float through the serene spice channels of Munnar, walk through golden fortress sands in Rajasthan, or witness morning light over Kashmir’s snowbound valleys.
              </p>
              <Link 
                to="/holidays/domestic"
                className="inline-flex bg-brand-accent text-brand-ink font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-premium hover:bg-brand-accent-hover transition-[background-color,color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Explore Domestic Curation
              </Link>
            </div>
          </div>

          {/* Global Escapes card */}
          <div className="relative group overflow-hidden rounded-premium border border-brand-surface-cool shadow-lg h-[450px] flex flex-col justify-end p-8 bg-brand-ink">
            <img 
              src="/images/maldives.webp" 
              alt="Discover International Paradises" 
              width={540}
              height={450}
              className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10" />
            <div className="relative z-20 text-white">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest block mb-2">GLOBAL ESCAPES</span>
              <h2 className="serif-font text-3xl font-bold mb-3">Discover International Paradises</h2>
              <p className="text-sm text-white/80 mb-6 leading-relaxed">
                Rest on azure private shores in the Maldives, traverse high temple paths in Bali, or escape to the old-world valleys and vineyard trails of Georgia.
              </p>
              <Link 
                to="/holidays/international"
                className="inline-flex bg-brand-accent text-brand-ink font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-premium hover:bg-brand-accent-hover transition-[background-color,color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Design International Escape
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Curation philosophy row */}
      <section className="bg-brand-surface-cool/30 border-t border-b border-brand-surface-cool py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="serif-font text-xl font-bold text-brand-ink mb-3">Custom Travel Loop</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Every detail (flights, visa, stay, driver, guide) is linked dynamically. Change speeds, skip routes, or add spontaneous loops.
            </p>
          </div>
          <div>
            <h3 className="serif-font text-xl font-bold text-brand-ink mb-3">Zero Rushed Schedules</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              No mandatory early alarms or packed tour buses. Sleep in, explore at your own pace, and soak in local cultures.
            </p>
          </div>
          <div>
            <h3 className="serif-font text-xl font-bold text-brand-ink mb-3">Specialist Network</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Backed by our certified ground contacts, luxury hotels, and local specialists available on a 24/7 direct helpline.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

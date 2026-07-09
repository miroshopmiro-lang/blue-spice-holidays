import { useState } from 'react';

const TIERS = [
  {
    id: 'general',
    name: 'Leisure & Holidays',
    mark: 'PKG',
    sub: 'Vacations',
    featured: false,
    blurb: 'Flights, slow-travel packages, visa coordination, and luxury cruise voyages under a single point of contact.',
    items: ['Bespoke Holiday Packages', 'Domestic & International Flights', 'Visa & Forex Assistance', 'Luxury Cruises & Yacht Charters']
  },
  {
    id: 'vip',
    name: 'VIP & Executive',
    mark: 'VIP',
    sub: 'Executive',
    featured: true,
    blurb: 'Private aviation, executive transportation, and confidential end-to-end travel for VIPs, celebrities, and delegations.',
    items: ['Private Aviation & VIP Charters', 'Ground & Executive Transport', 'Celebrity & High-Profile Travel', 'Airport Meet & Assist']
  },
  {
    id: 'events',
    name: 'Weddings & Events',
    mark: 'E&W',
    sub: 'Weddings',
    featured: false,
    blurb: 'Destination weddings, luxury fleets, professional security, and full corporate retreat/MICE production.',
    items: ['Destination Weddings', 'Luxury Wedding Cars', 'Executive Protection & Bouncers', 'Conferences & MICE']
  }
];

export default function HomepageServices() {
  const handleInquire = (serviceName) => {
    window.dispatchEvent(
      new CustomEvent('prefill-itinerary', { 
        detail: { 
          destination: `Service Inquiry: ${serviceName}`, 
          month: 'Any month' 
        } 
      })
    );
    const el = document.getElementById('custom');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="bg-[#182319] text-white py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            ★ Elite Logistics
          </span>
          <h2 className="serif-font text-3xl font-bold mt-4 sm:text-4xl">
            Choose The Right Service For Your <span className="accent-serif text-brand-accent">Perfect Journey</span>
          </h2>
          <p className="mt-4 text-white/60 text-sm sm:text-base leading-relaxed">
            No planning fees and no-obligation quotes, every package is tailored with transparent, premium handling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier) => {
            const isFeatured = tier.featured;
            return (
              <div
                key={tier.id}
                className={`flex overflow-hidden rounded-premium transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 ${
                  isFeatured 
                    ? 'bg-white text-brand-ink lg:scale-[1.03] shadow-2xl border border-brand-accent/50' 
                    : 'bg-white/[0.03] border border-white/10 text-white'
                }`}
              >
                {/* Left 1/3: Tier Mark */}
                <div className="flex w-1/3 flex-col items-center justify-center px-2 py-8 text-center shrink-0 border-r border-white/5">
                  <span className={`text-3xl sm:text-4xl font-extrabold leading-none tracking-tight ${isFeatured ? 'text-brand-ink' : 'text-brand-accent'}`}>
                    {tier.mark}
                  </span>
                  <span className={`mt-2 text-[9px] font-bold uppercase tracking-[0.2em] ${isFeatured ? 'text-brand-ink/65' : 'text-white/60'}`}>
                    {tier.sub}
                  </span>
                </div>

                {/* Right 2/3: Slanted Panel using clip-path */}
                <div
                  className={`-ml-px flex w-2/3 flex-col justify-between py-6 pl-5 pr-5 sm:pl-7 [clip-path:polygon(12px_0,100%_0,100%_100%,0_100%)] ${
                    isFeatured ? 'bg-brand-surface/75' : 'bg-black/20'
                  }`}
                >
                  <div>
                    {isFeatured && (
                      <span className="inline-block bg-brand-accent text-brand-ink font-bold uppercase tracking-wider text-[8px] px-2 py-0.5 rounded-sm mb-2">
                        Featured Service
                      </span>
                    )}
                    <p className={`text-xs leading-relaxed mb-4 ${isFeatured ? 'text-brand-ink/80' : 'text-white/70'}`}>
                      {tier.blurb}
                    </p>

                    <ul className="space-y-1.5 border-t border-black/5 dark:border-white/5 pt-3">
                      {tier.items.map((item, idx) => (
                        <li key={idx} className={`flex items-center gap-1.5 text-[10px] ${isFeatured ? 'text-brand-ink/90 font-medium' : 'text-white/80'}`}>
                          <span className={`w-1 h-1 rounded-full shrink-0 ${isFeatured ? 'bg-brand-ink' : 'bg-brand-accent'}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-3">
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                      {tier.name}
                    </h3>
                    <button
                      onClick={() => handleInquire(tier.name)}
                      className={`flex items-center gap-0.5 text-[9px] font-bold uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm ${
                        isFeatured 
                          ? 'text-brand-ink hover:text-brand-accent' 
                          : 'text-brand-accent hover:text-white'
                      }`}
                    >
                      Get Quote ↗
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

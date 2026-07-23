import { useEffect } from 'react';
import HubGrid from '../components/HubGrid';

const ITEMS = [
  { label: 'Celebrity Tours', path: '/special-tours/celebrity', image: '/images/luxury -car.webp' },
  { label: "Diplomat's Tour", path: '/special-tours/diplomats', image: '/images/services/corporate.webp' },
  { label: 'Bouncers for VIPs & Celebrities', path: '/special-tours/bouncers', image: '/images/bouncer.webp' },
  { label: 'SPL Kitchen Tours for Groups', path: '/special-tours/kitchen-tours', image: '/images/kerala.webp' },
];

export default function SpecialToursHubPage() {
  useEffect(() => {
    document.title = "Special Tours · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Celebrity tours, diplomat curation, executive protection and special kitchen tours by Blue Spice Holidays.");
    }
  }, []);

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      <section className="relative bg-brand-ink text-white py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            Discreet Curation
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Special Tours for <span className="accent-serif text-brand-accent">Distinguished Guests</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Celebrity, diplomatic, and VIP travel handled with the discretion and precision the occasion demands.
          </p>
        </div>
      </section>

      <HubGrid items={ITEMS} />
    </div>
  );
}

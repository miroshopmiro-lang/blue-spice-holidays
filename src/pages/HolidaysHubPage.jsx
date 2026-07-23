import { useEffect } from 'react';
import HubGrid from '../components/HubGrid';

const ITEMS = [
  { label: 'International Tours', path: '/holidays/international', image: '/images/maldives.webp' },
  { label: 'Domestic Tours', path: '/holidays/domestic', image: '/images/munnar.webp' },
  { label: 'Ladies Tours', path: '/holidays/ladies', image: '/images/ladies-only-tour/thailand-ladies-tour-1.webp' },
  { label: 'Senior Citizen Tours', path: '/holidays/senior-citizen', image: '/images/kashmir.webp' },
  { label: 'Group Tours', path: '/holidays/group', image: '/images/luxury-coach.webp' },
  { label: 'Honeymoon Tours', path: '/holidays/honeymoon', image: '/images/bali.webp' },
  { label: 'Office Tours', path: '/holidays/office', image: '/images/services/corporate.webp' },
  { label: 'School, College & Educational Tours', path: '/holidays/educational', image: '/images/taj-mahal.webp' },
  { label: 'Spiritual Tours', path: '/holidays/spiritual', image: '/images/chardham_heli_yatra.webp' },
];

export default function HolidaysHubPage() {
  useEffect(() => {
    document.title = "Holiday Tours · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "International, domestic, ladies, senior citizen, group, honeymoon, office, educational and spiritual tours curated by Blue Spice Holidays.");
    }
  }, []);

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
            Journeys Handcrafted for <span className="accent-serif text-brand-accent">Every Traveller</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            From international escapes to spiritual pilgrimages, find the tour style built around who you're travelling with.
          </p>
        </div>
      </section>

      <HubGrid items={ITEMS} />

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

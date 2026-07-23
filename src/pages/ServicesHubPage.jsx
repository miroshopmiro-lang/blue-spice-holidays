import { useEffect } from 'react';
import HubGrid from '../components/HubGrid';

const ITEMS = [
  { label: 'Resort & Hotel Booking', path: '/services/hotels', image: '/images/services/holidays.webp' },
  { label: 'Flight Booking', path: '/services/flights', image: '/images/services/flights.webp' },
  { label: 'Tourist Visa Assistance', path: '/services/visa', image: '/images/services/visa.webp' },
  { label: 'Forex Assistance', path: '/services/forex', image: '/images/forex assistance.webp' },
  { label: 'Destination Wedding', path: '/services/destination-weddings', image: '/images/destination-weddings.webp' },
  { label: 'Events', path: '/services/events', image: '/images/Conferences,meeting.training.webp' },
  { label: 'Conference', path: '/services/conferences', image: '/images/services/corporate.webp' },
  { label: 'Anniversary Function', path: '/services/anniversary', image: '/images/bali.webp' },
  { label: 'Birthday Party', path: '/services/birthday', image: '/images/dubai.webp' },
  { label: 'Yacht Parties', path: '/services/yacht-parties', image: '/images/goa_cruise.webp' },
];

export default function ServicesHubPage() {
  useEffect(() => {
    document.title = "Travel Services · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Hotel booking, flights, visa, forex, weddings, events and more — all Blue Spice Holidays services in one place.");
    }
  }, []);

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      <section className="relative bg-brand-ink text-white py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            Elite Logistics
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Everything Your Journey <span className="accent-serif text-brand-accent">Requires</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            From hotel booking and visas to weddings, events, and yacht parties — one team, one point of contact.
          </p>
        </div>
      </section>

      <HubGrid items={ITEMS} />
    </div>
  );
}

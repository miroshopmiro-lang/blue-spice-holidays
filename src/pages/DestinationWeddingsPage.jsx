import { useEffect } from 'react';
import WeddingsEvents from '../components/WeddingsEvents';
import CustomItineraryForm from '../components/CustomItineraryForm';
import BrochureStrip from '../components/BrochureStrip';

export default function DestinationWeddingsPage() {
  useEffect(() => {
    document.title = "Destination Weddings & Events · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Destination weddings, luxury wedding cars, and full event logistics curated by Blue Spice Holidays.");
    }
  }, []);

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      <section className="relative bg-brand-ink text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            Destination Wedding
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Weddings Coordinated <span className="accent-serif text-brand-accent">Down to the Last Detail</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            From venue and guest logistics to the wedding-day fleet, we manage every layer so the celebration stays effortless.
          </p>
        </div>
      </section>

      <WeddingsEvents />
      <BrochureStrip />
      <CustomItineraryForm />
    </div>
  );
}

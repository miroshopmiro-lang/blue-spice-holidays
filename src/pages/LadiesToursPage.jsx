import { useEffect } from 'react';
import LadiesOnlyTours from '../components/LadiesOnlyTours';
import CustomItineraryForm from '../components/CustomItineraryForm';

export default function LadiesToursPage() {
  useEffect(() => {
    document.title = "Ladies Only Tours · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Women-only group tours with dedicated ground support, curated by Blue Spice Holidays.");
    }
  }, []);

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      <section className="relative bg-brand-ink text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            Ladies Tours
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Group Journeys, Built for <span className="accent-serif text-brand-accent">Women Travelling Together</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Dedicated ground support, women-friendly accommodations, and itineraries designed around comfort and security.
          </p>
        </div>
      </section>

      <LadiesOnlyTours />
      <CustomItineraryForm />
    </div>
  );
}

import { useEffect } from 'react';
import { BROCHURES } from '../data/brochures';
import BrochureGallery from '../components/BrochureGallery';

export default function BrochuresPage() {
  useEffect(() => {
    document.title = "Travel Brochures & Curation Guides · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "View our travel brochures and curation guides. Custom travel planning by Blue Spice Holidays.");
    }
  }, []);

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      {/* Banner */}
      <section className="relative bg-brand-ink text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            Exclusive Travel Resources
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Curated <span className="accent-serif text-brand-accent">Travel Brochures</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            View our latest travel brochures and curation guides. Click any brochure to view full size or download.
          </p>
        </div>
      </section>

      {/* Grid of Brochures */}
      <section className="py-20 max-w-6xl mx-auto px-6 lg:px-8">
        <BrochureGallery items={BROCHURES} columnsClassName="md:grid-cols-2 lg:grid-cols-3" />
      </section>
    </div>
  );
}

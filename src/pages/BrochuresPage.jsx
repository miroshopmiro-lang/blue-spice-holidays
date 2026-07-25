import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BROCHURES, BROCHURE_CATEGORIES } from '../data/brochures';
import BrochureGallery from '../components/BrochureGallery';

export default function BrochuresPage() {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    document.title = "Travel Brochures & Curation Guides · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "View our organized travel brochures and curation guides connected to Holidays, Services, and Special Tours.");
    }
  }, []);

  const holidaysBrochures = BROCHURES.filter(b => b.category === 'holidays');
  const servicesBrochures = BROCHURES.filter(b => b.category === 'services');
  const specialBrochures = BROCHURES.filter(b => b.category === 'special-tours');

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
            Explore our brochures organized by travel menus and packages. Click any brochure to view full size or download.
          </p>
        </div>
      </section>

      {/* Category Navigation & Section Jump Bar */}
      <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-brand-surface-cool py-4 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2">
          {BROCHURE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-brand-ink text-white shadow-sm'
                  : 'bg-brand-surface text-brand-muted hover:text-brand-ink border border-brand-surface-cool'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </section>

      {/* Structured Sections */}
      <section className="py-16 max-w-6xl mx-auto px-6 lg:px-8 space-y-20">

        {/* Section 1: Holidays & Group Journeys */}
        {(activeTab === 'all' || activeTab === 'holidays') && (
          <div id="holidays-section" className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-brand-surface-cool pb-5">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Connected to Holidays Menu
                </span>
                <h2 className="serif-font text-2xl sm:text-3xl font-bold text-brand-ink">
                  Holidays &amp; Group Journeys
                </h2>
                <p className="text-sm text-brand-muted mt-1">
                  Domestic &amp; international group packages, hill stations, islands, and corporate offsites.
                </p>
              </div>
              <Link
                to="/holidays"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-royal hover:text-brand-ink shrink-0"
              >
                Explore Holidays Hub &rarr;
              </Link>
            </div>

            <BrochureGallery items={holidaysBrochures} columnsClassName="md:grid-cols-2 lg:grid-cols-3" />
          </div>
        )}

        {/* Section 2: Travel Services & Assistance */}
        {(activeTab === 'all' || activeTab === 'services') && (
          <div id="services-section" className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-brand-surface-cool pb-5">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Connected to Services Menu
                </span>
                <h2 className="serif-font text-2xl sm:text-3xl font-bold text-brand-ink">
                  Travel Services &amp; Assistance
                </h2>
                <p className="text-sm text-brand-muted mt-1">
                  Resort bookings, flight tickets, tourist visas, forex, events, and wedding venues.
                </p>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-royal hover:text-brand-ink shrink-0"
              >
                Explore Services Hub &rarr;
              </Link>
            </div>

            <BrochureGallery items={servicesBrochures} columnsClassName="md:grid-cols-2 lg:grid-cols-3" />
          </div>
        )}

        {/* Section 3: Specialty & Signature Tours */}
        {(activeTab === 'all' || activeTab === 'special-tours') && (
          <div id="special-tours-section" className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-brand-surface-cool pb-5">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Connected to Special Tours Menu
                </span>
                <h2 className="serif-font text-2xl sm:text-3xl font-bold text-brand-ink">
                  Specialty &amp; Signature Tours
                </h2>
                <p className="text-sm text-brand-muted mt-1">
                  Spiritual Yatras, Honeymoon packages, Kitchen Tours, Ladies-only escapes, and VIP tours.
                </p>
              </div>
              <Link
                to="/special-tours"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-royal hover:text-brand-ink shrink-0"
              >
                Explore Special Tours &rarr;
              </Link>
            </div>

            <BrochureGallery items={specialBrochures} columnsClassName="md:grid-cols-2 lg:grid-cols-3" />
          </div>
        )}

      </section>
    </div>
  );
}

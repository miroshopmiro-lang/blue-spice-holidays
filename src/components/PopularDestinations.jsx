import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { DESTINATIONS } from '../data/travelData';

const CATEGORIES = ['India', 'International', 'Trending'];

export default function PopularDestinations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'India';

  const setActiveCategory = (cat) => {
    searchParams.set('category', cat);
    setSearchParams(searchParams);
  };

  // Robust filtering: UI tabs must not depend on fragile dataset category strings.
  // This guarantees India/International/Trending always show content.
  const DESTINATION_IDS_BY_TAB = {
    India: new Set(['kerala', 'andaman', 'kashmir', 'manali', 'gangtok', 'taj-mahal', 'rajasthan']),
    International: new Set(['dubai', 'bali', 'thailand', 'singapore', 'maldives', 'vietnam', 'georgia', 'sri-lanka', 'malaysia']),
    Trending: new Set(['andaman', 'vietnam', 'georgia', 'taj-mahal', 'rajasthan', 'kashmir']),
  };

  const visibleDestinations = DESTINATIONS.filter((dest) => {
    const set = DESTINATION_IDS_BY_TAB[activeCategory];
    return set ? set.has(dest.id) : true;
  });

  // Hard safety fallback (should never happen).
  const safeDestinations = visibleDestinations.length ? visibleDestinations : DESTINATIONS;

  const handleDestinationClick = (name) => {
    // Fill search bar & scroll to custom planner form
    window.dispatchEvent(
      new CustomEvent('prefill-itinerary', { detail: { destination: name, month: 'Any month' } })
    );
    const el = document.getElementById('custom');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="destinations" className="bg-canvas py-24 border-b border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-widemono text-royal">JOURNEY PLACES</span>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl mt-2">
              Popular Destinations
            </h2>
            <p className="mt-3 text-sm md:text-base text-body">
              Explore handpicked domestic sanctuaries and international paradises selected for their deep heritage and unhurried paces.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 md:self-end">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-[border-color,background-color,color,box-shadow] duration-300 border ${activeCategory === cat
                  ? 'bg-ink text-white border-ink shadow-sm'
                  : 'bg-white text-body border-hairline hover:border-ink hover:text-ink'
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Symmetric Grid with Framer Motion stagger */}
        {safeDestinations.length === 0 ? (
          <div className="mt-12 text-sm text-body">
            No destinations available for <span className="font-semibold">{activeCategory}</span>.
          </div>
        ) : (
          <div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {safeDestinations.map((dest) => (
              <button
                type="button"
                key={dest.id}
                onClick={() => handleDestinationClick(dest.name)}
                className="relative overflow-hidden group rounded-2xl cursor-pointer border border-hairline shadow-soft hover:shadow-float transition-[transform,box-shadow] duration-500 h-[280px] w-full text-left block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                {/* Fallback sits below the image */}
                <div className="img-fallback absolute inset-0" aria-hidden="true" />

                {/* Background Image with Zoom */}
                <img
                  src={dest.image}
                  alt={`${dest.name} - luxury travel destination`}
                  width={280}
                  height={280}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out scale-100 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient overlay sits on top of image */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/85 via-navy/30 to-transparent" aria-hidden="true" />

                {/* Tag Overlay top-right */}
                <div className="absolute right-4 top-4 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-royal font-bold text-[9px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {Array.isArray(dest.categories) ? dest.categories[0] : activeCategory}
                  </span>
                </div>

                {/* Content bottom-left */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-20 translate-y-2 transition-transform duration-500 ease-lux group-hover:translate-y-0 w-full text-left text-white flex flex-col items-start">
                  <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                    {dest.name}
                  </h3>
                  <p className="mt-1 max-w-xs text-xs leading-relaxed text-white/80 line-clamp-1 group-hover:line-clamp-none transition-colors duration-300">
                    {dest.tagline}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold tracking-wide hover:text-white transition-colors duration-200">
                    Enquire Now
                    <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>

                  <span className="mt-4 block h-px w-0 bg-gold transition-[width] duration-500 ease-lux group-hover:w-16" aria-hidden="true" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';

// Grid of brochure cards plus a shared lightbox. Used by the /brochures page
// (all brochures) and by BrochureStrip on individual category pages (only the
// brochures tagged for that page), so the viewer/download behaviour stays
// identical everywhere instead of being reimplemented per page.
export default function BrochureGallery({ items, columnsClassName = 'md:grid-cols-2' }) {
  const [activeIdx, setActiveIdx] = useState(null);

  // Keyboard navigation for the lightbox.
  useEffect(() => {
    if (activeIdx === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveIdx(null);
      } else if (e.key === 'ArrowRight') {
        setActiveIdx((prev) => (prev + 1) % items.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIdx((prev) => (prev - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, items.length]);

  // The page body scrolling behind an open lightbox reads as a broken overlay.
  useEffect(() => {
    if (activeIdx === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [activeIdx]);

  if (!items.length) return null;

  const active = activeIdx === null ? null : items[activeIdx];

  return (
    <>
      <div className={`grid grid-cols-1 gap-8 lg:gap-12 ${columnsClassName}`}>
        {items.map((brochure, idx) => (
          <div
            key={brochure.id}
            className="bg-white border border-brand-surface-cool rounded-premium overflow-hidden shadow-soft flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
          >
            <button
              type="button"
              className="relative block w-full cursor-pointer overflow-hidden bg-brand-ink aspect-[4/5] sm:aspect-[3/4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              onClick={() => setActiveIdx(idx)}
              aria-label={`View ${brochure.title} brochure full size`}
              data-umami-event="View Brochure Click"
              data-umami-event-brochure={brochure.title}
            >
              <img
                src={brochure.src}
                alt={brochure.alt}
                className="absolute inset-0 h-full w-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-ink/0 group-hover:bg-brand-ink/40 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-white text-brand-ink font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-premium shadow-md transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  View Full Size
                </span>
              </div>
            </button>

            <div className="px-6 pt-5 border-t border-brand-surface-cool bg-brand-surface-cool/10">
              <h3 className="serif-font text-lg font-bold text-brand-ink leading-snug">
                {brochure.title}
              </h3>
            </div>

            <div className="p-6 pt-4 bg-brand-surface-cool/10 flex gap-3 sm:gap-4">
              <button
                onClick={() => setActiveIdx(idx)}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-surface text-brand-ink border border-brand-surface-cool font-bold uppercase tracking-wider text-xs py-3.5 rounded-premium hover:bg-brand-surface-cool transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                data-umami-event="View Brochure Click"
                data-umami-event-brochure={brochure.title}
              >
                View<span className="hidden sm:inline md:hidden lg:inline"> Full Size</span>
              </button>
              <a
                href={brochure.src}
                download
                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-ink text-white font-bold uppercase tracking-wider text-xs py-3.5 rounded-premium hover:bg-brand-accent hover:text-brand-ink transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                data-umami-event="Download Brochure Click"
                data-umami-event-brochure={brochure.title}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download<span className="hidden sm:inline md:hidden lg:inline"> Image</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Lightbox Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center select-none backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setActiveIdx(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} brochure`}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2.5 hover:bg-white/10 rounded-full z-50"
            onClick={() => setActiveIdx(null)}
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev / next only make sense when there is more than one brochure. */}
          {items.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full z-50"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIdx((prev) => (prev - 1 + items.length) % items.length);
              }}
              aria-label="Previous brochure"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          <div
            className="relative max-h-[80vh] max-w-[85vw] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[80vh] max-w-[85vw] object-contain shadow-2xl rounded-sm transition-all duration-300"
            />
          </div>

          {items.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full z-50"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIdx((prev) => (prev + 1) % items.length);
              }}
              aria-label="Next brochure"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}

          <div
            className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3 z-50 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-white/60 text-xs font-semibold uppercase tracking-wider text-center">
              {active.title}
              {items.length > 1 && ` · ${activeIdx + 1} of ${items.length}`}
            </span>
            <a
              href={active.src}
              download
              className="bg-white/10 text-white border border-white/20 px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-brand-ink transition-colors flex items-center gap-2"
              data-umami-event="Download Brochure Click"
              data-umami-event-brochure={active.title}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Brochure
            </a>
          </div>
        </div>
      )}
    </>
  );
}

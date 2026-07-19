import { useEffect, useState } from 'react';

const BROCHURES = [
  {
    id: 'whatsapp-img-1',
    src: '/brochures/WhatsApp Image 2026-07-10 at 18.07.11.jpeg',
    alt: 'Travel Brochure 1'
  },
  {
    id: 'whatsapp-img-2',
    src: '/brochures/WhatsApp Image 2026-07-10 at 18.09.12.jpeg',
    alt: 'Travel Brochure 2'
  },
  {
    id: 'whatsapp-img-3',
    src: '/brochures/WhatsApp Image 2026-07-15 at 16.51.05.jpeg',
    alt: 'Travel Brochure 3'
  },
  {
    id: 'whatsapp-img-4',
    src: '/brochures/WhatsApp Image 2026-07-16 at 16.57.05.jpeg',
    alt: 'Travel Brochure 4'
  }
];

export default function BrochuresPage() {
  const [activeIdx, setActiveIdx] = useState(null);

  useEffect(() => {
    document.title = "Travel Brochures & Curation Guides · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "View our travel brochures and curation guides. Custom travel planning by Blue Spice Holidays.");
    }
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeIdx === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveIdx(null);
      } else if (e.key === 'ArrowRight') {
        setActiveIdx((prev) => (prev + 1) % BROCHURES.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIdx((prev) => (prev - 1 + BROCHURES.length) % BROCHURES.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx]);

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {BROCHURES.map((brochure, idx) => (
            <div 
              key={brochure.id} 
              className="bg-white border border-brand-surface-cool rounded-premium overflow-hidden shadow-soft flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="relative cursor-pointer overflow-hidden bg-brand-ink aspect-[4/5] sm:aspect-[3/4]"
                onClick={() => setActiveIdx(idx)}
                data-umami-event="View Brochure Click"
                data-umami-event-brochure={brochure.alt}
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
              </div>

              <div className="p-6 border-t border-brand-surface-cool bg-brand-surface-cool/10 flex gap-4">
                <button
                  onClick={() => setActiveIdx(idx)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-surface text-brand-ink border border-brand-surface-cool font-bold uppercase tracking-wider text-xs py-3.5 rounded-premium hover:bg-brand-surface-cool transition-colors shadow-sm focus-visible:outline-none"
                  data-umami-event="View Brochure Click"
                  data-umami-event-brochure={brochure.alt}
                >
                  View Full Size
                </button>
                <a 
                  href={brochure.src} 
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-ink text-white font-bold uppercase tracking-wider text-xs py-3.5 rounded-premium hover:bg-brand-accent hover:text-brand-ink transition-colors shadow-sm focus-visible:outline-none"
                  data-umami-event="Download Brochure Click"
                  data-umami-event-brochure={brochure.alt}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download Image
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Lightbox Modal */}
      {activeIdx !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center select-none backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setActiveIdx(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2.5 hover:bg-white/10 rounded-full z-50"
            onClick={() => setActiveIdx(null)}
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full z-50"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) => (prev - 1 + BROCHURES.length) % BROCHURES.length);
            }}
            aria-label="Previous image"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Active Image container */}
          <div 
            className="relative max-h-[80vh] max-w-[85vw] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={BROCHURES[activeIdx].src} 
              alt={BROCHURES[activeIdx].alt} 
              className="max-h-[80vh] max-w-[85vw] object-contain shadow-2xl rounded-sm transition-all duration-300"
            />
          </div>

          {/* Next button */}
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full z-50"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) => (prev + 1) % BROCHURES.length);
            }}
            aria-label="Next image"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Lightbox Footer (download + index) */}
          <div 
            className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">
              Brochure {activeIdx + 1} of {BROCHURES.length}
            </span>
            <a 
              href={BROCHURES[activeIdx].src} 
              download
              className="bg-white/10 text-white border border-white/20 px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-brand-ink transition-colors flex items-center gap-2"
              data-umami-event="Download Brochure Click"
              data-umami-event-brochure={BROCHURES[activeIdx].alt}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Brochure
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

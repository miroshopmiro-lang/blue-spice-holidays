import { useEffect } from 'react';

const BROCHURES = [
  {
    id: 'bhutan-6d5n',
    title: 'Bhutan: 6 Days 5 Nights',
    edition: 'November 2026 Curation',
    description: 'Explore the magical land of Thunder Dragons, sacred valleys, Tiger’s Nest monastery, and high mountain dzongs.',
    file: '/brochures/BHUTAN_6_DAYS_5_NIGHTS_NOV_2026.pdf',
    image: '/images/bhutan.png',
    tags: ['International', 'Himalayas', '6 Days']
  },
  {
    id: 'rajasthan-5d4n-3c',
    title: 'Rajasthan: 5 Days 4 Nights',
    edition: '3 Cities Curation',
    description: 'Uncover the historical majesty of Jaipur, Jodhpur, and the desert borders with palace stays and local scholar guides.',
    file: '/brochures/RAJASTHAN_5_DAYS_4_NIGHTS_3_CITIES.pdf',
    image: '/images/rajasthan.webp',
    tags: ['Domestic', 'Heritage', '5 Days']
  },
  {
    id: 'rajasthan-5d4n-4c',
    title: 'Rajasthan: 5 Days 4 Nights',
    edition: '4 Cities Premium Curation',
    description: 'An extended, fast-paced cultural journey crossing the Pink, Blue, Golden, and Lake cities of royal Rajasthan.',
    file: '/brochures/RAJASTHAN_5_DAYS_4_NIGHTS_4_CITIES.pdf',
    image: '/images/rajasthan.webp',
    tags: ['Domestic', 'Heritage', '5 Days']
  }
];

export default function BrochuresPage() {
  useEffect(() => {
    document.title = "Travel Brochures & Curation Guides · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Download our bespoke travel brochures and hand-curated itineraries for Rajasthan and Bhutan. Custom travel planning by Blue Spice Holidays.");
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
            Download our latest detailed guides containing day-by-day itineraries, premium hotel options, and signature experiences.
          </p>
        </div>
      </section>

      {/* Grid of Brochures */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BROCHURES.map((brochure) => (
            <div 
              key={brochure.id} 
              className="bg-white border border-brand-surface-cool rounded-premium overflow-hidden shadow-soft flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-brand-ink">
                  {/* Fallback Navy mesh */}
                  <div className="img-fallback absolute inset-0" aria-hidden="true" />
                  <img 
                    src={brochure.image} 
                    alt={brochure.title} 
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {brochure.tags.map((t, idx) => (
                        <span key={idx} className="bg-white/20 backdrop-blur-sm text-white font-bold text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-brand-accent uppercase tracking-wider block">{brochure.edition}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="serif-font text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-accent transition-colors">
                    {brochure.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {brochure.description}
                  </p>
                </div>
              </div>

              <div className="p-6 border-t border-brand-surface-cool bg-brand-surface-cool/10">
                <a 
                  href={brochure.file} 
                  download
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-ink text-white font-bold uppercase tracking-wider text-xs py-3.5 rounded-premium hover:bg-brand-accent hover:text-brand-ink transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download PDF Brochure
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

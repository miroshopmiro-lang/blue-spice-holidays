import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PAGE_CONTENT } from '../data/pageContent';
import { BROCHURES } from '../data/brochures';
import useEnquiry from '../hooks/useEnquiry';
import CustomItineraryForm from '../components/CustomItineraryForm';
import BrochureStrip from '../components/BrochureStrip';
import BrochureGallery from '../components/BrochureGallery';

export default function CategoryPage({ group }) {
  const { slug } = useParams();
  const enquire = useEnquiry();
  const entry = PAGE_CONTENT[group]?.[slug];

  useEffect(() => {
    if (!entry) return;
    document.title = `${entry.title} · Blue Spice Holidays`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', entry.lead);
  }, [entry]);

  if (!entry) {
    return <Navigate to="/holidays" replace />;
  }

  const handleEnquire = () => enquire(entry.title);
  const brochureItem = entry.brochureId ? BROCHURES.find((b) => b.id === entry.brochureId) : null;

  return (
    <div className="bg-brand-surface min-h-screen text-brand-ink">
      {/* Banner / Header */}
      <section className="relative bg-brand-ink text-white pt-24 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            {entry.eyebrow}
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            {entry.title}
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            {entry.lead}
          </p>
        </div>
      </section>

      {/* Feature image + highlights */}
      <section className="py-20 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {brochureItem ? (
            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <BrochureGallery items={[brochureItem]} columnsClassName="grid-cols-1" />
            </div>
          ) : (
            <div className="relative h-72 lg:h-[420px] w-full overflow-hidden rounded-premium border border-brand-surface-cool shadow-lg bg-brand-ink">
              <img
                src={entry.image}
                alt={entry.title}
                className="absolute inset-0 h-full w-full object-cover opacity-90"
                loading="lazy"
              />
            </div>
          )}

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">What's Included</span>
            <h2 className="serif-font text-2xl sm:text-3xl font-bold text-brand-ink mt-2 mb-6">
              Curated Around Your Group
            </h2>
            <ul className="space-y-3">
              {entry.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-brand-ink leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-brand-accent shrink-0 mt-1.5" />
                  {h}
                </li>
              ))}
            </ul>

            <button
              onClick={handleEnquire}
              className="mt-8 inline-flex bg-brand-ink text-white font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-premium hover:bg-brand-accent hover:text-brand-ink transition-colors duration-300 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              data-umami-event="Category Page Enquire Click"
              data-umami-event-category={entry.title}
            >
              Enquire About {entry.title}
            </button>
          </div>
        </div>
      </section>

      {/* Real Moments Showcase */}
      {entry.moments && entry.moments.length > 0 && (
        <section className="py-16 bg-brand-surface-cool/20 border-t border-brand-surface-cool">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">REAL JOURNEY MOMENTS</span>
              <h2 className="serif-font text-2xl sm:text-3xl font-bold text-brand-ink mt-2">
                {entry.momentsTitle || 'Moments from Our Guests'}
              </h2>
              {entry.momentsSubtitle && (
                <p className="text-xs sm:text-sm text-brand-muted mt-2">
                  {entry.momentsSubtitle}
                </p>
              )}
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto`}>
              {entry.moments.map((moment, idx) => (
                <div key={idx} className="group relative rounded-2xl overflow-hidden border border-brand-surface-cool bg-white shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-brand-ink">
                    <img
                      src={moment.src}
                      alt={moment.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 bg-white flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-accent font-bold block mb-1">{moment.tag}</span>
                      <p className="text-xs font-semibold text-brand-ink leading-snug">{moment.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {!entry.brochureId && <BrochureStrip />}

      <CustomItineraryForm />
    </div>
  );
}

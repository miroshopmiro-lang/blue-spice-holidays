import { useLocation } from 'react-router-dom';
import { brochuresForRoute } from '../data/brochures';
import BrochureGallery from './BrochureGallery';

// Drops the brochures tagged for the current page onto that page. Renders
// nothing at all when the client hasn't sent a brochure for this category yet,
// so pages without one keep their existing layout untouched.
export default function BrochureStrip() {
  const { pathname } = useLocation();
  const items = brochuresForRoute(pathname);

  if (!items.length) return null;

  const isSingle = items.length === 1;

  return (
    <section className="bg-brand-surface-cool/20 border-y border-brand-surface-cool py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Take It With You
          </span>
          <h2 className="serif-font text-2xl sm:text-3xl font-bold text-brand-ink mt-2">
            {isSingle ? 'Download the Brochure' : 'Download the Brochures'}
          </h2>
        </div>

        <div className={isSingle ? 'max-w-md mx-auto' : ''}>
          <BrochureGallery
            items={items}
            columnsClassName={isSingle ? '' : 'sm:grid-cols-2 lg:grid-cols-3'}
          />
        </div>
      </div>
    </section>
  );
}

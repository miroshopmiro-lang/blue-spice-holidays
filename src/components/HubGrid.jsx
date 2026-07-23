import { Link } from 'react-router-dom';

// Shared card grid for the three hub pages (Holidays / Services / SPL Tour).
// Each hub page supplies its own banner copy and item list; this renders the grid.
export default function HubGrid({ items }) {
  return (
    <section className="py-20 max-w-6xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="relative group overflow-hidden rounded-premium border border-brand-surface-cool shadow-lg h-[260px] flex flex-col justify-end p-6 bg-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <img
              src={item.image}
              alt={item.label}
              className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10" />
            <div className="relative z-20 text-white">
              <h2 className="serif-font text-xl font-bold mb-1">{item.label}</h2>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-accent uppercase tracking-wider">
                Explore
                <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

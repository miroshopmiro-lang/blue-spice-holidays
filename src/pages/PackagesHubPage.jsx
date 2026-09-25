import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../data/travelData';
import { packagePath, packageSEO } from '../data/seo';

// /packages: the index of every destination page, so each one is two clicks from the
// homepage and linked from one crawlable list.
const GROUPS = [
  { label: 'India', match: (d) => d.categories.includes('India') },
  { label: 'International', match: (d) => d.categories.includes('International') },
];

export default function PackagesHubPage() {
  return (
    <div className="bg-brand-surface min-h-screen text-brand-ink">
      <section className="bg-brand-ink text-white pt-24 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="serif-font text-4xl sm:text-5xl font-bold leading-tight">Tour Packages</h1>
          <p className="mt-4 text-white/75 text-base sm:text-lg">
            Day-by-day itineraries across India and abroad, each one customised by our team in Kochi.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6 lg:px-8 space-y-14">
        {GROUPS.map((g) => (
          <div key={g.label}>
            <h2 className="serif-font text-2xl sm:text-3xl font-bold mb-6">{g.label} tour packages</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {DESTINATIONS.filter(g.match).map((d) => (
                <li key={d.id}>
                  <Link
                    to={packagePath(d)}
                    className="group block h-full bg-white border border-brand-surface-cool rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {d.image && (
                      <div className="aspect-[16/10] bg-brand-ink overflow-hidden">
                        <img src={d.image} alt={`${d.name}`} loading="lazy" className="h-full w-full object-cover" />
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-bold text-lg">{d.name} Tour Packages</h3>
                      <p className="mt-1 text-sm text-brand-ink/75">{d.tagline}</p>
                      <p className="mt-3 text-xs text-brand-muted">{packageSEO(d).description.split('.')[0]}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

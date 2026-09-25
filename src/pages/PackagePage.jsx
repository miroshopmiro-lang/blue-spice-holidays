import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import useEnquiry from '../hooks/useEnquiry';
import { DESTINATIONS } from '../data/travelData';
import {
  destinationPlans,
  findDestinationBySlug,
  packagePath,
  packageSEO,
  tripFacts,
} from '../data/seo';

// One indexable page per destination (/packages/<id>-tour-packages), built only from the
// itinerary data already on the site. Title, description and canonical come from
// RouteSEO + seo.js; scripts/prerender-seo.js writes the same content as static HTML.
export default function PackagePage() {
  const { slug } = useParams();
  const enquire = useEnquiry();
  const dest = findDestinationBySlug(slug);
  const [planIdx, setPlanIdx] = useState(0);

  if (!dest) return <Navigate to="/packages" replace />;

  const seo = packageSEO(dest);
  const plans = destinationPlans(dest);
  const plan = plans[planIdx] || plans[0];
  const facts = tripFacts(dest, plan);
  const related = DESTINATIONS.filter(
    (d) => d.id !== dest.id && d.categories.some((c) => dest.categories.includes(c))
  ).slice(0, 6);

  return (
    <div className="bg-brand-surface min-h-screen text-brand-ink">
      <section className="relative bg-brand-ink text-white pt-24 pb-20 px-6 text-center overflow-hidden">
        {dest.image && (
          <img src={dest.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        )}
        <div className="relative z-10 max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/packages" className="hover:text-white">Tour Packages</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{dest.name}</span>
          </nav>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold leading-tight">{seo.h1}</h1>
          <p className="mt-4 text-white/75 max-w-2xl mx-auto text-base sm:text-lg">{dest.tagline}</p>
          <button
            onClick={() => enquire(dest.name)}
            className="mt-8 inline-flex bg-brand-accent text-brand-ink font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-premium hover:bg-white transition-colors duration-300 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
            data-umami-event="Package Page Enquire Click"
            data-umami-event-package={dest.name}
          >
            Get a quote for {dest.name}
          </button>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 lg:px-8">
        {plans.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Itineraries">
            {plans.map((p, i) => (
              <button
                key={p.name}
                role="tab"
                aria-selected={i === planIdx}
                onClick={() => setPlanIdx(i)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
                  i === planIdx
                    ? 'bg-brand-ink text-white border-brand-ink'
                    : 'bg-white text-brand-ink border-brand-surface-cool hover:border-brand-ink'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        )}

        {facts.length > 0 && (
          <div className="bg-white border border-brand-surface-cool rounded-2xl p-6 mb-10">
            <h2 className="serif-font text-xl font-bold mb-4">Trip details</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brand-muted">{k}</dt>
                  <dd className="mt-0.5 leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {plan && (
          <>
            <h2 className="serif-font text-2xl sm:text-3xl font-bold mb-6">
              {plans.length > 1 ? plan.name : `${dest.name} day-by-day itinerary`}
            </h2>
            <ol className="space-y-6">
              {plan.itinerary.map((d) => (
                <li key={d.day} className="bg-white border border-brand-surface-cool rounded-2xl p-6">
                  <h3 className="font-bold text-base">
                    <span className="text-brand-accent mr-2">Day {d.day}</span>
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed whitespace-pre-line text-brand-ink/85">{d.detail}</p>
                </li>
              ))}
            </ol>
          </>
        )}

        <div className="mt-12 bg-brand-ink text-white rounded-2xl p-8 text-center">
          <h2 className="serif-font text-2xl font-bold">Make this trip yours</h2>
          <p className="mt-3 text-white/75 text-sm max-w-xl mx-auto">
            Every itinerary is customised: dates, hotels, pace and budget. Tell us how you want to travel and
            we'll send a plan and quote.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => enquire(dest.name)}
              className="bg-brand-accent text-brand-ink font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-premium hover:bg-white transition-colors"
            >
              Enquire about {dest.name}
            </button>
            <a
              href={`https://wa.me/919388599000?text=${encodeURIComponent(`Hi Blue Spice Holidays, I'm interested in the ${dest.name} tour package.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/30 font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-premium hover:bg-white/20 transition-colors"
              data-umami-event="Package Page WhatsApp Click"
              data-umami-event-package={dest.name}
            >
              WhatsApp +91 93885 99000
            </a>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="serif-font text-xl font-bold mb-4">More tour packages</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {related.map((d) => (
                <li key={d.id}>
                  <Link
                    to={packagePath(d)}
                    className="block bg-white border border-brand-surface-cool rounded-xl px-4 py-3 text-sm font-semibold hover:border-brand-ink transition-colors"
                  >
                    {d.name} Tour Packages
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}

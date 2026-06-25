import { Sparkle, ArrowUpRight } from '../components/Icons'
import { serviceTiers, destinations } from '../data/travelData'

export default function PackagesPage({ onBook }) {
  return (
    <main className="bg-white">
      <div className="section-pad bg-night text-white">
        <div className="mx-auto max-w-container pt-12 text-center">
          <span className="pill glass-panel text-white"><Sparkle className="w-4 h-4 text-blue-light" /> Packages & Services</span>
          <h1 className="mt-5 text-balance text-4xl sm:text-5xl font-bold">Journeys, <span className="accent-serif text-gradient-blue">Tailored to You</span></h1>
          <p className="mx-auto mt-4 max-w-xl text-white/60">Every itinerary is bespoke. Explore our service tiers and curated destinations, then request a no-obligation quote.</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-3">
          {serviceTiers.map((t) => (
            <div key={t.id} className="rounded-card border border-ink/10 p-7">
              <h3 className="text-2xl font-bold text-ink">{t.name}</h3>
              <p className="mt-3 text-sm text-ink-soft">{t.blurb}</p>
              <ul className="mt-6 space-y-2">
                {t.includes.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-primary" /> {i}</li>
                ))}
              </ul>
              <button onClick={() => onBook?.(t.name)} className="pill mt-7 w-full justify-center bg-night text-white font-semibold hover:bg-blue-primary">Get a Quote <ArrowUpRight /></button>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="mx-auto max-w-container">
          <h2 className="text-3xl font-bold text-ink">Popular <span className="accent-serif text-gradient-blue">Destinations</span></h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <article key={d.id} className="group overflow-hidden rounded-card bg-white">
                <div className="overflow-hidden">
                  <img src={d.image} alt={d.name} width={800} height={560} loading="lazy" className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-wider text-ink-soft">{d.categories.join(' · ')}</span>
                  <h3 className="text-lg font-semibold text-ink">{d.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft accent-serif">{d.tagline}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

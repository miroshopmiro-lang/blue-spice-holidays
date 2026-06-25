import { Sparkle, ArrowUpRight } from './Icons'
import { serviceTiers } from '../data/travelData'
import { cn } from '../lib/cn'

// stacked left-pane tier marks (Blue Spice has no per-person pricing) styled
// to match the mockup price treatment: large + bold, small uppercase sub below
const tierMeta = {
  general: { mark: 'T1', sub: 'Travel' },
  vip: { mark: 'T2', sub: 'Executive' },
  events: { mark: 'T3', sub: 'Events' },
}

export default function ServiceTiers({ onBook }) {
  return (
    <section className="section-pad bg-night">
      <div className="mx-auto max-w-container text-center">
        <span className="pill glass-panel text-white"><Sparkle className="w-4 h-4 text-blue-light" /> Our Services</span>
        <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-white">
          Choose The Right Service For Your{' '}
          <span className="accent-serif text-gradient-blue">Perfect Journey</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          No planning fees and no-obligation quotes - every package is tailored to you with transparent, competitive pricing.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-container gap-6 lg:grid-cols-3 lg:items-center">
        {serviceTiers.map((tier) => {
          const light = tier.theme === 'light'
          const meta = tierMeta[tier.id]
          return (
            <div
              key={tier.id}
              className={cn(
                'flex overflow-hidden rounded-card transition-transform duration-300 hover:-translate-y-2',
                light ? 'bg-white text-ink lg:scale-105 shadow-2xl' : 'glass-dark text-white',
              )}
            >
              {/* Left 1/3: stacked tier mark styled like the mockup price */}
              <div className="flex w-1/3 flex-col items-center justify-center px-2 py-8">
                <span className="text-5xl font-extrabold leading-none tracking-tight">{meta.mark}</span>
                <span className={cn('mt-2 text-[10px] font-medium uppercase tracking-[0.2em]', light ? 'text-ink-soft' : 'text-white/60')}>{meta.sub}</span>
              </div>

              {/* Right 2/3: slanted divider pane (responsive clip-path) */}
              <div
                className={cn(
                  '-ml-4 flex w-2/3 flex-col justify-between py-7 pl-6 pr-5 sm:pl-8 sm:pr-6 [clip-path:polygon(16px_0,100%_0,100%_100%,0_100%)] sm:[clip-path:polygon(24px_0,100%_0,100%_100%,0_100%)]',
                  light ? 'bg-surface' : 'bg-black/30',
                )}
              >
                <div>
                  {tier.featured && (
                    <span className="pill bg-blue-primary text-white text-[10px] mb-3">Most Requested</span>
                  )}
                  <p className={cn('text-sm leading-relaxed', light ? 'text-ink-soft' : 'text-white/70')}>{tier.blurb}</p>
                </div>
                <div className="mt-6 flex items-end justify-between gap-3">
                  <h3 className="text-lg font-bold leading-tight">{tier.name}</h3>
                  <button onClick={() => onBook?.(tier.name)} className="flex shrink-0 items-center gap-1 text-sm font-semibold hover:text-blue-primary">
                    Get a Quote <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

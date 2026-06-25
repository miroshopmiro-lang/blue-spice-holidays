import { useState } from 'react'
import { ArrowUpRight } from './Icons'
import { bookingSteps } from '../data/travelData'
import { cn } from '../lib/cn'

// Greyscale brand strip (placeholders; replace with real partners or hide before launch)
const brandLogos = ['Expedia', 'Emirates', 'Marriott', 'Visa', 'Amadeus', 'IATA', 'TripAdvisor']

export default function HowToBook() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section-pad bg-white">
      {/* greyscale partner / trust brand bar: single-row horizontal scroll on mobile */}
      <div className="mx-auto mb-16 max-w-container">
        <div className="flex flex-nowrap items-center justify-start gap-x-8 overflow-x-auto px-4 no-scrollbar opacity-50 sm:flex-wrap sm:justify-center sm:gap-x-10">
          {brandLogos.map((logo) => (
            <span key={logo} className="shrink-0 text-lg font-semibold uppercase tracking-wide text-ink-soft grayscale">{logo}</span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-container gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink">How To Book Your Journey</h2>
          <p className="accent-serif text-gradient-blue text-3xl mt-2">4 Easy Steps</p>
          <p className="mt-4 max-w-sm text-ink-soft">
            Planning your perfect trip is simple and stress-free. Follow these four steps and our team handles the rest.
          </p>
        </div>

        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {bookingSteps.map((s, i) => {
            const expanded = open === i
            return (
              <button
                key={s.n}
                onClick={() => setOpen(expanded ? -1 : i)}
                className="flex w-full flex-col py-5 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-4">
                    <span className="text-xl font-bold text-ink-soft tabular-nums">{s.n}.</span>
                    <span className="text-lg font-semibold text-ink">{s.title}</span>
                  </span>
                  <ArrowUpRight className={cn('w-5 h-5 text-ink transition-transform', expanded && 'rotate-90')} />
                </div>
                <div className={cn('grid transition-all duration-300', expanded ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0')}>
                  <p className="overflow-hidden pl-10 text-sm text-ink-soft">{s.text}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

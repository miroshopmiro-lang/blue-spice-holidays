import { Link } from 'react-router-dom'
import { brand, social } from '../data/siteData'

const columns = [
  {
    title: 'Services',
    links: ['Holiday Packages', 'VIP & Executive', 'Weddings & Events', 'Corporate MICE', 'Visa & Forex'],
  },
  {
    title: 'Get in Touch',
    links: [brand.phone, brand.email, brand.website],
  },
  {
    title: 'Connect',
    links: ['Facebook', 'Instagram', 'YouTube'],
    hrefs: [social.facebook, social.instagram, social.youtube],
  },
  {
    title: 'Pay Safely',
    links: ['No Planning Fees', 'No-obligation Quotes', 'Transparent Pricing', '24/7 Ground Support'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="mx-auto max-w-container px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="font-script text-3xl" translate="no">Blue Spice</p>
            <p className="mt-3 text-sm text-white/60 max-w-xs">Warmth & Luxury across every journey. Led by {brand.principal}.</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">{col.title}</h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((l, i) => (
                  <li key={l}>
                    {col.hrefs ? (
                      <a href={col.hrefs[i]} target="_blank" rel="noreferrer" className="text-sm text-white/60 hover:text-white">{l}</a>
                    ) : (
                      <span className="text-sm text-white/60">{l}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Blue Spice Holidays. All rights reserved.</p>
          <Link to="/contact" className="text-xs text-white/60 hover:text-white">Privacy & Contact</Link>
        </div>
      </div>
      <div className="overflow-hidden" aria-hidden="true">
        <p className="select-none whitespace-nowrap text-center font-serif text-[14vw] leading-[1.1] text-white/90 pb-4 px-4" translate="no">
          BLUE SPICE HOLIDAYS
        </p>
      </div>
    </footer>
  )
}

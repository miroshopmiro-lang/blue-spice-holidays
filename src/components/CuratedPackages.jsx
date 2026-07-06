import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CURATED_PACKAGES, PACKAGE_CATEGORIES } from '../data/travelData';

const WHATSAPP_BASE =
  "https://wa.me/919388599000?text=Hi%20Blue%20Spice%2C%20I'm%20interested%20in%20the%20";

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 18v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5M2 18h20M2 18v2M22 18v2M6 11V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14M5 13v4h2v-2M19 13v4h-2v-2M7 17h10" />
      <circle cx="7.5" cy="15" r="0.6" fill="currentColor" /><circle cx="16.5" cy="15" r="0.6" fill="currentColor" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14" />
    </svg>
  );
}

function MetaRow({ icon, label }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-body font-medium bg-canvas border border-hairline px-3 py-1.5 rounded-full">
      <span className="text-royal/80">{icon}</span>
      {label}
    </div>
  );
}

function ItineraryDrawer({ pkg, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', notes: '' });
  const [sent, setSent] = useState(false);

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-ink/40 backdrop-blur-[1px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Drawer Panel */}
      <motion.aside
        role="dialog"
        aria-modal="true"
        aria-label={`Itinerary details for ${pkg.title}`}
        className="relative h-full w-full max-w-md overflow-y-auto bg-white shadow-float [overscroll-behavior:contain]"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative">
          <img src={pkg.image} alt={pkg.title} width={448} height={208} className="h-52 w-full object-cover" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-ink shadow-soft hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>

        <div className="p-6">
          <span className="font-mono text-[10px] uppercase tracking-widemono text-royal block">{pkg.tag}</span>
          <h3 className="font-display mt-2 text-2xl font-bold leading-tight text-ink">{pkg.title}</h3>
          <p className="mt-2 text-sm text-body">{pkg.duration} · {pkg.location}</p>
          <p className="mt-4 text-base font-semibold text-ink">
            Price: <span className="text-gold text-lg font-bold">On Request</span>
          </p>

          <h4 className="font-display mt-8 text-lg font-bold text-ink border-t border-hairline pt-6">Day by Day Itinerary</h4>
          <ol className="mt-6 space-y-6">
            {pkg.itinerary.map((d) => (
              <li key={d.day} className="relative pl-6 border-l border-hairline pb-2 last:pb-0">
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-gold ring-4 ring-white" aria-hidden="true" />
                <p className="font-mono text-[10px] uppercase tracking-wider text-royal">Day {d.day}</p>
                <p className="text-sm font-semibold text-ink mt-0.5">{d.title}</p>
                <p className="mt-1.5 text-xs text-body leading-relaxed">{d.detail}</p>
              </li>
            ))}
          </ol>

          <h4 className="font-display mt-8 text-lg font-bold text-ink border-t border-hairline pt-6">Accommodations</h4>
          <p className="mt-2 text-sm text-body leading-relaxed">{pkg.accommodations}</p>

          <h4 className="font-display mt-8 text-lg font-bold text-ink border-t border-hairline pt-6">Instant Consultation</h4>
          {sent ? (
            <div className="mt-4 rounded-2xl border border-hairline bg-canvas p-5" aria-live="polite">
              <p className="text-sm font-semibold text-ink">Thank you, {form.name || 'traveler'}!</p>
              <p className="mt-1 text-xs text-body leading-relaxed">Our curation specialists are looking into this {pkg.location} journey and will reach out to you within 24 hours.</p>
            </div>
          ) : (
            <form
              className="mt-4 space-y-4"
              onSubmit={(e) => { e.preventDefault(); if (form.name && form.email) setSent(true); }}
            >
              <input
                type="text" required placeholder="Your name…" value={form.name}
                name="name" autoComplete="name" aria-label="Your full name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-canvas border border-hairline rounded-xl text-ink placeholder:text-mute px-4 py-3 focus:border-royal focus-visible:ring-2 focus-visible:ring-royal/20 focus-visible:outline-none transition-[border-color,box-shadow] text-sm"
              />
              <input
                type="email" required placeholder="Email address…" value={form.email}
                name="email" autoComplete="email" spellCheck={false} aria-label="Email address"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-canvas border border-hairline rounded-xl text-ink placeholder:text-mute px-4 py-3 focus:border-royal focus-visible:ring-2 focus-visible:ring-royal/20 focus-visible:outline-none transition-[border-color,box-shadow] text-sm"
              />
              <textarea
                rows="3" placeholder="Any specific requirements or preferences…" value={form.notes}
                name="notes" autoComplete="off" aria-label="Any specific requirements or preferences"
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full bg-canvas border border-hairline rounded-xl text-ink placeholder:text-mute px-4 py-3 focus:border-royal focus-visible:ring-2 focus-visible:ring-royal/20 focus-visible:outline-none transition-[border-color,box-shadow] text-sm resize-none"
              />
              <button type="submit" className="w-full rounded-full bg-navy px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-[background-color,box-shadow] hover:bg-navy/90 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </motion.aside>
    </div>
  );
}

export default function CuratedPackages() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pkgId = searchParams.get('package');
  const visible = CURATED_PACKAGES;
  const activePkg = visible.find(p => String(p.id) === pkgId) || null;

  const setActivePkg = (pkg) => {
    if (pkg) {
      setSearchParams({ package: String(pkg.id) });
    } else {
      searchParams.delete('package');
      setSearchParams(searchParams);
    }
  };

  return (
    <section id="packages" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-widemono text-royal">CURATED COLLECTIONS</span>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl mt-2">Bespoke Starting Points</h2>
          <p className="mt-3 text-sm text-body leading-relaxed">Fully customizable itineraries, handpicked and crafted by our regional curation experts.</p>
        </div>

        {/* Cards Grid */}
        <div
          className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((pkg) => (
            <article
              key={pkg.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-soft card-interactive"
            >
              <div className="relative overflow-hidden">
                <img src={pkg.image} alt={pkg.title} width={400} height={224} className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-royal shadow-sm">{pkg.tag}</span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink">{pkg.title}</h3>
                <p className="mt-2 text-xs font-medium text-body">{pkg.duration} · {pkg.location}</p>

                {/* Metadata Badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <MetaRow icon={<BedIcon />} label={pkg.metadata.stay} />
                  <MetaRow icon={<CarIcon />} label={pkg.metadata.driver} />
                  <MetaRow icon={<MapIcon />} label={pkg.metadata.guide} />
                </div>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-1.5 [font-variant-numeric:tabular-nums]">

                  <span className="text-gold text-sm leading-none">★</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-ink">{pkg.rating}</span>
                  <span className="text-[10px] text-body">({pkg.reviews} reviews)</span>
                </div>

                {/* Pricing block */}
                <div className="mt-5 border-t border-hairline pt-4 flex justify-between items-end">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-mute block mb-0.5">Price</span>
                    <p className="text-lg font-bold text-ink">
                      On Request
                    </p>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActivePkg(pkg)}
                      className="text-xs font-bold uppercase tracking-wider text-ink hover:text-royal transition-colors pb-1 border-b border-ink/20 hover:border-royal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                    >
                      Itinerary
                    </button>
                    <a
                      href={`${WHATSAPP_BASE}${encodeURIComponent(pkg.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Inquire about this trip"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors hover:bg-emerald-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                    >
                      <WhatsAppIcon />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Slide-out Itinerary Drawer */}
      <AnimatePresence>
        {activePkg && (
          <ItineraryDrawer pkg={activePkg} onClose={() => setActivePkg(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { DESTINATIONS } from '../data/travelData';

const CATEGORIES = ['India', 'International', 'Trending'];

function ItineraryDrawer({ dest, onClose, onEnquire }) {
  const [form, setForm] = useState({ name: '', email: '', notes: '' });
  const [sent, setSent] = useState(false);

  const handleDrawerEnquire = () => {
    onClose();
    onEnquire(dest.name);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      try {
        await fetch("https://formspree.io/f/4a1b9f71-877f-47ce-9627-e818691a2b11", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            formType: "Fast Destination Inquiry",
            destination: dest.name,
            name: form.name,
            email: form.email,
            notes: form.notes || 'None'
          })
        });
      } catch (err) {
        console.error("Fast inquiry submission failed", err);
      }
      setSent(true);
    }
  };

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
        aria-label={`Sample itinerary for ${dest.name}`}
        className="relative h-full w-full max-w-md overflow-y-auto bg-white shadow-float [overscroll-behavior:contain]"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative">
          <img src={dest.image} alt={dest.name} width={448} height={208} className="h-52 w-full object-cover" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-ink shadow-soft hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <span className="font-mono text-[10px] uppercase tracking-widemono text-royal block">SAMPLE ITINERARY</span>
          <h3 className="font-display mt-2 text-2xl font-bold leading-tight text-ink">{dest.name}</h3>
          <p className="mt-2 text-sm text-body">{dest.tagline}</p>

          <h4 className="font-display mt-8 text-lg font-bold text-ink border-t border-hairline pt-6">Suggested Day-by-Day Curation</h4>
          {dest.sampleItinerary && dest.sampleItinerary.length > 0 ? (
            <ol className="mt-6 space-y-6">
              {dest.sampleItinerary.map((d) => (
                <li key={d.day} className="relative pl-6 border-l border-hairline pb-2 last:pb-0">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-gold ring-4 ring-white" aria-hidden="true" />
                  <p className="font-mono text-[10px] uppercase tracking-wider text-royal">Day {d.day}</p>
                  <p className="text-sm font-semibold text-ink mt-0.5">{d.title}</p>
                  <p className="mt-1.5 text-xs text-body leading-relaxed">{d.detail}</p>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-xs text-body mt-4">Customized itineraries are tailor-made for this destination. Contact our curation team below.</p>
          )}

          <div className="mt-8 pt-6 border-t border-hairline">
            <button
              onClick={handleDrawerEnquire}
              className="w-full bg-navy text-white text-xs font-bold uppercase tracking-wider py-4 rounded-full transition-colors hover:bg-gold hover:text-ink shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Enquire & Customise This Journey
            </button>
          </div>

          <h4 className="font-display mt-8 text-lg font-bold text-ink border-t border-hairline pt-6">Plan Instantly</h4>
          {sent ? (
            <div className="mt-4 rounded-2xl border border-hairline bg-canvas p-5" aria-live="polite">
              <p className="text-sm font-semibold text-ink">Thank you, {form.name}!</p>
              <p className="mt-1 text-xs text-body leading-relaxed">Our specialists are preparing your custom {dest.name} travel options and will reach out to you within 24 hours.</p>
            </div>
          ) : (
            <form className="mt-4 space-y-4" onSubmit={handleFormSubmit}>
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
                Send Fast Request
              </button>
            </form>
          )}
        </div>
      </motion.aside>
    </div>
  );
}

export default function PopularDestinations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeItineraryDest, setActiveItineraryDest] = useState(null);
  const activeCategory = searchParams.get('category') || 'India';

  const setActiveCategory = (cat) => {
    searchParams.set('category', cat);
    setSearchParams(searchParams);
  };

  // Robust filtering: UI tabs must not depend on fragile dataset category strings.
  // This guarantees India/International/Trending always show content.
  const DESTINATION_IDS_BY_TAB = {
    India: new Set(['kerala', 'andaman', 'kashmir', 'manali', 'gangtok', 'taj-mahal', 'rajasthan', 'tamil-nadu', 'karnataka']),
    International: new Set(['dubai', 'bali', 'thailand', 'singapore', 'maldives', 'vietnam', 'georgia', 'sri-lanka', 'malaysia', 'london', 'bhutan']),
    Trending: new Set(['andaman', 'vietnam', 'georgia', 'taj-mahal', 'rajasthan', 'kashmir', 'london', 'bhutan', 'karnataka']),
  };

  const visibleDestinations = DESTINATIONS.filter((dest) => {
    const set = DESTINATION_IDS_BY_TAB[activeCategory];
    return set ? set.has(dest.id) : true;
  });

  // Hard safety fallback (should never happen).
  const safeDestinations = visibleDestinations.length ? visibleDestinations : DESTINATIONS;

  const handleDestinationClick = (name) => {
    // Fill search bar & scroll to custom planner form
    window.dispatchEvent(
      new CustomEvent('prefill-itinerary', { detail: { destination: name, month: 'Any month' } })
    );
    const el = document.getElementById('custom');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="destinations" className="bg-canvas py-24 border-b border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-widemono text-royal">JOURNEY PLACES</span>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl mt-2">
              Popular Destinations
            </h2>
            <p className="mt-3 text-sm md:text-base text-body">
              Explore handpicked domestic sanctuaries and international paradises selected for their deep heritage and unhurried paces.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 md:self-end">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-[border-color,background-color,color,box-shadow] duration-300 border ${activeCategory === cat
                  ? 'bg-ink text-white border-ink shadow-sm'
                  : 'bg-white text-body border-hairline hover:border-ink hover:text-ink'
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Symmetric Grid with Framer Motion stagger */}
        {safeDestinations.length === 0 ? (
          <div className="mt-12 text-sm text-body">
            No destinations available for <span className="font-semibold">{activeCategory}</span>.
          </div>
        ) : (
          <div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {safeDestinations.map((dest) => (
              <div
                key={dest.id}
                className="relative overflow-hidden group rounded-2xl border border-hairline shadow-soft card-interactive h-[280px] w-full text-left block"
              >
                {/* Fallback sits below the image */}
                <div className="img-fallback absolute inset-0" aria-hidden="true" />

                {/* Background Image with Zoom */}
                <img
                  src={dest.image}
                  alt={`${dest.name} - luxury travel destination`}
                  width={280}
                  height={280}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out scale-100 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient overlay sits on top of image */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/85 via-navy/30 to-transparent" aria-hidden="true" />

                {/* Tag Overlay top-right */}
                <div className="absolute right-4 top-4 z-20">
                  <span className="bg-white text-royal font-bold text-[9px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {Array.isArray(dest.categories) ? dest.categories[0] : activeCategory}
                  </span>
                </div>

                {/* Content bottom-left */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-20 translate-y-2 transition-transform duration-500 ease-lux group-hover:translate-y-0 w-full text-left text-white flex flex-col items-start">
                  <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                    {dest.name}
                  </h3>
                  <p className="mt-1 max-w-xs text-xs leading-relaxed text-white/80 line-clamp-1 group-hover:line-clamp-none transition-colors duration-300">
                    {dest.tagline}
                  </p>

                  <div className="mt-4 flex items-center gap-3 w-full">
                    <button
                      type="button"
                      onClick={() => handleDestinationClick(dest.name)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-gold tracking-wide hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                    >
                      Enquire Now
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>

                    <span className="text-white/25">|</span>

                    <button
                      type="button"
                      onClick={() => setActiveItineraryDest(dest)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-white/80 hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                    >
                      View Itinerary
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  <span className="mt-4 block h-px w-0 bg-gold transition-[width] duration-500 ease-lux group-hover:w-16" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Slide-out Itinerary Drawer */}
      <AnimatePresence>
        {activeItineraryDest && (
          <ItineraryDrawer
            dest={activeItineraryDest}
            onClose={() => setActiveItineraryDest(null)}
            onEnquire={handleDestinationClick}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import CustomItineraryForm from '../components/CustomItineraryForm';

const WHATSAPP_URL =
  "https://wa.me/919388599000?text=Hi%20Blue%20Spice%2C%20I'm%20looking%20to%20plan%20a%20customized%20itinerary...";

export default function CustomItineraryPage() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Plan Your Private Journey · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Design a custom, hand-crafted private itinerary with Blue Spice Holidays. Personal travel specialists, bespoke stays, and seamless logistics."
      );
    }
  }, []);

  // Handle pre-fill parameters passed via query string (e.g., ?destination=Kashmir) or location state
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const destination = params.get('destination') || location.state?.destination;
    const month = params.get('month') || location.state?.month;

    if (destination) {
      // Dispatch prefill event after brief delay for component render
      const timer = setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent('prefill-itinerary', {
            detail: { destination, month: month || 'Any month' }
          })
        );
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.search, location.state]);

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink selection:bg-brand-accent selection:text-brand-ink">
      {/* Hero Banner Section */}
      <section className="relative bg-brand-ink text-white py-20 lg:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-brand-ink to-brand-ink opacity-95 z-0" />
        
        {/* Subtle decorative glow shapes */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-brand-accent/15 text-brand-accent border border-brand-accent/30 shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              Bespoke Journey Planner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="serif-font text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 leading-tight max-w-4xl"
          >
            Craft Your <span className="accent-serif text-brand-accent">Unforgettable</span> Travel Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/75 max-w-2xl text-base sm:text-lg font-light leading-relaxed"
          >
            Tell us your dream destinations, travel style, and preferences. Our luxury travel curators will hand-craft a tailormade itinerary tailored just for you.
          </motion.p>

          {/* Quick Stats / Highlights Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full max-w-3xl pt-8 border-t border-white/10"
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-brand-accent">100% Custom</span>
              <span className="text-xs text-white/60 uppercase tracking-wider mt-1">Tailored to Your Pace</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-brand-accent">Direct Helplines</span>
              <span className="text-xs text-white/60 uppercase tracking-wider mt-1">24/7 Ground Assistance</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-brand-accent">Zero Friction</span>
              <span className="text-xs text-white/60 uppercase tracking-wider mt-1">End-to-End Logistics</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works / 3 Simple Steps */}
      <section className="py-12 bg-white/50 border-b border-brand-surface-cool/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent font-bold text-sm border border-brand-accent/20">
                01
              </div>
              <div>
                <h3 className="font-bold text-brand-ink text-sm uppercase tracking-wider">Fill Requirements</h3>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">Share dates, destinations, companion count, and hotel preferences.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent font-bold text-sm border border-brand-accent/20">
                02
              </div>
              <div>
                <h3 className="font-bold text-brand-ink text-sm uppercase tracking-wider">Specialist Curation</h3>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">Our experts review and design a customized day-by-day itinerary.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent font-bold text-sm border border-brand-accent/20">
                03
              </div>
              <div>
                <h3 className="font-bold text-brand-ink text-sm uppercase tracking-wider">Unpack & Enjoy</h3>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">Receive a complete quote, vouchers, and 24/7 concierge support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Form Container */}
      <div className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="shadow-2xl rounded-3xl overflow-hidden bg-brand-ink border border-white/10">
          <CustomItineraryForm />
        </div>
      </div>

      {/* Need Immediate Help Floating / Bottom Callout */}
      <section className="pb-20 max-w-4xl mx-auto px-6 text-center">
        <div className="p-8 rounded-premium bg-white border border-brand-surface-cool shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="serif-font text-xl font-bold text-brand-ink">Prefer to talk directly right now?</h4>
            <p className="text-xs text-brand-muted mt-1">Connect with our senior travel advisor on WhatsApp for instantaneous assistance.</p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg"
            data-umami-event="WhatsApp Custom Page Direct Click"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Z" /></svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

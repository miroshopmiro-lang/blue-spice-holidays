import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const WHATSAPP_URL =
  "https://wa.me/919388599000?text=Hi%20Blue%20Spice%2C%20I'm%20looking%20to%20plan%20a%20custom%20family%20trip%20to...";

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const showSolidHeader = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-lux ${showSolidHeader
        ? 'glass shadow-soft py-4'
        : 'bg-transparent py-6 border-b border-white/10'
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          to="/"
          className={`font-display text-2xl font-semibold tracking-tight transition-colors duration-300 ${showSolidHeader ? 'text-ink' : 'text-white'
            }`}
        >
          Blue Spice <span className="text-gold">Holidays</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 lg:flex">
          {/* Holidays Dropdown */}
          <div className="relative group py-2">
            <Link
              to="/holidays"
              className={`nav-link flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm ${showSolidHeader ? 'text-body hover:text-ink' : 'text-white/90 hover:text-white'
                }`}
            >
              Holidays
              <svg className="w-3 h-3 translate-y-[0.5px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>

            {/* Dropdown Menu Panel */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block w-48 bg-white border border-hairline rounded-premium shadow-float py-2 z-50 animate-fadeIn">
              <Link to="/holidays" className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-canvas hover:text-royal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
                Holidays Hub
              </Link>
              <Link to="/holidays/domestic" className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-canvas hover:text-royal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
                Domestic Curation
              </Link>
              <Link to="/holidays/international" className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-canvas hover:text-royal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
                Global Escapes
              </Link>
              <Link to="/wellness" className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-canvas hover:text-royal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
                Holistic Wellness
              </Link>
            </div>
          </div>

          {[
            { to: '/darshan', label: 'Darshan' },
            { to: '/forex', label: 'Forex' },
            { to: '/flights', label: 'Flights' },
            { to: '/cruises', label: 'Cruises' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link px-3.5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm ${showSolidHeader ? 'text-body hover:text-ink' : 'text-white/90 hover:text-white'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+919388599000"
            className={`text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm ${showSolidHeader ? 'text-body' : 'text-white/70'
              }`}
          >
            Talk to a Specialist:{' '}
            <span className={showSolidHeader ? 'text-ink' : 'text-white'}>
              +91 93885 99000
            </span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${showSolidHeader
              ? 'border-navy text-navy hover:bg-navy hover:text-white'
              : 'border-white text-white hover:bg-white hover:text-navy'
              }`}
          >
            <WhatsAppIcon className="" />
            Chat on WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-[color,background-color,box-shadow,transform] duration-300 lg:hidden ${showSolidHeader
            ? 'text-ink ring-1 ring-hairline'
            : 'text-white ring-1 ring-white/20'
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold`}
          aria-label="Open menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer (with slide-in transitions) */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-ink/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />
            {/* Slide-out Panel */}
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-white p-6 shadow-float [overscroll-behavior:contain]"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-ink">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-hairline text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-1 overflow-y-auto">
                <Link to="/" onClick={() => setOpen(false)} className="rounded-xl px-3.5 py-3 text-lg font-medium text-ink hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                  Home
                </Link>

                <div className="border-t border-hairline my-2 pt-3">
                  <span className="text-[10px] uppercase font-mono tracking-widemono text-royal block mb-2 px-3.5">Holidays</span>
                  <div className="flex flex-col gap-1 pl-4">
                    <Link to="/holidays" onClick={() => setOpen(false)} className="rounded-xl px-3.5 py-2.5 text-base text-body hover:bg-canvas hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                      Holidays Hub
                    </Link>
                    <Link to="/holidays/domestic" onClick={() => setOpen(false)} className="rounded-xl px-3.5 py-2.5 text-base text-body hover:bg-canvas hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                      Domestic Curation
                    </Link>
                    <Link to="/holidays/international" onClick={() => setOpen(false)} className="rounded-xl px-3.5 py-2.5 text-base text-body hover:bg-canvas hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                      Global Escapes
                    </Link>
                    <Link to="/wellness" onClick={() => setOpen(false)} className="rounded-xl px-3.5 py-2.5 text-base text-body hover:bg-canvas hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                      Holistic Wellness
                    </Link>
                  </div>
                </div>

                <div className="border-t border-hairline my-2 pt-3 flex flex-col gap-1">
                  <Link to="/darshan" onClick={() => setOpen(false)} className="rounded-xl px-3.5 py-3 text-lg font-medium text-ink hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                    Darshan
                  </Link>
                  <Link to="/forex" onClick={() => setOpen(false)} className="rounded-xl px-3.5 py-3 text-lg font-medium text-ink hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                    Forex
                  </Link>
                  <Link to="/flights" onClick={() => setOpen(false)} className="rounded-xl px-3.5 py-3 text-lg font-medium text-ink hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                    Flights
                  </Link>
                  <Link to="/cruises" onClick={() => setOpen(false)} className="rounded-xl px-3.5 py-3 text-lg font-medium text-ink hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                    Cruises
                  </Link>
                </div>
              </nav>

              <div className="mt-auto pt-6 border-t border-hairline flex flex-col gap-4">
                <a href="tel:+919388599000" className="text-xs text-body px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">
                  Talk to a Specialist: <span className="text-ink font-semibold">+91 93885 99000</span>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-navy py-3 text-center text-sm font-medium text-white hover:bg-navy/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  onClick={() => setOpen(false)}
                >
                  <WhatsAppIcon className="" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}

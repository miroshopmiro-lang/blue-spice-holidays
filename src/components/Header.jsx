import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MEGA_MENUS, FLAT_LINKS, OVERFLOW_LINKS } from '../data/siteMenu';

const WHATSAPP_URL =
  "https://wa.me/919388599000?text=Hi%20Blue%20Spice%2C%20I'm%20looking%20to%20plan%20a%20custom%20family%20trip%20to...";

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}


const LANGUAGES = [
  { code: 'en', name: 'English', iso: 'gb' },
  { code: 'de', name: 'German', iso: 'de' },
  { code: 'fr', name: 'French', iso: 'fr' },
  { code: 'ja', name: 'Japanese', iso: 'jp' },
  { code: 'th', name: 'Thai', iso: 'th' },
  { code: 'ms', name: 'Malay', iso: 'my' },
  { code: 'es', name: 'Spanish', iso: 'es' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState({});
  const location = useLocation();

  const toggleMobileMenu = (id) => setOpenMobileMenus((prev) => ({ ...prev, [id]: !prev[id] }));

  const isHome = location.pathname === '/';
  const showSolidHeader = scrolled || !isHome;

  // Drives the real Google Translate widget select element.
  // Retries up to ~3 s while the async script is still loading.
  const applyTranslation = (code, attempts = 0) => {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = code;
      select.dispatchEvent(new Event('change'));
    } else if (attempts < 15) {
      // Widget not ready yet — retry every 200 ms
      setTimeout(() => applyTranslation(code, attempts + 1), 200);
    }
  };

  const handleLanguageChange = (code) => {
    setLangDropdownOpen(false);
    
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = code;
      select.dispatchEvent(new Event('change'));
      return;
    }

    // Fallback if widget script is blocked (e.g. by AdBlocker/Shields) or still loading
    const hostname = window.location.hostname;
    const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.');
    
    if (isLocal) {
      alert(
        "Google Translate widget is still loading or blocked by an AdBlocker/Shield on localhost.\n\n" +
        "1. Please disable AdBlocker or Brave Shields on this page to let the script load.\n" +
        "2. Note: Google Translate's proxy cannot translate 'localhost' pages because local files are not accessible on the public internet. It will work 100% on the live public domain."
      );
    } else {
      const pageUrl = encodeURIComponent(window.location.href);
      window.open(`https://translate.google.com/translate?sl=auto&tl=${code}&u=${pageUrl}`, '_blank');
    }
  };

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
    <>
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
          Blue Spice <span className={`transition-colors duration-300 ${showSolidHeader ? 'text-ink' : 'text-white'}`}>Holidays</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Main navigation">

          {/* Mega Menus: Holidays / Services / SPL Tour */}
          {MEGA_MENUS.map((menu) => (
            <div key={menu.id} className="relative group py-2">
              <Link
                to={menu.path}
                className={`nav-link flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm ${showSolidHeader ? 'text-body hover:text-ink' : 'text-white/90 hover:text-white'}`}
              >
                {menu.label}
                <svg className="w-3 h-3 translate-y-[0.5px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block group-focus-within:block bg-white border border-hairline rounded-premium shadow-float py-2 z-50 ${
                  menu.children.length > 6 ? 'w-[440px] grid grid-cols-2 gap-x-1' : 'w-56'
                }`}
              >
                {menu.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-canvas hover:text-royal transition-colors rounded-sm"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Flat Links */}
          {FLAT_LINKS.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`nav-link px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm ${showSolidHeader ? 'text-body hover:text-ink' : 'text-white/90 hover:text-white'}`}
            >
              {item.label}
            </Link>
          ))}

          {/* More Overflow */}
          <div className="relative group py-2">
            <button
              type="button"
              className={`nav-link flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm ${showSolidHeader ? 'text-body hover:text-ink' : 'text-white/90 hover:text-white'}`}
              aria-haspopup="true"
            >
              More
              <svg className="w-3 h-3 translate-y-[0.5px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="absolute top-full right-0 hidden group-hover:block group-focus-within:block w-52 bg-white border border-hairline rounded-premium shadow-float py-2 z-50">
              {OVERFLOW_LINKS.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-canvas hover:text-royal transition-colors rounded-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">

          {/* Translate Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                showSolidHeader
                  ? 'border-navy/20 text-navy hover:bg-navy/5'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
              aria-expanded={langDropdownOpen}
              aria-haspopup="true"
              aria-label="Select Language"
            >
              <span className="text-base leading-none">🌐</span>
              <span className="hidden xl:inline">Translate</span>
              <svg className={`w-3 h-3 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-hairline rounded-premium shadow-float py-1.5 z-[100]">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="w-full text-left px-4 py-2 text-xs font-semibold transition-colors flex items-center gap-2.5 hover:bg-canvas hover:text-royal text-ink"
                  >
                    <img
                      src={`https://flagcdn.com/w20/${lang.iso}.png`}
                      alt={lang.name}
                      className="w-5 h-3.5 object-cover rounded-sm shrink-0 border border-hairline"
                    />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Phone */}
          <a
            href="tel:+919388599000"
            className={`text-xs font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm hidden xl:block ${
              showSolidHeader ? 'text-body hover:text-ink' : 'text-white/70 hover:text-white'
            }`}
            data-umami-event="Phone Header Click"
          >
            +91 93885 99000
          </a>

          {/* WhatsApp CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
              showSolidHeader
                ? 'border-navy text-navy hover:bg-navy hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-navy'
            }`}
            data-umami-event="WhatsApp Header Click"
          >
            <WhatsAppIcon />
            <span className="hidden xl:inline">WhatsApp</span>
            <span className="xl:hidden">Chat</span>
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

      {/* Mobile Drawer — rendered outside <header> via portal-like sibling placement
           because .glass applies transform: translate3d(0,0,0) which creates a new
           containing block and breaks position: fixed on children */}
    </header>

    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] lg:hidden">
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
              <Link to="/" onClick={() => setOpen(false)} className="rounded-xl px-3.5 py-3 text-lg font-semibold text-ink hover:bg-canvas">
                Home
              </Link>

              {/* Mobile Mega Menu Accordions */}
              {MEGA_MENUS.map((menu) => (
                <div key={menu.id} className="border-t border-hairline my-2 pt-2">
                  <button
                    type="button"
                    onClick={() => toggleMobileMenu(menu.id)}
                    className="w-full flex items-center justify-between rounded-xl px-3.5 py-3 text-lg font-semibold text-ink hover:bg-canvas text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <span>{menu.label}</span>
                    <svg className={`w-4 h-4 text-royal transition-transform duration-300 ${openMobileMenus[menu.id] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {openMobileMenus[menu.id] && (
                    <div className="flex flex-col gap-1 pl-6 pr-2 py-1 bg-canvas rounded-xl mt-1 animate-fadeIn">
                      {menu.children.map((child) => (
                        <Link key={child.path} to={child.path} onClick={() => setOpen(false)} className="rounded-lg px-3.5 py-2 text-sm font-semibold text-body hover:text-royal">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Flat Links */}
              <div className="border-t border-hairline my-2 pt-2 flex flex-col gap-1">
                {FLAT_LINKS.map((item) => (
                  <Link key={item.id} to={item.path} onClick={() => setOpen(false)} className="rounded-xl px-3.5 py-3 text-lg font-semibold text-ink hover:bg-canvas">
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Overflow Accordion */}
              <div className="border-t border-hairline my-2 pt-2">
                <button
                  type="button"
                  onClick={() => toggleMobileMenu('more')}
                  className="w-full flex items-center justify-between rounded-xl px-3.5 py-3 text-lg font-semibold text-ink hover:bg-canvas text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <span>More</span>
                  <svg className={`w-4 h-4 text-royal transition-transform duration-300 ${openMobileMenus.more ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {openMobileMenus.more && (
                  <div className="flex flex-col gap-1 pl-6 pr-2 py-1 bg-canvas rounded-xl mt-1 animate-fadeIn">
                    {OVERFLOW_LINKS.map((item) => (
                      <Link key={item.id} to={item.path} onClick={() => setOpen(false)} className="rounded-lg px-3.5 py-2 text-sm font-semibold text-body hover:text-royal">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div className="border-t border-hairline my-2 pt-3">
              <span className="text-[10px] uppercase font-mono tracking-widemono text-royal block mb-2 px-3.5">Language</span>
              <div className="grid grid-cols-2 gap-2 px-3.5">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLanguageChange(lang.code);
                      setOpen(false);
                    }}
                    className="text-xs font-semibold py-2 px-3 rounded-lg border text-left flex items-center gap-2.5 transition-colors bg-canvas text-body border-hairline hover:border-navy hover:text-navy hover:bg-navy/5 animate-fadeIn"
                  >
                    <img
                      src={`https://flagcdn.com/w20/${lang.iso}.png`}
                      alt={lang.name}
                      className="w-5 h-3.5 object-cover rounded-sm shrink-0 border border-hairline"
                    />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-hairline flex flex-col gap-4">
              <a href="tel:+919388599000" className="text-xs text-body px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm" data-umami-event="Phone Mobile Menu Click">
                Talk to a Specialist: <span className="text-ink font-semibold">+91 93885 99000</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-navy py-3 text-center text-sm font-medium text-white hover:bg-navy/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                onClick={() => setOpen(false)}
                data-umami-event="WhatsApp Mobile Menu Click"
              >
                <WhatsAppIcon className="" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  </>
  );
}

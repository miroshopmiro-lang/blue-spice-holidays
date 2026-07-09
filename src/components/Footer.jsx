import { useState } from 'react';
import { Link } from 'react-router-dom';

const DESTINATIONS = [
  { label: 'Kerala Backwaters', to: '/holidays/domestic' },
  { label: 'Royal Rajasthan', to: '/holidays/domestic' },
  { label: 'Kashmir Valleys', to: '/holidays/domestic' },
  { label: 'Himalayan Peaks', to: '/holidays/domestic' },
  { label: 'Maldives Lagoon', to: '/holidays/international' },
  { label: 'London Curation', to: '/holidays/international' },
];
const TRAVEL_STYLES = [
  { label: 'Domestic Curation', to: '/holidays/domestic' },
  { label: 'Global Escapes', to: '/holidays/international' },
  { label: 'Holistic Wellness', to: '/wellness' },
  { label: 'Spiritual Darshan', to: '/darshan' },
];
const SERVICES = [
  { label: 'Forex (Exchange)', to: '/forex' },
  { label: 'Flights Curation', to: '/flights' },
  { label: 'Luxury Cruises', to: '/cruises' },
  { label: 'Travel Brochures', to: '/brochures' },
  { label: 'About Us', to: '/about' },
];

function TourismBadge() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2 4 6v6c0 5 8 8 8 8s8-3 8-8V6Z" /><path d="M9 12l2 2 4-4" /></svg>
  );
}
function IataBadge() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 16l20-7-7 13-3-6-6-2-4 2Z" /></svg>
  );
}
function SslBadge() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
  );
}

function Column({ title, items }) {
  return (
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-widemono text-gold">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className="text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    if (!email) return;

    setSubmitting(true);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "4a1b9f71-877f-47ce-9627-e818691a2b11",
          subject: "New Newsletter Subscription",
          from_name: "Blue Spice Holidays Website",
          replyto: email,
          email: email
        })
      });
      setSubscribed(true);
    } catch (err) {
      console.error("Newsletter submission failed", err);
      // Fallback: still show thank you message to user
      setSubscribed(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-navy py-16 text-white/80 border-t border-white/10 grain" style={{ colorScheme: 'dark' }}>
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(50% 80% at 90% 100%, rgba(212,175,55,0.15) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      
      <div className="container-lux relative z-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Column title="Popular Destinations" items={DESTINATIONS} />
          <Column title="Curated Travel Styles" items={TRAVEL_STYLES} />
          <Column title="Travel Services" items={SERVICES} />
 
          <div aria-live="polite">
            <h3 className="font-mono text-[11px] uppercase tracking-widemono text-gold">Stay Inspired</h3>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">Slow-travel notes and quiet corners of India, a few times a year.</p>
            {subscribed ? (
              <p className="mt-4 rounded-xl border border-gold/30 bg-white/5 px-4 py-3 text-sm font-medium text-gold animate-fadeIn">
                ✓ Thank you for subscribing!
              </p>
            ) : (
              <form className="mt-4 flex gap-2" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  required
                  placeholder="Your email…"
                  name="email"
                  autoComplete="email"
                  spellCheck={false}
                  aria-label="Email address for newsletter"
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-white/20 rounded-none text-white placeholder:text-white/40 px-0 py-2 focus:border-gold focus:ring-0 focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none text-sm transition-[border-color,box-shadow]"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-navy transition-[background-color,color] hover:bg-gold hover:text-ink shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-50 shrink-0"
                >
                  {submitting ? '...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Blue Spice Holidays. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-5 text-white/50">
            <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <span className="text-gold"><TourismBadge /></span> 24/7 Support
            </span>
            <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <span className="text-gold"><IataBadge /></span> Bespoke Curation
            </span>
            <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <span className="text-gold"><SslBadge /></span> SSL Secure
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/50">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xs uppercase tracking-wider font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xs uppercase tracking-wider font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

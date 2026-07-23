import { useEffect } from 'react';
import GroundTeams from '../components/GroundTeams';

const PILLARS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0h6" />
      </svg>
    ),
    title: 'Worldwide Custom Routes',
    body: 'From the backwaters of Kerala to the beaches of Maldives and the streets of London, we plan custom trips across both popular and offbeat routes in India and internationally.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: 'Personalised for Every Traveller',
    body: 'We do not sell off-the-shelf packages. Every itinerary, whether a family holiday, honeymoon, or corporate retreat, is built around your specific preferences, pace, and budget.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Z" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: '24/7 On-Ground Coordination',
    body: 'Dedicated regional operations directors across India ensure every hotel check-in, transfer, and excursion runs on time, with a real person reachable around the clock.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Verified Hotel Partners',
    body: 'We partner exclusively with 3-star, 4-star, 5-star, and heritage-certified properties. No unverified listings, no surprises at check-in.',
  },
];

const SERVICES = [
  'Domestic Holiday Packages',
  'International Tour Packages',
  'Honeymoon and Couples Escapes',
  'Family Holiday Curation',
  'Corporate and Group Retreats',
  'Spiritual Darshan Circuits',
  'Holistic Wellness Retreats',
  'Luxury Cruise Packages',
  'Forex and Travel Insurance',
  'Flight Ticket Assistance',
];

export default function AboutUsPage() {
  useEffect(() => {
    document.title = 'About Us · Blue Spice Holidays';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Blue Spice Holidays is a travel operator based in Kochi, Kerala. Specialising in personalised domestic and international holidays since 2009.',
      );
    }
  }, []);

  return (
    <div className="bg-white min-h-screen">

      {/* Hero Banner */}
      <section className="relative bg-navy text-white py-28 px-6 text-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(60% 80% at 80% 120%, rgba(212,175,55,0.25) 0%, transparent 60%), radial-gradient(50% 60% at 10% -10%, rgba(42,125,225,0.3) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
          <img
            src="/android-chrome-192x192.png"
            alt="Blue Spice Holidays Logo"
            className="w-16 h-16 object-contain rounded-2xl bg-white/10 p-2 border border-white/20 shadow-lg mb-6"
          />
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase bg-gold/20 text-gold border border-gold/30 font-mono mb-5">
            Established 2009 · Kochi, Kerala
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mt-2">
            Our Story &amp;{' '}
            <span className="text-gold italic">Curation Promise</span>
          </h1>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Founded in 2009 and headquartered in Kochi, Kerala, India; Blue Spice Holidays has now has multiple destinations and vast areas of operations world wide, crafting personalised travel experiences and strong ground support for families, couples, and corporate travellers across India and the world.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widemono text-royal mb-3">Who We Are</p>
            <h2 className="font-display text-3xl font-bold text-ink mb-6">
              A Travel Company Built on Trust and Transparency
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
              Blue Spice Holidays was established in 2009 in Kochi, Kerala, with a clear mission: to move beyond standard itineraries and offer genuinely enriching travel experiences. We are a fully registered travel operator based out of Kochi.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
              Based in the heart of Kochi, we bring deep local knowledge of Kerala, its backwaters, hill stations, wildlife, and coast, alongside curated international packages spanning the Maldives, Dubai, Europe, South-East Asia, and beyond.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every booking is handled with full transparency. You speak directly with our travel consultants, receive detailed cost breakdowns, and have access to our on-ground regional directors throughout your journey.
            </p>
          </div>

          {/* Services list */}
          <div className="bg-tint border border-hairline rounded-xl p-8">
            <p className="font-mono text-[10px] uppercase tracking-widemono text-royal mb-4">What We Offer</p>
            <h3 className="font-display text-lg font-bold text-ink mb-6">Our Core Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="bg-canvas border-y border-hairline py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-[10px] uppercase tracking-widemono text-royal mb-3">Why Choose Us</p>
            <h2 className="font-display text-3xl font-bold text-ink">Our Core Pillars</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-white rounded-xl border border-hairline p-7 shadow-soft flex gap-5">
                <div className="w-11 h-11 rounded-full bg-tint flex items-center justify-center shrink-0 text-royal">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink mb-2">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborate & Referral Programs */}
      <section className="py-20 px-6 bg-tint/30 border-t border-hairline">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Collaborate with Us */}
          <div className="bg-white border border-hairline rounded-2xl p-8 shadow-soft flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widemono text-royal block mb-3">B2B Partnerships</span>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">Collaborate with us:</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                If you are a B2B travel agent looking for a reliable, ethical, and experienced travel partner with vast expertise and a proven track record of fulfilling committed services in a prompt, seamless way, let's build a lasting partnership. We provide solid ground support, competitive pricing, and absolute transparency.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-navy text-white text-xs font-semibold uppercase tracking-wider rounded transition-all duration-300 hover:bg-royal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Inquire for Collaboration
              </a>
            </div>
          </div>

          {/* Refer us and enjoy SPL privileges */}
          <div className="bg-white border border-hairline rounded-2xl p-8 shadow-soft flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widemono text-royal block mb-3">Rewards Program</span>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">Refer us and enjoy special privileges:</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Customers referring us and promoting Blue Spice Holidays to their friends and family will enjoy special privileges and benefits including redeemable points on successful closing to adjust from future travel personal bookings done.
              </p>
              <p className="text-slate-500 text-xs italic leading-relaxed">
                *This exclusive offer is limited only through our website bookings. The company has the right to withdraw or cancel any time without prior notice. No claims will be entertained without a proper confirmation from our department.*
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-navy text-navy text-xs font-semibold uppercase tracking-wider rounded transition-all duration-300 hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Refer a Friend
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* On-Ground Support Network */}
      <section className="bg-canvas border-t border-hairline">
        <GroundTeams />
      </section>

    </div>
  );
}

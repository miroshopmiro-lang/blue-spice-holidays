import { useEffect } from 'react';
import useEnquiry from '../hooks/useEnquiry';
import BrochureStrip from '../components/BrochureStrip';

const DARSHAN_PACKAGES = [
  {
    id: 'chardham',
    name: 'Char Dham Heli-Curation',
    duration: '5 Nights / 6 Days',
    route: 'Dehradun ➔ Yamunotri ➔ Gangotri ➔ Kedarnath ➔ Badrinath ➔ Dehradun',
    price: '₹1,95,000',
    image: '/images/chardham_heli_yatra.webp',
    details: 'Luxury helicopter transfers avoiding long treks, VIP temple access, pure veg catering, and local guides.'
  },
  {
    id: 'varanasi',
    name: 'Varanasi Spiritual Heritage',
    duration: '3 Nights / 4 Days',
    route: 'Varanasi ➔ Sarnath ➔ Varanasi',
    price: '₹24,900',
    image: '/images/varanasi_ganga_aarti.webp',
    details: 'Private sunset Ganga Aarti boat, VIP Kashi Vishwanath Darshan, subah-e-banaras morning rituals, and scholar pundits.'
  },
  {
    id: 'tirupati',
    name: 'Tirupati Balaji Curation',
    duration: '2 Nights / 3 Days',
    route: 'Chennai / Tirupati ➔ Tirumala Hills ➔ Tirupati',
    price: '₹18,500',
    image: '/images/tirupati_gopuram.webp',
    details: 'VIP Sheegradarshan passes, luxury private sedan transfer, and premium accommodation at Tirumala foothills.'
  },
  {
    id: 'jyotirlinga',
    name: 'Jyotirlinga Darshan Curation',
    duration: '6 Nights / 7 Days',
    route: 'Indore ➔ Ujjain ➔ Omkareshwar ➔ Maheshwar ➔ Indore',
    price: '₹38,400',
    image: '/images/jyotirlinga_shrine.webp',
    details: 'VIP queues at Mahakaleshwar & Omkareshwar, clean luxury accommodation, pure vegetarian catering, and local guides.'
  },
];

export default function SpiritualToursPage() {
  const enquire = useEnquiry();

  useEffect(() => {
    document.title = "Spiritual & Darshan Tours · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "VIP temple access, heli-curated Char Dham, and sattvik pilgrimage journeys by Blue Spice Holidays.");
    }
  }, []);

  const handleRequest = (pkgName) => {
    enquire(`Spiritual Tour: ${pkgName}`);
  };

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      {/* Banner / Header */}
      <section className="relative bg-brand-ink text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            Spiritual & Pilgrimage Journeys
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Pilgrimages Curated with <span className="accent-serif text-brand-accent">Comfort & Respect</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            VIP passes, helicopter transfers, pure vegetarian catering, and comfortable transportation. Tailored specifically for elder family members.
          </p>
        </div>
      </section>

      {/* Trust factors column */}
      <section className="py-16 bg-brand-surface-cool/30 border-b border-brand-surface-cool">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4 border border-brand-surface-cool bg-white rounded-premium">
              <span className="text-brand-accent text-2xl font-bold mb-2">⭐ VIP</span>
              <h4 className="font-bold text-sm text-brand-ink uppercase tracking-wide">VIP Temple Access</h4>
              <p className="text-xs text-brand-muted mt-1">Pre-arranged special entry queues and pooja passes to minimize waiting times.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 border border-brand-surface-cool bg-white rounded-premium">
              <span className="text-brand-accent text-2xl font-bold mb-2">🥗 PURE</span>
              <h4 className="font-bold text-sm text-brand-ink uppercase tracking-wide">Sattvik Catering</h4>
              <p className="text-xs text-brand-muted mt-1">Assured pure vegetarian, garlic-free, and onion-free meals prepared with absolute cleanliness.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 border border-brand-surface-cool bg-white rounded-premium">
              <span className="text-brand-accent text-2xl font-bold mb-2">👴 ELDER</span>
              <h4 className="font-bold text-sm text-brand-ink uppercase tracking-wide">Senior-Friendly Care</h4>
              <p className="text-xs text-brand-muted mt-1">Slow-paced travel loops, low-height luxury sedans, and wheelchair support whenever required.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 border border-brand-surface-cool bg-white rounded-premium">
              <span className="text-brand-accent text-2xl font-bold mb-2">🧘 GUIDES</span>
              <h4 className="font-bold text-sm text-brand-ink uppercase tracking-wide">Scholar Pundits</h4>
              <p className="text-xs text-brand-muted mt-1">Local certified pundits explaining rituals, significance, and history at key centers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pilgrimages Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">SACRED ROUTES</p>
          <h2 className="serif-font text-3xl font-bold text-brand-ink mt-2 sm:text-4xl">Curated Darshan Itineraries</h2>
          <p className="mt-3 text-brand-muted text-sm sm:text-base">Thoughtfully designed pilgrimage journeys with zero logistical stress for your family.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DARSHAN_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="bg-white border border-brand-surface-cool rounded-premium overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-brand-ink">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    width={400}
                    height={208}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block mb-1">{pkg.duration}</span>
                  <h3 className="serif-font text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-accent transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-xs font-medium text-brand-muted bg-brand-surface-cool/30 border border-brand-surface-cool rounded-sm px-3 py-2.5 mb-4 leading-relaxed">
                    <span className="text-brand-ink font-semibold">Route:</span> {pkg.route}
                  </p>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {pkg.details}
                  </p>
                </div>
              </div>

              <div className="p-6 border-t border-brand-surface-cool bg-brand-surface/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-brand-muted block font-semibold">Price</span>
                  <span className="serif-font text-base font-bold text-brand-ink">On Request</span>
                </div>
                <button
                  onClick={() => handleRequest(pkg.name)}
                  className="bg-brand-ink text-white font-bold uppercase tracking-wider text-[10px] px-5 py-3 rounded-premium hover:bg-brand-accent hover:text-brand-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  Request Itinerary
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BrochureStrip />
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';

const WHATSAPP_SPECIALIST =
  "https://wa.me/919388599000?text=Hi%20Blue%20Spice%2C%20I%20just%20submitted%20a%20custom%20itinerary%20request.";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const COUNTRIES = [
  { name: 'India', code: '+91', iso: 'in' },
  { name: 'United States', code: '+1', iso: 'us' },
  { name: 'United Kingdom', code: '+44', iso: 'gb' },
  { name: 'United Arab Emirates', code: '+971', iso: 'ae' },
  { name: 'Singapore', code: '+65', iso: 'sg' },
  { name: 'Australia', code: '+61', iso: 'au' },
  { name: 'Canada', code: '+1', iso: 'ca' },
  { name: 'Malaysia', code: '+60', iso: 'my' },
  { name: 'Thailand', code: '+66', iso: 'th' },
  { name: 'Saudi Arabia', code: '+966', iso: 'sa' },
  { name: 'Germany', code: '+49', iso: 'de' },
  { name: 'France', code: '+33', iso: 'fr' },
  { name: 'Japan', code: '+81', iso: 'jp' },
  { name: 'Sri Lanka', code: '+94', iso: 'lk' },
  { name: 'Maldives', code: '+960', iso: 'mv' },
  { name: 'Qatar', code: '+974', iso: 'qa' },
  { name: 'Oman', code: '+968', iso: 'om' },
  { name: 'Kuwait', code: '+965', iso: 'kw' },
  { name: 'Bahrain', code: '+973', iso: 'bh' },
  { name: 'South Africa', code: '+27', iso: 'za' },
  { name: 'New Zealand', code: '+64', iso: 'nz' },
  { name: 'Netherlands', code: '+31', iso: 'nl' },
  { name: 'Switzerland', code: '+41', iso: 'ch' },
  { name: 'Italy', code: '+39', iso: 'it' },
  { name: 'Spain', code: '+34', iso: 'es' },
  { name: 'Hong Kong', code: '+852', iso: 'hk' },
  { name: 'China', code: '+86', iso: 'cn' },
  { name: 'Russia', code: '+7', iso: 'ru' },
  { name: 'Brazil', code: '+55', iso: 'br' },
  { name: 'Mexico', code: '+52', iso: 'mx' },
  { name: 'Vietnam', code: '+84', iso: 'vn' },
  { name: 'Indonesia', code: '+62', iso: 'id' },
  { name: 'Philippines', code: '+63', iso: 'ph' },
  { name: 'Ireland', code: '+353', iso: 'ie' },
  { name: 'Sweden', code: '+46', iso: 'se' },
  { name: 'Norway', code: '+47', iso: 'no' },
  { name: 'Denmark', code: '+45', iso: 'dk' },
  { name: 'Finland', code: '+358', iso: 'fi' },
  { name: 'Belgium', code: '+32', iso: 'be' },
  { name: 'Austria', code: '+43', iso: 'at' },
  { name: 'Turkey', code: '+90', iso: 'tr' },
  { name: 'South Korea', code: '+82', iso: 'kr' },
  { name: 'Poland', code: '+48', iso: 'pl' },
  { name: 'Portugal', code: '+351', iso: 'pt' },
  { name: 'Greece', code: '+30', iso: 'gr' },
  { name: 'Egypt', code: '+20', iso: 'eg' },
  { name: 'Mauritius', code: '+230', iso: 'mu' },
  { name: 'Kenya', code: '+254', iso: 'ke' },
  { name: 'Nepal', code: '+977', iso: 'np' },
  { name: 'Bangladesh', code: '+880', iso: 'bd' },
];

export default function CustomItineraryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState({});
  const [countrySearch, setCountrySearch] = useState('');
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const countryDropdownRef = useRef(null);

  const [data, setData] = useState({
    name: '',
    countryCode: '+91',
    phone: '',
    email: '',
    address: '',
    destinations: '',
    travelDates: '',
    duration: '',
    adults: '2',
    childrenCount: '0',
    childAges: [],
    hotelTier: '',
    foodRequests: [],
    otherFoodRequest: '',
    specialReqs: [],
    otherRequirement: ''
  });

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(e.target)) {
        setCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      setData((d) => ({
        ...d,
        destinations: e.detail.destination || d.destinations,
      }));
    };
    window.addEventListener('prefill-itinerary', handler);
    return () => window.removeEventListener('prefill-itinerary', handler);
  }, []);

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const validate = () => {
    const e = {};
    if (!data.name.trim()) e.name = 'Full name is required.';
    
    const phoneClean = data.phone.replace(/[\s\-()]/g, '');
    if (!data.phone.trim()) {
      e.phone = 'Contact number is required.';
    } else if (!/^\d{5,15}$/.test(phoneClean)) {
      e.phone = 'Enter a valid phone number (5 to 15 digits).';
    }

    if (!EMAIL_RE.test(data.email)) e.email = 'Enter a valid email address.';
    if (!data.destinations.trim()) e.destinations = 'Please specify destinations required.';
    if (!data.travelDates.trim()) e.travelDates = 'Please specify preferred travel date.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitting(true);
      setErrorMsg('');
      try {
        const payload = {
          name: data.name,
          phone: `${data.countryCode} ${data.phone}`,
          email: data.email,
          address: data.address || 'N/A',
          destinations: data.destinations,
          travelDate: data.travelDates,
          duration: data.duration || 'N/A',
          adults: data.adults,
          childrenCount: data.childrenCount,
          childAges: data.childAges.length > 0 ? data.childAges.join(', ') : 'None',
          hotelTier: data.hotelTier || 'N/A',
          foodRequests: data.foodRequests.join(', ') + 
            (data.foodRequests.includes('Other') && data.otherFoodRequest ? ` (${data.otherFoodRequest})` : ''),
          specialRequirements: data.specialReqs.join(', ') + 
            (data.specialReqs.includes('Other') && data.otherRequirement ? ` (${data.otherRequirement})` : '')
        };

        const response = await fetch("https://formspree.io/f/4a1b9f71-877f-47ce-9627-e818691a2b11", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          setSubmitted(true);
        } else {
          const errData = await response.json();
          setErrorMsg(errData.error || 'Failed to submit inquiry. Please try again.');
        }
      } catch (err) {
        setErrorMsg('Network error. Please check your internet connection and try again.');
      } finally {
        setSubmitting(false);
      }
    } else {
      const errorKeys = [
        { key: 'name', id: 'custom-name' },
        { key: 'phone', id: 'custom-phone' },
        { key: 'email', id: 'custom-email' },
        { key: 'destinations', id: 'custom-destinations' },
        { key: 'travelDates', id: 'custom-dates' }
      ];
      const validation = {
        name: !data.name.trim(),
        phone: !data.phone.trim(),
        email: !EMAIL_RE.test(data.email),
        destinations: !data.destinations.trim(),
        travelDates: !data.travelDates.trim()
      };
      const firstErrField = errorKeys.find(f => validation[f.key]);
      if (firstErrField) {
        const el = document.getElementById(firstErrField.id);
        if (el) el.focus();
      }
    }
  };

  return (
    <section id="custom" className="bg-ink text-brand-surface scroll-mt-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-28 lg:grid-cols-12 lg:gap-16 lg:px-8">
        {/* Info Column */}
        <div className="max-w-xl lg:col-span-4">
          <span className="font-mono text-[10px] uppercase tracking-widemono text-gold block mb-2">CUSTOM PLANNING</span>
          <h2 className="serif-font text-3xl font-bold leading-snug text-brand-surface sm:text-4xl">
            Co-Create Your Private Journey
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-surface-cool/80">
            From first inquiry to final return, we manage every single logistics layer so you experience only the journey.
          </p>
          <div className="mt-8 space-y-4 border-l-2 border-brand-accent pl-4 text-sm text-brand-surface-cool/70">
            <p>✓ 100% Customized around your pace</p>
            <p>✓ Complete logistics, flights & rooms</p>
            <p>✓ 24/7 Specialist support line during tour</p>
          </div>
        </div>

        {/* Form Column */}
        <div className="rounded-premium border border-brand-surface/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8 text-brand-surface lg:col-span-8" aria-live="polite">
          {submitted ? (
            <div className="flex h-full flex-col items-start justify-center py-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-premium bg-brand-accent/10 text-brand-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <h3 className="serif-font mt-5 text-2xl font-semibold text-brand-surface">Inquiry received, {data.name.split(' ')[0]}.</h3>
              <p className="mt-3 text-base leading-relaxed text-brand-surface-cool/80">
                Our curation specialists are designing your {data.destinations} journey now.
                We will reach out to you at <span className="text-brand-surface font-semibold">{data.email}</span> or <span className="text-brand-surface font-semibold">{data.countryCode} {data.phone}</span> within <span className="text-brand-surface font-semibold">24 hours</span>.
              </p>
              <a
                href={WHATSAPP_SPECIALIST}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-button border border-brand-surface-cool/30 px-5 py-3 text-sm font-medium text-brand-surface transition-colors hover:bg-brand-surface hover:text-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Chat with your specialist on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-brand-surface-cool/10 pb-4">
                <h3 className="text-lg font-display font-medium text-brand-accent">Travel Inquiry Details</h3>
                <p className="text-xs text-brand-surface-cool/60 mt-1">Please provide the details below so we can customize your private itinerary.</p>
              </div>

              {errorMsg && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-200 text-xs rounded-lg p-4">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* 1. Name */}
                <div>
                  <label htmlFor="custom-name" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">Name *</label>
                  <input
                    id="custom-name" name="name" autoComplete="name"
                    type="text" required value={data.name} onChange={(e) => set('name', e.target.value)}
                    placeholder="Enter your name…"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow]"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                {/* 2. Contact number with country code */}
                <div>
                  <label htmlFor="custom-phone" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">Contact number *</label>
                  <div className="flex gap-3 items-end">
                    {/* Searchable Country Code Dropdown */}
                    <div className="relative w-24 shrink-0" ref={countryDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                        className="w-full flex items-center justify-between bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface py-2 focus:border-brand-accent focus:outline-none text-sm cursor-pointer"
                        aria-expanded={countryDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span className="flex items-center gap-1.5">
                          {(() => {
                            const c = COUNTRIES.find(x => x.code === data.countryCode) || COUNTRIES[0];
                            return (
                              <img
                                src={`https://flagcdn.com/w20/${c.iso}.png`}
                                alt={c.name}
                                className="w-5 h-3.5 object-cover rounded-sm shrink-0 border border-white/10"
                              />
                            );
                          })()}
                          <span className="font-mono text-sm">{data.countryCode}</span>
                        </span>
                        <svg className={`w-3.5 h-3.5 text-brand-surface-cool/60 transition-transform duration-200 ${countryDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>

                      {countryDropdownOpen && (
                        <div className="absolute left-0 mt-1.5 w-64 max-h-60 overflow-y-auto bg-slate-900 border border-brand-surface-cool/20 rounded-md shadow-float py-2 z-50 text-white animate-fadeIn">
                          <div className="px-3 pb-2 border-b border-brand-surface-cool/10">
                            <input
                              type="text"
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              placeholder="Search country or code..."
                              className="w-full bg-slate-800 border border-brand-surface-cool/20 rounded px-2.5 py-1.5 text-white text-xs placeholder:text-white/40 focus:border-brand-accent focus:ring-0 focus:outline-none"
                              onClick={(e) => e.stopPropagation()}
                              autoFocus
                            />
                          </div>
                          <div className="mt-1 max-h-40 overflow-y-auto">
                            {COUNTRIES.filter(c =>
                              c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
                              c.code.includes(countrySearch)
                            ).map((c) => (
                              <button
                                type="button"
                                key={`${c.name}-${c.code}`}
                                onClick={() => {
                                  set('countryCode', c.code);
                                  setCountryDropdownOpen(false);
                                  setCountrySearch('');
                                }}
                                className={`w-full text-left px-3 py-2 text-xs font-semibold flex items-center justify-between hover:bg-white/10 transition-colors ${
                                  data.countryCode === c.code ? 'bg-brand-accent/25 text-brand-accent' : 'text-white'
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <img
                                    src={`https://flagcdn.com/w20/${c.iso}.png`}
                                    alt={c.name}
                                    className="w-5 h-3.5 object-cover rounded-sm shrink-0 border border-white/10"
                                  />
                                  <span className="truncate max-w-[120px]">{c.name}</span>
                                </span>
                                <span className="text-white/50 font-mono text-[11px]">{c.code}</span>
                              </button>
                            ))}
                            {COUNTRIES.filter(c =>
                              c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
                              c.code.includes(countrySearch)
                            ).length === 0 && (
                              <div className="px-3 py-3 text-center text-xs text-white/40 font-medium">No countries found</div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <input
                      id="custom-phone" name="phone" autoComplete="tel" inputMode="tel"
                      type="tel" required value={data.phone} onChange={(e) => set('phone', e.target.value)}
                      placeholder="98765 43210"
                      className="flex-grow bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow]"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                </div>

                {/* 3. Email ID */}
                <div>
                  <label htmlFor="custom-email" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">Email ID *</label>
                  <input
                    id="custom-email" name="email" autoComplete="email" spellCheck={false}
                    type="email" required value={data.email} onChange={(e) => set('email', e.target.value)}
                    placeholder="e.g. you@example.com…"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow]"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                {/* 4. Address */}
                <div>
                  <label htmlFor="custom-address" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">Address</label>
                  <input
                    id="custom-address" name="address" autoComplete="street-address"
                    type="text" value={data.address} onChange={(e) => set('address', e.target.value)}
                    placeholder="e.g. New Delhi, Delhi, India…"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow]"
                  />
                </div>

                {/* 5. Destinations required */}
                <div className="sm:col-span-2">
                  <label htmlFor="custom-destinations" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">Destinations required *</label>
                  <input
                    id="custom-destinations" name="destinations" autoComplete="off"
                    type="text" required value={data.destinations} onChange={(e) => set('destinations', e.target.value)}
                    placeholder="e.g. Kerala (Munnar, Alleppey), Kashmir (Gulmarg)…"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow]"
                  />
                  {errors.destinations && <p className="mt-1 text-xs text-red-400">{errors.destinations}</p>}
                </div>

                {/* 6. Travel dates (Calendar) */}
                <div>
                  <label htmlFor="custom-dates" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">Preferred Travel Date *</label>
                  <input
                    id="custom-dates" name="travelDates"
                    type="date" required 
                    min={new Date().toISOString().split('T')[0]} 
                    max={new Date(new Date().setFullYear(new Date().getFullYear() + 10)).toISOString().split('T')[0]}
                    value={data.travelDates} onChange={(e) => set('travelDates', e.target.value)}
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow] cursor-pointer"
                    style={{ colorScheme: 'dark' }}
                  />
                  {errors.travelDates && <p className="mt-1 text-xs text-red-400">{errors.travelDates}</p>}
                </div>

                {/* 7. Duration of tour dropdown */}
                <div>
                  <label htmlFor="custom-duration" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">Duration of tour</label>
                  <select
                    id="custom-duration" name="duration"
                    value={data.duration} onChange={(e) => set('duration', e.target.value)}
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow] cursor-pointer"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" className="bg-ink text-brand-surface">Choose duration...</option>
                    <option value="3 Days / 2 Nights" className="bg-ink text-brand-surface">3 Days / 2 Nights</option>
                    <option value="4 Days / 3 Nights" className="bg-ink text-brand-surface">4 Days / 3 Nights</option>
                    <option value="5 Days / 4 Nights" className="bg-ink text-brand-surface">5 Days / 4 Nights</option>
                    <option value="6 Days / 5 Nights" className="bg-ink text-brand-surface">6 Days / 5 Nights</option>
                    <option value="7 Days / 6 Nights" className="bg-ink text-brand-surface">7 Days / 6 Nights</option>
                    <option value="8 Days / 7 Nights" className="bg-ink text-brand-surface">8 Days / 7 Nights</option>
                    <option value="10 Days / 9 Nights" className="bg-ink text-brand-surface">10 Days / 9 Nights</option>
                    <option value="12 Days / 11 Nights" className="bg-ink text-brand-surface">12 Days / 11 Nights</option>
                    <option value="15+ Days" className="bg-ink text-brand-surface">15+ Days</option>
                  </select>
                </div>

                {/* 8. No of adults (Age 12+) */}
                <div>
                  <label htmlFor="custom-adults" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">
                    No of Adults (Ages 12+)
                  </label>
                  <select
                    id="custom-adults" name="adults"
                    value={data.adults} onChange={(e) => set('adults', e.target.value)}
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow] cursor-pointer"
                    style={{ colorScheme: 'dark' }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n} className="bg-ink text-brand-surface">{n}</option>
                    ))}
                    <option value="10+" className="bg-ink text-brand-surface">10+</option>
                  </select>
                </div>

                {/* 9. No of children (Under 12) */}
                <div>
                  <label htmlFor="custom-children-count" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">
                    No of Children (Ages Under 12)
                  </label>
                  <select
                    id="custom-children-count" name="childrenCount"
                    value={data.childrenCount} 
                    onChange={(e) => {
                      const count = parseInt(e.target.value, 10);
                      const actualCount = isNaN(count) ? 0 : count;
                      setData(d => ({
                        ...d,
                        childrenCount: e.target.value,
                        childAges: Array(actualCount).fill('')
                      }));
                    }}
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow] cursor-pointer"
                    style={{ colorScheme: 'dark' }}
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n} className="bg-ink text-brand-surface">{n}</option>
                    ))}
                    <option value="10+" className="bg-ink text-brand-surface">10+</option>
                  </select>
                </div>

                {/* Dynamic Child Age Selectors */}
                {data.childAges && data.childAges.length > 0 && (
                  <div className="sm:col-span-2 grid grid-cols-2 gap-4 bg-white/5 p-4 rounded-xl border border-brand-surface/10">
                    <p className="col-span-2 text-[10px] uppercase font-semibold text-brand-accent tracking-wider">Specify Ages of Children (Under 12)</p>
                    {data.childAges.map((age, idx) => (
                      <div key={idx}>
                        <label htmlFor={`child-age-${idx}`} className="block text-[9px] text-brand-surface-cool/70 mb-1">Child {idx + 1} Age</label>
                        <select
                          id={`child-age-${idx}`}
                          value={age}
                          required
                          onChange={(e) => {
                            const newAges = [...data.childAges];
                            newAges[idx] = e.target.value;
                            set('childAges', newAges);
                          }}
                          className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface py-1 focus:border-brand-accent focus:ring-0 focus:outline-none text-xs cursor-pointer"
                          style={{ colorScheme: 'dark' }}
                        >
                          <option value="" className="bg-ink text-brand-surface">Select age...</option>
                          <option value="Under 1 year" className="bg-ink text-brand-surface">Under 1 year</option>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(a => (
                            <option key={a} value={`${a} years`} className="bg-ink text-brand-surface">{a} years</option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                )}

                {/* 10. Facilities hotel category select pills */}
                <div className="sm:col-span-2">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-2">Facilities Required (Hotel Standard)</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['Budget', '3 Star', '4 Star', 'Luxury'].map((tier) => (
                      <label
                        key={tier}
                        className={`flex items-center justify-center border rounded-premium py-2 px-3 text-xs font-semibold cursor-pointer transition-all duration-200 ${
                          data.hotelTier === tier
                            ? 'bg-brand-accent text-brand-ink border-brand-accent shadow-sm'
                            : 'border-brand-surface-cool/20 hover:border-brand-accent/50 text-brand-surface-cool/80'
                        }`}
                      >
                        <input
                          type="radio"
                          name="hotelTier"
                          value={tier}
                          checked={data.hotelTier === tier}
                          onChange={(e) => set('hotelTier', e.target.value)}
                          className="sr-only"
                        />
                        {tier}
                      </label>
                    ))}
                  </div>
                </div>

                {/* 11. Special food request checkable pills */}
                <div className="sm:col-span-2">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-2">Special Food Request</span>
                  <div className="flex flex-wrap gap-2">
                    {['Veg', 'Jain', 'Non-Veg', 'Halal', 'Other'].map((food) => (
                      <label
                        key={food}
                        className={`flex items-center justify-center border rounded-full py-1.5 px-4 text-xs font-semibold cursor-pointer transition-all duration-200 ${
                          data.foodRequests.includes(food)
                            ? 'bg-brand-accent text-brand-ink border-brand-accent'
                            : 'border-brand-surface-cool/20 hover:border-brand-accent/40 text-brand-surface-cool/80'
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={food}
                          checked={data.foodRequests.includes(food)}
                          onChange={(e) => {
                            const current = data.foodRequests;
                            const updated = e.target.checked
                              ? [...current, food]
                              : current.filter(x => x !== food);
                            set('foodRequests', updated);
                          }}
                          className="sr-only"
                        />
                        {food}
                      </label>
                    ))}
                  </div>
                  {data.foodRequests.includes('Other') && (
                    <input
                      type="text"
                      placeholder="Specify other dietary requests..."
                      value={data.otherFoodRequest}
                      onChange={(e) => set('otherFoodRequest', e.target.value)}
                      className="mt-2 w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-1 focus:border-brand-accent focus:ring-0 focus:outline-none text-xs"
                    />
                  )}
                </div>

                {/* 12. Special requirements checkable pills */}
                <div className="sm:col-span-2">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-2">Special Requirements</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Senior Citizens',
                      'Celebrity / VIP',
                      'Veg',
                      'Jain',
                      'School Trip',
                      'College Trip',
                      'Other'
                    ].map((req) => (
                      <label
                        key={req}
                        className={`flex items-center justify-center border rounded-full py-1.5 px-4 text-xs font-semibold cursor-pointer transition-all duration-200 ${
                          data.specialReqs.includes(req)
                            ? 'bg-brand-accent text-brand-ink border-brand-accent'
                            : 'border-brand-surface-cool/20 hover:border-brand-accent/40 text-brand-surface-cool/80'
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={req}
                          checked={data.specialReqs.includes(req)}
                          onChange={(e) => {
                            const current = data.specialReqs;
                            const updated = e.target.checked
                              ? [...current, req]
                              : current.filter(x => x !== req);
                            set('specialReqs', updated);
                          }}
                          className="sr-only"
                        />
                        {req}
                      </label>
                    ))}
                  </div>
                  {data.specialReqs.includes('Other') && (
                    <input
                      type="text"
                      placeholder="Specify other requirements..."
                      value={data.otherRequirement}
                      onChange={(e) => set('otherRequirement', e.target.value)}
                      className="mt-2 w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-1 focus:border-brand-accent focus:ring-0 focus:outline-none text-xs"
                    />
                  )}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-button bg-brand-surface px-6 py-4 text-xs font-bold uppercase tracking-wider text-brand-ink transition-[background-color,box-shadow] hover:bg-white shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-50"
                >
                  {submitting ? 'Sending Request...' : 'Submit Inquiry & Request Quote'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
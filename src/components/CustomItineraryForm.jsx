import { useState, useEffect } from 'react';

const WHATSAPP_SPECIALIST =
  "https://wa.me/919388599000?text=Hi%20Blue%20Spice%2C%20I%20just%20submitted%20a%20custom%20itinerary%20request.";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function CustomItineraryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    adults: '2',
    children: '',
    rooms: '1',
    travelDates: '',
    duration: '',
    facilities: '',
    destinations: '',
    specialRequests: ''
  });

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
    if (!data.phone.trim()) e.phone = 'Contact number is required.';
    if (!EMAIL_RE.test(data.email)) e.email = 'Enter a valid email address.';
    if (!data.destinations.trim()) e.destinations = 'Please specify destinations required.';
    if (!data.travelDates.trim()) e.travelDates = 'Please specify preferred travel dates.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
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
                We will reach out to you at <span className="text-brand-surface font-semibold">{data.email}</span> or <span className="text-brand-surface font-semibold">{data.phone}</span> within <span className="text-brand-surface font-semibold">24 hours</span>.
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

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* 1. Name */}
                <div>
                  <label htmlFor="custom-name" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">Name *</label>
                  <input
                    id="custom-name" name="name" autoComplete="name"
                    type="text" required value={data.name} onChange={(e) => set('name', e.target.value)}
                    placeholder="e.g. Rajesh Kumar…"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow]"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                {/* 2. Contact number with country code */}
                <div>
                  <label htmlFor="custom-phone" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">Contact number (with Country Code) *</label>
                  <input
                    id="custom-phone" name="phone" autoComplete="tel" inputMode="tel"
                    type="tel" required value={data.phone} onChange={(e) => set('phone', e.target.value)}
                    placeholder="e.g. +91 98765 43210…"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow]"
                  />
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

                {/* 6. Travel dates */}
                <div>
                  <label htmlFor="custom-dates" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">Travel dates *</label>
                  <input
                    id="custom-dates" name="travelDates" autoComplete="off"
                    type="text" required value={data.travelDates} onChange={(e) => set('travelDates', e.target.value)}
                    placeholder="e.g. Mid Oct 2026, or Specific dates…"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow]"
                  />
                  {errors.travelDates && <p className="mt-1 text-xs text-red-400">{errors.travelDates}</p>}
                </div>

                {/* 7. Duration of tour */}
                <div>
                  <label htmlFor="custom-duration" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">Duration of tour</label>
                  <input
                    id="custom-duration" name="duration" autoComplete="off"
                    type="text" value={data.duration} onChange={(e) => set('duration', e.target.value)}
                    placeholder="e.g. 5 Nights / 6 Days…"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow]"
                  />
                </div>

                {/* 8. No of adults */}
                <div>
                  <label htmlFor="custom-adults" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">No of adults</label>
                  <input
                    id="custom-adults" name="adults" autoComplete="off"
                    type="number" min="1" value={data.adults} onChange={(e) => set('adults', e.target.value)}
                    placeholder="e.g. 2…"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow]"
                  />
                </div>

                {/* 9. No of children with age */}
                <div>
                  <label htmlFor="custom-children" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">No of children (with age)</label>
                  <input
                    id="custom-children" name="children" autoComplete="off"
                    type="text" value={data.children} onChange={(e) => set('children', e.target.value)}
                    placeholder="e.g. 1 child (age 8), or None…"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow]"
                  />
                </div>

                {/* 10. No of rooms */}
                <div>
                  <label htmlFor="custom-rooms" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">No of rooms</label>
                  <input
                    id="custom-rooms" name="rooms" autoComplete="off"
                    type="number" min="1" value={data.rooms} onChange={(e) => set('rooms', e.target.value)}
                    placeholder="e.g. 1…"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow]"
                  />
                </div>

                {/* 11. Facilities */}
                <div>
                  <label htmlFor="custom-facilities" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">Facilities required</label>
                  <input
                    id="custom-facilities" name="facilities" autoComplete="off"
                    type="text" value={data.facilities} onChange={(e) => set('facilities', e.target.value)}
                    placeholder="e.g. 5-Star Stays, Private Guide, AC Cab…"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-brand-surface-cool/30 rounded-none text-brand-surface placeholder:text-brand-surface-cool/30 py-2 focus:border-brand-accent focus:ring-0 focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow]"
                  />
                </div>

                {/* 12. Any special request regarding food or any other request */}
                <div className="sm:col-span-2">
                  <label htmlFor="custom-requests" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-surface-cool/60 mb-1">Special requests (food, accessibility, etc.)</label>
                  <textarea
                    id="custom-requests" name="specialRequests" autoComplete="off"
                    rows="3" value={data.specialRequests} onChange={(e) => set('specialRequests', e.target.value)}
                    placeholder="e.g. Vegetarian food only, wheelchair access, high floor rooms, etc.…"
                    className="w-full bg-transparent border border-brand-surface-cool/20 rounded-xl text-brand-surface placeholder:text-brand-surface-cool/30 p-4 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus-visible:ring-1 focus-visible:ring-brand-accent focus:outline-none text-sm transition-[border-color,box-shadow] resize-none"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full rounded-button bg-brand-surface px-6 py-4 text-xs font-bold uppercase tracking-wider text-brand-ink transition-[background-color,box-shadow] hover:bg-white shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  Submit Inquiry & Request Quote
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
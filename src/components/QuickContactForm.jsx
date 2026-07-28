import { useState } from 'react';
import { Link } from 'react-router-dom';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function QuickContactForm() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.name.trim() || !data.phone.trim() || !EMAIL_RE.test(data.email) || !data.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "4a1b9f71-877f-47ce-9627-e818691a2b11",
          subject: "Book Your Tour Inquiry - Blue Spice Holidays",
          from_name: "Blue Spice Holidays Website",
          replyto: data.email,
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errData = await response.json();
        setErrorMsg(errData.message || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please check your internet connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="custom" className="bg-brand-ink text-brand-surface py-20 lg:py-24 scroll-mt-24 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-5 max-w-xl">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widemono text-brand-accent mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              QUICK RESERVATION
            </span>
            <h2 className="serif-font text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-brand-surface">
              Book Your <span className="accent-serif text-brand-accent">Tour</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-surface-cool/80 leading-relaxed font-light">
              Reserve your ideal trip early for a hassle-free trip; secure comfort and convenience!
            </p>

            <div className="mt-8 space-y-3.5 border-l-2 border-brand-accent/60 pl-4 text-xs sm:text-sm text-brand-surface-cool/75">
              <div className="flex items-center gap-2">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Fast response within 1 working day</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Direct consultation with senior travel specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Best rates & custom package recommendations</span>
              </div>
            </div>

            {/* Standout CTA Button to Full Custom Itinerary Page */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-brand-surface-cool/70 mb-3 font-medium">Looking for granular multi-destination or bespoke group trip planning?</p>
              <Link
                to="/custom-itinerary"
                className="group relative inline-flex items-center justify-between w-full sm:w-auto gap-4 px-6 py-4 rounded-xl bg-gradient-to-r from-brand-accent via-amber-400 to-amber-300 text-brand-ink font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-amber-200/50"
                data-umami-event="Homepage Launch Full Planner Click"
              >
                <span className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-brand-ink animate-ping" />
                  Launch Detailed Custom Itinerary Planner
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-ink/10 group-hover:bg-brand-ink group-hover:text-white transition-all shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="rounded-premium border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 shadow-2xl" aria-live="polite">
              {submitted ? (
                <div className="py-8 flex flex-col items-start justify-center text-left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent/20 text-brand-accent border border-brand-accent/30 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </div>
                  <h3 className="serif-font text-2xl font-bold text-brand-surface">Inquiry Received, {data.name.split(' ')[0]}!</h3>
                  <p className="mt-2 text-sm text-brand-surface-cool/80 leading-relaxed">
                    Thank you for booking with us. Our team will reach out to you at <span className="text-brand-accent font-semibold">{data.phone}</span> or <span className="text-brand-accent font-semibold">{data.email}</span> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="mt-6 text-xs font-semibold uppercase tracking-wider text-brand-accent hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-white/10 pb-3 mb-2">
                    <h3 className="text-lg font-semibold text-brand-surface">Book Your Tour</h3>
                    <p className="text-xs text-brand-surface-cool/60 mt-0.5">Reserve your ideal trip early for a hassle-free trip; secure comfort and convenience!</p>
                  </div>

                  {errorMsg && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-300 text-xs rounded-lg p-3">
                      {errorMsg}
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label htmlFor="quick-name" className="block text-[11px] font-semibold uppercase tracking-wider text-brand-surface-cool/80 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="quick-name"
                      name="name"
                      type="text"
                      required
                      value={data.name}
                      onChange={(e) => set('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-brand-surface placeholder:text-brand-surface-cool/40 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div>
                      <label htmlFor="quick-email" className="block text-[11px] font-semibold uppercase tracking-wider text-brand-surface-cool/80 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="quick-email"
                        name="email"
                        type="email"
                        required
                        spellCheck={false}
                        value={data.email}
                        onChange={(e) => set('email', e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-brand-surface placeholder:text-brand-surface-cool/40 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="quick-phone" className="block text-[11px] font-semibold uppercase tracking-wider text-brand-surface-cool/80 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="quick-phone"
                        name="phone"
                        type="tel"
                        required
                        value={data.phone}
                        onChange={(e) => set('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-brand-surface placeholder:text-brand-surface-cool/40 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Write Your Message */}
                  <div>
                    <label htmlFor="quick-message" className="block text-[11px] font-semibold uppercase tracking-wider text-brand-surface-cool/80 mb-1.5">
                      Write Your Message *
                    </label>
                    <textarea
                      id="quick-message"
                      name="message"
                      required
                      rows="3"
                      value={data.message}
                      onChange={(e) => set('message', e.target.value)}
                      placeholder="Write your query"
                      className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-brand-surface placeholder:text-brand-surface-cool/40 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-premium bg-brand-accent text-brand-ink px-6 py-4 text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-50"
                      data-umami-event="Submit Homepage Quick Contact"
                    >
                      {submitting ? 'Submitting…' : 'Submit Now'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

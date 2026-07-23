import { useEffect, useState } from 'react';

export default function CollaboratePage() {
  const [data, setData] = useState({ name: '', company: '', email: '', phone: '', category: 'Travel Agent', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    document.title = "Collaborate With Us · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Partner with Blue Spice Holidays as a travel agent, hotel, vendor, or ground operator.");
    }
  }, []);

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.name.trim() || !data.email.trim()) return;
    setSubmitting(true);
    setErrorMsg('');
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "4a1b9f71-877f-47ce-9627-e818691a2b11",
          subject: "New Collaboration Inquiry",
          from_name: "Blue Spice Holidays Website",
          replyto: data.email,
          name: data.name,
          company: data.company || 'N/A',
          email: data.email,
          phone: data.phone || 'N/A',
          category: data.category,
          message: data.message || 'N/A',
        })
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg('Failed to submit. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      <section className="relative bg-brand-ink text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            Partnerships
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Collaborate <span className="accent-serif text-brand-accent">With Blue Spice</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Travel agents, hotels, DMCs, and ground vendors — tell us about your business and how you'd like to work together.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-2xl mx-auto px-6 lg:px-8">
        <div className="rounded-premium border border-brand-surface-cool bg-white p-6 sm:p-8 shadow-soft" aria-live="polite">
          {submitted ? (
            <div className="flex flex-col items-start justify-center py-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-premium bg-brand-accent/10 text-brand-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <h3 className="serif-font mt-5 text-xl font-semibold text-brand-ink">Thank you, {data.name.split(' ')[0]}.</h3>
              <p className="mt-2 text-sm text-brand-muted">Our team will review your details and reach out to discuss next steps.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-lg font-display font-medium text-brand-ink border-b border-brand-surface-cool pb-4">Partnership Details</h3>
              {errorMsg && <div className="bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg p-4">{errorMsg}</div>}
              <div>
                <label htmlFor="collab-category" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-muted mb-1">I am a *</label>
                <select id="collab-category" name="category" value={data.category} onChange={(e) => set('category', e.target.value)}
                  className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 cursor-pointer">
                  <option>Travel Agent</option>
                  <option>Hotel / Resort</option>
                  <option>Destination Management Company</option>
                  <option>Transport / Ground Vendor</option>
                  <option>Influencer / Content Creator</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="collab-name" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-muted mb-1">Name *</label>
                  <input id="collab-name" name="name" required autoComplete="name" type="text" value={data.name} onChange={(e) => set('name', e.target.value)}
                    className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2" />
                </div>
                <div>
                  <label htmlFor="collab-company" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-muted mb-1">Company / Brand</label>
                  <input id="collab-company" name="company" autoComplete="organization" type="text" value={data.company} onChange={(e) => set('company', e.target.value)}
                    className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="collab-email" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-muted mb-1">Email *</label>
                  <input id="collab-email" name="email" required autoComplete="email" type="email" value={data.email} onChange={(e) => set('email', e.target.value)}
                    className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2" />
                </div>
                <div>
                  <label htmlFor="collab-phone" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-muted mb-1">Phone</label>
                  <input id="collab-phone" name="phone" autoComplete="tel" type="tel" value={data.phone} onChange={(e) => set('phone', e.target.value)}
                    className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2" />
                </div>
              </div>
              <div>
                <label htmlFor="collab-message" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-muted mb-1">Tell us about your business</label>
                <textarea id="collab-message" name="message" rows="4" value={data.message} onChange={(e) => set('message', e.target.value)}
                  className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 resize-none" />
              </div>
              <button type="submit" disabled={submitting}
                className="w-full bg-brand-ink text-white font-bold uppercase tracking-wider text-xs py-4 rounded-premium hover:bg-brand-accent hover:text-brand-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50"
                data-umami-event="Submit Collaborate Form">
                {submitting ? 'Sending…' : 'Submit Partnership Inquiry'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

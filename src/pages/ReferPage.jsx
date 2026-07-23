import { useEffect, useState } from 'react';

export default function ReferPage() {
  const [data, setData] = useState({ referrerName: '', referrerContact: '', friendName: '', friendContact: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    document.title = "Refer Us · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Refer a friend or family member to Blue Spice Holidays.");
    }
  }, []);

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.referrerName.trim() || !data.referrerContact.trim() || !data.friendName.trim() || !data.friendContact.trim()) return;
    setSubmitting(true);
    setErrorMsg('');
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "4a1b9f71-877f-47ce-9627-e818691a2b11",
          subject: "New Referral Submitted",
          from_name: "Blue Spice Holidays Website",
          referrerName: data.referrerName,
          referrerContact: data.referrerContact,
          friendName: data.friendName,
          friendContact: data.friendContact,
          notes: data.notes || 'None',
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
            Refer & Share
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Know Someone Planning a <span className="accent-serif text-brand-accent">Trip?</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Refer a friend or family member and our team will personally reach out to help plan their journey.
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
              <h3 className="serif-font mt-5 text-xl font-semibold text-brand-ink">Thank you, {data.referrerName.split(' ')[0]}.</h3>
              <p className="mt-2 text-sm text-brand-muted">We'll reach out to {data.friendName.split(' ')[0]} shortly to help plan their trip.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-lg font-display font-medium text-brand-ink border-b border-brand-surface-cool pb-4">Referral Details</h3>
              {errorMsg && <div className="bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg p-4">{errorMsg}</div>}

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent block mb-3">Your Details</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="refer-your-name" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-muted mb-1">Your Name *</label>
                    <input id="refer-your-name" name="referrerName" required autoComplete="name" type="text" value={data.referrerName} onChange={(e) => set('referrerName', e.target.value)}
                      className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2" />
                  </div>
                  <div>
                    <label htmlFor="refer-your-contact" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-muted mb-1">Your Phone / Email *</label>
                    <input id="refer-your-contact" name="referrerContact" required type="text" value={data.referrerContact} onChange={(e) => set('referrerContact', e.target.value)}
                      className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2" />
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent block mb-3">Their Details</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="refer-friend-name" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-muted mb-1">Friend's Name *</label>
                    <input id="refer-friend-name" name="friendName" required type="text" value={data.friendName} onChange={(e) => set('friendName', e.target.value)}
                      className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2" />
                  </div>
                  <div>
                    <label htmlFor="refer-friend-contact" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-muted mb-1">Friend's Phone / Email *</label>
                    <input id="refer-friend-contact" name="friendContact" required type="text" value={data.friendContact} onChange={(e) => set('friendContact', e.target.value)}
                      className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="refer-notes" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-muted mb-1">Anything we should know?</label>
                <textarea id="refer-notes" name="notes" rows="3" value={data.notes} onChange={(e) => set('notes', e.target.value)}
                  className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 resize-none" />
              </div>

              <button type="submit" disabled={submitting}
                className="w-full bg-brand-ink text-white font-bold uppercase tracking-wider text-xs py-4 rounded-premium hover:bg-brand-accent hover:text-brand-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50"
                data-umami-event="Submit Refer Form">
                {submitting ? 'Sending…' : 'Send Referral'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

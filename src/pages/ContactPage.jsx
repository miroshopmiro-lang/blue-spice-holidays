import { useEffect, useState } from 'react';

const WHATSAPP_URL =
  "https://wa.me/919388599000?text=Hi%20Blue%20Spice%2C%20I%20have%20a%20question%20about...";

export default function ContactPage() {
  const [data, setData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    document.title = "Contact Us · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Get in touch with Blue Spice Holidays by phone, WhatsApp, or our contact form.");
    }
  }, []);

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) return;
    setSubmitting(true);
    setErrorMsg('');
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "4a1b9f71-877f-47ce-9627-e818691a2b11",
          subject: "New Contact Form Message",
          from_name: "Blue Spice Holidays Website",
          replyto: data.email,
          name: data.name,
          email: data.email,
          phone: data.phone || 'N/A',
          message: data.message,
        })
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg('Failed to send message. Please try again or reach us on WhatsApp.');
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
            Get In Touch
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Talk to a <span className="accent-serif text-brand-accent">Travel Specialist</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Reach us by phone, WhatsApp, or send a message below and we'll get back to you within one working day.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Direct contact details */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">Direct Lines</span>
            <h2 className="serif-font text-2xl sm:text-3xl font-bold text-brand-ink mt-2 mb-8">Reach Us Directly</h2>

            <div className="space-y-4">
              <a
                href="tel:+919388599000"
                className="flex items-center gap-4 p-5 rounded-premium border border-brand-surface-cool bg-white hover:border-brand-ink transition-colors"
                data-umami-event="Phone Contact Page Click"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                </span>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-brand-muted">Call Us</p>
                  <p className="text-sm font-semibold text-brand-ink mt-0.5">+91 93885 99000</p>
                </div>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-premium border border-brand-surface-cool bg-white hover:border-brand-ink transition-colors"
                data-umami-event="WhatsApp Contact Page Click"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Z" /></svg>
                </span>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-brand-muted">WhatsApp</p>
                  <p className="text-sm font-semibold text-brand-ink mt-0.5">Chat with a specialist</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-premium border border-brand-surface-cool bg-white">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </span>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-brand-muted">Follow Us</p>
                  <div className="flex gap-3 mt-1">
                    <a href="https://www.instagram.com/bluespiceholidays/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-ink hover:text-brand-accent">Instagram</a>
                    <a href="https://www.facebook.com/bluespiceholidayz/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-ink hover:text-brand-accent">Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message form */}
          <div className="rounded-premium border border-brand-surface-cool bg-white p-6 sm:p-8 shadow-soft" aria-live="polite">
            {submitted ? (
              <div className="flex flex-col items-start justify-center py-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-premium bg-brand-accent/10 text-brand-accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <h3 className="serif-font mt-5 text-xl font-semibold text-brand-ink">Message received, {data.name.split(' ')[0]}.</h3>
                <p className="mt-2 text-sm text-brand-muted">We'll get back to you within one working day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-display font-medium text-brand-ink border-b border-brand-surface-cool pb-4">Send Us a Message</h3>
                {errorMsg && <div className="bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg p-4">{errorMsg}</div>}
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-muted mb-1">Name *</label>
                  <input id="contact-name" name="name" required autoComplete="name" type="text" value={data.name} onChange={(e) => set('name', e.target.value)}
                    className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-muted mb-1">Email *</label>
                    <input id="contact-email" name="email" required autoComplete="email" type="email" value={data.email} onChange={(e) => set('email', e.target.value)}
                      className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2" />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-muted mb-1">Phone</label>
                    <input id="contact-phone" name="phone" autoComplete="tel" type="tel" value={data.phone} onChange={(e) => set('phone', e.target.value)}
                      className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-[10px] font-semibold uppercase tracking-wider text-brand-muted mb-1">Message *</label>
                  <textarea id="contact-message" name="message" required rows="4" value={data.message} onChange={(e) => set('message', e.target.value)}
                    className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 resize-none" />
                </div>
                <button type="submit" disabled={submitting}
                  className="w-full bg-brand-ink text-white font-bold uppercase tracking-wider text-xs py-4 rounded-premium hover:bg-brand-accent hover:text-brand-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50"
                  data-umami-event="Submit Contact Form">
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

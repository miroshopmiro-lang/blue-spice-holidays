import { Link } from 'react-router-dom';

export default function TermsOfUse() {

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      <section className="relative bg-brand-ink text-white py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-bold">Terms of Use</h1>
          <p className="mt-3 text-sm text-white/60 font-mono uppercase tracking-wider">Last updated 22 August 2026</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-sm sm:prose-base space-y-6 text-brand-ink/80">
          <div>
            <h2 className="font-display text-xl font-bold text-brand-ink">Using this website</h2>
            <p>This website describes Blue Spice Holidays' packages and services and lets you request quotes, itineraries and forex. Package prices, itineraries and inclusions shown on this site are indicative and subject to confirmation, availability and currency fluctuation at the time of booking.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-ink">Enquiries and bookings</h2>
            <p>Submitting a form on this site is a request for a callback or quote, not a confirmed booking. A booking is confirmed only once we issue a written itinerary or invoice and receive the agreed payment.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-ink">Cancellations and changes</h2>
            <p>Cancellation and refund terms depend on the hotels, airlines and suppliers involved in your specific booking and will be shared with you at the time of confirmation.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-ink">Forex</h2>
            <p>Forex rates and amounts shown on this site are indicative. The rate applied is the one confirmed at the time your forex order is processed.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-ink">Privacy</h2>
            <p>See our <Link to="/privacy-policy" className="text-gold underline">Privacy Policy</Link> for how we handle information you share through this site.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-ink">Contact</h2>
            <p>Questions about these terms: reach us through the <Link to="/contact" className="text-gold underline">Contact page</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

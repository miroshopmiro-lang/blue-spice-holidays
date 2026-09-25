import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      <section className="relative bg-brand-ink text-white py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-3 text-sm text-white/60 font-mono uppercase tracking-wider">Last updated 22 August 2026</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-sm sm:prose-base space-y-6 text-brand-ink/80">
          <div>
            <h2 className="font-display text-xl font-bold text-brand-ink">Who we are</h2>
            <p>This policy covers bluespiceholidays.com, run by Blue Spice Holidays, headquartered in Kochi, Kerala. For any privacy question, use the <Link to="/contact" className="text-gold underline">Contact page</Link> or WhatsApp us.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-ink">What we collect</h2>
            <p>We only collect what you type into a form on this site — the contact form, custom itinerary request, newsletter signup, forex request, refer-a-friend form, or partner/collaborate enquiry. Depending on the form, this can include your name, email, phone, travel dates, destination preferences, forex amount and currency, or a referred friend's name and contact details.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-ink">Refer-a-friend</h2>
            <p>If you use the refer-a-friend form, please only share your friend's name and contact number with their knowledge — we'll use it solely to reach out about the referral, on your behalf.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-ink">Why we collect it</h2>
            <p>Solely to respond to your enquiry, prepare a quote or itinerary, process a forex request, or send the occasional newsletter you signed up for. We do not use it for anything else and we do not sell or rent it.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-ink">Who else sees it</h2>
            <p>Form submissions are delivered to us through Web3Forms, a third-party form-processing service, and land directly in our inbox. This site uses Umami and Cloudflare Insights for cookieless, anonymous visit analytics — they do not set tracking cookies or identify you personally. The site also embeds Google Fonts and, where you use it, Google Translate; loading these may share your IP address with Google in the ordinary way any web request does.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-ink">Visa, passport and travel documents</h2>
            <p>This website does not accept file uploads. Passports, visa documents, ID proofs or itineraries are exchanged with us over WhatsApp or email, never through a form on this site.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-ink">How long we keep it</h2>
            <p>Enquiry and booking correspondence is kept as long as needed to handle your travel plans and for our own record-keeping. You can ask us to delete your details at any time.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-ink">Your rights</h2>
            <p>Under India's Digital Personal Data Protection Act, 2023, you can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Reach us through the <Link to="/contact" className="text-gold underline">Contact page</Link> and we'll action it.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-brand-ink">Changes to this policy</h2>
            <p>If this policy changes, the updated date at the top of this page will change too.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path fill="#4285F4" d="M21.6 12.2c0-.6-.05-1.2-.16-1.8H12v3.4h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.1Z" />
      <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 .9-3.4.9-2.6 0-4.8-1.7-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3.1a10 10 0 0 0 0 9l3.3-2.6Z" />
      <path fill="#EA4335" d="M12 6.4c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.5l3.3 2.6C7.2 8.1 9.4 6.4 12 6.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#E1306C]">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#1877F2]">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#FF0000]">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  );
}

export default function TrustCrown() {
  return (
    <section className="bg-canvas border-b border-hairline py-6 px-6 relative z-30">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Rating and Description */}
        <div className="flex items-center gap-3.5 text-center md:text-left flex-col md:flex-row">
          <div>
            <h4 className="font-display text-sm font-bold text-ink flex items-center gap-2 justify-center md:justify-start">
              Verified 5.0/5 Star Rating
              <span className="text-[10px] bg-gold/20 text-gold-hover border border-gold/30 px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">Google</span>
            </h4>
            {/* 5 star icons */}
            <div className="flex items-center gap-0.5 mt-1 justify-center md:justify-start">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623" aria-hidden="true" className="shrink-0">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Perfect 5.0 rating based on 221 verified Google reviews. Impeccable planning and direct ground support since 2009.
            </p>
          </div>
        </div>

        {/* Social and Review Channels */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          <a
            href={"https://www.google.com/search?sca_esv=114ce2f88324942a&sxsrf=APpeQnujINCtYzMYPv8JMNsZfHcOhPBZGg:1784038999878&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_zJWgd_KpwnrTyZ-R6yxZrdpUPjklSqmlxoDzx1cTnswZE6-9UUHVsDU8d3T1i9dQbDNr0GmNLX48wGTipLjV_qwL6urcTrLtMIiGHN76KSrI_lacw%3D%3D&q=Blue+Spice+Holidays+Reviews&sa=X&ved=2ahUKEwjNnumWr9KVAxUVkq8BHcCPCakQ0bkNegQIMxAF"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-slate-300 rounded-full shadow-sm hover:shadow transition-all duration-300 hover:scale-[1.03] active:scale-98 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            title="View our Google reviews"
          >
            <GoogleIcon />
            <span>Google Reviews</span>
          </a>
          
          <span className="hidden sm:inline h-6 w-px bg-slate-200" />

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/bluespiceholidays/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 inline-flex items-center justify-center rounded-full bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-[#E1306C]/30 shadow-sm hover:shadow hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              title="Follow us on Instagram"
            >
              <InstagramIcon />
            </a>
            
            <a
              href="https://www.facebook.com/bluespiceholidayz/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 inline-flex items-center justify-center rounded-full bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-[#1877F2]/30 shadow-sm hover:shadow hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              title="Follow us on Facebook"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.youtube.com/@bluespicetours"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 inline-flex items-center justify-center rounded-full bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-[#FF0000]/30 shadow-sm hover:shadow hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              title="Subscribe to our YouTube Channel"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

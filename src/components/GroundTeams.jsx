import { GROUND_TEAMS } from '../data/travelData';

// Helper to generate a luxury initials avatar badge
function InitialsAvatar({ name }) {
  const cleanName = name
    .replace(/^(Mr|Ms|Mrs|Dr|Team)\.?\s+/i, '') // strip title prefixes
    .replace(/\s+and\s+team/i, ''); // strip "and team" suffix
  
  const initials = cleanName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 border border-gold text-gold font-display font-semibold text-sm shadow-inner relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-white/10" aria-hidden="true" />
      <span className="relative z-10 tracking-wider">{initials || 'BS'}</span>
    </div>
  );
}

export default function GroundTeams({ filterScope }) {
  // Filter teams based on scope if filterScope is provided
  const visibleTeams = filterScope
    ? GROUND_TEAMS.filter((t) => t.scope === filterScope)
    : GROUND_TEAMS;

  if (visibleTeams.length === 0) return null;

  return (
    <section id="operations" className="bg-canvas py-20 border-b border-hairline grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-widemono text-royal">DIRECT SUPPORT NETWORK</span>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl mt-2">
            Our On-Ground Support
          </h2>
          <p className="mt-3 text-sm md:text-base text-body leading-relaxed">
            From private harbor clearances to VIP entry bookings, our localized operations managers and directors oversee every logistical layer in real-time.
          </p>
        </div>

        {/* Teams Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {visibleTeams.map((member) => (
            <div
              key={member.id}
              className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-hairline bg-white shadow-soft card-interactive transition-all duration-300 items-start"
            >
              <InitialsAvatar name={member.name} />

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hairline pb-2.5">
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink leading-tight">{member.name}</h3>
                    <p className="text-xs font-semibold text-royal/80 mt-0.5">{member.role}</p>
                  </div>
                  <span className="bg-canvas border border-hairline text-mute font-bold text-[8px] uppercase tracking-widest px-2.5 py-1 rounded-full">
                    {member.location}
                  </span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-body">
                  {member.description}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-semibold text-gold tracking-wide">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  24/7 Verified Support Line Active
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

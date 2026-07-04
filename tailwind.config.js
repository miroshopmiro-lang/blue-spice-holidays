/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        navy: '#0B2D6B',
        royal: '#2A7DE1',
        gold: '#D4AF37',
        base: '#FFFFFF',
        canvas: '#F8FAFC',
        tint: '#EEF5FF',
        ink: '#0F172A',
        body: '#475569',
        mute: '#94A3B8',
        hairline: 'rgba(15,23,42,0.08)',
        brand: {
          surface: '#FFFFFF',
          'surface-cool': '#EEF5FF',
          ink: '#0B2D6B',
          muted: '#475569',
          accent: '#D4AF37',
          'accent-hover': '#C09F2D',
          blue: '#2A7DE1',
          'blue-light': '#EEF5FF',
        }
      },
      borderRadius: {
        premium: '4px',
        button: '2px',
      },
      letterSpacing: {
        tightest: '-0.04em',
        widemono: '0.18em',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        soft: '0px 1px 1px rgba(15,23,42,0.02), 0px 2px 8px rgba(15,23,42,0.04), 0 0 0 1px rgba(15,23,42,0.06)',
        float: '0px 2px 4px rgba(15,23,42,0.04), 0px 18px 40px -12px rgba(11,45,107,0.18), 0 0 0 1px rgba(15,23,42,0.06)',
        gold: '0 10px 30px -8px rgba(212,175,55,0.45)',
      },
      backgroundImage: {
        'mesh-luxury':
          'radial-gradient(60% 80% at 15% 10%, rgba(42,125,225,0.28) 0%, transparent 60%), radial-gradient(50% 70% at 90% 0%, rgba(212,175,55,0.22) 0%, transparent 55%), radial-gradient(70% 90% at 80% 90%, rgba(11,45,107,0.30) 0%, transparent 60%)',
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-2%,0) scale(1.04)' },
        },
        marquee: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-100%,0,0)' },
        },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}

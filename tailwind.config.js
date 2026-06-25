/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        script: ['Pacifico', 'cursive'],
      },
      colors: {
        ink: '#0B1F3A',
        'ink-soft': '#5C6B73',
        surface: '#FAF9F6',
        'surface-cool': '#E4DCCF',
        night: '#0B1F3A',
        'blue-light': '#4EA8DE',
        'blue-primary': '#0077BE',
        sunset: '#C5A059',
        navy: '#0B1F3A',
        ocean: '#0077BE',
        sand: '#E4DCCF',
        gold: '#C5A059',
        'off-white': '#FAF9F6',
      },
      borderRadius: {
        card: '28px',
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease forwards',
      },
    },
  },
  plugins: [],
}

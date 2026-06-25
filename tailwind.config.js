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
        ink: '#1A1A1A',
        'ink-soft': '#484848',
        surface: '#F9F9F9',
        'surface-cool': '#E4EAF0',
        night: '#121212',
        'blue-light': '#66B5E8',
        'blue-primary': '#1E88E5',
        sunset: '#FF7A00',
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

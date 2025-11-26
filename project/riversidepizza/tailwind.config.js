/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Great Vibes', 'cursive'],
      },
      fontWeight: {
        normal: '300',
      },
      colors: {
        'italian-red': '#B91C1C',
        'warm-white': '#FEFEFE',
        'olive-green': '#4B5563',
        'terracotta': '#D97706',
        'italian-gold': '#F59E0B',
        'soft-gray': '#9CA3AF',
      },
    },
  },
  plugins: [],
};

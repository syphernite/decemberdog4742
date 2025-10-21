import url from 'url';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        amber: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
      },
      boxShadow: {
        'amber-glow': '0 0 20px rgba(245, 158, 11, 0.4)',
        'metallic': '0 10px 30px rgba(212, 175, 55, 0.2)',
      },
      backgroundImage: {
        'metallic-gold-pattern': "url('/assets/metallic-gold-pattern.png')",
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};
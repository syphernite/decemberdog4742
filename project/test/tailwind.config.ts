import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f7f3f0',
          100: '#ede4d3',
          200: '#dbc4a2',
          300: '#c9a576',
          400: '#b8885a',
          500: '#a67c52',
          600: '#8b5a3c',
          700: '#6f4e37',
          800: '#5d4037',
          900: '#3e2723',
        },
        cream: {
          50: '#fdfcfb',
          100: '#faf6f0',
          200: '#f5f0e8',
          300: '#f0e6d6',
          400: '#e8d5b7',
          500: '#dfc49a',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3f2e6',
          200: '#c6e6cc',
          300: '#98d8a8',
          400: '#66c17b',
          500: '#4ade80',
          600: '#22c55e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
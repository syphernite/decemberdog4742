/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0d1117',
        slate: {
          850: '#111827',
        },
        amber: {
          500: '#f59e0b',
        },
        red: {
          500: '#ef4444',
        },
        gray: {
          400: '#9ca3af',
          700: '#1f2937',
        }
      },
      animation: {
        'glow': 'glow 0.2s ease-in-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 0 0 rgba(245, 158, 11, 0)' },
          '100%': { boxShadow: '0 0 0 4px rgba(245, 158, 11, 0.3)' },
        }
      }
    },
  },
  plugins: [],
};

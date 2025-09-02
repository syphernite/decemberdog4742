/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chili: '#E53935',
        marigold: '#FFC107',
        nopal: '#2E7D32',
        cobalt: '#1E40AF',
        papel: '#FFF8F0',
        charcoal: '#111827',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'drift': 'drift 8s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(5px) translateY(-5px)' },
          '50%': { transform: 'translateX(-3px) translateY(-8px)' },
          '75%': { transform: 'translateX(8px) translateY(-3px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
};
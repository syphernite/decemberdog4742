/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          primary: '#C71418',
          dark: '#A01014',
        },
        black: {
          deep: '#0B0B0B',
        },
        silver: {
          accent: '#B8BCC2',
        }
      },
      fontFamily: {
        'display': ['Bebas Neue', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'rumble': 'rumble 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'slide-in': 'slide-in 0.8s ease-out',
        'wipe-reveal': 'wipe-reveal 0.6s ease-out',
      },
      keyframes: {
        rumble: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(1px) translateY(0.5px)' },
          '50%': { transform: 'translateX(-1px) translateY(0px)' },
          '75%': { transform: 'translateX(0.5px) translateY(-0.5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        'wipe-reveal': {
          '0%': { clipPath: 'inset(0 0 100% 0)' },
          '100%': { clipPath: 'inset(0 0 0% 0)' },
        },
      },
    },
  },
  plugins: [],
};
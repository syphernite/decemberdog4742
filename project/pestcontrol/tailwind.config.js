/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'strike-black': '#000000',
        'strike-red': '#B20000',
        'strike-gray': '#6B7280',
        'strike-steel': '#374151',
      },
      fontFamily: {
        'headline': ['Oswald', 'Arial Black', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'flash': 'flash 2s infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'zoom-in': 'zoom-in 0.3s ease-out',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        flash: {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0.3' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(178, 0, 0, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(178, 0, 0, 1)' },
        },
      },
    },
  },
  plugins: [],
};
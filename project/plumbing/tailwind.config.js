/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out forwards',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite', // slowed a bit for smoothness
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%': {
            boxShadow:
              '0 0 4px rgba(59,130,246,0.3), 0 0 8px rgba(59,130,246,0.2)',
          },
          '40%': {
            boxShadow:
              '0 0 8px rgba(59,130,246,0.45), 0 0 12px rgba(59,130,246,0.35)',
          },
          '60%': {
            boxShadow:
              '0 0 8px rgba(59,130,246,0.45), 0 0 12px rgba(59,130,246,0.35)',
          },
          '100%': {
            boxShadow:
              '0 0 4px rgba(59,130,246,0.3), 0 0 8px rgba(59,130,246,0.2)',
          },
        },
      },
    },
  },
  plugins: [],
};

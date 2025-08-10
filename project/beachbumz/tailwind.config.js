/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ocean-blue': '#0A1D3A',
        'jet-black': '#000000',
        'turquoise': '#40E0D0',
        'sunset-orange': '#FF7F50',
        'sandy-beige': '#F5DEB3',
        'coral-pink': '#F88379',
      },
      fontFamily: {
        'display': ['Bebas Neue', 'cursive'],
        'body': ['Poppins', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 6s linear infinite',
        'ripple': 'ripple 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'float-up': 'floatUp 8s infinite linear',
        'fly-across': 'flyAcross 15s infinite linear',
        'palm-sway': 'palmSway 4s ease-in-out infinite',
        'drift': 'drift 12s infinite linear',
        'wave-shimmer': 'waveShimmer 3s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'wave-move': 'waveMove 10s ease-in-out infinite',
        'sparkle': 'sparkle 4s ease-in-out infinite',
        'coconut-bounce': 'coconutBounce 3s ease-in-out infinite',
        'starfish-spin': 'starfishSpin 8s linear infinite',
        'slide-in-left': 'slideInLeft 0.8s ease forwards',
        'slide-in-right': 'slideInRight 0.8s ease forwards',
        'zoom-in': 'zoomIn 0.6s ease forwards',
        'shimmer': 'shimmer 0.8s ease-in-out',
      },
    },
  },
  plugins: [],
};
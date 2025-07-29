/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out',
        fadeInDown: 'fadeInDown 0.8s ease-out',
        fadeInLeft: 'fadeInLeft 0.8s ease-out',
        fadeInRight: 'fadeInRight 0.8s ease-out',
        bounceSlow: 'bounce 2s infinite',
        pulseSlow: 'pulse 3s infinite',
        float: 'float 6s ease-in-out infinite',
        slideGlow: 'slideGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        slideGlow: {
          '0%': {
            transform: 'translateY(0)',
            opacity: '0.8',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'translateY(-5px)',
            opacity: '1',
            filter: 'brightness(1.25)',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '0.8',
            filter: 'brightness(1)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

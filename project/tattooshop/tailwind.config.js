/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0a0a0b',
          800: '#111113',
          700: '#1a1b1e',
        },
        stone: {
          700: '#2a2b2e',
          500: '#5a5c61',
          400: '#6b6e73',
        },
        bone: {
          100: '#e8e9eb',
          50: '#f4f5f6',
        },
        blood: {
          600: '#7a0f16',
          700: '#5d0c12',
        }
      },
      fontFamily: {
        'display': ['system-ui', 'sans-serif'],
        'body': ['system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'small': '10px',
        'medium': '16px',
        'large': '24px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};
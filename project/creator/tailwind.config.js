/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        onyx: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#d9d9d9',
          300: '#bfbfbf',
          400: '#8c8c8c',
          500: '#595959',
          600: '#404040',
          700: '#262626',
          800: '#1a1a1a',
          900: '#0f0f0f',
          950: '#070707'
        },
        neon: {
          violet: '#8b5cf6',
          cyan: '#06b6d4',
          magenta: '#ec4899',
          'violet-light': '#a78bfa',
          'cyan-light': '#22d3ee',
          'magenta-light': '#f472b6'
        }
      },
      fontFamily: {
        'display': ['Bebas Neue', 'Arial Black', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgb(139, 92, 246), 0 0 10px rgb(139, 92, 246), 0 0 15px rgb(139, 92, 246)' },
          '100%': { boxShadow: '0 0 10px rgb(139, 92, 246), 0 0 20px rgb(139, 92, 246), 0 0 30px rgb(139, 92, 246)' }
        }
      },
      backdropBlur: {
        xs: '2px'
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(139, 92, 246, 0.1)',
        'glass-hover': '0 12px 40px 0 rgba(139, 92, 246, 0.2)',
        'neon': '0 0 20px rgba(139, 92, 246, 0.5)',
        'neon-strong': '0 0 30px rgba(139, 92, 246, 0.8)'
      }
    },
  },
  plugins: [],
};
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f7c948',
          DEFAULT: '#f0b429',
          dark: '#e09b04',
        },
        secondary: {
          light: '#ffedc2',
          DEFAULT: '#fbd38d',
          dark: '#e6a23c',
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chili: '#C62828',
        cactus: '#2E7D32',
        gold: '#FFC107',
        crema: '#FFF8E1',
        charcoal: '#111827',
      },
      fontFamily: {
        'heading': ['Yeseva One', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'papel-picado': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 20\" fill=\"none\"><path d=\"M0 0h20l5 10-5 10H0l5-10L0 0z\" fill=\"%23FFC107\" opacity=\"0.1\"/><path d=\"M25 0h20l5 10-5 10H25l5-10L25 0z\" fill=\"%23C62828\" opacity=\"0.1\"/><path d=\"M50 0h20l5 10-5 10H50l5-10L50 0z\" fill=\"%232E7D32\" opacity=\"0.1\"/><path d=\"M75 0h20l5 10-5 10H75l5-10L75 0z\" fill=\"%23FFC107\" opacity=\"0.1\"/></svg>')",
      }
    },
  },
  plugins: [],
};
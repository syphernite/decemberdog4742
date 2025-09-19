/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#0b0b0b",      // black
          card: "#121212",    // near-black
          border: "#252525",
          text: "#ffffff",    // white
          muted: "#bfbfbf"
        },
        brand: {
          primary: "#dc2626", // red-600
          brown: "#8b5e3c",   // tavern brown
          cream: "#f5f2ea"    // warm white for accents
        }
      }
    }
  },
  plugins: []
}

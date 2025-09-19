/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#0b0f14",
          card: "#121821",
          border: "#1f2a37",
          text: "#ffffff",
          muted: "#9ca3af"
        },
        brand: {
          primary: "#f59e0b", // amber-500
          secondary: "#ef4444" // red-500
        }
      }
    }
  },
  plugins: []
}

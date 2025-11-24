/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "pace-bg": "#020617", // Dark background
        "pace-card": "#0b1120", // Card background
        "pace-primary": "#38bdf8", // Accent
        "pace-danger": "#f97373", // Error
      },
      borderRadius: {
        card: "1.5rem",
      },
    },
  },
  plugins: [],
};

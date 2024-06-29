/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f0f3f2",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        cardOverlay: "rgba(255,255,255,0.2)",
        cardTrans: "rgba(255,255,255,0.5)",
      },
    },
  },
  plugins: [],
}
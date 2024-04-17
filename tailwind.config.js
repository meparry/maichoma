/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "white",
      orange: "#e9c373",
      yellow: "#f7e4b9",
      gray: "#8895ad",
      brick: "#9f5840",
      black: "#39322f",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
};

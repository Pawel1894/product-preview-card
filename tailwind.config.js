/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    colors: {
      "dark-cyan": "hsl(158, 36%, 37%)",
      cream: "hsl(30, 38%, 92%)",
      "very-dark-blue": "hsl(212, 21%, 14%)",
      "dark-grayish-blue": "hsl(228, 12%, 48%)",
      white: "#fff",
    },
    fontFamily: {
      serif: ["Fraunces", "serif"],
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

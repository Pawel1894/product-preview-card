/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    colors: {
      "dark-cyan": {
        100: "hsl(158, 36%, 37%)",
        200: "hsl(159, 35%, 29%)",
      },
      cream: "hsl(30, 38%, 92%)",
      "very-dark-blue": "hsl(212, 21%, 14%)",
      "dark-grayish-blue": "hsl(228, 12%, 48%)",
      white: "#fff",
    },
    fontFamily: {
      serif: ["Fraunces", "serif"],
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        mobile: "url('./images/image-product-mobile.jpg')",
        desktop: "url('./images/image-product-desktop.jpg')",
      },
    },
  },
  plugins: [],
};

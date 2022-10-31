const colors = require("tailwindcss/colors");

const brandColor = colors.orange;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#E94560",
        dark: "#16213E",
        midnight: "#0F3460",
        purple: "#3f3cbb",
        borderColor: "#333333",
        appleBlue: "#0892d0",
        lightGray: "6E6E6E",
      },
    },
  },
  plugins: [],
};

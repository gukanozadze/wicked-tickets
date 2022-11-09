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
        bgColor: "#222831",
        borderColor: "#393E46",
        accentColor: "#00ADB5",
        accentColorLight: "#EEEEEE",
        brand: "#E94560",
        appleBlue: "#0892d0",
      },
      spacing: {
        5: "20px",
        1: "2px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

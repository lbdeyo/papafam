/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        orchid: "935px",
      },
      keyframes: {
        "fade-in": {
          "0%": {opacity: "0"},
          "100%": {opacity: "1"},
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

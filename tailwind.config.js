/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4db5ff",
        "primary-variant": "rgba(77, 181, 255, 0.4)",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};

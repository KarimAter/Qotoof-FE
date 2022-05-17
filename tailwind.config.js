const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4DD0E1",
        secondary: "#4D86E1",
        tertiary: "#4DE1A8",
        textPrimary:colors.gray
      },
    },
  },
  plugins: [],
};
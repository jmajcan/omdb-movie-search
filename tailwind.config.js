/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#134B70',
        secondary: '#D5FFF5',
        tertiary: '#EEEEEE',
        dark: '#201E43',
        light: '#FCF7F7',
        clicked: '#132E70',
        hover: '#136870',
        cardHover: '#CFF6ED',
      }
    },
  },
  plugins: [],
}


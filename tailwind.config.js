/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C4C5BA',
        secondary: '#E4E4DE',
        tertiary: '#1B1B1B',
        dark: '#1BAD69'
      }
    },
  },
  plugins: [],
}


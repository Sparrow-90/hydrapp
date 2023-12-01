/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'indie': ['Indie Flower', 'serif'],
        'itim': ['Itim, cursive'],
      },
      colors: {
        'myDarkBlue': 'rgba(0,119,182,1)',
        'myLightBlue': 'rgba(8,24,68,1)'
      },
    },
  },
  plugins: [],
}


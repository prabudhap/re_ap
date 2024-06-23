/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : ['Fantasy','sans-serif']
    },
    gridTemplateColumns : {
      '70/30' : '70% 28%',
    },
  },
  plugins: [],
}
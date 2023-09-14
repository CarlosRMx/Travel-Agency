/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'bali':"url('../img/bali.jpg')",
        'chicago': "url('../img/chicago,jpg')",
        'europe': "url('../img/europe.jpg')",
        'iceland': "url('../img/iceland.jpg')",
        'losAngeles': "url('../img/LA.jpg')",
        'miami': "url('../img/miami.jpg')",
        'newYork': "url('../img/new_york.jpg')",
        'norway': "url('../img/norway.jpg')",
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        'seattle': "url('../img/seattle.jpg')",
        'switzerland': "url('../img/switzerland.jpg')",
        'sydney': "url('../img/sydney.jpg')",
        'yosemite': "url('../img/yosemite.jpg')", 
      },
      colors:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
        'auxiliar': '#000000',
        'complement': '#ffffff'
      },
      textColor:{
        'auxiliar': '#CC2D4A',
        'secondary': '#8FA206',
        'primary': '#000000',
        'complement': '#ffffff',
      },
      fontFamily:{
        Montserrat:['Montserrat', 'sans-serif']
      },
      minWidth: {
        'md': '280px',
      }
    },
  },
  plugins: [],
}


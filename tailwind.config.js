const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      primary: '#5c6ac4',
      secondary: '#ecc94b'
    },
    boxShadow: {
      card: '0px 0px 5px #666',
    }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

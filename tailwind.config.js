/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      borderRadius: {
        'lg': '10px'
      },
      colors: {
        'primary': '#070809',
        'primary-400': '#1D2020',
        'secondary': '#232628',
        'dark': '#070809',
        'accent': '#53FC18'
      },
      screens: {
        'xl': '1440px'
      },
      container: {
        screens: {
          '2xl': '1920px',
        }
      },
      animation: {
        load: 'load 1s infinite linear'
      },
      keyframes: {
        load: {
          '0%': {
            backgroundColor: 'gray'
          },
          '100%': {
            backgroundColor: 'black'
          }
        }  
      }
    },
  },
  plugins: [
    function({addUtilities}) {
      const newUtilities = {
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'gray transparent',
        },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width: '8px'
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'gray',
            borderRadius: '20px',
          },
        }
      }

      addUtilities(newUtilities, ["responsive", "hover"])
    },
    plugin(function({addVariant, e}) {
      addVariant('sibling-checked', ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
          const newClass = e(`sibling-checked${separator}${className}`);
          return `*:checked ~ .${newClass}`
        })
      })
    })
  ],
}


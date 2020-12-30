const defaultTheme = require('tailwindcss/defaultTheme')

const COLORS = {
  PRIMARY: {
    BLACK: '#444',
    WHITE: '#FFF',
    BLUE: '#0047AB'
  },
  SECONDARY: {
    BLACK100: '#DADADA',
    BLACK200: '#B4B4B4',
    BLACK300: '#8F8F8F',
    BLACK400: '#696969',
    BLACK600: '#363636',
    BLACK700: '#292929',
    BLACK800: '#1B1B1B',
    BLACK900: '#0E0E0E',
    BLUE100: '#498FF2',
    BLUE200: '#0064F0',
    BLUE300: '#004FBD',
    BLUE400: '#224270'
  },
  OTHER: {
    GREEN100: '#00E000',
    GREEN200: '#00C300',
    GREEN300: '#00B300'
  }
}

const fontFamily = defaultTheme.fontFamily
fontFamily['sans'] = ['Roboto', 'Open Sans']

module.exports = {
  theme: {
    extend: {
      fontFamily,
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          black: COLORS.PRIMARY.BLACK,
          white: COLORS.PRIMARY.WHITE,
          blue: COLORS.PRIMARY.BLUE
        },
        secondary: {
          black: {
            100: COLORS.SECONDARY.BLACK100,
            200: COLORS.SECONDARY.BLACK200,
            300: COLORS.SECONDARY.BLACK300,
            400: COLORS.SECONDARY.BLACK400,
            600: COLORS.SECONDARY.BLACK600,
            700: COLORS.SECONDARY.BLACK700,
            800: COLORS.SECONDARY.BLACK800,
            900: COLORS.SECONDARY.BLACK900
          },
          blue: {
            100: COLORS.SECONDARY.BLUE100,
            200: COLORS.SECONDARY.BLUE200,
            300: COLORS.SECONDARY.BLUE300,
            400: COLORS.SECONDARY.BLUE400
          }
        },
        line: {
          hover: COLORS.OTHER.GREEN100,
          base: COLORS.OTHER.GREEN200,
          pressed: COLORS.OTHER.GREEN300
        }
      }
    }
  },
  plugins: []
}

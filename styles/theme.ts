import { DefaultTheme } from 'styled-components'
import { COLORS } from '@constants'

const theme: DefaultTheme = {
  colors: {
    primary: {
      BLACK: COLORS.PRIMARY.BLACK,
      WHITE: COLORS.PRIMARY.WHITE,
      BLUE: COLORS.PRIMARY.BLUE
    },
    secondary: {
      BLACK100: COLORS.SECONDARY.BLACK100,
      BLACK200: COLORS.SECONDARY.BLACK200,
      BLACK300: COLORS.SECONDARY.BLACK300,
      BLACK400: COLORS.SECONDARY.BLACK400,
      BLACK600: COLORS.SECONDARY.BLACK600,
      BLACK700: COLORS.SECONDARY.BLACK700,
      BLACK800: COLORS.SECONDARY.BLACK800,
      BLACK900: COLORS.SECONDARY.BLACK900,
      BLUE100: COLORS.SECONDARY.BLUE100,
      BLUE200: COLORS.SECONDARY.BLUE200,
      BLUE300: COLORS.SECONDARY.BLUE300,
      BLUE400: COLORS.SECONDARY.BLUE400
    },
    line: {
      GREEN100: COLORS.LINE.GREEN100,
      GREEN200: COLORS.LINE.GREEN200,
      GREEN300: COLORS.LINE.GREEN300
    }
  },
  font: {
    family: {
      roboto: 'Roboto',
      supermarket: 'Supermarket',
      opensans: 'Open sans'
    },
    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      hero: '4.5rem'
    },
    lineHeight: {
      xs: '1rem',
      sm: '1.25rem',
      md: '1.5rem',
      lg: '1.75rem',
      xl: '1.75rem',
      '2xl': '2rem',
      '3xl': '2.25rem',
      '4xl': '2.5rem',
      hero: 1
    }
  },
  screen: {
    sm: '640px',
    md: '768px',
    lg: '980px',
    xl: '1200px'
  }
}

export default theme

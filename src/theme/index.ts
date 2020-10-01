import { createMuiTheme } from '@material-ui/core/styles'
// main google font to apply to all elements by default
export const primaryFont = process.env.REACT_APP_PRIMARY_FONT || 'Space Mono, monospace'
export const secondaryFont = process.env.REACT_APP_SECONDARY_FONT || 'Lato, sans-serif'

interface IFederationPalette {
  slightlyTransparent: string
  veryTransparent: string
  white: string
  lightOrange: string
  orangeOnHover: string
  lightGreen: string
  darkBlue: string
  brightBlue: string
  graphiteBlack: string
  formAndBoxes: string
  lightTuna: string
  linkedinBlue: string
  lightSilver: string
}

export const CustomPalette: IFederationPalette = {
  slightlyTransparent: 'rgba(255, 255, 255, 0.6)',
  veryTransparent: 'rgba(255, 255, 255, 0.1)',
  white: '#ffffff',
  lightOrange: '#FF8D53',
  orangeOnHover: '#d45f26',
  lightGreen: '#8DFFE0',
  darkBlue: '#6496CA',
  brightBlue: '#5372FF',
  graphiteBlack: '#27292B',
  formAndBoxes: '#000000',
  lightTuna: '#45484c',
  linkedinBlue: '#2977B5',
  lightSilver: '#d8d8d8',
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    customPalette: IFederationPalette
    field: {
      size: number
      borderColor: string
      placeholderColor: string
      defaultWidth: number
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    customPalette: IFederationPalette
    fonts: {
      primary: string
      secondary: string
    }
  }
}
// our theme

// allow configuration using `createMuiTheme`
export const theme = createMuiTheme({
  customPalette: CustomPalette,
  fonts: {
    primary: primaryFont,
    secondary: secondaryFont,
  },
  overrides: {
    MuiTypography: {
      h1: {
        color: CustomPalette.white,
        fontWeight: 600,
        fontSize: '3rem',
        textAlign: 'center',
        fontFamily: primaryFont,
      },
      h2: {
        color: CustomPalette.white,
        fontWeight: 600,
        fontSize: '2rem',
        textAlign: 'center',
        fontFamily: primaryFont,
      },
      h3: {
        color: CustomPalette.white,
        fontWeight: 600,
        fontSize: '1.5rem',
        textAlign: 'center',
        fontFamily: primaryFont,
      },
    },
    MuiLink: {
      root: {
        textDecoration: 'none',
        color: CustomPalette.lightGreen,
        letterSpacing: 1.5,
      },
    },
    MuiButton: {
      root: {
        backgroundColor: CustomPalette.lightOrange,
        fontSize: '1.25rem',
        letterSpacing: '0.1px',
        fontFamily: secondaryFont,
        color: CustomPalette.white,
        textTransform: 'capitalize',
        '&$disabled': {
          color: CustomPalette.white,
          opacity: 0.23,
        },
      },
      text: {
        color: CustomPalette.white,
      },
      sizeLarge: {
        fontSize: '1.25rem',
        width: 300,
        height: 64,
      },
    },
  },
})
// extend theme type
export type Theme = typeof theme
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {}
  // we can extend theme with custom keys here
  interface ThemeOptions {}
}

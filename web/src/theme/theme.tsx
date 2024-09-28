import { extendTheme } from '@chakra-ui/react'

import { Skeleton } from './components/Skeleton'

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
}

const theme = extendTheme({
  components: {
    Skeleton,
  },
  config: {
    cssVarPrefix: 'ak4y',
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  shadows: {
    inner: 'inset gray 0px 0px 20px -12px; ',
    'inner-black': 'inset black 0px 0px 6px -4px; ',
  },
  colors: {
    'black-bg': '#0D101F',
    black: {
      50: '#E8E8E8',
      100: '#CFCFCF',
      200: '#9E9E9E',
      300: '#707070',
      400: '#404040',
      500: '#0F0F0F',
      600: '#0D0D0D',
      700: '#0A0A0A',
      800: '#050505',
      900: '#030303',
      950: '#030303',
    },
    primary: {
      default: '#EE2D34',
      50: '#FCD7D8',
      100: '#FAC4C6',
      200: '#F79EA1',
      300: '#F4787D',
      400: '#F15358',
      500: '#EE2D34',
      600: '#D21118',
      700: '#9E0D12',
      800: '#6A090C',
      900: '#360406',
      950: '#1C0203',
    },
    secondaryText: {
      default: '#bfbfd9',
      low: '#7a7aad',
    },
    secondary: {
      default: '#373759',
    },
    primaryAlpha: {
      default: 'rgba(238, 45, 52, 0.36)',
      50: 'rgba(238, 45, 52, 0.04)',
      100: 'rgba(238, 45, 52, 0.06)',
      200: 'rgba(238, 45, 52, 0.08)',
      300: 'rgba(238, 45, 52, 0.16)',
      400: 'rgba(238, 45, 52, 0.24)',
      500: 'rgba(238, 45, 52, 0.36)',
      600: 'rgba(238, 45, 52, 0.48)',
      700: 'rgba(238, 45, 52, 0.64)',
      800: 'rgba(238, 45, 52, 0.80)',
      900: 'rgba(238, 45, 52, 0.92)',
    },
    gray: {
      default: '#0D101F',
      50: '#E7E7E9',
      100: '#D7D8DA',
      200: '#AFB0B6',
      300: '#878992',
      400: '#5F626D',
      500: '#0D101F',
      600: '#0D101E',
      700: '#0A0D18',
      800: '#080A12',
      900: '#05060C',
      950: '#020306',
    },
    "green": {
      "50": "#E5FFF2",
      "100": "#B8FFD9",
      "200": "#8AFFC1",
      "300": "#5CFFA9",
      "400": "#2EFF91",
      "500": "#00FF79",
      "600": "#00CC61",
      "700": "#009949",
      "800": "#006630",
      "900": "#003318"
    },
  },
  styles: {
    global: {
      body: {
        bg: '',
      }
    }
  },
  breakpoints,
})

export default theme

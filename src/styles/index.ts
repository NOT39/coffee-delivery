import { createStitches } from '@stitches/react'

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      background: '#FAFAFA',

      'yellow-dark': '#C47F17',
      yellow: '#DBAC2C',
      'yellow-light': '#F1E9C9',
      'purple-dark': '#4B2995',
      purple: '#8047F8',
      'purple-light': '#EBE5F9',

      'base-title': '#272221',
      'base-subtitle': '#403937',
      'base-text': '#574F4D',
      'base-label': '#8D8686',
      'base-hover': '#D7D5D5',
      'base-button': '#E6E5E5',
      'base-input': '#EDEDED',
      'base-card': '#F3F2F2',
    },

    fontSizes: {
      '2xs': '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '3rem',
    },

    fonts: {
      header: '"Baloo 2"',
      text: 'Roboto',
    },
  },
})

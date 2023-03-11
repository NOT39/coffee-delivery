import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$background',
    color: '$base-text'
  },

  'body, input, textarea, button': {
    fontFamily: '$text',
    fontWeight: 'bold',
  }
})
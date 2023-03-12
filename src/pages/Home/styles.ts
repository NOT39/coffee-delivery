import { styled } from '../../styles'

export const IntroItemContainer = styled('div', {})

export const IntroItemIcon = styled('span', {
  padding: '0.5rem',
  borderRadius: '50%',

  variants: {
    variant: {
      cart: { backgroundColor: '$yellow-dark' },
      package: { backgroundColor: '$base-text' },
      timer: { backgroundColor: '$yellow' },
      coffee: { backgroundColor: '$purple' },
    },
  },
})

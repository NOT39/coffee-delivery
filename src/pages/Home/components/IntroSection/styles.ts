import { styled } from '../../../../styles'

import introBackground from '../../../../assets/intro-background.svg'

export const IntroContainer = styled('section', {
  backgroundImage: `url(${introBackground})`,

  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5.75rem 0',

    maxWidth: '70rem',
    margin: 'auto',
  },
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '4.125rem',

  maxWidth: '36.75rem',

  h1: {
    color: '$base-title',

    fontFamily: '$header',
    fontWeight: 'bolder',
    fontSize: '$3xl',
  },

  p: {
    fontSize: '$md',
  },
})

export const ItemsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',

  columnGap: '2.5rem',
  rowGap: '1.25rem',
})

export const ItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '0.75rem',
})

export const ItemIcon = styled('span', {
  padding: '0.5rem',
  borderRadius: '9999px',
  lineHeight: 0,

  color: '$background',

  variants: {
    variant: {
      cart: { backgroundColor: '$yellow-dark' },
      package: { backgroundColor: '$base-text' },
      timer: { backgroundColor: '$yellow' },
      coffee: { backgroundColor: '$purple' },
    },
  },
})

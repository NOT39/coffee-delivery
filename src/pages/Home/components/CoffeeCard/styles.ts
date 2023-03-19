import { styled } from '../../../../styles'

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  maxWidth: '16rem',

  backgroundColor: '$base-card',
  borderRadius: '6px 36px',
  padding: '0 1.25rem 1.25rem 1.25rem',

  '> img': {
    maxWidth: '7.5rem',
    transform: 'translateY(-1.25rem)',
  },

  '> h2': {
    marginTop: '1rem',

    fontFamily: '$header',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '$base-subtitle',
  },

  '> p': {
    marginTop: '0.5rem',
    marginBottom: '2rem',

    fontSize: '$sm',
    fontWeight: '400',
    textAlign: 'center',
    color: '$base-label',
  },
})

export const TagsContainer = styled('div', {
  display: 'flex',
  flexWrap: 1,
  gap: '0.25rem',

  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: '$yellow-dark',
    backgroundColor: '$yellow-light',

    padding: '0.25rem 0.5rem',
    borderRadius: 9999,

    fontWeight: 'bold',
    fontSize: '$2xs',
    lineHeight: 1.3,
  },
})

export const ShopContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
})

export const Price = styled('span', {
  fontWeight: '400',
  fontSize: '$sm',

  '> span': {
    fontFamily: '$header',
    fontWeight: 'bolder',
    fontSize: '$2xl',
  },
})

export const BuyContainer = styled('div', {
  display: 'flex',
  gap: '0.5rem',
})

export const ItemAmountContainer = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.25rem',

  backgroundColor: '$base-button',
  padding: '0.5rem',
  borderRadius: '6px',

  '> svg': {
    color: '$purple',
  },

  '> span': {
    color: '$base-title',
    fontWeight: '400',
    fontSize: '1rem',
    textAlign: 'center',
  },
})

export const CartContainer = styled('span', {
  backgroundColor: '$purple-dark',
  padding: '0.5rem',
  lineHeight: 0,
  borderRadius: '6px',

  '> svg': {
    color: '$base-card',
  },
})

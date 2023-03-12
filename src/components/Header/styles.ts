import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  display: 'flex',
  maxWidth: '70rem',
  margin: 'auto',

  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',

  div: {
    display: 'flex',
    gap: '0.75rem',
  },
})

export const ActionContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '0.5rem',
  borderRadius: 6,
})

export const LocationContainer = styled(ActionContainer, {
  backgroundColor: '$purple-light',

  svg: {
    color: '$purple',
  },
})

export const CartContainer = styled(ActionContainer, {
  backgroundColor: '$yellow-light',

  svg: {
    color: '$yellow-dark',
  },
})

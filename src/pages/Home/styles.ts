import { styled } from '../../styles'

export const HomeContainer = styled('main', {})

export const MenuSection = styled('section', {
  width: '100%',
  maxWidth: '70rem',
  margin: 'auto',

  '> h1': {
    margin: '3.5rem 0',
    textAlign: 'left',
  },
})

export const CoffeeListContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '2.5rem 2rem',
  alignItems: 'center',
  justifyContent: 'center',
})

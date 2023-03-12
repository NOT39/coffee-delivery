import { CartContainer, HeaderContainer, LocationContainer } from './styles'

import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <div>
        <LocationContainer>
          <MapPin weight="fill" size={22} />
          <span>Toledo, PR</span>
        </LocationContainer>
        <CartContainer>
          <ShoppingCart weight="fill" size={22} />
        </CartContainer>
      </div>
    </HeaderContainer>
  )
}

import { globalStyles } from '../../styles/global'

import coffeIntro from '../../assets/coffee-intro.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { IntroItemContainer, IntroItemIcon } from './styles'

globalStyles()

export function Home() {
  return (
    <div>
      <h1>Encontre o café perfeito para qualquer hora do dia</h1>
      <p>
        Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora
      </p>

      <div>
        <IntroItemContainer>
          <IntroItemIcon variant={'cart'}>
            <ShoppingCart weight="fill" size={16} />
          </IntroItemIcon>
          <span>fjdaslfjldjs</span>
        </IntroItemContainer>
        <IntroItemContainer>
          <Package weight="fill" size={16} />
          <span>fjdaslfjldjs</span>
        </IntroItemContainer>
        <IntroItemContainer>
          <Timer weight="fill" size={16} />
          <span>fjdaslfjldjs</span>
        </IntroItemContainer>
        <IntroItemContainer>
          <Coffee weight="fill" size={16} />
          <span>fjdaslfjldjs</span>
        </IntroItemContainer>
      </div>

      <img src={coffeIntro} alt="" />
    </div>
  )
}

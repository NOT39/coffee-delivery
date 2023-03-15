import coffeeIntro from '../../../../assets/intro-coffee.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  ContentContainer,
  IntroContainer,
  ItemContainer,
  ItemIcon,
  ItemsContainer,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <ContentContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <ItemsContainer>
            <ItemContainer>
              <ItemIcon variant={'cart'}>
                <ShoppingCart weight="fill" size={16} />
              </ItemIcon>
              <span>Compra simples e segura</span>
            </ItemContainer>
            <ItemContainer>
              <ItemIcon variant={'package'}>
                <Package weight="fill" size={16} />
              </ItemIcon>
              <span>Embalagem mantém o café intacto</span>
            </ItemContainer>
            <ItemContainer>
              <ItemIcon variant={'timer'}>
                <Timer weight="fill" size={16} />
              </ItemIcon>
              <span>Entrega rápida e rastreada</span>
            </ItemContainer>
            <ItemContainer>
              <ItemIcon variant={'coffee'}>
                <Coffee weight="fill" size={16} />
              </ItemIcon>
              <span>O café chega fresquinho até você</span>
            </ItemContainer>
          </ItemsContainer>
        </ContentContainer>
        <img src={coffeeIntro} alt="" />
      </div>
    </IntroContainer>
  )
}

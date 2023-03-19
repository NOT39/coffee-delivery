import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  BuyContainer,
  CardContainer,
  CartContainer,
  ItemAmountContainer,
  Price,
  ShopContainer,
  TagsContainer,
} from './styles'

interface CoffeeCardProps {
  content: {
    name: string
    description: string
    priceInCents: number
    tags: string[]
    imageUrl: string
  }
}

export function CoffeeCard({
  content: { name, description, priceInCents, tags, imageUrl },
}: CoffeeCardProps) {
  return (
    <CardContainer>
      <img src={imageUrl} alt="" />

      <TagsContainer>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>

      <h2>{name}</h2>
      <p>{description}</p>

      <ShopContainer>
        <Price>
          R$
          <span>{priceInCents}</span>
        </Price>

        <BuyContainer>
          <ItemAmountContainer>
            <Minus weight="bold" size={14} />
            <span>1</span>
            <Plus weight="bold" size={14} />
          </ItemAmountContainer>

          <CartContainer>
            <ShoppingCart weight="fill" size={22} />
          </CartContainer>
        </BuyContainer>
      </ShopContainer>
    </CardContainer>
  )
}

import { ShoppingCart } from 'phosphor-react'

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
    <div>
      <img src={imageUrl} alt="" />

      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}

      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        <div>{priceInCents}</div>

        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <ShoppingCart weight="fill" />
      </div>
    </div>
  )
}

import { coffeeList } from '../../mock/coffeeList'
import { CoffeeCard } from './components/CoffeeCard'

import { IntroSection } from './components/IntroSection'
import { CoffeeListContainer, MenuSection } from './styles'

export function Home() {
  return (
    <div>
      <IntroSection />

      <MenuSection>
        <h1>Nossos cafés</h1>

        <CoffeeListContainer>
          {coffeeList.map((item) => (
            <CoffeeCard key={item.id} content={item} />
          ))}
        </CoffeeListContainer>
      </MenuSection>
    </div>
  )
}

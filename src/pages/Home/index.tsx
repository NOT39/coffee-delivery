import { globalStyles } from '../../styles/global'
import { Intro } from './components/Intro'

globalStyles()

export function Home() {
  return (
    <div>
      <Intro />
    </div>
  )
}

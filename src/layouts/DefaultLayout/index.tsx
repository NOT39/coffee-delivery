import { globalStyles } from '../../styles/global'
import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

globalStyles()

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

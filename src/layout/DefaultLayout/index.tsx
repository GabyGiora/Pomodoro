import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutCointer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutCointer>
      <Header />
      <Outlet />
    </LayoutCointer>
  )
}

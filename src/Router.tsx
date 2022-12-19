import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'

import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />{' '}
        {/* Pra cada componente da nossa página a gente vai ter uma rota  */}
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}

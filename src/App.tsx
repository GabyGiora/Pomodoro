import { ThemeProvider } from 'styled-components' // Os temas só vão ser aplicados em componentes que estão dentro do ThemeProvider
import { BrowserRouter } from 'react-router-dom' // Contexts-Provaiders


import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />{' '}
      {/* É importante que esse globalStyles tmb esteja dentro do ThemeProvider  */}
    </ThemeProvider>
  )
}

import { ThemeProvider } from 'styled-components' // Isso é do Styled components

import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { AppProvider } from './stores/contexts'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  )
}

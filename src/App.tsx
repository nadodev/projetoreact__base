import { ThemeProvider } from 'styled-components'
import Button from './componets/Button'
import { GlobalStyle } from './styles/Global'

import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button variant="primary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button variant="default" />
    </ThemeProvider>
  )
}

export default App

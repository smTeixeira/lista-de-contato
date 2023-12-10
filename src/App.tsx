import { Provider } from 'react-redux'

import store from './store'
import EstiloGlobal, { Container } from './styles'
import Cabecalho from './containers/Cabecalho'
import FormContato from './containers/FormContato'
import ListaDeContatos from './containers/ListaDeContatos'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Cabecalho />
        <FormContato />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App

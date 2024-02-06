import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { ContainerLista } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <ContainerLista>
      <ul>
        {itens.map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
              email={t.email}
              nome={t.nome}
              telefone={t.telefone}
            />
          </li>
        ))}
      </ul>
    </ContainerLista>
  )
}

export default ListaDeContatos

import { FormEvent, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const NovoContato = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(nome, email, telefone, 7)
    dispatch(cadastrar(contatoParaAdicionar))
  }

  return (
    <S.FormContato onSubmit={cadastrarContato}>
      <S.Campo
        value={nome}
        onChange={({ target }) => setNome(target.value)}
        type="text"
        placeholder="Nome"
      />
      <S.Campo
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        type="text"
        placeholder="Email"
      />
      <S.Campo
        value={telefone}
        onChange={({ target }) => setTelefone(target.value)}
        type="text"
        placeholder="Telefone"
      />
      <S.Botao type="submit">Adicionar</S.Botao>
    </S.FormContato>
  )
}

export default NovoContato

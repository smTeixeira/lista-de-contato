import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
`
export default EstiloGlobal

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: #44bd32;
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: #c23616;
`
export const BotaoEditar = styled(Botao)`
  background-color: #e1b12c;
`

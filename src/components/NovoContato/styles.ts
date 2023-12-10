import styled from 'styled-components'

export const FormContato = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 16px;
  margin-bottom: 40px;

  input {
    padding: 8px 16px;
    width: 100%;
  }
`
export const Botao = styled.button`
  width: 100%;
  background-color: #2980b9;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  border-color: #666666;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

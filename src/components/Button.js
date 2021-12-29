import styled from 'styled-components'

const Button = styled.button`
  background: #6B7AA1;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 15px 15px;
  cursor: pointer;
  display: inline-block;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`

export default Button

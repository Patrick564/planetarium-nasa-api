import styled from 'styled-components'

const Button = ({ ...props }) => {
  return (
    <button {...props}>Search</button>
  )
}

const StyledButton = styled(Button)`
  background: #6B7AA1;
  border: none;
  border-radius: 10px;
  color: white;
  padding 10px 10px;
  margin 10px 10px;
  cursor: pointer;
  display: inline-block;
`

export default StyledButton

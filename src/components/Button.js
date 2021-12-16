import styled from 'styled-components'

const Button = ({ ...props }) => {
  return (
    <button {...props}>Search</button>
  )
}

const StyledButton = styled(Button)`
  background: #448aff;
  border: none;
  border-radius: 5px;
  color: white;
  padding 5px;
  margin 5px;
  cursor: pointer;
`

export default StyledButton

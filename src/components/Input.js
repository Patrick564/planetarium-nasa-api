import styled from 'styled-components'

const Input = ({ ...props }) => {
  return (
    <input {...props} type={'search'} name={'date'} placeholder='05/12/1998' />
  )
}

const StyledInput = styled(Input)`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  outline: none;
  border-radius: 5px;
`

export default StyledInput

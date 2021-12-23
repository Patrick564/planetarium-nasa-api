import styled from 'styled-components'

const Input = ({ ...props }) => {
  return (
    <input {...props} type={'search'} name={'date'} placeholder='1998-08-07' />
  )
}

const StyledInput = styled(Input)`
  border: 1px solid #ccc;
  padding: 15px 15px;
  outline: none;
  border-radius: 10px;
`

export default StyledInput

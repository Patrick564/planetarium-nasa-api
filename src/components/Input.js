import styled from 'styled-components'

// const Input = ({ ...props }) => {
//   return (
//     <input {...props} type={'date'} name={'date'} />
//   )
// }

const Input = styled.input`
  -webkit-appearance: none;
  border: 1px solid #ccc;
  padding: 15px 15px;
  outline: none;
  border-radius: 10px;
`

export default Input

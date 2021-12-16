import StyledButton from './Button.js'
import StyledInput from './Input.js'

const SearchForm = ({ handleChange }) => {
  return (
    <form onSubmit={handleChange}>
      <StyledInput />
      <StyledButton />
    </form>
  )
}

export default SearchForm

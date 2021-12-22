import Button from './Button.js'
import StyledInput from './Input.js'

const SearchForm = ({ handleChange }) => {
  return (
    <form onSubmit={handleChange}>
      <StyledInput />
      <Button>Search</Button>
    </form>
  )
}

export default SearchForm

import styled from 'styled-components'

import SearchForm from './SearchForm'

const Navbar = ({ change, ...props }) => {
  return (
    <nav {...props}>
      <SearchForm handleChange={change} />
    </nav>
  )
}

const StyledNavbar = styled(Navbar)`
  padding: 20px 25px;
  display: flex;
  justify-content: center;
  background-color: #11324D;
`

export default StyledNavbar

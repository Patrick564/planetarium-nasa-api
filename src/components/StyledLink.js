import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: black;
  backface-visibility: hidden;
  background-color: #fff;
  border: 1px solid #1641D9;
  border-radius: 15px;
  cursor: pointer;
  margin: 1.5rem 1.5rem;
  padding: 1.5rem 1.5rem;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  min-width: 10rem;
  max-width: 25rem;

  &:hover {
    transform: scale(1.05);
  }
`

export default StyledLink

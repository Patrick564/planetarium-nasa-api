import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Wrapper from './Wrapper.js'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledLink = styled(Link)`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 15px;
  color: #000;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1.5rem 1.5rem;
  padding: 1.5rem 1.5rem;
  text-align: center;
  text-decoration: none;
`

const HomeSelector = () => {
  return (
    <Wrapper>
      <Container>
          <StyledLink component={Link} to={'/apod'}>Astronomic Picture of a Day</StyledLink>
          <StyledLink component={Link} to={'/mars-rover'}>Mars Rover</StyledLink>
      </Container>
    </Wrapper>
  )
}

export default HomeSelector

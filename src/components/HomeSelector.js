import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Wrapper from './Wrapper.js'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledLink = styled(Link)`
  color: black;
  background-color: #fff;
  border: 1px solid #1641D9;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.2rem;
  margin: 1.5rem 1.5rem;
  padding: 1.5rem 1.5rem;
  text-decoration: none;
  min-width: 10rem;
  max-width: 25rem;
`

const StyledTitle = styled.h4`
  font-size: 1.5rem;
  font-style: bold;
  text-align: center;
  text-decoration: underline;
`

const Description = styled.p`
  padding-top: 0.7rem;
  font-size: 1.1rem;
  font-style: italic;
`

const HomeSelector = () => {
  return (
    <Wrapper>
      <Container>
        <StyledLink component={Link} to={'/apod'}>
          <StyledTitle>Astronomic Picture of a Day</StyledTitle>
          <Description>
            One of the most popular websites at NASA is the Astronomy Picture of the Day.
            In fact, this website is one of the most popular websites across all federal agencies.
          </Description>
        </StyledLink>

        <StyledLink component={Link} to={'/mars-rover'}>
          <StyledTitle>Mars Rover</StyledTitle>
          <Description>
            This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists
          </Description>
        </StyledLink>
      </Container>
    </Wrapper>
  )
}

export default HomeSelector

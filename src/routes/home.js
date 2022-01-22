import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from '../components/Navbar.js'
import StyledLink from '../components/StyledLink.js'
import Wrapper from '../components/Wrapper.js'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h4`
  font-size: 1.5rem;
  text-align: center;
  text-decoration: underline;
`

const Description = styled.p`
  padding-top: 0.7rem;
  font-size: 1.1rem;
  font-style: italic;
`

const Home = () => {
  return (
    <div>
      <Navbar>
        <p style={{ color: 'white' }}>Planetarium</p>
      </Navbar>

      <Wrapper>
        <Container>
          <StyledLink component={Link} to={'/apod'}>
            <Title>Astronomic Picture of a Day</Title>
            <Description>
              One of the most popular websites at NASA is the Astronomy Picture of the Day.
              In fact, this website is one of the most popular websites across all federal agencies.
            </Description>
          </StyledLink>

          <StyledLink component={Link} to={'/mars-rover'}>
            <Title>Mars Rover</Title>
            <Description>
              This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists
            </Description>
          </StyledLink>
        </Container>
      </Wrapper>
    </div>
  )
}

export default Home

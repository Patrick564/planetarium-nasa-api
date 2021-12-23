import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Wrapper from './Wrapper.js'
import Navbar from './Navbar.js'

import githubLogo from '../img/GitHub-Mark.svg'

const Img = styled.img`
  display: block;
  height: 50px;
  width: 50px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

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
    <div>
      <Navbar>
        <p style={{ color: 'white' }}>Planetarium</p>

        <a href={'https://github.com/Patrick564/planetarium-nasa-api'} target={'_blank'} rel={'noopener noreferrer'}>
          <Img src={githubLogo} alt={'To GitHub'} />
        </a>
      </Navbar>

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
    </div>
  )
}

export default HomeSelector

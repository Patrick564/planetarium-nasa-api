import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px 25px 25px 25px;
`

const Container = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  flex-direction: ${props => props?.$direction ? 'column' : 'row'};
  gap: ${props => props?.$direction ? '35px' : '0'};

  @media (min-width: 320px) and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    align-items: center;
    width: 100%;
    flex-direction: column;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 95%;
    align-items: center;
    justify-content: center;
    flex-direction: ${props => props?.$direction ? 'column' : 'row'};
  }
`

const Content = ({ children, directionCol }) => {
  return (
    <Wrapper>
      <Container $direction={directionCol}>
        {children}
      </Container>
    </Wrapper>
  )
}

export default Content

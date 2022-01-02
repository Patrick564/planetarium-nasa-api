import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px 25px 25px 25px;
`

const Container = styled.div`
  display: flex;
  width: 80%;

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
  }
`

const Content = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
  )
}

export default Content

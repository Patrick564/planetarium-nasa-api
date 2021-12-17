import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 25px;
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

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #316B83;
  align-items: baseline;
  margin: 20px 20px;
  padding: 20px 20px;
  border-radius: 15px;
  color: white;
  font-family: 'Rubik', sans-serif;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Explanation = styled.p`
  margin: 20px 20px;
  padding: 35px 35px;
  border-radius: 15px;
  background-color: #316B83;
  color: white;
`
const Img = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 10%;
  padding: 20px 20px;
  margin: 20px 20px;

  @media (min-width: 320px) and (max-width: 425px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    width: 350px;
    height: 350px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 450px;
    height: 450px;
  }
`

const Content = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        <Img src={data?.url}></Img>

        <Info>
          <Title>
            <h2>{data?.title}</h2>
            <span style={{ fontStyle: 'italic' }}>{data?.date}</span>
          </Title>

          <Explanation>{data?.explanation}</Explanation>
        </Info>
      </Container>
    </Wrapper>
  )
}

export default Content

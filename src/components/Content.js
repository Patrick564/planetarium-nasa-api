import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 25px;
`

const Container = styled.div`
  display: flex;
  width: 70%;

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
  align-items: baseline;
  margin: 20px 20px;
  padding: 20px 20px;
  border-radius: 15px;
  color: white;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Explanation = styled.p`
  margin: 15px 20px;
  padding: 10px 20px;
  border-radius: 15px;
  border: 1px solid black;
  background-color: #121212;
  color: white;
`
const Img = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  padding: 20px 20px;
  margin: 20px 20px;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 150px;
    height: 150px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 250px;
    height: 250px;
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
            <span>{data?.date}</span>
          </Title>

          <Explanation>{data?.explanation}</Explanation>
        </Info>
      </Container>
    </Wrapper>
  )
}

export default Content

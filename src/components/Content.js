import styled from 'styled-components'

import Wrapper from './Wrapper.js'

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
  align-items: baseline;
  margin: 5px 5px;
  padding: 15px 15px;
  border-radius: 15px;
  font-family: 'Rubik', sans-serif;
  box-shadow: 0 0 5px #133F47;
  color: #34B0C6;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`

const Explanation = styled.p`
  margin: 5px 5px;
  padding: 35px 35px;
  border-radius: 15px;
  //background-color: #316B83;
  color: #34B0C6;
  box-shadow: 0 0 5px #133F47;
`
const Img = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 10%;
  margin: 40px 40px;
  box-shadow: 0 0 5px #133F47;

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
  let url = data?.url || './img/default-img.png'

  return (
    <Wrapper>
      <Container>
        <Img src={url} alt={'Image'} />

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

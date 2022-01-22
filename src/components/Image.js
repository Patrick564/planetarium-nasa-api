import styled from 'styled-components'

const Image = styled.img`
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

export default Image

import styled from 'styled-components'

const CamerasGrid = styled.div`
  display: grid;
  grid-column: 2;
  gap: 15px;

  @media (min-width: 320px) and (max-width: 425px) {
    flex-direction: column;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
  }
`

export default CamerasGrid

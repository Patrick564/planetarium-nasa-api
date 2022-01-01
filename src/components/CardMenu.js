import styled from 'styled-components'

const CardMenu = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  height: 100%;
  visibility: ${ props => props.status ? 'visible' : 'hidden' };
  opacity: ${ props => props.status ? '1' : '0' };
  border-radius: 10px;
  transition: opacity 0.5s ease-in, visibility 0.5s ease-in, backdrop-filter 0.2s ease-out;
`

export default CardMenu

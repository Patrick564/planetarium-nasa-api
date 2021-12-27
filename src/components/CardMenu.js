import styled from 'styled-components'

const CardMenu = styled.div`
  right: 0;
  left: 0;
  top: 20%;
  position: absolute;
  display: block;
  visibility: ${ props => props.status ? 'visible' : 'hidden' };
  opacity: ${ props => props.status ? '1' : '0' };
  border: 1px solid #ccc;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 20px;
  width: 250px;
  border-radius: 10px;
  background: #fff;
  transition: opacity 0.5s ease, visibility 0.5s ease;
`

export default CardMenu

import styled from 'styled-components'

import Button from './Button.js'

import CloseImage from '../img/close.png'

const Close = ({ close, ...props }) => {
  return (
    <Button type={'button'} onClick={close} {...props}>
      <img src={CloseImage} alt={'Close'} width={'16px'} />
    </Button>
  )
}

const CloseButton = styled(Close)`
  background: #fff;
  color: black;
  padding-top: 5px;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  outline: none;
`

export default CloseButton

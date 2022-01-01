import styled from 'styled-components'

import Button from './Button'

import CloseImage from '../img/close.png'

const Close = ({ close, ...props }) => {
	return (
		<Button onClick={close} {...props}>
			<img src={CloseImage} alt={'Close'} width={'16px'} />
		</Button>
	)
}

const CloseButton = styled(Close)`
  background: #fff;
  color: black;
  padding-top: 0;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
`

export default CloseButton

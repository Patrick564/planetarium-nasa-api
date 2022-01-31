import styled from 'styled-components'
import Button from './Button.js'

const CameraBtn = styled(Button)`
  outline: 2px dashed ${props => props?.selected ? 'black' : 'none'};
`

export default CameraBtn

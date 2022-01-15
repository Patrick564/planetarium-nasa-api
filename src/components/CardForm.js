import styled from 'styled-components'

import CloseButton from './CloseButton.js'
import Button from './Button.js'

const Card = styled.div`
  transition: opacity 0.5s ease, visibility 0.5s ease, backdrop-filter 3s;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  height: 100%;
  visibility: ${props => props?.status ? 'visible' : 'hidden'};
  opacity: ${props => props?.status ? '1' : '0'};
  backdrop-filter: ${props => props.status ? 'blur(5px)' : 'blur(0)'};
`

const Background = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  height: 100%;
  visibility: ${props => props?.status ? 'visible' : 'hidden'};
  opacity: ${props => props?.status ? '1' : '0'};
  transition: opacity 0.5s ease-in, visibility 0.5s ease-in;
`

const Form = styled.form`
  right: 0;
  left: 0;
  top: 20%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  background: #fff;
  border-radius: 10px;
  padding: 25px 25px;
  display: flex;
  flex-direction: column;
  gap: 40px
`

const CardForm = ({ changeVisibility, formSubmit, visible, children, submitButton }) => {
  return (
    <Card id={'card-form'} status={visible}>
      <Background status={visible} onClick={changeVisibility}/>

      <Form id={'search-form'} onSubmit={formSubmit}>
        <CloseButton close={changeVisibility}/>

        {children}

        <Button disabled={submitButton} onClick={changeVisibility}>Search date</Button>
      </Form>
    </Card>
  )
}

export default CardForm

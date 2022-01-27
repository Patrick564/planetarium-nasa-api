import styled from 'styled-components'

import CloseButton from './CloseButton.js'

const Card = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  height: auto;
  visibility: ${props => props?.status ? 'visible' : 'hidden'};
  opacity: ${props => props?.status ? '1' : '0'};
  transition: opacity 0.5s linear, visibility 0.5s linear;
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
  background-color: ${props => props?.status ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'};
  transition: opacity 0.5s linear, visibility 0.5s linear, background-color 0.5s linear;
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
  gap: 40px;
`

const CardForm = ({ changeVisibility, formSubmit, isVisible, children }) => {
  return (
    <Card id={'card-form'} status={isVisible}>
      <Background id={'background-form'} status={isVisible} onClick={changeVisibility} />

      <Form id={'search-form'} onSubmit={formSubmit}>
        <CloseButton close={changeVisibility} />

        {children}

        {/*<Button disabled={submitButton} onClick={changeVisibility}>Search date</Button>*/}
      </Form>
    </Card>
  )
}

export default CardForm

import styled from 'styled-components'
import { useState } from 'react'

import Button from '../components/Button.js'
import CardMenu from '../components/CardMenu.js'
import Content from '../components/Content.js'
import Image from '../components/Image.js'
import Input from '../components/Input.js'
import Navbar from '../components/Navbar.js'

import useForm from '../hooks/useForm.js'
import useValidateDate from '../hooks/useValidateDate.js'

import HomeImg from '../img/home.svg'

const StatusMessage = styled.span`
  font-size: 0.8rem;
  align-self: center;
  color: tomato;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5px 5px;
  gap: 40px
`

const CloseButton = styled(Button)`
  background: #fff;
  color: black;
  padding-top: 0;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
`

const Background = styled.div`
  right: 0;
  left: 0;
  top: 20%;
  position: absolute;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  background: #fff;
  border-radius: 10px;
  padding: 20px 20px;
`

const Card = styled.div`
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
  backdrop-filter: ${ props => props?.status ? 'blur(5px)' : 'blur(0)' }
`

const Apod = () => {
  const [cardStatus, setCardStatus] = useState(false)
  const [form, handleChange] = useForm({ date: '' })
  const [status, validateDate] = useValidateDate({ message: '', disabledButton: false })

  const changeCardStatus = (e) => {
    setCardStatus(!cardStatus)
  }

  return (
    <div>
      <Card id={'card-menu'} status={cardStatus}>
        <CardMenu status={cardStatus} onClick={changeCardStatus} />
        <Background id={'card-search-form'}>
          <Form id={'search-form'} onSubmit={handleChange}>
              <CloseButton onClick={changeCardStatus}>X</CloseButton>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Input onChange={validateDate} type={'date'} name={'date'} />
                <StatusMessage>{status.message}</StatusMessage>
              </div>

              <Button disabled={status.disabledButton} onClick={changeCardStatus}>Search date</Button>
          </Form>
        </Background>
      </Card>

      <Navbar>
        <a href={'/'}>
          <Image src={HomeImg} alt={'Home'} />
        </a>

        <Button id={'open-button'} onClick={changeCardStatus}>Search</Button>
      </Navbar>


      <Content data={form.apiData} />
    </div>
  )
}

export default Apod

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

const Apod = () => {
  const [cardStatus, setCardStatus] = useState(false)
  const [form, handleChange] = useForm({ date: '' })
  const [status, validateDate] = useValidateDate({ message: '', disabledButton: false })

  const changeCardStatus = () => {
    setCardStatus(!cardStatus)
  }

  return (
    <div>
      <CardMenu id={'card-menu'} status={cardStatus} onClick={changeCardStatus}>
        <Background>
          <Form onSubmit={handleChange}>
              <CloseButton onClick={changeCardStatus}>X</CloseButton>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Input onChange={validateDate} type={'date'} name={'date'} />
                <StatusMessage>{status.message}</StatusMessage>
              </div>

              <Button disabled={status.disabledButton} onClick={changeCardStatus}>Search date</Button>
          </Form>
        </Background>
      </CardMenu>

      <Navbar>
        <a href={'/'}>
          <Image src={HomeImg} alt={'Home'} />
        </a>

        <Button onClick={changeCardStatus}>Search</Button>
      </Navbar>


      <Content data={form.apiData} />
    </div>
  )
}

export default Apod

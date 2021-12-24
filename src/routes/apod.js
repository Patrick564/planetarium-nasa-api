import styled from 'styled-components'
import { useState } from 'react'
import dayjs from 'dayjs'

import Button from '../components/Button.js'
import Content from '../components/Content.js'
import Navbar from '../components/Navbar.js'
import Input from '../components/Input.js'

import useForm from '../hooks/useForm.js'

import HomeImg from '../img/home.svg'

const StatusMessage = styled.span`
  font-size: 0.8rem;
  align-self: center;
  color: tomato;
`

const Img = styled.img`
  display: block;
  height: 48px;
  width: 48px;
`

const CardMenu = styled.div`
  right: 0;
  left: 0;
  top: 20%;
  position: absolute;
  display: block;
  visibility: ${props => props.status ? 'visible' : 'hidden'};
  opacity: ${props => props.status ? '1' : '0'};
  border: 1px solid #ccc;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 20px;
  width: 250px;
  border-radius: 10px;
  background: #fff;
  transition: opacity 0.5s ease, visibility 0.5s ease;
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
  padding-top: 0px;
  border-bottom: 1px solid #ccc;
  border-radius: 0px;
`

const Apod = () => {
  const [cardStatus, setCardStatus] = useState(false)
  const [form, handleChange] = useForm({ date: '' })
  const [date, setDate] = useState('')
  const [disabled, setDisabled] = useState(false)

  const changeCardStatus = () => {
    setCardStatus(!cardStatus)
  }

  const changeDate = (e) => {
    const inputDate = dayjs(e.target.value)

    if (inputDate.isBefore(dayjs('1995-07-01'))) {
      setDate('Sorry, try after 1995-07-01')
      setDisabled(true)
    } else if (inputDate.isAfter(dayjs())) {
      setDate('Do you want to see the future?')
      setDisabled(true)
    } else {
      setDate('')
      setDisabled(false)
    }
  }

  return (
    <div>
      <Navbar>
        <a href={'/'}>
          <Img src={HomeImg} alt={'Home'} />
        </a>

        <Button onClick={changeCardStatus}>Search</Button>
      </Navbar>

      <CardMenu status={cardStatus}>
        <Form onSubmit={handleChange}>
            <CloseButton onClick={changeCardStatus}>X</CloseButton>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Input onChange={changeDate} type={'date'} name={'date'} />
              <StatusMessage>{date}</StatusMessage>
            </div>

            <Button disabled={disabled} onClick={changeCardStatus}>Search date</Button>
        </Form>
      </CardMenu>

      <Content data={form.apiData} />
    </div>
  )
}

export default Apod

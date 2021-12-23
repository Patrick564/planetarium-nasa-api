import styled from 'styled-components'
import { useState } from 'react'

import Button from '../components/Button.js'
import Content from '../components/Content.js'
import Navbar from '../components/Navbar.js'
import StyledInput from '../components/Input.js'

import useForm from '../hooks/useForm.js'

import HomeImg from '../img/home.svg'

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
  gap: 30px
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

  const changeCardStatus = () => {
    setCardStatus(!cardStatus)
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
            <StyledInput />
            <Button onClick={changeCardStatus}>Search date</Button>
        </Form>
      </CardMenu>

      <Content data={form.apiData} />
    </div>
  )
}

export default Apod

import { useState } from 'react'

import CardForm from '../components/CardForm.js'
import Content from '../components/Content.js'
import Input from '../components/Input.js'
import Image from '../components/Image.js'
import Navbar from '../components/Navbar.js'
import SpanMessage from '../components/SpanMessage.js'

import useApodForm from '../hooks/useApodForm.js'
import useValidateDate from '../hooks/useValidateDate.js'

import styled from 'styled-components'

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 5px 5px;
  padding: 15px 15px;
  border-radius: 15px;
  font-family: 'Rubik', sans-serif;
  box-shadow: 0 0 5px #133F47;
  color: #34B0C6;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`

const Explanation = styled.p`
  margin: 5px 5px;
  padding: 35px 35px;
  border-radius: 15px;
  color: #34B0C6;
  box-shadow: 0 0 5px #133F47;
`

const Apod = () => {
<<<<<<< HEAD
  // const [] useState({ visibility: false, blur: false })
  const [cardStatus, setCardStatus] = useState(false)
  const [form, handleChange] = useForm({ date: '' })
  const [status, validateDate] = useValidateDate({ message: '', disabledButton: false })

  const changeCardStatus = () => {
    setCardStatus(!cardStatus)
=======
  const [visibility, setVisibility] = useState(false)
  const [data, setData] = useApodForm({ date: '' })
  const [validate, setValidate] = useValidateDate({ message: '', disabledButton: false })

  const handleVisibility = () => {
    setVisibility(!visibility)
>>>>>>> refactor-apod
  }

  // CardMenu BackgroundMenu SearchForm

  return (
    <div>
      <CardForm
        visible={visibility}
        changeVisibility={handleVisibility}
        formSubmit={setData}
        submitButton={validate.disabledButton}
      >
        <label style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Input id={'date'} type={'date'} name={'date'} onChange={setValidate} />
          <SpanMessage message={validate.message} />
        </label>
      </CardForm>

      <Navbar changeVisibility={handleVisibility} />

      <Content>
        <Image src={data.apiData?.url} alt={'Loading'} />

        <Info>
          <Title>
            <h2>{data.apiData?.title}</h2>
            <span style={{ fontStyle: 'italic' }}>{data.apiData?.date}</span>
          </Title>

          <Explanation>{data.apiData?.explanation}</Explanation>
        </Info>
      </Content>
    </div>
  )
}

export default Apod

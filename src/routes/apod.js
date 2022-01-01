import { useState } from 'react'

import Button from '../components/Button.js'
import CardForm from '../components/CardForm.js'
import Content from '../components/Content.js'
import CloseButton from '../components/CloseButton.js'
import Image from '../components/Image.js'
import Input from '../components/Input.js'
import Navbar from '../components/Navbar.js'
import SpanMessage from '../components/SpanMessage.js'

import useApodForm from '../hooks/useApodForm.js'
import useValidateDate from '../hooks/useValidateDate.js'

import HomeImg from '../img/home.svg'

const Apod = () => {
  const [visibility, setVisibility] = useState(false)
  const [data, setData] = useApodForm({ date: '' })
  const [validate, setValidate] = useValidateDate({ message: '', disabledButton: false })

  const handleVisibility = () => {
    setVisibility(!visibility)
  }

  return (
    <div>
      <CardForm visible={visibility} changeVisibility={handleVisibility} formSubmit={setData}>
        <CloseButton close={handleVisibility} />

        <label style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Input id={'date'} type={'date'} name={'date'} onChange={setValidate} />
          <SpanMessage message={validate.message} />
        </label>

        <Button disabled={validate.disabledButton} onClick={handleVisibility}>Search date</Button>
      </CardForm>

      <Navbar>
        <a href={'/'}>
          <Image src={HomeImg} alt={'Home'} />
        </a>

        <Button onClick={handleVisibility}>Search</Button>
      </Navbar>

      <Content data={data.apiData} />
    </div>
  )
}

export default Apod

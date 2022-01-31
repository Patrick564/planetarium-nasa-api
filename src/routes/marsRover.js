import { useState } from 'react'

import Button from '../components/Button.js'
import CamerasGrid from '../components/CamerasGrid.js'
import CameraBtn from '../components/CameraBtn.js'
import CardForm from '../components/CardForm.js'
import Content from '../components/Content.js'
import Input from '../components/Input.js'
import Navbar from '../components/Navbar.js'
import PhotosGrid from '../components/PhotosGrid.js'
import Select from '../components/Select.js'
import SendBtn from '../components/SendBtn.js'

import useCardVisibility from '../hooks/useCardVisibility.js'
import useMarsForm from '../hooks/useMarsForm.js'
import useValidateDateMars from '../hooks/useValidateDateMars.js'
import SpanMessage from '../components/SpanMessage.js'

const MarsRover = () => {
  const [planet, setPlanet] = useState('earth_date')
  const [camerasImg, setCamerasImg] = useState('FHAZ')
  const [form, handleChange] = useMarsForm({})
  const [formVisibility, setFormVisibility] = useCardVisibility(false)
  const [camerasVisibility, setCamerasVisibility] = useCardVisibility(false)
  const [validate, setValidate] = useValidateDateMars({ message: '', disabledBtn: false })

  const camerasNames = Object.keys(form) || []

  const handleCamera = (e) => {
    setCamerasImg(e.target.value)
    setCamerasVisibility()
  }

  const handlePlanet = (e) => {
    setPlanet(e.target.value)
  }

  return (
    <div>
      <CardForm
        isVisible={formVisibility}
        changeVisibility={setFormVisibility}
        formSubmit={handleChange}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'stretch' }}>
          <Select name={'type'} value={planet} onChange={handlePlanet}>
            <option value={'earth_date'}>Earth Date</option>
            <option value={'sol'}>Martian Sol</option>
          </Select>

          {planet === 'earth_date' ?
            <Input name={'date'} type={'date'} onChange={setValidate} /> :
            <Input name={'date'} />
          }
          <SpanMessage message={validate.message} />

        </div>

        <SendBtn disabled={validate.disabledBtn} onClick={setFormVisibility}>Search date</SendBtn>
      </CardForm>

      <Navbar changeVisibility={setFormVisibility} />

      <Content directionCol={true}>
        <Button style={{ width: '250px' }} onClick={setCamerasVisibility}>Cameras</Button>

        <CardForm isVisible={camerasVisibility} changeVisibility={setCamerasVisibility}>
          <CamerasGrid>
            {camerasNames?.map((camera) => {
              return (
                <CameraBtn
                  key={camera}
                  value={camera}
                  type={'button'}
                  onClick={handleCamera}
                  selected={camerasImg === camera}
                  disabled={!form[camera]?.length}
                >
                  {camera}
                </CameraBtn>
              )
            })}
          </CamerasGrid>
        </CardForm>

        <PhotosGrid photos={form[camerasImg]} />
      </Content>
    </div>
  )
}

export default MarsRover

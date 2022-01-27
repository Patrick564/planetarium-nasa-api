import styled from 'styled-components'
import { useState } from 'react'

import Button from '../components/Button.js'
import CardForm from '../components/CardForm.js'
import Content from '../components/Content.js'
import Input from '../components/Input.js'
import Navbar from '../components/Navbar.js'
import PhotosGrid from '../components/PhotosGrid.js'
import Select from '../components/Select.js'

import useCardVisibility from '../hooks/useCardVisibility.js'
import useMarsForm from '../hooks/useMarsForm.js'

const CamerasGrid = styled.div`
  display: grid;
  grid-column: 2;
  gap: 15px;

  @media (min-width: 320px) and (max-width: 425px) {
    flex-direction: column;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
  }
`

const MarsRover = () => {
  const [camera, setCamera] = useState('FHAZ')
  const [form, handleChange] = useMarsForm({})
  const [formVisibility, setFormVisibility] = useCardVisibility(false)
  const [camerasVisibility, setCamerasVisibility] = useCardVisibility(false)

  const cameras = Object.keys(form) || []

  const handleCamera = (e) => {
    setCamera(e.target.value)
    setCamerasVisibility()
  }

  return (
    <div>
      <CardForm
        isVisible={formVisibility}
        changeVisibility={setFormVisibility}
        formSubmit={handleChange}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Select name={'type'}>
            <option value={'earth_date'} defaultValue>Earth Date</option>
            <option value={'sol'}>Martian Sol</option>
          </Select>

          <Input name={'date'} />
        </div>

        <Button disabled={''} onClick={setFormVisibility}>Search date</Button>
      </CardForm>

      <Navbar changeVisibility={setFormVisibility} />

      <Content directionCol={true}>
        <Button onClick={setCamerasVisibility}>Cameras</Button>

        <CardForm isVisible={camerasVisibility} changeVisibility={setCamerasVisibility}>
          <CamerasGrid>
            {/*<Button type={'button'} onClick={handleCamera} value={'FHAZ'}>FHAZ</Button>*/}
            {/*<Button type={'button'} onClick={handleCamera} value={'RHAZ'}>RHAZ</Button>*/}
            {/*<Button type={'button'} onClick={handleCamera} value={'MAST'}>MAST</Button>*/}
            {/*<Button type={'button'} onClick={handleCamera} value={'CHEMCAM'}>CHEMCAM</Button>*/}
            {/*<Button type={'button'} onClick={handleCamera} value={'MAHLI'}>MAHLI</Button>*/}
            {/*<Button type={'button'} onClick={handleCamera} value={'MARDI'}>MARDI</Button>*/}
            {/*<Button onClick={handleCamera} value={'NAVCAM'}>NAVCAM</Button>*/}
            {/*<Button onClick={handleCamera} value={'PANCAM'}>PANCAM</Button>*/}
            {/*<Button onClick={handleCamera} value={'MINITES'}>MINITES</Button>*/}

            {cameras.map((camera) => {
              return (
                <Button key={camera} type={'button'} onClick={handleCamera} value={camera}>{camera}</Button>
              )
            })}
          </CamerasGrid>
        </CardForm>

        <PhotosGrid photos={form[camera]} />
      </Content>
    </div>
  )
}

export default MarsRover

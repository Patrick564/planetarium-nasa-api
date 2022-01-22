import CardForm from '../components/CardForm.js'
import Content from '../components/Content.js'
import Input from '../components/Input.js'
import Navbar from '../components/Navbar.js'
import PhotosGrid from '../components/PhotosGrid.js'
import Select from '../components/Select.js'

import useMarsForm from '../hooks/useMarsForm.js'
import useCardVisibility from '../hooks/useCardVisibility.js'
import { useState } from 'react'
import Button from '../components/Button.js'
import styled from 'styled-components'

const CamerasGrid = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 35px;

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
  const [visibility, setVisibility] = useCardVisibility(false)

  const handleCamera = (e) => {
    setCamera(e.target.value)
  }

  return (
    <div>
      <CardForm
        visible={visibility}
        changeVisibility={setVisibility}
        formSubmit={handleChange}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Select name={'type'}>
            <option value={'earth_date'} defaultValue>Earth Date</option>
            <option value={'sol'}>Martian Sol</option>
          </Select>

          <Input name={'date'} />
        </div>
      </CardForm>

      <Navbar changeVisibility={setVisibility} />

      <Content directionCol={true}>
        <CamerasGrid>
          <Button onClick={handleCamera} value={'FHAZ'}>FHAZ</Button>
          <Button onClick={handleCamera} value={'RHAZ'}>RHAZ</Button>
          <Button onClick={handleCamera} value={'MAST'}>MAST</Button>
          <Button onClick={handleCamera} value={'CHEMCAM'}>CHEMCAM</Button>
          <Button onClick={handleCamera} value={'MAHLI'}>MAHLI</Button>
          <Button onClick={handleCamera} value={'MARDI'}>MARDI</Button>
          <Button onClick={handleCamera} value={'NAVCAM'}>NAVCAM</Button>
          <Button onClick={handleCamera} value={'PANCAM'}>PANCAM</Button>
          <Button onClick={handleCamera} value={'MINITES'}>MINITES</Button>
        </CamerasGrid>

        <PhotosGrid photos={form[camera]} />
      </Content>
    </div>
  )
}

export default MarsRover

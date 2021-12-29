import { useState } from 'react'

import Navbar from '../components/Navbar.js'
import PhotosGrid from '../components/PhotosGrid.js'

import useMarsForm from '../hooks/useMarsForm.js'

import Wrapper from '../components/Wrapper.js'
import CardMenu from "../components/CardMenu";
import styled from "styled-components";
import Button from "../components/Button";
import Select from "../components/Select";
import Input from "../components/Input";

const CloseButton = styled(Button)`
  background: #fff;
  color: black;
  padding-top: 0;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5px 5px;
  gap: 40px
`

const MarsRover = () => {
  const [form, handleChange] = useMarsForm({})
  const [cardStatus, setCardStatus] = useState(false)

  let photos = form?.apiData?.photos || []

  const changeCardStatus = () => {
    setCardStatus(!cardStatus)
  }

  return (
    <div>
      <Navbar>
        <Button onClick={changeCardStatus}>Search</Button>
      </Navbar>

      <CardMenu status={cardStatus}>
        <Form onSubmit={handleChange}>
          <CloseButton onClick={changeCardStatus}>X</CloseButton>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Select name={'type'}>
              <option value={'earth_date'} defaultValue>Earth Date</option>
              <option value={'sol'}>Martian Sol</option>
            </Select>

            <Input />

            <Select name={'camera'}>
              <option value={'fhaz'} defaultValue>Front Hazard Avoidance Camera</option>
              <option value={'rhaz'}>Rear Hazard Avoidance Camera</option>
              <option value={'mast'}>Mast Camera</option>
              <option value={'chemcam'}>Chemistry and Camera Complex</option>
              <option value={'mahli'}>Mars Hand Lens Imager</option>
              <option value={'mardi'}>Mars Descent Imager</option>
              <option value={'navcam'}>Navigation Camera</option>
              <option value={'pancam'}>Panoramic Camera</option>
              <option value={'minites'}>Miniature Thermal Emission Spectrometer (Mini-TES)</option>
            </Select>
          </div>

          <Button onClick={changeCardStatus}>Search photos</Button>
        </Form>
      </CardMenu>

      <Wrapper>
        <PhotosGrid photos={photos} />
      </Wrapper>
    </div>
  )
}

export default MarsRover

import Navbar from '../components/Navbar.js'
import MarsRoverForm from '../components/MarsRoverForm.js'
import PhotosGrid from '../components/PhotosGrid.js'

import useMarsForm from '../hooks/useMarsForm.js'

import Wrapper from '../components/Wrapper.js'

const MarsRover = () => {
  const [form, handleChange] = useMarsForm({})

  let photos = form?.apiData?.photos || []

  return (
    <div>
      <Navbar>
        <MarsRoverForm form={handleChange} />
      </Navbar>

      <Wrapper>
        <PhotosGrid photos={photos} />
      </Wrapper>
    </div>
  )
}

export default MarsRover

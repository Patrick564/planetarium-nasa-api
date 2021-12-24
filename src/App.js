import { Route, Routes } from 'react-router-dom'

import HomeSelector from './components/HomeSelector.js'

import Apod from './routes/apod.js'
import MarsRover from './routes/marsRover.js'

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<HomeSelector />} />
      <Route path={'/apod'} element={<Apod />} />
      <Route path={'/mars-rover'} element={<MarsRover />} />
    </Routes>
  )
}

export default App

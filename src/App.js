import { Route, Routes } from 'react-router-dom'

import Apod from './routes/apod.js'
import Home from './routes/home.js'
import MarsRover from './routes/marsRover.js'

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/apod'} element={<Apod />} />
      <Route path={'/mars-rover'} element={<MarsRover />} />
    </Routes>
  )
}

export default App

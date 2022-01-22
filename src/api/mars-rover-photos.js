import axios from 'axios'

const API_KEY = process.env.REACT_APP_NASA_API_KEY
const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${API_KEY}`

const MarsRoverPhotos = async (planet, date) => {
  const query = `&${planet}=${date}`
  const response = await axios.get(URL + query)

  return response.data
}

export default MarsRoverPhotos

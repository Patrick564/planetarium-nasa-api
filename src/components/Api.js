import axios from 'axios'

const API_KEY = process.env.REACT_APP_NASA_API_KEY
const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=`

const Api = async (date = '1998-08-08') => {
  const response = await axios.get(URL + date)

  return response.data
}

export default Api

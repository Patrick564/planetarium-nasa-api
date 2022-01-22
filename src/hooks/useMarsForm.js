import { useState, useEffect } from 'react'

import MarsRoverPhotos from '../api/mars-rover-photos'

const useMarsForm = (initialState) => {
  const [data, setData] = useState(initialState)

  const dividePhotos = (photos) => {
    let dividedPhotos = {
      FHAZ: [],
      RHAZ: [],
      MAST: [],
      CHEMCAM: [],
      MAHLI: [],
      MARDI: [],
      NAVCAM: [],
      PANCAM: [],
      MINITES: [],
    }

    photos.photos.forEach((photo) => {
      dividedPhotos[photo.camera.name].push(photo.img_src)
    })

    return dividedPhotos
  }

  const callApi = async (type, date) => {
    return await MarsRoverPhotos(type, date)
  }

  const handleChange = async (e) => {
    e.preventDefault()

    let type = e.target.type.value
    let date = e.target.date.value

    console.log(type, date)

    const apiData = await callApi(type, date)
    let filteredData = dividePhotos(apiData)

    setData({
      ...filteredData,
    })
  }

  useEffect(() => {
    const firstCall = async () => {
      const apiData = await callApi('earth_date', '2021-12-16')
      let filteredData = dividePhotos(apiData)

      setData(filteredData)
    }

    void firstCall()
  }, [])

  return [data, handleChange]
}

export default useMarsForm

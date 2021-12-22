import { useState, useEffect } from 'react'

import MarsRoverPhotos from '../api/mars-rover-photos'

const useMarsForm = (initialState) => {
  const [form, setForm] = useState(initialState)

  const callApi = async (type, date, camera, page) => {
    return await MarsRoverPhotos(type, date, camera, page)
  }

  const handleChange = async (e) => {
    e.preventDefault()

    let type = e.target.type.value
    let date = e.target.date.value
    let camera = e.target.camera.value

    const apiData = await callApi(type, date, camera, 1)

    setForm({
      ...form,
      apiData,
    })
  }

  useEffect(() => {
    const firstCall = async () => {
      const apiData = await callApi('earth_date', '2021-12-16', 'fhaz', 1)

      setForm({ apiData })
    }

    firstCall()
  }, [])

  return [form, handleChange]
}

export default useMarsForm

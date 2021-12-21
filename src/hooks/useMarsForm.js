import { useState, useEffect } from 'react'

import MarsRoverPhotos from '../api/mars-rover-photos'

const useMarsForm = (initialState) => {
  const [form, setForm] = useState(initialState)

  const callApi = async (planet, date, camera, page) => {
    return await MarsRoverPhotos(planet, date, camera, page)
  }

  const handleChange = async (e) => {
    e.preventDefault()

    const apiData = await callApi('earth_date', '2021-12-16', 'fhaz', 1)

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

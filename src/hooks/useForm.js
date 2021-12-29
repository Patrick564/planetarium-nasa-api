import { useState, useEffect } from 'react'

import Apod from '../api/apod.js'

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState)

  const callApi = async (date) => {
    return await Apod(date)
  }

  const handleChange = async (e) => {
    e.preventDefault()

    const apiData = await callApi(e.target.date.value)

    setForm({
      ...form,
      [e.target.date.name]: e.target.date.value,
      apiData,
    })
  }

  useEffect(() => {
    const firstCall = async () => {
      const apiData = await callApi('')

      setForm({ apiData })
    }

    void firstCall()
  }, [])

  return [form, handleChange]
}

export default useForm

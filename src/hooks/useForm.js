import { useState, useEffect } from 'react'

import Api from '../components/Api.js'

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState)

  const callApi = async (date) => {
    return await Api(date)
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
      const apiData = await callApi('1999-01-01')

      setForm({ apiData })
    }

    firstCall()
  }, [])

  return [form, handleChange]
}

export default useForm

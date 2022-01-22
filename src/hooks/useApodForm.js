import { useState, useEffect } from 'react'

import apodApi from '../api/apodApi.js'

const useApodForm = (initialState) => {
  const [data, setData] = useState(initialState)

  const callApi = async (date) => {
    return await apodApi(date)
  }

  const handleChange = async (e) => {
    e.preventDefault()

    const apiData = await callApi(e.target.date.value)

    setData({
      ...data,
      apiData,
    })
  }

  useEffect(() => {
    const firstCall = async () => {
      const apiData = await callApi('')

      setData({ apiData })
    }

    void firstCall()
  }, [])

  return [data, handleChange]
}

export default useApodForm

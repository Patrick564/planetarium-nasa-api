import dayjs from 'dayjs'
import { useState } from 'react'

// Format used is YYYY-DD-MM
const useValidateDateMars = (initialState) => {
  const [message, setMessage] = useState(initialState)

  const validateDate = (e) => {
    const inputDate = dayjs(e.target.value)

    if (inputDate.isBefore(dayjs('2012-09-01'))) {
      return setMessage({
        message: 'Sorry, try after 2012-09-01', disabledBtn: true
      })
    }

    if (inputDate.isAfter(dayjs())) {
      return setMessage({
        message: 'Do you want to see the future?', disabledBtn: true
      })
    }

    return setMessage({
      message: '', buttonDisabled: false
    })
  }

  return [message, validateDate]
}

export default useValidateDateMars

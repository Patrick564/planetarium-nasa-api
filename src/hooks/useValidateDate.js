import dayjs from 'dayjs'
import { useState } from 'react'

const useValidateDate = (initialState) => {
  const [message, setMessage] = useState(initialState)

  const validateDate = (e) => {
    const inputDate = dayjs(e.target.value)

    if (inputDate.isBefore(dayjs('1995-07-01'))) {
      return setMessage({
        message: 'Sorry, try after 1995-07-01', disabledButton: true
      })
    }

    if (inputDate.isAfter(dayjs())) {
      return setMessage({
        message: 'Do you want to see the future?', disabledButton: true
      })
    }

    return setMessage({
      message: '', buttonDisabled: false
    })
  }

  return [message, validateDate]
}

export default useValidateDate

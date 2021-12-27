import { useState } from 'react'
import dayjs from 'dayjs'

const useValidateDate = (initialState) => {
  const [status, setStatus] = useState(initialState)

  const validateDate = (e) => {
    const inputDate = dayjs(e.target.value)

    if (inputDate.isBefore(dayjs('1995-07-01'))) {
      return setStatus({
        message: 'Sorry, try after 1995-07-01', disabledButton: true
      })
    }

    if (inputDate.isAfter(dayjs())) {
      return setStatus({
        message: 'Do you want to see the future?', disabledButton: true
      })
    }

    return setStatus({
      message: '', buttonDisabled: false
    })
  }

  return [status, validateDate]
}

export default useValidateDate

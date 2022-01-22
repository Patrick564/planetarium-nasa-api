import { useState } from 'react'

const useCardVisibility = (initialState) => {
  const [visibility, setVisibility] = useState(initialState)

  const handleVisibility = () => {
    setVisibility(!visibility)
  }

  return [visibility, handleVisibility]
}

export default useCardVisibility

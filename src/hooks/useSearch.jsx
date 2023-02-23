import { useState } from 'react'

const useSearch = (initialState) => {
  const [form, setForm] = useState(initialState)

  const handleInput = (event) => {
    const {value} = event.target
    setForm(value)
  }

  return [form, handleInput]
}

export default useSearch
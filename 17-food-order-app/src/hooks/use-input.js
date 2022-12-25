import {useState} from "react";

function useInput(validateInput) {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)
  const isValid = validateInput(value) | !touched

  function reset() {
    setValue('')
    setTouched(false)
  }
  return {
    value,
    setValue,
    setTouched,
    reset,
    isValid,
  }
}

export default useInput

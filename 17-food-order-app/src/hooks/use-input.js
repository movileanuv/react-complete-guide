import {useState} from "react";

function useInput(validateInput) {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)
  const isValid = validateInput(value)
  const hasError = !isValid && touched

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
    hasError
  }
}

export default useInput

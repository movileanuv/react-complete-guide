import {useState} from "react";

function useInput(validateInput) {
  const [enteredValue, setValue] = useState('')
  const [touched, setTouched] = useState(false)
  const isValid = validateInput(enteredValue) | !touched

  function reset() {
    setValue('')
    setTouched(false)
  }
  return {
    setValue,
    setTouched,
    reset,
    isValid,
  }
}

export default useInput

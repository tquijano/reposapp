import { useEffect, useMemo, useState } from "react"

const useForm = ( initalState, validations ) => {

  const [inputs, setInputs] = useState(initalState)
  const [validatedInputs, setValidatedInputs] = useState()

  useEffect(() => {
    handleValidations()
  }, [inputs])
  
  const handleReset = () => {
    setInputs(initalState)
  }

  const handleInputChange = (e) => {
    setInputs( {...inputs, [e.target.name]: e.target.value })
  }

  const handleValidations = () => {
    const inputValidations = {}
    for( let input in  validations){
      inputValidations[`${input}Valid`] = validations[input](inputs[input])
    }
    setValidatedInputs(inputValidations)
  }

  const validForm = useMemo(() => {
    for (let value in validatedInputs) {
      if (validatedInputs[value] !== undefined) return false;
    }
    return true;
  }, [validatedInputs]);

  return { inputs, ...validatedInputs, validatedInputs, validForm, handleReset, handleInputChange }

}

export default useForm
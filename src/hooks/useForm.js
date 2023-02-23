import { useState } from "react"

const useForm = ( initalState ) => {

  const [inputs, setInputs] = useState(initalState)

  const handleReset = () => {
    setInputs(initalState)
  }

  const handleInputChange = (e) => {
    setInputs( {...inputs, [e.target.name]: e.target.value })
  }

  return { inputs, handleReset, handleInputChange }

}

export default useForm
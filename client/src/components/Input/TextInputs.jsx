import { useState } from 'react'
import { TextField, Button, Container, Typography, Box } from '@mui/material'

import isInteger from '../../utils/helper/isInteger'
import TextInput from './TextInput'

const TextInputFields = () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [error1, setError1] = useState('')
  const [error2, setError2] = useState('')

  const handleInput1Change = (event) => {
    const value = event.target.value
    setInput1(value)
    if (!isInteger(value) && value !== '') {
      setError1('Please enter a valid integer.')
    } else {
      setError1('')
    }
  }

  const handleInput2Change = (event) => {
    const value = event.target.value
    setInput2(value)
    if (!isInteger(value) && value !== '') {
      setError2('Please enter a valid integer.')
    } else {
      setError2('')
    }
  }

  const handleSubmit = () => {
    if (!error1 && !error2) {
      const num1 = parseInt(input1, 10) || 0
      const num2 = parseInt(input2, 10) || 0
      console.log(`Input 1: ${num1}, Input 2: ${num2}`)
    }
  }
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        GovTech CFT Intern Assignment
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center" gap="20px">
        <TextInput
          handleInputChange={handleInput1Change}
          error={error1}
          input={input1}
        />
        <TextInput
          handleInputChange={handleInput2Change}
          error={error2}
          input={input2}
        />

      </Box>
    </Container>
  )
}

export default TextInputFields

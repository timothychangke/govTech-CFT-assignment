import { useState } from 'react'
import {
  Container,
  Box,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material'

import isNumber from '../../utils/helper/isNumber'
import TextInput from './TextInput'
import Buttons from '../Button/Buttons'

const TextInputFields = () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [error1, setError1] = useState('')
  const [error2, setError2] = useState('')

  const handleInput1Change = (event) => {
    const value = event.target.value
    setInput1(value)
    if (!isNumber(value) && value !== '') {
      setError1('Please enter a valid number.')
    } else {
      setError1('')
    }
  }

  const handleInput2Change = (event) => {
    const value = event.target.value
    setInput2(value)
    if (!isNumber(value) && value !== '') {
      setError2('Please enter a valid number.')
    } else {
      setError2('')
    }
  }

  const handleSubmit = (operation) => {
    if (!error1 && !error2) {
      const num1 = parseInt(input1, 10) || 0
      const num2 = parseInt(input2, 10) || 0
      console.log(`Input 1: ${num1}, Input 2: ${num2}`)
    }
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 800,
          height: 'auto',
          bgcolor: 'background.paper',
          padding: 8,
          boxShadow: 3,
          borderRadius: 3,
        }}
      >
        <CardHeader
          title="GovTech CFT Intern Assignment"
          subheader="Timothy Chang"
          sx={{
            textAlign: 'center',
            color: 'black',
            padding: 2,
            '& .MuiCardHeader-title': {
              fontSize: '1.5rem',
              fontWeight: 'bold',
            },
          }}
        />
        <CardContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="20px"
          >
            <TextInput
              handleInputChange={handleInput1Change}
              error={error1}
              input={input1}
              inputText={'Input 1'}
            />
            <TextInput
              handleInputChange={handleInput2Change}
              error={error2}
              input={input2}
              inputText={'Input 2'}
            />
            <Buttons
              handleAddition={() => handleSubmit('addition')}
              handleSubtraction={() => handleSubmit('subtraction')}
              error1={error1}
              error2={error2}
            />
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default TextInputFields

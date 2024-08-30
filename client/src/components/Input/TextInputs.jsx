import { useState } from 'react'
import {
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material'

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
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
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
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleSubmit}
              disabled={error1 || error2}
            >
              Log Values
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default TextInputFields

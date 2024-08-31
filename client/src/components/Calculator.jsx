import { useState } from 'react'
import { Container, Box, Card, CardContent, CardHeader } from '@mui/material'

import isNumber from '../utils/helper/isNumber'
import TextInputs from './Input/TextInputs'
import Buttons from './Button/Buttons'
import Result from './Output/Result'
import styles from './Styling/calculator.module.css'

const Calculator = () => {
  const [result, setResult] = useState(null)
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    error1: '',
    error2: '',
  })

  const handleReset = () => {
    setInputs({
      input1: '',
      input2: '',
      error1: '',
      error2: '',
    })
    setResult(null)
  }

  const handleInputChange = (name, event) => {
    const inputToErrMap = { input1: 'error1', input2: 'error2' }
    const value = event.target.value
    setInputs((prevInputs) => {
      const isValid = isNumber(value) && value !== ''
      const errorMessage = isValid ? '' : 'Please enter a valid number.'
      return {
        ...prevInputs,
        [name]: value,
        [inputToErrMap[name]]: errorMessage,
      }
    })
  }

  const handleSubmit = async (operation) => {
    if (!inputs.error1 && !inputs.error2) {
      const num1 = parseFloat(inputs.input1) || 0
      const num2 = parseFloat(inputs.input2) || 0
      try {
        const response = await fetch('http://localhost:5000/calculate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            num1,
            num2,
            operation,
          }),
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setResult(data.result)
      } catch (error) {
        console.error('Error making POST request:', error)
        setResult('An error occurred')
      }
    }
  }

  return (
    <Container maxWidth="sm" className={styles.container}>
      <Card className={styles.card}>
        <CardHeader
          title="GovTech CFT Intern Assignment"
          subheader="Timothy Chang"
          className={styles.cardHeader}
          classes={{
            title: styles.cardTitle,
          }}
        />
        <CardContent className={styles.cardContent}>
          <Box className={styles.box}>
            <TextInputs handleInputChange={handleInputChange} inputs={inputs} />
            <Buttons
              handleAddition={() => handleSubmit('addition')}
              handleSubtraction={() => handleSubmit('subtraction')}
              error1={inputs.error1}
              error2={inputs.error2}
              handleReset={handleReset}
            />
            {result !== null && <Result result={result} />}
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Calculator

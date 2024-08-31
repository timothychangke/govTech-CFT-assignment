import { useState, useEffect } from 'react'
import { Container, Box, Card, CardContent, CardHeader } from '@mui/material'
import { toast } from 'react-hot-toast'

import isNumber from '../utils/helper/isNumber'
import TextInputs from './Input/TextInputs'
import Buttons from './Button/Buttons'
import Result from './Output/Result'
import styles from './Styling/calculator.module.css'

const MAX_SAFE_NUMBER = Number.MAX_SAFE_INTEGER
const MIN_SAFE_NUMBER = Number.MIN_SAFE_INTEGER

const Calculator = () => {
  const [result, setResult] = useState(null)
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    error1: '',
    error2: '',
  })

  useEffect(() => {
    const savedInputs = localStorage.getItem('calculatorState')
    if (savedInputs) {
      console.log('Loaded from localStorage:', savedInputs)
      setInputs(JSON.parse(savedInputs))
    } else {
      console.log('No data found in localStorage.')
    }
  }, [])

  useEffect(() => {
    console.log('Saving to localStorage:', inputs)
    if (
      inputs.input1 !== '' ||
      inputs.input2 !== '' ||
      inputs.error1 !== '' ||
      inputs.error2 !== ''
    ) {
      localStorage.setItem('calculatorState', JSON.stringify(inputs))
    }
  }, [inputs])

  const handleReset = () => {
    const defaultState = {
      input1: '',
      input2: '',
      error1: '',
      error2: '',
    }
    setInputs(defaultState)
    setResult(null)
    window.localStorage.setItem('calculatorState', JSON.stringify(defaultState));
  }

  const handleInputChange = (name, event) => {
    const inputToErrMap = { input1: 'error1', input2: 'error2' }
    const value = event.target.value
    const processedValue = value === '' ? '0' : value
    setInputs((prevInputs) => {
      const numericValue = Number(processedValue)
      let errorMessage = ''
      if (!isNumber(processedValue)) {
        errorMessage = 'Please enter a valid number.'
      } else if (numericValue > MAX_SAFE_NUMBER) {
        errorMessage = `Value exceeds maximum limit.`
      } else if (numericValue < MIN_SAFE_NUMBER) {
        errorMessage = `Value is below minimum limit.`
      }
      const newInputs = {
        ...prevInputs,
        [name]: value,
        [inputToErrMap[name]]: errorMessage,
      }
      // window.localStorage.setItem('calculatorState', JSON.stringify(newInputs));
      return newInputs
    })
  }

  const handleSubmit = async (operation) => {
    if (!inputs.error1 && !inputs.error2) {
      const num1 = parseFloat(inputs.input1) || 0
      const num2 = parseFloat(inputs.input2) || 0
      let res
      switch (operation) {
        case 'addition':
          res = num1 + num2
          console.log(res)
          break
        case 'subtraction':
          res = num1 - num2
          break
        default:
          toast.error('Invalid operation')
          return
      }
      if (res > MAX_SAFE_NUMBER) {
        toast.error('Operation exceeds maximum limit')
        return
      } else if (res < MIN_SAFE_NUMBER) {
        toast.error('Operation is below minimum limit')
      } else {
        try {
          const response = await fetch('http://localhost:5000/api/calculate', {
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

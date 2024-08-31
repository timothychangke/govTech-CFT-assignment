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

/**
 * Calculator component to perform basic arithmetic operations.
 * Supports input validation, result display via API call, reseting and local storage persistence.
 */
const Calculator = () => {
  // State to hold the result of the calculation
  const [result, setResult] = useState(null)

  // State to manage input values and error messages
  const [inputState, setInputState] = useState({
    input1: '',
    input2: '',
    error1: '',
    error2: '',
  })
  // Load saved state from localStorage when component is first mounted
  useEffect(() => {
    const savedInputs = localStorage.getItem('calculatorState')
    if (savedInputs) {
      setInputState(JSON.parse(savedInputs))
    }
  }, [])

  // Save the current state to localStorage whenever inputs change, only if input is non-null
  useEffect(() => {
    if (
      inputState.input1 !== '' ||
      inputState.input2 !== '' ||
      inputState.error1 !== '' ||
      inputState.error2 !== ''
    ) {
      localStorage.setItem('calculatorState', JSON.stringify(inputState))
    }
  }, [inputState])

  // Reset inputs and result, and clears the saved state stored in local storage
  const handleReset = () => {
    const defaultState = {
      input1: '',
      input2: '',
      error1: '',
      error2: '',
    }
    setInputState(defaultState)
    setResult(null)
    window.localStorage.setItem('calculatorState', JSON.stringify(defaultState))
  }

  // Handles changes to input fields by validating and updating the state.
  const handleInputChange = (name, event) => {
    const inputToErrMap = { input1: 'error1', input2: 'error2' }
    const inputValue = event.target.value
    const processedValue = inputValue === '' ? '0' : inputValue
    setInputState((prevInputs) => {
      const numericValue = Number(processedValue)
      let errorMessage = ''

      // Validate the input value
      if (!isNumber(processedValue)) {
        errorMessage = 'Please enter a valid number.'
      } else if (numericValue > MAX_SAFE_NUMBER) {
        errorMessage = `Value exceeds maximum limit.`
      } else if (numericValue < MIN_SAFE_NUMBER) {
        errorMessage = `Value is below minimum limit.`
      }

      // Update state with the new value and any validation errors
      const newInputs = {
        ...prevInputs,
        [name]: inputValue,
        [inputToErrMap[name]]: errorMessage,
      }
      return newInputs
    })
  }

  // Handles API requests
  const handleSubmit = async (operation) => {
    // Check for input errors before proceeding
    if (!inputState.error1 && !inputState.error2) {
      const num1 = parseFloat(inputState.input1) || 0
      const num2 = parseFloat(inputState.input2) || 0
      let result

      // Check for Integer Overflow or Underflow errors
      switch (operation) {
        case 'addition':
          result = num1 + num2
          console.log(result)
          break
        case 'subtraction':
          result = num1 - num2
          break
        default:
          toast.error('Invalid operation')
          return
      }
      if (result > MAX_SAFE_NUMBER) {
        toast.error('Operation exceeds maximum limit')
        return
      } else if (result < MIN_SAFE_NUMBER) {
        toast.error('Operation is below minimum limit')
      } else {
        //// Send the calculation request to the backend
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
    <Container
      maxWidth="sm"
      className={styles.container}
      data-testid="calculator"
    >
      <Card className={styles.card} data-testid="calculator-card">
        <CardHeader
          title="GovTech CFT Intern Assignment"
          subheader="Timothy Chang"
          className={styles.cardHeader}
          classes={{
            title: styles.cardTitle,
          }}
        />
        <CardContent className={styles.cardContent}>
          <Box className={styles.box} data-testid="calculator-box">
            <TextInputs
              handleInputChange={handleInputChange}
              inputs={inputState}
            />
            <Buttons
              handleAddition={() => handleSubmit('addition')}
              handleSubtraction={() => handleSubmit('subtraction')}
              error1={inputState.error1}
              error2={inputState.error2}
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

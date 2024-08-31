import React from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Calculator from '../Calculator'

afterEach(cleanup)

describe('Calculator Component', () => {
  test('Should render the Calculator component', () => {
    render(<Calculator />)
    const calculatorElement = screen.getByTestId('calculator')
    expect(calculatorElement).toBeInTheDocument()
  })

  test('Should have two input fields', () => {
    render(<Calculator />)
    const input1 = screen.getByTestId('input1')
    const input2 = screen.getByTestId('input2')
    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()
  })

  test('Should have addition and subtraction buttons', () => {
    render(<Calculator />)
    const addButton = screen.getByTestId('addition-button')
    const subtractButton = screen.getByTestId('subtraction-button')
    expect(addButton).toBeInTheDocument()
    expect(subtractButton).toBeInTheDocument()
  })

  test('Should not display result initially', () => {
    render(<Calculator />)
    const result = screen.queryByTestId('result')
    expect(result).not.toBeInTheDocument()
  })

  test('Should display result after addition', async () => {
    render(<Calculator />)

    const input1 = screen.getByTestId('input1').querySelector('input')
    const input2 = screen.getByTestId('input2').querySelector('input')
    const addButton = screen.getByTestId('addition-button')

    await userEvent.type(input1, '5')
    await userEvent.type(input2, '3')
    await userEvent.click(addButton)

    const result = await screen.findByTestId('result')
    console.log(result.textContent)
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent('Result: 8')
  })

  test('Should display result after subtraction', async () => {
    render(<Calculator />)

    const input1 = screen.getByTestId('input1').querySelector('input')
    const input2 = screen.getByTestId('input2').querySelector('input')
    const subtractButton = screen.getByTestId('subtraction-button')

    await userEvent.clear(input1)
    await userEvent.clear(input2)

    await userEvent.type(input1, '10')
    await userEvent.type(input2, '1')
    await userEvent.click(subtractButton)

    const result = await screen.findByTestId('result')
    console.log(result.textContent)
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent('Result: 9')
  })

  test('Should display result correctly with large numbers for addition', async () => {
    render(<Calculator />)

    const input1 = screen.getByTestId('input1').querySelector('input')
    const input2 = screen.getByTestId('input2').querySelector('input')
    const addButton = screen.getByTestId('addition-button')

    await userEvent.clear(input1)
    await userEvent.clear(input2)

    await userEvent.type(input1, '1000000')
    await userEvent.type(input2, '5000000')
    await userEvent.click(addButton)

    const result = await screen.findByTestId('result')
    console.log(result.textContent)
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent('Result: 6000000')
  })

  test('Should display result correctly with large numbers for subtraction', async () => {
    render(<Calculator />)

    const input1 = screen.getByTestId('input1').querySelector('input')
    const input2 = screen.getByTestId('input2').querySelector('input')
    const subtractButton = screen.getByTestId('subtraction-button')

    await userEvent.clear(input1)
    await userEvent.clear(input2)

    await userEvent.type(input1, '10000000')
    await userEvent.type(input2, '999999')
    await userEvent.click(subtractButton)

    const result = await screen.findByTestId('result')
    console.log(result.textContent)
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent('Result: 9000001')
  })
  test('Should display result correctly with large numbers for addition', async () => {
    render(<Calculator />)

    const input1 = screen.getByTestId('input1').querySelector('input')
    const input2 = screen.getByTestId('input2').querySelector('input')
    const addButton = screen.getByTestId('addition-button')

    await userEvent.clear(input1)
    await userEvent.clear(input2)

    await userEvent.type(input1, '1000000')
    await userEvent.type(input2, '5000000')
    await userEvent.click(addButton)

    const result = await screen.findByTestId('result')
    console.log(result.textContent)
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent('Result: 6000000')
  })

  test('Should display result correctly with large numbers for subtraction', async () => {
    render(<Calculator />)

    const input1 = screen.getByTestId('input1').querySelector('input')
    const input2 = screen.getByTestId('input2').querySelector('input')
    const subtractButton = screen.getByTestId('subtraction-button')

    await userEvent.clear(input1)
    await userEvent.clear(input2)

    await userEvent.type(input1, '10000000')
    await userEvent.type(input2, '999999')
    await userEvent.click(subtractButton)

    const result = await screen.findByTestId('result')
    console.log(result.textContent)
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent('Result: 9000001')
  })

  test('Should display result correctly with floating point numbers for addition', async () => {
    render(<Calculator />)

    const input1 = screen.getByTestId('input1').querySelector('input')
    const input2 = screen.getByTestId('input2').querySelector('input')
    const addButton = screen.getByTestId('addition-button')

    await userEvent.clear(input1)
    await userEvent.clear(input2)

    await userEvent.type(input1, '1.234')
    await userEvent.type(input2, '2.345')
    await userEvent.click(addButton)

    const result = await screen.findByTestId('result')
    console.log(result.textContent)
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent('Result: 3.579')
  })

  test('Should display result correctly with floating point numbers for subtraction', async () => {
    render(<Calculator />)

    const input1 = screen.getByTestId('input1').querySelector('input')
    const input2 = screen.getByTestId('input2').querySelector('input')
    const subtractButton = screen.getByTestId('subtraction-button')

    await userEvent.clear(input1)
    await userEvent.clear(input2)

    await userEvent.type(input1, '5.678')
    await userEvent.type(input2, '2.345')
    await userEvent.click(subtractButton)

    const result = await screen.findByTestId('result')
    console.log(result.textContent)
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent('Result: 3.333')
  })

  test('Should display result correctly with negative numbers for addition', async () => {
    render(<Calculator />)

    const input1 = screen.getByTestId('input1').querySelector('input')
    const input2 = screen.getByTestId('input2').querySelector('input')
    const addButton = screen.getByTestId('addition-button')

    await userEvent.clear(input1)
    await userEvent.clear(input2)

    await userEvent.type(input1, '-5')
    await userEvent.type(input2, '3')
    await userEvent.click(addButton)

    const result = await screen.findByTestId('result')
    console.log(result.textContent)
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent('Result: -2')
  })

  test('Should display result correctly with negative numbers for subtraction', async () => {
    render(<Calculator />)

    const input1 = screen.getByTestId('input1').querySelector('input')
    const input2 = screen.getByTestId('input2').querySelector('input')
    const subtractButton = screen.getByTestId('subtraction-button')

    await userEvent.clear(input1)
    await userEvent.clear(input2)

    await userEvent.type(input1, '-10')
    await userEvent.type(input2, '4')
    await userEvent.click(subtractButton)

    const result = await screen.findByTestId('result')
    console.log(result.textContent)
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent('Result: -14')
  })

  test('Should handle addition with zero', async () => {
    render(<Calculator />)

    const input1 = screen.getByTestId('input1').querySelector('input')
    const input2 = screen.getByTestId('input2').querySelector('input')
    const addButton = screen.getByTestId('addition-button')

    await userEvent.clear(input1)
    await userEvent.clear(input2)

    await userEvent.type(input1, '0')
    await userEvent.type(input2, '7')
    await userEvent.click(addButton)

    const result = await screen.findByTestId('result')
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent('Result: 7')
  })

  test('Should handle subtraction with zero', async () => {
    render(<Calculator />)

    const input1 = screen.getByTestId('input1').querySelector('input')
    const input2 = screen.getByTestId('input2').querySelector('input')
    const subtractButton = screen.getByTestId('subtraction-button')

    await userEvent.clear(input1)
    await userEvent.clear(input2)

    await userEvent.type(input1, '5')
    await userEvent.type(input2, '0')
    await userEvent.click(subtractButton)

    const result = await screen.findByTestId('result')
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent('Result: 5')
  })

  test('Should handle floating point precision correctly', async () => {
    render(<Calculator />)

    const input1 = screen.getByTestId('input1').querySelector('input')
    const input2 = screen.getByTestId('input2').querySelector('input')
    const addButton = screen.getByTestId('addition-button')

    await userEvent.clear(input1)
    await userEvent.clear(input2)

    await userEvent.type(input1, '0.1')
    await userEvent.type(input2, '0.2')
    await userEvent.click(addButton)

    const result = await screen.findByTestId('result')
    expect(result).toBeInTheDocument()
    expect(result).toHaveTextContent('Result: 0.3')
  })
})

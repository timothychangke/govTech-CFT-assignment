module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};
const Calculator = require('./Calculator').default;


test('renders and calculates addition correctly', () => {
    render(<Calculator />);
  
    // Input fields
    const input1 = screen.getByTestId('input1');
    const input2 = screen.getByTestId('input2');
    const addButton = screen.getByTestId('addition-button');
  
    // Set values and perform addition
    fireEvent.change(input1, { target: { value: '5' } });
    fireEvent.change(input2, { target: { value: '3' } });
    fireEvent.click(addButton);
  
    // Assert the result
    expect(screen.getByTestId('result')).toHaveTextContent('8');
  });
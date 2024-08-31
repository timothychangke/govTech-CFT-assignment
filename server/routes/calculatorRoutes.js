import { Router } from 'express';

const router = Router();

//Input limits for data validation
const MAX_SAFE_NUMBER = Number.MAX_SAFE_INTEGER;
const MIN_SAFE_NUMBER = Number.MIN_SAFE_INTEGER;
const MIN_VALUE = 1e-10;

// POST route to perform calculations
router.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;

  let result = null;

  // Convert inputs to floats. If empty, treat as 0
  const number1 = parseFloat(num1) || 0;
  const number2 = parseFloat(num2) || 0;

  // Perform the requested operation
  switch (operation) {
    case 'addition':
      result = number1 + number2;
      break;
    case 'subtraction':
      result = number1 - number2;
      break;
    default:
      return res.status(400).json({ error: 'Invalid operation. Supported operations: addition, subtraction.' });
  }

  // Check if the result is within the safe integer range
  if (result > MAX_SAFE_NUMBER) {
    return res.status(400).json({ error: 'Operation exceeds maximum limit' });
  } else if (result < MIN_SAFE_NUMBER) {
    return res.status(400).json({ error: 'Operation is below minimum limit' });
  }

  // Handle extremely small results
  if (Math.abs(result) < MIN_VALUE) {
    result = 0;
  }
  const resultString = result.toString();
  const decimalPlaces = resultString.includes('.') ? resultString.split('.')[1].length : 0;

  // Limit the decimal places to 3
  if (decimalPlaces > 3) {
    result = parseFloat(result.toFixed(3));
  }
  
  // Send the result back to the client
  res.json({ result });
});

export default router;

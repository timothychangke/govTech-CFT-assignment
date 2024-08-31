import { Router } from 'express';

const router = Router();
const MAX_SAFE_NUMBER = Number.MAX_SAFE_INTEGER;
const MIN_SAFE_NUMBER = Number.MIN_SAFE_INTEGER;
const MIN_VALUE = 1e-10;

router.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;

  let result = null;

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({ error: 'Invalid input: num1 and num2 should be numbers.' });
  }

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
  if (result > MAX_SAFE_NUMBER) {
    return res.status(400).json({ error: 'Operation exceeds maximum limit' });
  } else if (result < MIN_SAFE_NUMBER) {
    return res.status(400).json({ error: 'Operation is below minimum limit' });
  }
  if (Math.abs(result) < MIN_VALUE) {
    result = 0;
  }
  const resultString = result.toString();
  const decimalPlaces = resultString.includes('.') ? resultString.split('.')[1].length : 0;

  if (decimalPlaces > 3) {
    result = parseFloat(result.toFixed(3));
  }
  res.json({ result });
});

export default router;

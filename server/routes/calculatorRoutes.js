import { Router } from 'express';

const router = Router();

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
  const resultString = result.toString();
  const decimalPlaces = resultString.includes('.') ? resultString.split('.')[1].length : 0;

  if (decimalPlaces > 3) {
    result = parseFloat(result.toFixed(3));
  }
  res.json({ result });
});

export default router;

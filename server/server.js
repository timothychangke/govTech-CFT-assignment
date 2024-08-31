import express, { json } from 'express';
import cors from 'cors';
import calculatorRoutes from './routes/calculatorRoutes.js'

const app = express();
const PORT = 5000;

app.use(cors());
app.use(json()); 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', calculatorRoutes); 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

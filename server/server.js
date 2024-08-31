import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import calculatorRoutes from './routes/calculatorRoutes.js'

const app = express();
const PORT = 5000;

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

//Middleware to set security headers
app.use(helmet())

// Middleware to parse incoming JSON requests
app.use(json()); 

// Route to handle root requests and to see if backend is up and running
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use calculatorRoutes for all '/api' routes 
app.use('/api', calculatorRoutes); 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

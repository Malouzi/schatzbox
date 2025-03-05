import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import productRoute from './routes/productRoute.js';
import { connect } from './utils/db.js';

config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/product', productRoute);


//Error Middleware
app.use((err, req, res, next) => {
    console.error(err);
    return res.sendStatus(500);
  });
  
  
  // Zuvor müssen alle Verbindungen stehen, bevor der Server offengelegt
  connect().then(() => {
    app.listen(PORT, () => console.log(`Listen at http://localhost:${PORT}`));
  });

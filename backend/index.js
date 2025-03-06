import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import productRoute from './routes/productRoute.js';
import { connect } from './utils/db.js';
import autRouter from './routes/autRouter.js';
import bodyParser from 'body-parser';
import orderRouter from './routes/orderRouter.js';
import userRouter from './routes/userRouter.js';

config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/product', productRoute);

app.use('/auth', autRouter);

app.use("/orders", orderRouter);

app.use("/users", userRouter);

// Error Middleware
app.use((err, req, res, next) => {
    console.error(err);
    return res.sendStatus(500);
});
  
  connect().then(() => {
    app.listen(PORT, () => console.log(`Listen at http://localhost:${PORT}`));
  });

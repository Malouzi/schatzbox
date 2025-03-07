import express from 'express';
import Order from '../models/OrderModel.js';

const router = express.Router();

router.get('/orders', async (req, res, next) => {
    try {
        res.json( await Order.find({}));
    }
    catch (error) {
        next(error);
    }
});

export default router;
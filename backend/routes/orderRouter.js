import express from 'express';
import Order from '../models/OrderModel.js';

const router = express.Router();


router.post ('/order', async (req, res, next) => {
    const {userId, productId, date, status, notes} = req.body;
    try {
        if (!userId || !productId) {
            return res.status(400).json({ message: 'Missing required fields' });
            }

        const order = await Order.create({ userId, productId, date, status, notes });
        res.status(201).json(order);
    } catch (error) {
        next(error);
    }

});



export default router;
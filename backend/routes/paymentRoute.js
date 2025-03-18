import express from 'express';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.post('/confirm-prepayment', verifyToken, async (req, res, next) => {
    const { orderId } = req.body;

    try {
        res.status(200).json({ message: 'Zahlung per Vorkasse bestätigt', orderId });
    } catch (error) {
        next(error);
    }
});

export default router;

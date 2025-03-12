import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

// Zahlungsintent erstellen
router.post('/create-payment-intent', verifyToken, async (req, res, next) => {
    const { amount, currency } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        next(error);
    }
});

// Zahlungsbestätigung
router.post('/confirm-payment', verifyToken, async (req, res, next) => {
    const { paymentIntentId } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
        res.status(200).json({ paymentIntent });
    } catch (error) {
        next(error);
    }
});

export default router;

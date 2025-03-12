import express from 'express';
import paypal from '@paypal/checkout-server-sdk';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

// PayPal-Umgebung konfigurieren
const environment = new paypal.core.SandboxEnvironment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET);
const client = new paypal.core.PayPalHttpClient(environment);

// Zahlungsanfrage erstellen
router.post('/create-payment', verifyToken, async (req, res, next) => {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD',
                value: req.body.amount,
            },
        }],
    });

    try {
        const order = await client.execute(request);
        res.status(200).json({ id: order.result.id });
    } catch (error) {
        next(error);
    }
});

// Zahlungsbestätigung
router.post('/capture-payment/:orderId', verifyToken, async (req, res, next) => {
    const request = new paypal.orders.OrdersCaptureRequest(req.params.orderId);
    request.requestBody({});

    try {
        const capture = await client.execute(request);
        res.status(200).json(capture.result);
    } catch (error) {
        next(error);
    }
});

export default router;
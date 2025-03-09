import express from 'express';
import Cart from '../models/CartModel.js';
import Order from '../models/OrderModel.js';
import Stripe from 'stripe';
import paypal from 'paypal-rest-sdk';

const stripe = new Stripe('YOUR_STRIPE_SECRET_KEY'); 
const router = express.Router();

// PayPal-Konfiguration
paypal.configure({
    'mode': 'sandbox', 
    'client_id': 'YOUR_PAYPAL_CLIENT_ID',
    'client_secret': 'YOUR_PAYPAL_CLIENT_SECRET'
});

// Hinzufügen eines Produkts zum Warenkorb
router.post('/', async (req, res, next) => {
    const { userId, productId, quantity } = req.body;
    try {
        if (!userId || !productId || !quantity) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const cart = await Cart.findOneAndUpdate(
            { userId },
            { $addToSet: { products: { productId, quantity } } },
            { new: true, upsert: true }
        );

        res.status(201).json(cart);
    } catch (error) {
        next(error);
    }
});

// Checkout-Prozess
router.post('/checkout', async (req, res, next) => {
    const { userId, paymentInfo } = req.body;
    try {
        if (!userId || !paymentInfo) {
            return res.status(400).json({ message: 'Missing userId or paymentInfo' });
        }

        let paymentIntent;
        if (paymentInfo.method === 'stripe') {
            paymentIntent = await stripe.paymentIntents.create({
                amount: paymentInfo.amount, 
                currency: 'eur', 
                payment_method: paymentInfo.paymentMethodId,
                confirmation_method: 'manual',
                confirm: true,
            });
        } else if (paymentInfo.method === 'paypal') {
            const create_payment_json = {
                intent: 'sale',
                payer: {
                    payment_method: 'paypal'
                },
                redirect_urls: {
                    return_url: 'http://return.url',
                    cancel_url: 'http://cancel.url'
                },
                transactions: [{
                    amount: {
                        currency: 'EUR',
                        total: (paymentInfo.amount / 100).toFixed(2)
                    },
                    description: 'Order description'
                }]
            };

            paypal.payment.create(create_payment_json, function (error, payment) {
                if (error) {
                    console.error(error);
                    return res.status(400).json({ message: 'Payment failed' });
                } else {
                    paymentIntent = payment;
                }
            });
        }

        if (paymentInfo.method === 'stripe' && paymentIntent.status !== 'succeeded') {
            return res.status(400).json({ message: 'Stripe payment failed' });
        } else if (paymentInfo.method === 'paypal' && paymentIntent.state !== 'approved') {
            return res.status(400).json({ message: 'PayPal payment failed' });
        }

        // Warenkorb abrufen
        const cart = await Cart.findOne({ userId });
        if (!cart || cart.products.length === 0) {
            return res.status(404).json({ message: 'Cart not found or empty' });
        }

        // Bestellung erstellen
        const order = await Order.create({
            userId,
            products: cart.products,
            date: new Date(),
            status: 'Pending',
            notes: 'Order placed via checkout'
        });

        // Warenkorb leeren
        await Cart.findOneAndUpdate({ userId }, { $set: { products: [] } });

        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        next(error);
    }
});

// Abrufen des Warenkorbs
router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        return res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
});

// Löschen eines Produkts aus dem Warenkorb
router.delete('/:userId/:productId', async (req, res) => {
    try {
        const { userId, productId } = req.params;

        const cart = await Cart.findOneAndUpdate(
            { userId },
            { $pull: { products: { productId } } },
            { new: true }
        );

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        return res.status(200).json({ message: 'Product removed from cart', cart });
    } catch (error) {
        next(error);
    }
});

// Aktualisieren der Menge eines Produkts im Warenkorb
router.put('/:userId/:productId', async (req, res) => {
    try {
        const { userId, productId } = req.params;
        const { quantity } = req.body;

        const cart = await Cart.findOneAndUpdate(
            { userId, 'products.productId': productId },
            { $set: { 'products.$.quantity': quantity } },
            { new: true }
        );

        if (!cart) {
            return res.status(404).json({ message: 'Cart or product not found' });
        }

        return res.status(200).json({ message: 'Product quantity updated', cart });
    } catch (error) {
        next(error);
    }
});

export default router;

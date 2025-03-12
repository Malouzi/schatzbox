import express from 'express';
import Cart from '../models/CartModel.js';

const router = express.Router();

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

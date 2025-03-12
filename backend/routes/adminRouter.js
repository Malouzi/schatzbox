import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import User from '../models/UserModel.js';
import Order from '../models/OrderModel.js';
import Product from '../models/productModel.js';

const router = express.Router();

// Zeige alle Produkte
router.get('/products', verifyToken, async (req, res, next) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        next(error);
    }
});

// Zeige alle User
router.get('/users', verifyToken, async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        next(error);
    }
});

 
// Zeige alle Bestellungen
router.get('/orders', verifyToken, async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        next(error);
    }
});

// Erstelle eine neue Bestellung
router.post('/orders', verifyToken, async (req, res, next) => {
    try {
        const { userId, products, totalAmount } = req.body;
        const newOrder = new Order({ userId, products, totalAmount });
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        next(error);
    }
});

// Aktualisiere eine Bestellung
router.put('/orders/:id', verifyToken, async (req, res, next) => {
    try {
        const { id } = req.params;
        const { userId, products, totalAmount } = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(id, { userId, products, totalAmount }, { new: true });
        res.json(updatedOrder);
    } catch (error) {
        next(error);
    }
});

// Lösche eine Bestellung
router.delete('/orders/:id', verifyToken, async (req, res, next) => {
    try {
        const { id } = req.params;
        await Order.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
});

export default router;

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

export default router;

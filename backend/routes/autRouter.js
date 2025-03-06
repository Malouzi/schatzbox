import express from 'express';
import { User } from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import { verifyToken } from '../middleware/jwt.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Register Endpoint
//localhost:3000/auth/register
router.post('/register', async (req, res, next) => {
    const { email, password, roles } = req.body;
    try {
        if (
            !email || 
            !password
        ) {
            return res.status(400).send({ message: 'Required fields are missing' 
            });
          }
          const user = await User.findOne({ email });
          if (user) {
            return res.status(400).send({ message: 'Email already exists' });
            }

        const newUser =  await User.create({ email, password, roles });
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        next (error);
    }
});

//Login Endpoint
router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    let user = null;
    let roles = null;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        if (user.roles === 'User'){
            roles = 'User'
            } else if (user.roles === 'ADMIN'){
                roles = 'ADMIN'
        }       
        const token = jwt.sign( { userId: user._id, roles: user.roles }, // Rolle wird mitgeschickt
            process.env.JWT_SECRET,
            { expiresIn: "1d" } ); 
        res.status(200).json({ message: 'Login successful', token, email: user.email, roles: user.roles });
    } catch (error) {
        next (error);
    }
});

export default router;

import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();



const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.userId = decoded.id;
        next();
    });
};

//Admin middleware
const isAdmin = (req, res, next) => {
    if (req.userId && req.userRole === 'admin') {
        next();
    } else {
        return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
};

//User middleware
const isUser = (req, res, next) => {
    if (req.userId) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized. Please log in.' });
    }
};


export { verifyToken };

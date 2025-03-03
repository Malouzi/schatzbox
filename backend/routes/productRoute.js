import express from 'express';
import { Product } from '../models/productModel.js';

const router = express.Router();

//CREATE A NEW PRODUCT ROUTE
router.post('/', async (req, res) => {
    try {
      if (
        !req.body.name || 
        !req.body.price || 
        !req.body.imageUrl
    ) {
        return res.status(400).send({ message: 'Required fields are missing' 
        });
      }

        const newProduct = {
            name: req.body.name,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
        };

        const product = await Product.create(newProduct);

        return res.status(201).send(product);

    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
});


export default router;
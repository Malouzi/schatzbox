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

//GET ALL PRODUCTS ROUTE
router.get('/', async (req, res) => {
  try {
    const product = await Product.find({});

    return res.status(200).json({
      data: product
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
  });

//GET PRODUCT ROUTE
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    return res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
      }
      });

//DELETE PRODUCT ROUTE
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Product.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
      }
      return res.status(200).json({ message: 'Product deleted successfully', deletedItem: result });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
    }
    });

//UPDATE PRODUCT ROUTE


export default router;
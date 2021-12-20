import express from 'express';
import products from './routes/products.routes.js';

const router = express.Router();
router.use('/products', products);

export default router;

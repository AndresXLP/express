import { Router } from 'express';
import {
  allProducts,
  createProduct,
  oneProduct,
  updateProduct,
  deleteById,
} from '../controllers/products.controllers.js';

const router = Router();

router.route('/').get(allProducts).post(createProduct);
router.route('/:id').get(oneProduct).put(updateProduct).delete(deleteById);

export default router;

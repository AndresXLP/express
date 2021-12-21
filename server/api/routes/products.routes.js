import { Router } from 'express';
import {
  allProducts,
  createProduct,
  oneProduct,
  updateProduct,
  deleteById,
  validId,
} from '../controllers/products.controllers.js';

const router = Router();

router.route('/').get(allProducts).post(createProduct);
router.param('id', validId);
router.route('/:id').get(oneProduct).put(updateProduct).delete(deleteById);

export default router;

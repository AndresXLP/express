import { validationResult } from 'express-validator';
import { Product } from '../models/product.model.js';
import HttpError from '../models/error.model.js';

const validId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Product.findById(id).select('-__v');
    if (data) {
      req.doc = data;
      next();
    } else {
      return new HttpError('Product Not Found', 404);
    }
  } catch {
    return next(new HttpError('Invalid Product ID', 404));
  }
};

const createProduct = async (req, res, next) => {
  const { body = {} } = req;
  const newDocument = new Product(body);
  try {
    const data = await newDocument.save();
    const status = 201;
    return res.status(status).json({ data });
  } catch (error) {
    return next(
      new HttpError('Create product failed, please try again leter', 500)
    );
  }
};

const allProducts = async (req, res, next) => {
  try {
    const data = await Product.find({}).select('-__v');
    res.json({ data });
  } catch (error) {
    next(
      new HttpError('Fetching products failed, please try again later', 500)
    );
  }
};

const oneProduct = async (req, res, next) => {
  const { doc = {} } = req;
  res.json({ data: doc });
};

const updateProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(errors);
  }
  const { doc = {}, body = {} } = req;
  if (typeof body.productName === 'string') {
    doc.productName = body.productName;
  }
  if (typeof body.price === 'number') {
    doc.price = body.price;
  }
  if (typeof body.quantity === 'number') {
    doc.quantity = body.quantity;
  }
  try {
    console.log('doc', doc);
    const data = await doc.save();
    return res.json({ data });
  } catch (error) {
    return next(
      new HttpError('Updating data failed, please try again later', 500)
    );
  }
};

const deleteById = async (req, res, next) => {
  const { doc = {} } = req;
  try {
    const data = await doc.remove();
    res.json({ data });
  } catch (error) {
    next(error);
  }
};
export {
  allProducts,
  oneProduct,
  createProduct,
  updateProduct,
  deleteById,
  validId,
};

import { Product } from '../models/product.model.js';
import HttpError from '../models/error.model.js';

const allProducts = (req, res) => {
  const products = Product.fetchAll();
  console.log(products);
  res.json(products);
};

const oneProduct = (req, res, next) => {
  const { id } = req.params;
  const product = Product.fetchById(id);
  if (!product) return next(new HttpError('Invalid Product ID', 404));
  return res.json({ product });
};

const createProduct = (req, res) => {
  const { title } = req.body;
  const product = new Product(title);
  product.save();
  res.redirect('/admin/products');
};

const updateProduct = (req, res, next) => {
  const { id } = req.params;
  const { title } = req.body;
  const product = Product.fetchById(id);
  if (!product) return next(new HttpError('Invalid Product ID', 404));
  Product.update(id, { title });
  return res.redirect('/admin/products');
};

const deleteById = (req, res, next) => {
  const { id } = req.params;
  const product = Product.fetchById(id);
  if (!product) return next(new HttpError('Invalid Product ID', 404));
  Product.deleteById(id);
  return res.redirect('/admin/products');
};
export { allProducts, oneProduct, createProduct, updateProduct, deleteById };

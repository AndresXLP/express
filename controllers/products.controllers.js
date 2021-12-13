import { Product } from "../models/product.model.js";

export const getAddProduct = (req, res) => {
  res.status(200).sendFile("add_product.html", { root: "./views" });
};

export const postAddProduct = (req, res) => {
  const { title } = req.body;
  const product = new Product(title);
  product.save();
  const products = Product.fetchAll();
  console.log(products);
  res.status(200).redirect("/");
};

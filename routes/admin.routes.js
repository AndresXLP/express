import { Router } from "express";
import {
  getAddProduct,
  postAddProduct,
} from "../controllers/products.controllers.js";

const router = Router();

router.route("/admin/add-product").get(getAddProduct).post(postAddProduct);

export default router;

import { Router } from "express";

const router = Router();

router
  .route("/admin/add-product")
  .get((req, res) => {
    res.status(200).sendFile("add_product.html", { root: "./views" });
  })
  .post((req, res) => {
    console.log(req.body.title);
    res.status(200).redirect("/");
  });

export default router;

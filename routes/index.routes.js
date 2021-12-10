import { Router } from "express";

const router = Router();
router.route("/").get((req, res, next) => {
  res.status(200).sendFile("index.html", { root: "./views" });
});

export default router;

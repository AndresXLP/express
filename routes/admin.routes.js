import { Router } from "express";

const router = Router();

router.get("/input", (req, res) => {
  res.send(
    "<form action='/other' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});
router.post("/other", (req, res) => {
  let text = req.body.title;
  res.send(
    `<li>${text}</li><br><form action='/'><button type='submit'>Go Home</button></form>`
  );
});

export default router;

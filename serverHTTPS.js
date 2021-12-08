import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extends: true }));

app.get("/input", (req, res) => {
  res.send(
    "<form action='/other' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});
app.post("/other", (req, res) => {
  let text = req.body.title;
  res.send(
    `<li>${text}</li><br><form action='/'><button type='submit'>Go Home</button></form>`
  );
});
app.get("/edit", (req, res) => {
  res.status(404).send("<h1>Url No existe</h1>");
});
app.get("/", (req, res, next) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

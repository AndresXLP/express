import express from "express";

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));

app.use("/input", (req, res) => {
  res.send(
    "<form action='/other' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});
app.use("/other", (req, res) => {
  let text = req.body.title;
  console.log(text);
  res.send(
    `<li>${text}</li><br><form action='/'><button type='submit'>Go Home</button></form>`
  );
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

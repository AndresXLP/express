import express from "express";
import adminRoutes from "./routes/admin.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();
const port = 3001;

app.use(express.urlencoded({ extends: true }));

app.use(express.static("public", { root: "../public/css" }));

app.use(adminRoutes);
app.use("/", indexRoutes);
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

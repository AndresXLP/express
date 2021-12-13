import express from "express";
import { get404 } from "./controllers/error.controller.js";
import adminRoutes from "./routes/admin.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();
const port = 3001;

app.use(express.urlencoded({ extends: true }));

app.use(express.static("public", { root: "../public/css" }));

app.use(adminRoutes);
app.use("/", indexRoutes);
app.use(get404);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

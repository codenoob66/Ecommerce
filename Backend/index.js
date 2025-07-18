import express from "express";
import dontenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dontenv.config();

const app = express();
const port = 5000;

app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(port, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});

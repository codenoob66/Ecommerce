import express from "express";
import dontenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dontenv.config();

const app = express();
const port = 5000;

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Please exit you are not welcome here");
// });

app.post("/api/products", async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.error("Error in creating proddduct:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});
// console.log(process.env.MONGO_URI)

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deeleted" });
    console.log("product deleted");
  } catch (error) {}
});

app.listen(port, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});

import express from "express";

import { connectDB } from "./config/db.js";
import Product from "./model/product.model.js";
const app = express();
const PORT = 3000;
app.post("/products", async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  const newProduct = new Product(product); //Product comes from the model
  try {
    await newProduct.save(); //this will save the input in the database
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
app.get("/", (req, res) => {
  res.send("server is ready");
});
app.listen(PORT, () => {
  connectDB();
  console.log("Server Start at http://localhost:" + PORT);
});

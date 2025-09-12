import Product from "../models/product.model.js";
import mongoose from "mongoose";
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in fetching Products", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body; //user will send this data
  //check if all the field are fill up
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ succes: false, message: "please provide all fields" });
  }
  //now when everyting ready we can create the product
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    //check if there is error while creating the data
    console.log(
      "Error happend when we try to create this product",
      error.message
    );
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  console.log("id:", id);
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Procut Deleted" });
  } catch (error) {
    res.status(404).json({ success: false, message: "Product not found" });
  }
};

export const updateProductValue = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product ID" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

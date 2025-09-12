import express from "express";
import mongoose from "mongoose";

import {
  createProduct,
  getProducts,
  deleteProduct,
  updateProductValue,
} from "../controllers/porduct.controller.js";
const router = express.Router();
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.get("/", getProducts);
router.put("/:id", updateProductValue);
export default router;

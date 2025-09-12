//first we import mongoose
import mongoose from "mongoose";
//secound create product Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
//now we can create our product
const Product = mongoose.model("Product", productSchema);
export default Product;
//we name Product with uper case P so mango will look at it and create products collection for us this is something mongo will take care of it
// we need to export Product

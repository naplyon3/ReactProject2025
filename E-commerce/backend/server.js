import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
//you have to import the product from models

const app = express();
const PORT = process.env.PORT || 5000;
//to use postman you have to allow it
app.use(express.json()); //allows us to accept json data in the req.body
app.use("/api/products", productRoutes);
///To test our code we are going to use postman for now

///install postman

//console.log(process.env.MONGO_RUI);
app.listen(PORT, () => {
  connectDB();
  console.log("server started at http://localhost:" + PORT);
});

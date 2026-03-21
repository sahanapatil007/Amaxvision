import express from "express";
import  {Product} from "./Models/product.js"

const route = express.Router();
route.get("/products/price100", async (req, res) => {
  try {
    const products = await Product.find({
      price: { $gte:0 , $lt:1300 }
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



export default route
import express from "express";
import mongoose from "mongoose";
import route from './router.js'
import  {Product} from "./Models/product.js"
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const exp = express();
exp.use(cors());
exp.use(express.json());
exp.use('/api' ,route)

mongoose.connect(process.env.MONGO_URI).then(()=> console.log("connected"))

exp.get("/product",async (req , res)=>{
    const product = await Product.find();
    res.json(product);
})


exp.post("/addProducts", async (req, res) => {
  try {
    const products = await Product.insertMany(req.body);
    res.json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

const PORT =  process.env.PORT || 3000;
exp.listen(PORT,()=>{
    console.log("the server runing")
})



export default exp
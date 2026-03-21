import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  brand: {
    type: String,
    required: true
  },

  gender: {
    type: String,
    enum: ["men", "women", "unisex"],
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  material: {
    type: String,
    required: true
  },

  size: {
    type: String,
    enum: ["Small", "Medium", "Large"]
  },

  image: {
    type: String,
    required: true
  },

  category: {
    type: String,
    default: "eyeglasses"
  },

  

  createdAt: {
    type: Date,
    default: Date.now
  }
});



export const Product = mongoose.model("Product", productSchema);
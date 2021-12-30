const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    seller: { type: String},
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String,
    default:"https://i.pinimg.com/564x/86/d1/cd/86d1cd68d6beff9b71d89043d1fb84b5.jpg" },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    amount: {type: Number},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);

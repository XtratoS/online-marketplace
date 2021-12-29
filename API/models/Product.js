const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    seller: { type: email},
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String,
    default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-icon%2Fproduct_15494150.htm&psig=AOvVaw1a76wrSAP9d1ZJE7qkuSrx&ust=1640796659941000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODBvIb6hvUCFQAAAAAdAAAAABAS" },
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

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String },
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

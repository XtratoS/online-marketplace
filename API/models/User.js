const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isSeller: {
      type: Boolean,
      default: true,
    },
    img: { type: String },
    cash:{type: Number,
    default: 100,
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

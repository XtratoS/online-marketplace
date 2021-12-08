const { application } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const dotenv = require("dotenv");
// server starts
    app.listen(5000, () => {
        console.log ("Backend Server Is Running");
    })
// connect to mongoose
mongoose
  .connect('mongodb://localhost:27017/onlineShopping')
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders',orderRoute );
const router = require('express').Router();
const Product = require("../models/Product");
const User = require('../models/User');
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin,isSeller,verifySellerAuthorization} = require('./verifyToken');

// CREATE
router.post('/', async (req, res)=>{
    const newProduct = new Product(req.body) 
    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }
    catch(e)
    {
        res.status(500).json(e);
    }
})
// update
router.put('/:id', async (req, res) =>{
      try {
        const checkSeller = await Product.findById(req.params.id);
        if (req.body.seller == checkSeller.seller){
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedProduct);
        }
        else{
          return res.status(401).json("You are not allowed!");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    });
// DELETE
router.delete('/:id' , async(req, res) => {
    try
    {
      const checkSeller = await Product.findById(req.params.id);
        
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
        
    }
    catch(e)
    {
        res.status(500).json(e);
    }
});
// get the user product 
router.get('/:email', async(req, res) => {
    try
    {
      const email = req.params.email;
       const products = await Product.find({
         seller : email 
       });
        res.status(200).json(products);
    }
    catch(e)
    {
        res.status(500).json(e);
    }
})
//  get sold products 
router.get("/sold", async (req, res) => {
  try{
    const products = await Product.find({
      amount : 0
      });
    res.status(200).json(products);
  }
    
    catch (err) {
    res.status(500).json(err);
  }
});

// get not sold 
router.get("/instock", async (req, res) => {
  try{
    const products = await Product.find({
      amount: {$gt: 0} 
      });
    res.status(200).json(products);
  }
    
    catch (err) {
    res.status(500).json(err);
  }
}); 
// get all products 
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category; 
    try {
        let products;
    
        if (qNew) {
          products = await Product.find().sort({ createdAt: -1 }).limit(1);
        } else if (qCategory) {
          products = await Product.find({
            categories: {
              $in: [qCategory],
            },
          });
        } else {
          products = await Product.find();
        }
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  });
// get search products 
router.get("/find/:search", async (req, res) => {
  try {
    const search = req.params.search;
      let products;
    products = await Product.find({
      title: {
        $in: [search],
      } 
      
  });
  if (products)
      {
        res.status(200).json(products);
      }
      else{res.status(204).json("Sorry! No Match");}
  }
   catch (err) {
    res.status(500).json(err);
  }
});
// view product
router.get("/view/:id", async (req, res) => {
  try {
    const id = req.params.id;
      let products;
    products = await Product.findById(id);
  if (products)
      {
        res.status(200).json(products);
      }
    }
   catch (err) {
    res.status(500).json(err);
  }
});
// share product 
router.get("/share/:id/:email", async (req, res) => {
  try{
    const productAllow = await Product.findById(req.params.id);
    const seller = req.params.email;
    const user = await User.findOne({email : seller });
      console.log("user: "+user.username)
      console.log("usercash: "+user.cash)
      console.log("product price: "+productAllow.price)
    if (user.cash >= productAllow.price )
    {
      console.log("email: " +req.params.email)
      console.log("before"+productAllow);
      const newProduct = new Product();
      //const {seller, title,desc, img, price, amount };
      const title = productAllow.title;
      const desc = productAllow.desc;
      const img = productAllow.img;
      const price = productAllow.price;
      const amount = 1;
      newProduct.price =price;
      newProduct.title =title;
      newProduct.desc =desc;
      newProduct.seller = seller;
      newProduct.img = img;
      newProduct.amount = amount;
      const updatedSeller = await User.findOne({email : productAllow.seller});
      updatedSeller.cash = updatedSeller.cash + price;
      updatedSeller.save();
      const updatedbuyer = await User.findOne({email : seller});
      updatedbuyer.cash = updatedbuyer.cash - price;
      updatedbuyer.save()
      productAllow.amount = productAllow.amount - 1;
      productAllow.save() 
      const savedProduct = await newProduct.save();
      console.log("after" +savedProduct);

    res.status(200).json(savedProduct);
  }
    else
    res.status(403).json("your cash is not enough");
  }
  catch(e)
  {
      res.status(500).json(e);
  }
});





module.exports = router;
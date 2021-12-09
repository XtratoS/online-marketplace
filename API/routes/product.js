const router = require('express').Router();
const Product = require("../models/Product");
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

// CREATE
router.post('/', verifyTokenAndAdmin, async (req, res)=>{
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
router.put('/:id', verifyTokenAndAdmin, async (req, res) =>{
      try {
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedProduct);
      } catch (err) {
        res.status(500).json(err);
      }
    });
// DELETE
router.delete('/find/:id',verifyTokenAndAdmin , async(req, res) => {
    try
    {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
    }
    catch(e)
    {
        res.status(500).json(e);
    }
});
// get product by all users
router.get('/find/:id', async(req, res) => {
    try
    {
       const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch(e)
    {
        res.status(500).json(e);
    }
})
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







module.exports = router;
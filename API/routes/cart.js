const router = require('express').Router();
const Cart = require("../models/Cart");
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

// CREATE
router.post('/', verifyToken, async (req, res)=>{
    const newCart = new Cart(req.body)
    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }
    catch(e)
    {
        res.status(500).json(e);
    }
})
// update
router.put('/:id', verifyTokenAndAuthorization, async (req, res) =>{
      try {
        const updatedCart = await Cart.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedCart);
      } catch (err) {
        res.status(500).json(err);
      }
    });
// DELETE
router.delete('/find/:id',verifyTokenAndAuthorization , async(req, res) => {
    try
    {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted");
    }
    catch(e)
    {
        res.status(500).json(e);
    }
});
// get user cart
router.get('/find/:id',verifyTokenAndAuthorization, async(req, res) => {
    try
    {
       const cart = await Cart.findOne({userId : req.params.userId});
        res.status(200).json(cart);
    }
    catch(e)
    {
        res.status(500).json(e);
    }
})
// get all All
router.get('/',verifyTokenAndAdmin, async(req,res)=>{
    try{
        const allCart = await Cart.find();
        res.status(200).json(allCart);
    }
    catch(e){
        res.status(500).json(e);
       
    }
}) 


module.exports = router;
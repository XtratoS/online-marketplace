const User = require("../models/User");
const { verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const router = require('express').Router();

// update info 
router.put('/:id', verifyTokenAndAuthorization, async (req, res) =>{
    if (req.body.password) {
        req.body.password = bcrypt.hash (req.body.password, 12)
      }
    
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    });

    // DELETE
router.delete('/find/:id',verifyTokenAndAuthorization , async(req, res) => {
    try
    {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted");
    }
    catch(e)
    {
        res.status(500).json(e);
    }
});
// find by admin 
router.get('/find/:id',verifyTokenAndAdmin , async(req, res) => {
    try
    {
       const user = await User.findById(req.params.id);
       const {password, ...others } = user._doc;
        res.status(200).json(others);
    }
    catch(e)
    {
        res.status(500).json(e);
    }
})
// GET ALL users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // for user status
  router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });
router.get('/profile', verifyToken, async(req,res) =>{
  const user = await User.findById(req.user._id); 
  if(user){
    const {password, ...others } = user._doc;
        res.status(200).json(others);
  }
})
module.exports = router;
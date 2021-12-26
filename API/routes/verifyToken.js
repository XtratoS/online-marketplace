const jwt = require('jsonwebtoken');

const verifyToken = (req, res,next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, "alaa", (err, user) => {
          if (err) res.status(403).json("Token is not valid!");
          req.user = user;
          next();
        });
      } else {
        return res.status(401).json("You are not authenticated!");
      }
    };

    const verifyTokenAndAuthorization = (req, res, next) =>{
        verifyToken(req, res,()=>{
          if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
          } else {
            res.status(403).json("You are not alowed to do that!");
          }
        })
    }

    // admin 
    const verifyTokenAndAdmin = (req, res, next) =>{
      verifyToken(req, res,()=>{
        if ( req.user.isAdmin) {
          next();
        } else {
          res.status(403).json("You are not alowed to do that!");
        }
      })
  }
  const isSeller = (req, res, next) => {
  if (req.user && req.user.isSeller) {
    next();
  } else {
    res.status(401).send({ message: 'Invalid Seller Token' });
  }
};
  
module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, isSeller};
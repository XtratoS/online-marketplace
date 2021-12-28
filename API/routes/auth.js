const router = require('express').Router();
const User = require('../models/User');
//const cryptoJs = require('crypto-js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// registration
router.post('/register', async(req, res) =>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: await bcrypt.hash (req.body.password, 12)
    });
    // save user
    try{
        const savedUser= await newUser.save();
        res.status(201).json(savedUser);
        console.log(savedUser);
    }
    catch(e){
        res.status(500).json(e);
        console.log(e);
    }
    
});
// login
router.post('/login', async(req, res) =>{
    try{
        const {email, password} = req.body;
        const user =await  User.findOne({email});
        if(user)
        {
            const validPAssword = await bcrypt.compare(password, user.password);
            if (validPAssword)
            {
                
                const accessToken = jwt.sign({
                    id: user._id,
                    isAdmin: user.isAdmin,
                    isSeller: user.isSeller
                },
                "alaa" , {expiresIn: "3d"});
                res.status(200).json({user, accessToken});
               // res.cookie('nToken', accessToken, { maxAge: 900000, httpOnly: true });
            }
            else
            {
                res.status(401).json("wrong credential")
            }

        }
        else 
        res.status(401).json("wrong credentials");
    }
    catch(e)
    {
        console.log(e);
        res.status(500).json(e);
    }
    });
router.get('/logout', async(req, res) =>{
    res.clearCookie(accessToken);
});
module.exports = router;
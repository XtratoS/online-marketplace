const router = require('express').Router();
const stripe = require('stripe')("sk_test_51K4XPOGrZCsdH5EaoryZWaAAmTfoosQ698ZSY0xxeNoXrJ7hM662kXZbbXuEoFEiwDV0Lqof4JsFON3URstsHzVO00Fq7LlG0d");


router.post('/payment', (req,res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount:req.body.amount,
        currency: "usd"

    },(stripeErr, stripeRes) =>{
        if (stripeErr){
            res.status(500).json(stripeErr);
        }
        else{
            res.status(200).json(stripeRes);
        }
    });
});





module.exports = router;
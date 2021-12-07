const mongoose = require('mongoose'); 
const express = require('express');
const User = require('./Models/user');
const app = express();
const bcrypt = require('bcrypt');
const path = require('path');
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

app.get('/login',(req, res) =>{
    res.render('login')
} )
app.post('/login',async (req, res) =>{
    const {email, password} = req.body;
    const user =await  User.findOne({email});
   const validPAssword = await bcrypt.compare(password, user.password);
   if (validPAssword){
       res.send("yay WELCOME")
   }
   else{
       res.send("incorrect")
   }
} )
app.get('/register', (req, res) =>{
    res.render('register')
})

app.post('/register', async(req,res) => {
    const { username, password, email} = req.body;
    const checkExist = await User.findOne({email});
    await console.log(checkExist);
    if (checkExist){
         await res.send("email Already Exists")
    } 
    else{
    const hashed = await bcrypt.hash (password, 12);
    const user = new User({
        name: username,
        password: hashed,
        email: email
    })
    await user.save();
    res.redirect('/login')
}
}) 

// connect to server
app.listen(3000, ()=> {
    console.log("SERVER IS LISTENING")
})
main().catch(err => console.log(err));
// connect to mongo
async function main() {
  await mongoose.connect('mongodb://localhost:27017/shopON')
  .then(()=> {
    console.log(" mongo connected") 
  })
  .catch(err => {
    console,log( err)    
  })
}  

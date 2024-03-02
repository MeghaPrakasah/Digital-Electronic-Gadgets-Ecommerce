const express = require ('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const User = require ('../models/userModel');
const userModel = require('../models/userModel');

//routing
//register 
router.post('/register',async(req,res) => {
    try {
        const { username,password,email,phone } = req.body;
        //validation
        if(!username){
            return res.send({error : "Name is required"})
        }
        if(!email){
            return res.send({error : "Email is required"})
        }
        if(!password){
            return res.send({error : "Password is required"})
        }
        if(!phone){
            return res.send({error : "Phone is required"})
        }

        //checking user 
        const existingUser = await userModel.findOne({email});
        //existing user
        if(existingUser){
            return res.status(403).send({
                success : false,
                message : "Already registered,please login"
            })
        }


        const hashedPassword = await bcrypt.hash( password , 10 );
        const user = new User({ username : username , password : hashedPassword , email : email ,phone : phone });
        await user.save();
        res.status(201).json({ message : "User Registration Successfull" });
    } catch (error) {
       console.log(error);
        res.status(500).json({ error : "Registration Failed" });
    }
})



//userLogin
router.post('/login',async(req,res) => {
    try {
        const { email,password } = req.body;

        //validation
        if(!email){
            return res.send({error : "Email is required"})
        }
        if(!password){
            return res.send({error : "Password is required"})
        }
        
        //checking user
        const existingUser = await User.findOne({ email });
        if(!existingUser){
            return res.status(401).json({ error : "Authentication failed" })
        }
        const passwordMatch = await bcrypt.compare(password,existingUser.password);
        if(!passwordMatch){
            return res.status(401).json({ error : "Authentication failed" })
        }
        const token = jwt.sign({userId : existingUser._id},"secret key",{expiresIn:'1h'});
        res.status(200).json({ token , message : "User Login Successfull" })
        
    } catch (error) {
        console.log(error);
        //res.status(500).json({ error : "Login Failed" });
    }
})


module.exports=router;
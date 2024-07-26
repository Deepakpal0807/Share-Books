import express from 'express';
import User from '../models/user.js';

const authRouter = express.Router();

authRouter.post('/register',async(req,res)=>{
    try{
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).send({ message: 'User already registered by this email' });
        }
        const newUser=await User.create(req.body);
        res.status(201).send(newUser);
    }catch(err){
        res.status(400).send({message:err.message});
    }
})

authRouter.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(404).send({message:'User not found'});
        }

        if(password!==user.password){
            return res.status(401).send({message:'password invalid'});
        }

        res.status(200).send({message:'Login successful',user});

    }catch(err){
        res.status(500).send({message:err.message});
    }
})

export default authRouter;
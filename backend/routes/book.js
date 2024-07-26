import express from 'express';
import Book from '../models/book.js'

const bookRouter = express.Router();

bookRouter.post('/',async(req,res)=>{
    try{
        const book = await Book.create(req.body);
        res.status(201).send(book);
    }catch(err){
        res.status(400).send({message:err.message});
    }
});

bookRouter.get('/',async(req,res)=>{
    try{
        const books = await Book.find();
        res.send(books);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
})

export default bookRouter;

import express from 'express';
import Book from '../models/book.js'
import upload from '../middlewares/multer.middleware.js';
import uploadOnCloudinary from '../utils/cloudinary.js';

const bookRouter = express.Router();

// bookRouter.post('/',async(req,res)=>{
//     try{
//         const book = await Book.create(req.body);
//         res.status(201).send(book);
//     }catch(err){
//         res.status(400).send({message:err.message});
//     }
// });

bookRouter.get('/',async(req,res)=>{
    try{
        const books = await Book.find();
        res.send(books);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
})

bookRouter.post('/add-book', upload.fields([
    {
        name: "bookImage",
        maxCount: 1
    },
]) ,async(req,res) => {
    try{
        const {title,author,genre,description} = req.body;
        // const bookImageLocalPath = req.files?.bookImage?.[0]?.path; 
        const bookImageLocalPath = req.body.bookImage;  

        if(!bookImageLocalPath) throw new Error('Book image not uploaded');

        const bookImage = await uploadOnCloudinary(bookImageLocalPath);

        if(!bookImage) throw new Error("Something went wrong while uploading book image")
        
        const data = {
            title,
            author,
            genre,
            description,
            bookImage
        }

        const book = await Book.create(data);
        res.status(201).send(book);
    }
    catch(err){
        console.error(err.message);
        res.status(400).send({message: err.message});
    }
})

export default bookRouter;

import express from "express";
import cors from "cors";
import { PORT , MONGODB_URL } from "./config.js";
import mongoose from "mongoose";
import authRouter from './routes/auth.js';
import bookRouter from './routes/book.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth/',authRouter);
app.use('/api/books/',bookRouter);

mongoose.connect(MONGODB_URL)
    .then(()=>{
        console.log('server connected to database');
        app.listen(PORT,()=>{
            console.log('server is listening at port ', PORT)
        })
    })
    .catch((error)=>{
        console.log('An error occured: ', error);
    })

import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    users: [{type:mongoose.Schema.Types.ObjectId,ref:'users'}]
})


const Book = mongoose.model('Book',bookSchema);

export default Book;
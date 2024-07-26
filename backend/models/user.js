import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    college: { type: String },
    pincode: { type: Number, required: true },
    books: [{type:mongoose.Schema.Types.ObjectId,ref:'Book'}]
})

const User = mongoose.model('users',userSchema);

export default User;
//defining for the user schema and module use into the mangodb

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require : true
    },
    email:{
        type:String,
        require : true
    },
    address:{
        type:String,
        require : true
    },
})

export default mongoose.model("users", userSchema);
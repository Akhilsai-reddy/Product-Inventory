import mongoose from "mongoose";
import { Schema } from "mongoose";

const productsSchema=new Schema({
    movie_name:String,
    url:URL,
    price:Number,
    
})


export default new mongoose.model("Products",productsSchema)
import mongoose from "mongoose";


const MongoDb = async() => {
    await mongoose.connect(
        "mongodb+srv://Akhilsai1:akhilsai1234@cluster0.k81oh82.mongodb.net/?retryWrites=true&w=majority"
      );
      console.log("connected to dataBase");
}

export default MongoDb
const mongoose= require("mongoose")

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDb connected successfully!")
    }
    catch(err){
        console.log("mongoDb failed", err)
    }
}
module.exports=connectDB;
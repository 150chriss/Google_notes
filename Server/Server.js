const express = require("express")
const dotenv=require('dotenv').config()
const PORT=process.env.PORT || 5000
const app =express()
const cors =require("cors")
const userRoutes = require("./routes/userRoutes");
app.use(express.json());

app.use("/api/users", userRoutes);

const connectDB= require("./conn/config")

connectDB()

ap.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    withCredentials:true
}))
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})

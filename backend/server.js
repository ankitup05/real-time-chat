const express=require("express");
const dotenv=require("dotenv");
const chats=require("./data/data")
const connectDB=require("./config/db")
const colors=require("colors");
connectDB();
dotenv.config();
const app=express()
   
app.get('/',(req,res)=>{res.send("API is running Successfully")});
 


const PORT=process.env.PORT || 9000

app.listen(PORT,console.log(`Server started on port ${PORT}`.yellow .bold )); 

const express=require("express");
const dotenv=require("dotenv");
const app=express()
   
app.get('/',(req,res)=>{res.send("API is running")});

app.listen(5000,console.log("Server started on port 5000"));
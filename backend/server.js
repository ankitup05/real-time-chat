const express=require("express");
const dotenv=require("dotenv");
const chats=require("./data/data")
const connectDB=require("./config/db")
const colors=require("colors");
const userRoutes = require("./routes/userRoutes");
const {notFound,errorHandler}=require("./MIddleware/errorMiddleware")

connectDB();
dotenv.config();
const app=express()

app.use(express.json()); // to accept json data
   
app.get('/',(req,res)=>{res.send("API is running Successfully")});
 
app.use('/api/user',userRoutes)

app.use(notFound)
app.use(errorHandler)
const PORT=process.env.PORT || 9000

app.listen(PORT,console.log(`Server started on port ${PORT}`.yellow .bold )); 

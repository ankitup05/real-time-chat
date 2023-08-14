const mongoose=require("mongoose")

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://ankitup05:ankit1234@cluster0.rt3fi0l.mongodb.net/userdb`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

        console.log(`mongoDb connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }
}

module.exports=connectDB
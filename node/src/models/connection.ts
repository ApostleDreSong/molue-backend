import mongoose from "mongoose";
// connect to db

const connectDB = async () => {
    try {
        if (process.env.mongoUri) {
            const conn = await mongoose.connect(process.env.mongoUri)
            console.log(`MongoDB Connected: ${conn.connection.host}`)
        } else {
            throw 'no mongo connection uri'
        }
    }
    catch (error) {
        console.log(error);
    }
}

export default connectDB
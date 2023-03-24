import mongoose from "mongoose";
// connect to db

const connectToDbInstance = async () => {
    if (process.env.mongoUri) {
        const conn = await mongoose.connect(process.env.mongoUri)
    } else {
        throw 'no mongo connection uri'
    }
}

export default connectToDbInstance
import mongoose from "mongoose";
// connect to db

const connectToDbInstance = async () => {
    try {
        if (process.env.mongoUri) {
            const conn = await mongoose.connect(process.env.mongoUri)
        } else {
            throw 'no mongo connection uri'
        }
    }
    catch (error) {
        console.log(error);
    }
}

export default connectToDbInstance
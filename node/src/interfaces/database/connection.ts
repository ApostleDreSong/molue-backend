import connectToDbInstance from "services/database/connection";

const connectDB = async () => {
    try {
        await connectToDbInstance()
        console.log('Connected to Database successfully')
    }
    catch (error) {
        console.log(error);
    }
}

export default connectDB
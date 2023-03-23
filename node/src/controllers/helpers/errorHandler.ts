import { MongoServerError } from "mongodb";

export const errorHandler = (error: unknown) : any => {    
    if (error instanceof MongoServerError) {
        const { code } = error;
        if (code === 11000) {
            return ({
                statusCode: 409,
                errorMessage: 'User already exists'
            })
        }
    }
    return error
}
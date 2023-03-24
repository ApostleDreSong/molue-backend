import mongoose, { Model, Schema } from "mongoose";
import { IUser, IUserMethods, IUserNoPassword } from "@types";

type UserModelType = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModelType, IUserMethods>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

userSchema.methods = {
    createUser: async function createUser(userDetails: IUser[]): Promise<any[]> {
        try {
            const res = await mongoose.model('User').create(userDetails);
            return res
        } catch (error) {
            throw error
        }
    },
    returnUserPassword: async function returnUserDetails(email: string): Promise<string> {
        try {
            const res = await mongoose.model('User').findOne({ email }, "password -_id");
            const { password } = res;
            return password
        } catch (error) {
            throw error
        }
    },
    returnUserDetails: async function returnUserDetails(email: string): Promise<IUserNoPassword> {
        try {
            return await mongoose.model('User').findOne({ email }, "-password").lean();
        } catch (error) {
            throw error
        }
    }
}

const UserModel = mongoose.model<IUser, UserModelType>('User', userSchema);

UserModel.syncIndexes();

export default UserModel
import mongoose, { Model, Schema } from "mongoose";
import { IUser, IUserMethods } from "@types";

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

// userSchema.method('returnUserPassword', async function returnUserDetails(email: string) {
//     return await mongoose.model('User').findOne({ email }, "password");
// });

// userSchema.method('returnUserDetails', async function returnUserDetails(email: string) {
//     return await mongoose.model('User').findOne({ email }, "-password");
// });


userSchema.methods = {
    returnUserPassword: async function returnUserDetails(email: string) {
        const res = await mongoose.model('User').findOne({ email }, "password -_id");
        const { password } = res;
        return password
    },
    returnUserDetails: async function returnUserDetails(email: string) {
        return await mongoose.model('User').findOne({ email }, "-password").lean();
    }
}

const UserModel = mongoose.model<IUser, UserModelType>('User', userSchema);

UserModel.syncIndexes();

export default UserModel
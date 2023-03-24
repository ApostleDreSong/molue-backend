import mongoose, { Model, Schema } from "mongoose";
import { IUpdateUserData, IUser, IUserCreateData, IUserModelType, IUserNoPassword } from "@types";

const userSchema = new Schema<IUser, IUserModelType>({
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

userSchema.statics = {
    createUser: async function createUser(userDetails: IUserCreateData[]): Promise<IUser[]> {
        const res = await this.create(userDetails);
        return res
    },
    getUser: async function getUser(id: string): Promise<IUser | null> {
        const user = await this.findById(id);
        return user ? user.toObject() : null;
    },
    updateRoute: async function updateRoute(id: string, userDetails: IUpdateUserData): Promise<IUser | null> {
        const user = await this.findById(id);
        if (!user) {
            return null;
        }
        const updatedUser = { ...user, ...userDetails }
        await updatedUser.save();
        return updatedUser;
    },
    returnUserPassword: async function returnUserDetails(email: string): Promise<string | null> {
        const res = await this.findOne({ email }, "password -_id");
        if (res) {
            const { password } = res;
            return password
        }
        return null
    },
    returnUserDetails: async function returnUserDetails(email: string): Promise<IUserNoPassword> {
        return await this.findOne({ email }, "-password").lean();
    }
}

const UserModel = mongoose.model<IUser, IUserModelType>('User', userSchema);

UserModel.syncIndexes();

export default UserModel
import UserModel from "@models/User";
import { IFindPassword, IUser } from "@types";

const CreateUser = async ({ firstName, lastName, email, password }: IUser) => {
    try {
        const user = new UserModel({
            firstName, lastName, email, password
        })
        await user.save();
        return "User created successfully"
    } catch (error) {
        throw (error)
    }
}

const FindUsersPassword = async ({ email }: IFindPassword) => {
    try {
        const user = new UserModel()
        const result = await user.returnUserPassword(email)
        return result
    } catch (error) {
        throw (error)
    }
}

const GetUserDetails = async ({ email }: IFindPassword) => {
    try {
        const user = new UserModel()
        const result = await user.returnUserDetails(email)
        return result
    } catch (error) {
        throw (error)
    }
}

export { CreateUser, FindUsersPassword, GetUserDetails }
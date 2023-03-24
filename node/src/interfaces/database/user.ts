import UserModel from "services/database/User";
import { IUserEmail, IUser, IUserNoPassword } from "@types";
const user = new UserModel()

const CreateUser = async ({ firstName, lastName, email, password }: IUser): Promise<string> => {
    try {
        await user.createUser([{firstName, lastName, email, password}])
        return "User created successfully"
    } catch (error) {
        throw (error)
    }
}

const FindUsersPassword = async ({ email }: IUserEmail): Promise<string> => {
    try {
        const result = await user.returnUserPassword(email)
        return result
    } catch (error) {
        throw (error)
    }
}

const GetUserDetails = async ({ email }: IUserEmail): Promise<IUserNoPassword> => {
    try {
        const result = await user.returnUserDetails(email)
        return result
    } catch (error) {
        throw (error)
    }
}

export { CreateUser, FindUsersPassword, GetUserDetails }
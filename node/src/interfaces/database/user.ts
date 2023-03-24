import UserModel from "services/database/User";
import { IUserEmail, IUserCreateData, IUserNoPassword } from "@types";

const CreateUser = async ({ firstName, lastName, email, password }: IUserCreateData): Promise<string> => {
    await UserModel.createUser([{ firstName, lastName, email, password }])
    return "User created successfully"
}

const FindUsersPassword = async ({ email }: IUserEmail): Promise<string | null> => {
    const result = await UserModel.returnUserPassword(email)
    return result
}

const GetUserDetails = async ({ email }: IUserEmail): Promise<IUserNoPassword> => {
    const result = await UserModel.returnUserDetails(email)
    return result
}

export { CreateUser, FindUsersPassword, GetUserDetails }
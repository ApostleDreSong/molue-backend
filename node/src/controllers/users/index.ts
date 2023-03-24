import { compareData, hashData, jwtSign } from "@controllers/helpers";
import { CreateUser, FindUsersPassword, GetUserDetails } from "@interfaces/database/user";
import { ISignIn, IUser, IUserCreateData } from "@types";
import { SignOptions } from "jsonwebtoken";

const signUp = async ({ firstName, lastName, email, password }: IUserCreateData) => {
    // call DB interface to save user
    const hashedPassword = await hashData({ value: password })
    const creatUser = await CreateUser({ firstName, lastName, email, password: hashedPassword })
    return creatUser
}

const signIn = async ({ email, password }: ISignIn) => {
    // call DB interface to find user
    const hashedPassword = await FindUsersPassword({ email })
    if (!hashedPassword) throw 'user not found'
    if (hashedPassword) {
        //compare passwords sign in or throw incorrect password response
        const passwordIsCorrect = await compareData({ password, hash: hashedPassword })
        if (passwordIsCorrect) {
            const userDetails = await GetUserDetails({ email })
            const jwtOptions: SignOptions = { algorithm: 'RS256', expiresIn: 300 };
            const token = jwtSign({ data: userDetails, jwtOptions })
            return token
        }
    }
    //  return saved user
}

export { signUp, signIn };
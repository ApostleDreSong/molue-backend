import { SignOptions } from "jsonwebtoken";

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface ISignData {
    data: string | object | Buffer,
    jwtOptions: SignOptions | undefined
}

export interface IUserEmail {
    email: string;
}

export interface ISignIn {
    email: string;
    password: string;
}

export interface IHashData {
    value: string | Buffer;
}

export interface IHashCompareData {
    password: string;
    hash: string
}

export interface IError {
    statusCode: number,
    errorMessage: string
}

export interface IUserNoPassword {
    userDetails: {
        firstName: string;
        lastName: string;
        email: string;
    }
}

export interface IUserMethods {
    createUser(userDetails: IUser[]): Promise<any[]>,
    returnUserDetails(email: string): Promise<IUserNoPassword>,
    returnUserPassword(email: string): Promise<string>
}
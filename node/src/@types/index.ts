import { SignOptions } from "jsonwebtoken";

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface ISignData {
    userDetails: {
        firstName: string;
        lastName: string;
        email: string;
    },
    jwtOptions: SignOptions | undefined
}

export interface IFindPassword {
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

export interface IUserMethods {
    returnUserDetails(email: string): Promise<any>,
    returnUserPassword(email: string): Promise<any>
}
import { IHashCompareData, IHashData, ISignData } from "@types";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const hashData = async ({ value }: IHashData) => {
    return new Promise<string>((resolve, reject) => {
        bcrypt.hash(value, 10, function (err, hash) {
            // return hash
            if (err) return reject(err)
            return resolve(hash)
        });
    })
}

const compareData = async ({ password, hash }: IHashCompareData) => {
    const match = await bcrypt.compare(password, hash);
    if (match) return true
    return false
}

const jwtSign = ({ userDetails, jwtOptions }: ISignData) => {
    try {
        if (process.env.jwt_secret) {
            return jwt.sign(userDetails, process.env.jwt_secret, jwtOptions);
        } else {
            return null
        }
    } catch (error) {
        throw error
    }
}

const jwtDecode = (token: string) => {
    try {
        if (process.env.jwt_secret) {
            return jwt.verify(token, process.env.jwt_secret);
        } else {
            return null
        }
    } catch (error) {
        throw error
    }
}

export { hashData, compareData, jwtSign, jwtDecode }
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
const helpers_1 = require("@controllers/helpers");
const database_1 = require("@interfaces/database/database");
const signUp = ({ firstName, lastName, email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    // call DB interface to save user
    try {
        const hashedPassword = yield (0, helpers_1.hashData)({ value: password });
        const creatUser = yield (0, database_1.CreateUser)({ firstName, lastName, email, password: hashedPassword });
        return creatUser;
    }
    catch (error) {
        throw error;
    }
    //  return saved user
});
exports.signUp = signUp;
const signIn = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // call DB interface to find user
        const user = yield (0, database_1.FindUser)({ email, password });
        //compare passwords sign in or throw incorrect password response
        console.log({ user });
        return user;
    }
    catch (error) {
        throw error;
    }
    //  return saved user
});
exports.signIn = signIn;

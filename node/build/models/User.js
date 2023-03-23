"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required.'], //validator
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required.'], //validator
    },
    email: {
        type: String,
        required: [true, 'Password is required.'],
        unique: [true, 'Email already exists']
    },
    password: {
        type: String,
        required: [true, 'Password is required.'], //validator
    },
});
const UserModel = mongoose_1.default.model('User', userSchema);
exports.default = UserModel;

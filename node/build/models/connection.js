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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// connect to db
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const mongoUri = (_a = process.env.mongoUri) !== null && _a !== void 0 ? _a : "mongodb+srv://ademesodamilare:Zijela2019@molue1.rupvvcx.mongodb.net/?retryWrites=true&w=majority";
        if (mongoUri) {
            const conn = yield mongoose_1.default.connect(mongoUri);
            console.log(`MongoDB connected: ${conn.connection.host}`);
        }
        else {
            throw 'no mongo connection uri';
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = connectDB;

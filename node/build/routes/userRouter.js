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
const express_1 = require("express");
const users_1 = require("@controllers/users/users");
const userRouter = (0, express_1.Router)();
userRouter.post('/sign-up', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password } = req.body;
    try {
        const userSignUp = yield (0, users_1.signUp)({ firstName, lastName, email, password });
        res.status(200).send(userSignUp);
    }
    catch (error) {
        next(error);
    }
}));
userRouter.post('/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const userSignIn = yield (0, users_1.signIn)({ email, password });
        res.status(200).send('success');
    }
    catch (error) {
        next(error);
    }
}));
exports.default = userRouter;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("@models/connection"));
const express_session_1 = __importDefault(require("express-session"));
// load all routers
const userRouter_1 = __importDefault(require("@routes/userRouter"));
const port = (_a = process.env.backend_port) !== null && _a !== void 0 ? _a : 8000; // default port to listen
const app = (0, express_1.default)();
process.env.session_secret && app.use((0, express_session_1.default)({
    secret: process.env.session_secret,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}));
// use inbuilt middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, connection_1.default)();
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.status(200).send("Welcome to  Molue APIs");
});
// manage authentication and session here
app.use((req, res, next) => {
    // get bearer token from headers
    // if token expired, return 410
    // if token active, extract details into session for re-use
    next();
});
app.use('/user', userRouter_1.default);
app.use((err, req, res, next) => {
    console.error({ stack: err.stack, name: err.name });
    return res.status(500).send('Something broke!');
});
// start the express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

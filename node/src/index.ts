import express, { Request, Response, NextFunction } from "express";
import connectDB from "@interfaces/database/connection";

// load all routers
import userRouter from "@routes/userRouter";
import vehicleRouter from "@routes/vehicleRouter";
import routeRouter from "@routes/routeRouter";
import locationRouter from "@routes/locationRouter";
import tripRouter from "@routes/tripRouter";

import { IError } from "@types";
import { errorHandler } from "@controllers/helpers/errorHandler";

const port = process.env.backend_port; // default port to listen
const app = express();

// use inbuilt middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectDB();

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.status(200).send("Welcome to  Molue APIs")
});

app.use('/user', userRouter)
app.use('/vehicle', vehicleRouter)
app.use('/route', routeRouter)
app.use('/location', locationRouter)
app.use('/trip', tripRouter)

// manage authentication and session here

app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
    const errorResponse = errorHandler(err);
    const { statusCode, errorMessage } = errorResponse
    console.log('error', err);
    return res.status(statusCode ?? 500).send(errorMessage ?? 'Something Broke!')
})

// start the express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
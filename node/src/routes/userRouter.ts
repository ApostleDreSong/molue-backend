import { Router } from "express";
import { signUp, signIn } from "@controllers/users/users";
import authenticate from "@middlewares/authenticate";

const userRouter = Router();

userRouter.post('/sign-up', async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const userSignUp = await signUp({ firstName, lastName, email, password })
        res.status(200).json(userSignUp)
    } catch (error) {
        next(error)
    }
})

userRouter.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const token = await signIn({ email, password })
        res.status(200).json({ token })
    } catch (error) {
        next(error)
    }
})

userRouter.use(authenticate)

userRouter.post('/logout', async (req, res, next) => {
    try {
        // const token = await signIn({ email, password })
        // res.status(200).json({ token })
    } catch (error) {
        next(error)
    }
})

export default userRouter
import { jwtDecode } from "@controllers/helpers";
import { Request, Response, NextFunction } from "express";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    // get bearer token from headers
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];
    if (token) {
        const decodedToken = jwtDecode(token)
        // check that there is decoded token and it is still alive
        if (decodedToken) {
            req.user = decodedToken
            next();
        } else {
            return res.status(401).send('Unauthorized')
        }
    } else {
        return res.status(400).send('Malformed Request')
    }
    // if token expired, return 401
    // if token active, extract details into session for re-use
}

export default authenticate
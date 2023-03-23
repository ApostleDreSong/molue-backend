// src/types/express/index.d.ts
import { IUserSignData } from "../index";

// to make the file a module and avoid the TypeScript error
export { }

declare global {
    namespace Express {
        export interface Request {
            user?: IUserSignData;
        }
    }
}

// declare module 'express' {
//     interface Request {
//         user?: IUserSignData;
//     }
// }
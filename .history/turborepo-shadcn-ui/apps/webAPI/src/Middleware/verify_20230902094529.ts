import {NextFunction, Request, Response} from 'express'
import jwt from 'jsonwebtoken'

export async function verify(req: Request, res: Response, next: NextFunction) {
    try {
        const bearerToken = req.headers.authorization;
        const extractedToken = bearerToken?.split(" ")[1];
        const decodedToken = jwt.verify(extractedToken!, "ANEESH")
        next()
    } catch (err) {
        console.log(err)
    } 
}   



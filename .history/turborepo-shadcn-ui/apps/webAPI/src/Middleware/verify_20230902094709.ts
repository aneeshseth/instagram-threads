import {NextFunction, Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import User from '../Models/userModel';

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

export async function getUserObject(req: Request, res: Response) {
    try {
        const bearerToken = req.headers.authorization;
        const extractedToken = bearerToken?.split(" ")[1];
        const decodedToken = jwt.verify(extractedToken!, "ANEESH")
        const getUser = await User.find({username: decodedToken.username})
    } catch (err) {
        console.log(err)
    } 
}   

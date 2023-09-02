import {NextFunction, Request, Response} from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
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

export async function getUserDecodedToken(req: Request, res: Response) {
    try {
        const bearerToken = req.headers.authorization;
        const extractedToken = bearerToken?.split(" ")[1];
        const decodedToken: JwtPayload | string  = jwt.verify(extractedToken!, "ANEESH")
        return res.status(200).json({
            userDecodedToken: decodedToken
        })
    } catch (err) {
        console.log(err)
    } 
} 


export async function getUserFromDecodedToken(req: Request, res: Response) {
    try {
        const {id, username} = req.body;
        const user = User.find({username: username})
        return res.status(200).json({
            user: user[0]
        })
    } catch (err) {
        console.log(err)
    } 
}   

import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'

export async function verify(req: Request, res: Response) {
    try {
        const bearerToken = req.headers.authorization;
        const extractedToken = bearerToken?.split(" ")[1];
    } catch (err) {
        console.log(err)
    } 
}   
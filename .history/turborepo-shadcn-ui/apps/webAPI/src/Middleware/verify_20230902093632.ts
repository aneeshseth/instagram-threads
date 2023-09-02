import {Request, Response} from 'express'

export async function verify(req: Request, res: Response) {
    console.log(req.headers);
    return res.status(200).send("hey")
}
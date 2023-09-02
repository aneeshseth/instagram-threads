import User from "../Models/userModel";
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import {Request, Response} from 'express'
import {signupInput} from 'types'



export async function signUp(req: Request, res: Response) {
    const body = req.body;
    const inputValidation = signupInput.safeParse(body);
    if (!inputValidation.success) return res.status(400).json({msg: 'invalid input'})
    const {username, password, profile_pic, email, role} = body;
    const existingUser = await User.find({username: username})
    if (existingUser.length > 0) return res.status(400).json({msg: "user exists"})
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt)
    const addUser = new User({
        username:username, password: hashedPassword, profile_pic: profile_pic, email: email, role: role
    })
    const addedUser = await addUser.save()
    return res.status(200).json({msg: "user created", user: addedUser})
}

export async function logIn(req: Request, res: Response) {
    
}
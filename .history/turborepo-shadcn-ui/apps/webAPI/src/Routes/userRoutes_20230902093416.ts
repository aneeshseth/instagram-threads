import express from 'express'
import {logIn, signUp} from '../Controllers/userController'
import { verify } from '../Middleware/verify'
const router = express.Router()

router.post("/signup", signUp)
router.post("/login", logIn)
router.get("/verify", verify)

export default router;
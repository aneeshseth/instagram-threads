import express from 'express'
const app = express()
import cors from 'cors'
app.use(express.json())
app.use(cors({ origin: true, credentials: true }));
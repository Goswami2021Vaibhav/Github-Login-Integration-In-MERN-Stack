import express from 'express'
import { getData, Login } from '../controller/auth.controller.js'

const AuthRouter = express.Router()

AuthRouter.post('/login', Login)
AuthRouter.get('/get-user', getData)

export default AuthRouter
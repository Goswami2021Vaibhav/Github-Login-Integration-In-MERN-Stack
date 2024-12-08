import User from "../models/user.model.js"
import jwt from 'jsonwebtoken'
export const Login = async (req, res) => {
    try {
        const { name, email, phoneNumber, avatar } = req.body
        let user
        user = await User.findOne({ email })
        if (!user) {
            const newUser = new User({
                name, email, phoneNumber, avatar
            })
            user = await newUser.save()
        }
        user = user.toObject({ getters: true }) // convert user data into plan object 
        const token = jwt.sign(user, process.env.JWT_SECRET)

        res.cookie('access_token', token, {
            httpOnly: true
        })

        res.status(200).json({
            success: true,
            message: 'Login success.'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            error
        })
    }
}
export const getData = async (req, res) => {
    try {

        const token = req.cookies.access_token
        if (!token) {
            return res.status(403).json({
                success: false,
                message: 'User not found',
            })
        }
 
        const tokenData = jwt.verify(token, process.env.JWT_SECRET)

        res.status(200).json({
            success: true,
            user: tokenData
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            error
        })
    }
}
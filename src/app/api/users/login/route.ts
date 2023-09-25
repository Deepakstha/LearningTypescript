import { connect } from "@/dbConfig/dbConfig"
import User from "@/model/userModel"
import mongoose from "mongoose"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

connect()

export const POST = async (request: NextRequest) => {
    try {
        const { email, password } = await request.json()
        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ message: "Email or password Incorrect" })
        }

        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (!passwordMatch) {
            return NextResponse.json({ message: "Email or password only Incorrect" })

        }
        //create token
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })
        const response = NextResponse.json({ message: "Login Success", success: true, })
        response.cookies.set("token", token, { httpOnly: true })
        return response
        // return NextResponse.json({ message: "Login Success" })
    } catch (error) {
        console.log(error)
    }

}
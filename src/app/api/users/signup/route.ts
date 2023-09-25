import { connect } from "@/dbConfig/dbConfig"
import User from "@/model/userModel"
import mongoose from "mongoose"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
// var User = mongoose.model('User')

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { username, email, password } = reqBody
        console.log(reqBody, "reqbody")
        // check if user already exist
        const user = await User.findOne({ email })
        if (user) {
            console.log("userExist")
            return NextResponse.json({ message: "User Already exist", status: 400 })
        } else {
            console.log("no USer")
        }

        // // hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword, "hashedpassword")
        const newUser = await User.create({
            username, email, password: hashedPassword
        })
        // const newUser = await User.create(user)
        // const savedUser = await newUser.save()
        console.log(newUser, "saveduser")

        return NextResponse.json({ message: "User Created Successfylly", success: true, newUser })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
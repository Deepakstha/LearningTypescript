import { getDataFromToken } from "@/helper/getDataFromToken"
import { NextRequest, NextResponse } from "next/server"
import User from "@/model/userModel"
import { connect } from "@/dbConfig/dbConfig"

connect()

export async function GET(request: NextRequest) {
    try {
        console.log("Hello")
        const userId = getDataFromToken(request)
        console.log(userId, "UserId")
        const user = await User.findOne({ _id: userId }).select("-password -isAdmin")
        console.log(user, "User")
        return NextResponse.json({ message: "User Details,", user })
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({ error: error.message, status: 400 })
    }
}
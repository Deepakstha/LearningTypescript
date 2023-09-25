import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await NextResponse.json({ message: "Logout success", success: true })
        response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) })
        return response
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ message: error.message, status: 500 })
    }
}
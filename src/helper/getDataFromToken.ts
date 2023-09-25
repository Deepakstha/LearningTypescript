import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"

export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || ""
        console.log(token, "token for decoding")
        if (token) {
            const decode: any = jwt.verify(token, process.env.TOKEN_SECRET!)
            console.log(decode, "Decoded")
            return decode?.id
        }
    } catch (error: any) {
        throw new Error(error.message)

    }
}
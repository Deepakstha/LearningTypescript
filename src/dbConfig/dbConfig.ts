import mongoose, { connection } from "mongoose";

export const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection
        connection.on("connected", () => {
            console.log("MongoDB connected Succesfully!")
        })
        connection.on("error", (err) => {
            console.log("MongoBD Not Connected! " + err)
            process.exit()
        })
    } catch (error) {
        console.log("Something went wrong!")
        console.log(error)
    }
}
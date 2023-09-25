import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:[true,"Please provide Username"],
        unique:true    
    },
    email:{
        type:String,
        require:[true,"Please Provide Email"],
        unique:true
    },
    password:{
        type:String,
        require:[true,"Please Enter password"]
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:{
        type:String,

    },
    forgotPasswordTokenExpiry:Date,
    VerifyToken:String,
    verifyTokenExpiry:Date
})

const User = mongoose.models.users || mongoose.model("User", userSchema)
export default User 
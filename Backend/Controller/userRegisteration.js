
import User from "../model/user.js";
import bcrypt from "bcrypt"

export const Register = async(req,res)=>
{
    console.log(req.body)
    const {email,password,firstName,lastName,phone,confirmPassword}=req.body
    console.log(req.body)
    try {
        console.log('try')
        const user = await User.findOne({email})
        console.log(user)
        if(user)
        {
            console.log('reached')
            return res.status(400).json({message:"User already exists"})
        }
        if(password !== confirmPassword)
        {
            console.log('reached')
            return res.status(400).json({message:"Passwords do not match"})
        }
        const hashedPassword = await bcrypt.hash(password,10)


        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            phone
        })
        return res.status(201).json({message:"User registered successfully",user:newUser})

    } catch (error) {
        res.status(500).json({message:"Internal server error"})
        console.log('error')
    }
}
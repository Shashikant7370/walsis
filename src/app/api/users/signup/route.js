import dbconnection from "@/dbconfig/dbconnection.js"
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import User from "@/models/userModels.js";

dbconnection()

export async function POST(request){
    const {username,email,password} = await request.json()
    try {
        if(!username || !email || !password){
            return NextResponse.json({message:"Please fill all the fields"}, {status:400})
        }
        if(password.length < 6){
            return NextResponse.json({message:"Password must be at least 6 characters"}, {status:400})
        }
        if(!username.match(/^[a-zA-Z ]+$/)){
            return NextResponse.json({message:"Name must contain only letters"}, {status:400})
        }
        if(!email.includes("@")){
            return NextResponse.json({message:"Please enter a valid email"}, {status:400})
        }

        const existingUser = await User.findOne({email:email});
        // console.log(existingUser)  
        if(existingUser){
            return NextResponse.json({message:"User already exists"}, {status:400})
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            username:username,
            email:email,
            password:hashedPassword
        })
        const savedUser = await newUser.save()
        if(!savedUser){
            return NextResponse.json({message:"User not created"}, {status:400})
        }
        return NextResponse.json({message:"User created successfully",user:savedUser}, {status:201})
    }catch (error) {
        return NextResponse.json({message:"Internal server error"}, {status:500})
    }
}
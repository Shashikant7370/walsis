import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import User from "@/models/userModels.js";
import connect from "@/dbconfig/dbconnection.js";

connect()

export async function POST(request) {
    const { email, password } = await request.json()
    try {
        if (!email || !password) {
            return NextResponse.json({ message: "Please fill all the fields" }, { status: 400 })
        }
        

        const existingUser = await User.findOne({ email: email });
        if (!existingUser) {
            return NextResponse.json({ message: "User does not exist" }, { status: 400 })
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 400 })
        }

        return NextResponse.json({ message: "Login successful", user: existingUser }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}
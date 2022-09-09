import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/userModel.js"

export const signUp = async (req, res) => {
    const {firstName, lastName, email, password, confirmPassword} = req.body;

    try {
        const existingUser = await User.findOne({email});

        if (existingUser){
            return res.status(400).json({message: "user already exist"})
        }

        if (password !== confirmPassword){
            return res.status(400).json({message: "Passwords don't match"})
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`})
        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: "1h"});
        res.status(201).json({ result, token });

    } catch (error) {
        res.status(500).json({message: "Something went wrong in server"})
    }
}
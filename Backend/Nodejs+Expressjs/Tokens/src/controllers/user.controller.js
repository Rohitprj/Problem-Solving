import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: newPassword });
    await newUser.save();

    const token = await jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    console.log("TOken",token);

    res.cookie("token",token,{
      httpOnly:true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) // 15 days
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({error, message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "please register first" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful" });

  }
  catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const {name, email, password, role} = req.body;
        let user = await User.findOne({email});
        if(user) return res.status(400).json({msg: "User already exists"});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({name, email, password: hashedPassword, role});
        await user.save();

        const payload = {user: {id: user.id, role: user.role}};
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "7d"});

        res.json({token, user: {id: user.id, name: user.name, email: user.email, role: user.role}});
    } catch (error) {
        res.status(500).send("Server error");
    }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({msg: "Invalid credentials"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg: "Invalid credentials"});

        const payload = {user: {id: user.id, role: user.role}};
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "7d"});

        res.json({token, user: {id: user.id, name: user.name, email: user.email, role: user.role}});
    } catch (error) {
        res.status(500).send("Server error");
    }
}
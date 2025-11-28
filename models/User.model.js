import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: 
        true},
    password: {type: String, required: true},
    role: {type: String, enum: ["client", "freelancer"], required: true},

    // profile info
    profilePicture: {type: String},
    bio: {type: String},
    phone: {type: String},
    location: {type: String},
    timeZone: {type: String},

    // freelancer specific fields
    professionalTitle: {type: String},
    skills: [{type: String}],
    languages: [{type: String}],
    hourlyRate: {type: Number},
    experience: {type: String, enum: ["Beginner", "Intermediate", "Expert"]},
    education: [{
        degree: String,
        institution: String,
        year: Number,
    }],
    certifications: [{
        name: String,
        issuer: String,
        year: Number
    }],

    // Account status
    isVerified: {type: Boolean, default: false},
    isActive: {type: Boolean, default: true},

    // social links
    portfolio: {type: String},
    linkedin: {type: String},
    twitter: {type: String},
    github: {type: String},

    // statistics (calculated fields)
    totalEarnings: {type: Number, default: 0},
    totalOrders: {type: Number, default: 0},
    averageRating: {type: Number, default: 0},
    totalReviews: {type: Number, default: 0},
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

export default User;
import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin", "agent"],
        default: 'user'
    },
    phone: {
        type: String,
    },
    avatar: {
        type: String,
    },
    savedProperties: [
        {
            type: Schema.Types.ObjectId,
            ref: "Property"
        }
    ]
}, { timestamps: true });

const User = model("User", userSchema);


export default User;
import { Schema, model } from "mongoose";

const visitSchema = new Schema({
    property: {
       type: Schema.Types.ObjectId,
        ref: "Property",
       required: true
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    agent: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }, // Property owner
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending"
    }
}, { timestamps: true });

const Visit = model("Visit", visitSchema);

export default Visit;
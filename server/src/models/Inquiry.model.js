import { Schema, model } from "mongoose";

const inquirySchema = new Schema({
    property: {
        type: Schema.Types.ObjectId,
        ref: "Property",
        required: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactPhone: {
        type: String
    }
    
}, { timestamps: true });

const Inquiry = model("Inquiry", inquirySchema);

export default Inquiry;
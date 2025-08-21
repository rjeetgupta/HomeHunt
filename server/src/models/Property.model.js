import mongoose, { Schema, model } from "mongoose";

const propertySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number, required: true
    },
    type: {
        type: String,
        enum: ["apartment", "house", "villa", "land"],
        required: true
    },
    status: {
        type: String,
        enum: ["available", "sold", "pending"],
        default: "available"
    },

    bedrooms: {
        type: Number
    },
    bathrooms: {
        type: Number
    },
    area: {
        type: Number
    }, // in sq.ft or sq.m

    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zipCode: String,
    },

    location: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point"
        },
        coordinates: {
            type: [Number], index: "2dsphere"
        }, // [lng, lat]
    },

    images: [
        {
            type: String
        }
    ], // Cloudinary/Firebase URLs
    videos: [
        {
            type: String
        }
    ], // Optional: virtual tour

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }, // Agent/Admin who added property
    isVerified: {
        type: Boolean,
        default: false
    }, // After admin approves

    views: {
        type: Number,
        default: 0
    },
    inquiries: {
        type: Number,
        default: 0
    },
}, { timestamps: true });

const Property = model("Property", propertySchema);

export default Property;
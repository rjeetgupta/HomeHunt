import { Schema, model } from "mongoose";

const analyticsSchema = new Schema({
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property"
    },
    views: {
        type: Number,
        default: 0
    },
    bookmarks: {
        type: Number,
        default: 0
    },
    inquiries: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true });

const Analytics = model("Analytics", analyticsSchema);

export default Analytics;
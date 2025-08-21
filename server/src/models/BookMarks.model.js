import mongoose, { Schema, model } from "mongoose";

const bookmarkSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    property: {
        type: Schema.Types.ObjectId,
        ref: "Property",
    },
}, { timestamps: true });

const BookMarks = model("BookMarks", bookmarkSchema);

export default BookMarks;
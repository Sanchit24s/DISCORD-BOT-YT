const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        originalURL: {
            type: String,
            required: true,
        },
        shortId: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
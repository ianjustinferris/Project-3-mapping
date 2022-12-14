const mongoose = require('mongoose');

const PegSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        require: true,
        min: 3
    },

    description: {
        type: String,
        require: true
    },

    lat: {
        type: Number,
        required: true
    },

    lon: {
        type: Number,
        required: true
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("Peg", PegSchema)
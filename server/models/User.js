const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: true
    },
    username: {
        type: String,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    authorization: {
        type: String,
        required: true
    }
}, {timestamps: true})



const User = mongoose.model("User", userSchema);



module.exports = User;
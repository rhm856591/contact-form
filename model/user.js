const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type: String,
    },
    subject:{
        type: String,
    },
    message:{
        type: String,  
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User;
const mongoose = require('mongoose');

const userSchema = {
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
};

const user = mongoose.model("user", userSchema);

module.exports = user;
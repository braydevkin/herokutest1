const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        lowercase: true
    }
})
module.exports = mongoose.model('register', registerSchema)
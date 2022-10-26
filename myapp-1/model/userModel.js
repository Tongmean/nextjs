const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    role: String,
})

export default mongoose.models.User || mongoose.model('User', userSchema);
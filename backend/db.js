const mongoose = require("mongoose");
const { string } = require("zod");
require('dotenv').config();

const url = process.env.MONGODB_URL || "mongodb+srv://nitin:%40nitinfist@cluster0.ghyyxqa.mongodb.net/paytm?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url);

const userSchema = mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = new mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    User,
    Account
}
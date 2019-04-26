const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;//ES6

const userSchema = new Schema({
    googleID: String,
    facebookID: String,
    twitterID: String,
    linkedinID: String,
    email: String,
    username: {
        familyName: String,
        givenName: String
    },
    password: String,
});


mongoose.model('users', userSchema);
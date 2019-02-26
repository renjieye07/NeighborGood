const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;//ES6

const userSchema = mongoose.Schema({
    // _user_id: {
    //     type:mongoose.Schema.Types.ObjectId,
    //     require:ture
    // },
    googleID: String,
    facebookID: String,
    twitterID: String,
    linkedinID: String,
    email: String,
    user_name: {
        type:String,
        require:ture,
        unique:ture,
        minlength:1,
        maxlength:20

    },
    password: String
});

module.exports = mongoose.model('User', userSchema);

// minlength: Number, creates a validator that checks if the value length is not less than the given number
// maxlength: Number, creates a validator that checks if the value length is not greater than the given number

// may need to use to validat user name 
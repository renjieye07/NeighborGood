const mongoose =require('mongoose');

const userSchema = mongoose.Schema({
    // _user_id: {
    //     type:mongoose.Schema.Types.ObjectId,
    //     require:ture
    // },
    user_email: {
        type:String,
        require:ture,
        unique:ture,
        lowercase: true,
        trim:ture
    },
    user_name: {
        type:String,
        require:ture,
        unique:ture,
        minlength:1,
        maxlength:20

    },

});

module.exports = mongoose.model('User', userSchema);

// minlength: Number, creates a validator that checks if the value length is not less than the given number
// maxlength: Number, creates a validator that checks if the value length is not greater than the given number

// may need to use to validat user name 
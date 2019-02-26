const mongoose =require('mongoose');

const photoSchema = mongoose.Schema({
    // _photo_id: mongoose.Schema.Types.ObjectId,
    photo_title:{
        type:String,
        minlength:1,
        maxlength:50
    },
    photo_upload_date:{
        type:Date,
        default:Date.now
    },

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

module.exports = mongoose.model('Photo', photoSchema);
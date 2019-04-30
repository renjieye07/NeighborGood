const mongoose =require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const photoSchema = mongoose.Schema({
    // _photo_id: mongoose.Schema.Types.ObjectId,
    photo_title:{
        type:String,
        trim:true,
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
photoSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Photo', photoSchema);
const mongoose = require('mongoose');

const userprofileSchema = mongoose.Schema({
    user_status: Boolean,
    user_isActive: Boolean,
    user_signUpDate:{
        type:Date, 
        default:Date.now
    },
    user_lastLoginDate:{
        type:Date,
        default:Date.now
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
        
    },
 
    user_post:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }],//list of post id
    neighborhood_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref: neighborhood
    },//user's neighborhood id 
    user_review:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Review'
    }],//list of review id

     ///for the photo, we need to do some more research 

    user_photo: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Photo'
    }]
});

module.exports = mongoose.model('Userprofile', userprofileSchema);
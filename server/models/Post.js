const mongoose =require('mongoose');

const postSchema = mongoose.Schema({
    // post_id: {
    //     type:mongoose.Schema.Types.ObjectId,
    //     require:true
    // },
    post_type:{
        type:String,
        enum:['trade','infor','help','donate','event'],
        require:ture
    },
    post_data:{
        type:Date,
        default:Date.now
    },
    post_joined_user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],//list of use id 
    post_infor:String,
    photo_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Photo'
    }],//list of photo id
    post_title:{
        type:String,
        require:ture
    },
    post_like:Number,
    post_dislike:Number,
    post_active:Boolean,
    post_host:{//the owner of the post
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },

    user_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]//list of user id who comment on the post??? 
});

module.exports = mongoose.model('Post', postSchema);
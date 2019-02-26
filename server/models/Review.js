const mongoose =require('mongoose');

const reviewSchema = mongoose.Schema({
    // _review_id: {
    //     type:mongoose.Schema.Types.ObjectId, 
    //     require:ture
    // },
    // user_name: String
    user_review: {
        type:String,
        minlength:8,
        maxlength:5000,
        require:ture
    },
    review_data:{
        type:Date,
        default:Datenow
    },
    review_like: Number,
    review_dislike:Number,

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        // require:ture
    }
});

module.exports = mongoose.model('Review', reviewSchema);
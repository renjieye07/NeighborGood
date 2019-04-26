const mongoose =require('mongoose');

const reviewSchema = mongoose.Schema({
    // _review_id: mongoose.Schema.Types.ObjectId,
    user_name: String,
    user_review: String,
    review_data:BSON,
    review_like: number,
    review_dislike:number,

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

module.exports = mongoose.model('Review', reviewSchema);
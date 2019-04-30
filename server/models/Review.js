const mongoose =require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


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
        trim:true,
        require:true
    },
    review_data:{
        type:Date,
        default:Date.now()
    },
    review_like: {
        type: Number,
        default: 0
      },
    review_dislike: {
        type: Number,
        default: 0
      },

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        // require:ture
    }
});
reviewSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Review', reviewSchema);
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const reviewSchema = mongoose.Schema(
  {
    // _review_id: {
    //     type:mongoose.Schema.Types.ObjectId,
    //     require:ture
    // },
    // user_name: String
    review_comment: {
      type: String,
      minlength: 8,
      maxlength: 5000,
      trim: true,
      require: true
    },
    // since we use timestamp, no need
    // review_data: {
    //   type: Date,
    //   default: Date.now()
    // },
    review_like: {
      type: Number,
      default: 0
    },
    review_dislike: {
      type: Number,
      default: 0
    },
    photoUrl: String, //should be a url string

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
      // require:true
    },
    related_post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  },

  {
    timestamps: true
  }
);
reviewSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Review', reviewSchema);

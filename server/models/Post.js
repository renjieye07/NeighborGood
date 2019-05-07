const mongoose = require('mongoose');
//unique validator is a npm pakege that needs to install for 'unique'
const uniqueValidator = require('mongoose-unique-validator');

const postSchema = mongoose.Schema(
  {
    post_type: {
      type: String,
      enum: ['trade', 'info', 'help', 'donate', 'event'],
      require: true
    },
    //since we are using timestamp, no need to set up the post date
    // post_date: {
    //   type: Date,
    //   default: Date.now
    // },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ], //list of use id
    description: {
      type: String,
      trim: true,
      minlength: 8,
      maxlength: 10000
    },
    //we are just using url string, no need this
    // photo_id: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Photo'
    //   }
    // ], //list of photo id
    post_title: {
      type: String,
      require: true,
      trim: true,
      minlength: 8,
      maxlength: 200
    },
    post_like: {
      type: Number,
      default: 0
    },
    post_dislike: {
      type: Number,
      default: 0
    },
    post_active: {
      type: Boolean,
      default: true
    },
    post_owner: {
      //the owner of the post
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true
    },
    photoUrl: String,

    review: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        commentString: String
      }
    ], //list of user id who comment on the post???
    event_date: Date
  },
  {
    timestamps: true
  }
);
postSchema.plugin(uniqueValidator); //plugin has to be here after schema set up
module.exports = mongoose.model('Post', postSchema);

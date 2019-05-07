const mongoose = require('mongoose');
//unique validator is a npm pakege that needs to install for 'unique'
const uniqueValidator = require('mongoose-unique-validator');

const postSchema = mongoose.Schema({
  post_type: {
    type: String,
    enum: ['trade', 'info', 'help', 'donate', 'event'],
    require: true
  },
  post_date: {
    type: Date,
    default: Date.now()
  },
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
  photo: String, //photo url
  post_title: {
    type: String,
    require: true,
    trim: true,
    minlength: 1,
    maxlength: 20
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

  review: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      commentString: String
    }
  ], //list of user id who comment on the post???
  event_date: Date,
  event_place: String
});
postSchema.plugin(uniqueValidator); //plugin has to be here after schema set up
module.exports = mongoose.model('Post', postSchema);

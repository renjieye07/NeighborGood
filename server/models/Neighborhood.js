const mongoose = require('mongoose');
const { Schema } = mongoose;

const neighborhoodSchema = new Schema({
  neighbors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  zipCode: String,
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
});

module.exports = mongoose.model('Neighborhood', neighborhoodSchema);

const mongoose = require('mongoose');
//const requireNeighborhood = require('../middleware/requireNeighborhood');
const auth = require('../middleWare/auth');
const Post = require('../models/Post');
// const Review = mongoose.model('Review');
const Review = require('../models/Review');

module.exports = app => {
  //need the post id
  app.post('/api/postReview/:id', auth, async (req, res) => {
    console.log('calling the create review api');
    const { review_comment, photoUrl, user_id } = req.body;
    // const review = new Review(req.body);
    const review = new Review({
      review_comment,
      // reviewID: req.post._id,
      user_id: req.user._id,
      user_name: req.user.user_name,
      photoUrl
    });
    console.log(review);

    try {
      await review.save();
      console.log(review);
      // res.send(review);
      //use the post id to find the post and save the review id to the post
      console.log('the post id is ' + req.params.id);
      const post = await Post.findOne({
        _id: req.params.id
      });
      if (!post) {
        console.log('no such post');
      }
      console.log('the review id is ' + review._id);
      console.log(Array.isArray(post.review) + '...............');
      console.log('print out post.....' + post);
      post.review.push(review.id); //can not push the id to review...
      console.log('before save review');
      res.send(review);
      console.log('before save post');
      console.log(post);
      await post.save();
      console.log('a new review save to database and the post is updated.....');
    } catch (e) {
      res.status(422).send(e);
    }
  });
};

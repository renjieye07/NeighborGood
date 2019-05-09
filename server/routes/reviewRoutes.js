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
    // console.log(review);

    try {
      //use the post id to find the post and save the review id to the post
      const post = await Post.findOne({
        _id: req.params.id
      });
      if (!post) {
        console.log('no such post');
      }
      await post.review.push(review.id); //save the review id to the post object
      review.related_post = req.params.id; //save the related_post id to the review
      console.log(post);
      await post.save();
      await review.save();
      res.json({ post, review });
      console.log('a new review save to database and the post is updated.....');
    } catch (e) {
      res.status(422).send(e);
    }
  });

  //delete review (on click to get the review id and pass to back end )  tested!!
  app.delete('/api/deleteReview/:id', auth, async (req, res) => {
    console.log('calling delete review');
    try {
      console.log(req.params.id, +'.....' + req.user.id);
      const review = await Review.findOneAndDelete({
        _id: req.params.id,
        user_id: req.user.id
      });
      if (!review) {
        console.log('no such reivew');
        return res.status(404).send('no such review');
      }
      console.log(review);
      res.send(review);
      console.log('review has been deleted');
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });

  //update review
  app.patch('/updateReview/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['review_comment', 'photoUrl'];
    const isValidOperation = updates.every(update =>
      allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
      const review = await Review.findOne({
        _id: req.params.id,
        user_id: req.user._id
      });

      if (!review) {
        return res.status(404).send();
      }

      updates.forEach(update => (review[update] = req.body[update]));
      await review.save();
      res.send(review);
    } catch (e) {
      res.status(400).send(e);
    }
  });
};

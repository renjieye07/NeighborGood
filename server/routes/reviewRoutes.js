const mongoose = require('mongoose');
//const requireNeighborhood = require('../middleware/requireNeighborhood');
const auth = require('../middleWare/auth');

const Review = mongoose.model('Review');

module.exports = app => {
  app.post('/api/postReview', auth, async (req, res) => {
    const { comment } = req.body;
    console.log(req);

    const review = new Review({
      comment,
      reviewID: req.post.id,
      userID: req.user.id,
      username: req.user.username.givenName,
      date: Date.now()
    });

    try {
      await review.save();
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
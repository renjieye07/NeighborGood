const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
//const requireNeighborhood = require('../middleware/requireNeighborhood');
// const auth = require('../middleware/auth');
const Post = mongoose.model('Post');

module.exports = app => {
  app.post('/api/newPost', requireLogin, async (req, res) => {
    const {
      post_title,
      post_type,
      description,
      event_date,
      place,
      trade_price
    } = req.body;

    if (post_type == 'event') {
      const post = new Post({
        post_title,
        post_type,
        description,
        event_date,
        place,
        owner: req.user.id,
        post_date: Date.now()
      });
      try {
        await post.save();
        done();
        console.log(req.post);
      } catch (err) {
        console.log(err);
      }
    } else if (post_type == 'info') {
      const post = new Post({
        post_title,
        post_type,
        description,
        post_owner: req.user.id,
        post_date: Date.now()
      });
      try {
        await post.save();
        done();
      } catch (err) {
        console.log(err);
      }
    } else if (post_type == 'trade') {
      const post = new Post({
        post_title,
        post_type,
        description,
        trade_price,
        place,
        post_owner: req.user.id,
        post_date: Date.now()
      });
      try {
        await post.save();
        done();
      } catch (err) {
        res.status(422).send(err);
      }
    }
  });
  app.get('/api/myPosts', async (req, res) => {
    const allPost = await Post.find({
      owner: req.user.id
    });
    console.log(allPost);
    done(null, allPost);
  });
};

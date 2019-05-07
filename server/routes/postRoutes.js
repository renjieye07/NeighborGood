const mongoose = require('mongoose');
//const requireNeighborhood = require('../middleware/requireNeighborhood');
const auth = require('../middleware/auth');
const Post = mongoose.model('Post');
const Review = require('../models/Review');

module.exports = app => {
  //create new posts  tested
  app.post('/api/posts', auth, async (req, res) => {
    const { post_title, post_type, description, event_date } = req.body;

    if (post_type == 'event') {
      const post = new Post({
        post_title,
        post_type,
        description,
        event_date,
        post_owner: req.user.id
      });
      // post.owner = req.user.id;
      try {
        await post.save();
        console.log(req.user.id);
        console.log(post.post_owner);
        res.send(post);
      } catch (err) {
        res.status(422).send(err);
      }
    } else if (
      post_type == 'info' ||
      post_type == 'help' ||
      post_type == 'donation'
    ) {
      const post = new Post({
        post_title,
        post_type,
        description,
        post_owner: req.user.id,
        post_date: Date.now()
      });
      // post.owner = req.user.id;
      try {
        await post.save();
      } catch (err) {
        res.status(422).send(err);
      }
    }
  });

  //get a user owen post
  app.get('/api/myPosts', auth, async (req, res) => {
    const allPost = await Post.find({
      owner: req.user.id
    });
    console.log(allPost);
    done(null, allPost);
  });

  //display posts by the user created   tested
  app.get('/api/posts/byuser', auth, async (req, res) => {
    try {
      const post = await Post.find({ post_owner: req.user._id });
      // await req.user.populate('posts').execpopulate();
      console.log(post);
      res.send(post);
    } catch (e) {
      console.log('something wrong in get post ');
      res.status(404).send(e);
    }
  });

  //display posts by zipcode  how do i can related to the user and post??
  app.get('/api/posts/', auth, async (req, res) => {
    try {
      const post = await Post.find({
        post_owner: req.user.neighborhood_zipCode
      });
      // await req.user.populate('posts').execpopulate();
      console.log(post);
      res.send(post);
    } catch (e) {
      console.log('something wrong in get post ');
      res.status(404).send(e);
    }
  });

  //del posts   tested
  app.delete('/api/posts/:id', auth, async (req, res) => {
    console.log('calling delete post');
    try {
      const post = await Post.findOneAndDelete({
        _id: req.params.id,
        post_owner: req.user.id
      });
      if (!post) {
        console.log('no such posts');
        return res.status(404).send('no such post');
      }
      res.send(post);
      console.log('post has been deleted');
    } catch (e) {
      res.status(500).send(e);
    }
  });

  //takes a post id(should be pass from user on click in front-end) and return the post with its review
  app.get('/api/postsAndReview/:id', auth, async (req, res) => {
    try {
      const post = await Post.find({
        _id: req.params.id
      });
      const review = await Review.find({
        related_post: req.params.id
      });
      if (!post) {
        res.send('no such post');
        console.log('no such post');
      }
      console.log(post);
      await res.send({ post, review });
    } catch (e) {
      console.log('something wrong in get post ');
      res.status(404).send(e);
    }
  });

  // //update a post with post id, and user id
  //(test, need to pass a user id in the ulr i.e: params.id is the user id in the url)
  app.patch('/updatePost/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
      'description',
      'post_title',
      'post_like',
      'post_dislike',
      'post_active',
      'review',
      'event_date',
      'photo_id',
      'participants'
    ];
    const isValidOperation = updates.every(update =>
      allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
      const post = await Post.findOne({
        _id: req.params.id,
        post_owner: req.user._id
      });

      if (!post) {
        return res.status(404).send();
      }

      updates.forEach(update => (post[update] = req.body[update]));
      await post.save();
      res.send(post);
    } catch (e) {
      res.status(400).send(e);
    }
  });
};

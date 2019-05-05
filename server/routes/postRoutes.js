const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
//const requireNeighborhood = require('../middleware/requireNeighborhood');
const auth = require('../middleware/auth');
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
      // post.owner = req.user.id;
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
      // post.owner = req.user.id;
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

  // //update a post with post id, and user id  (not working)
  // app.put('/api/updatePost', auth, async (req, res) => {
  //   const updates = Object.keys(req.body);
  //   // console.log(req);
  //   // const allowedUpdates = [
  //   //   'description',
  //   //   'post_title',
  //   //   'post_active', //boolean
  //   //   'event_date',
  //   //   'photo_id'
  //   // ];
  //   // const isValidOperation = updates.every(update =>
  //   //   allowedUpdates.includes(update)
  //   // );

  //   // if (!isValidOperation) {
  //   //   return res.status(400).send({ error: 'Invalid updates!' });
  //   // }
  //   console.log(req.body._id); //this is the post ID that gets from the front end
  //   console.log(req.user.id);
  //   let post = new Post();
  //   console.log(post);
  //   try {
  //     post = await Post.find({
  //       _id: req.body._id,
  //       post_owner: req.user.id
  //     });
  //     updates.forEach(update => (post[update] = req.body[update]));
  //     console.log(post);
  //     await post.save();
  //     // console.log(post);
  //     res.send(post);
  //   } catch (e) {
  //     res.status(400).send(e);
  //     console.log(e);
  //   }
  // });

  app.patch('/updatePost/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    // const allowedUpdates = ['description', 'completed']
    // const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    // if (!isValidOperation) {
    //     return res.status(400).send({ error: 'Invalid updates!' })
    // }

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

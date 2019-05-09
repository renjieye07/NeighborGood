const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const auth = require('../middleware/auth');
const Post = mongoose.model('Post');
const User = mongoose.model('User');

module.exports = app => {
  app.post('/api/newPost', requireLogin, async (req, res) => {
    const {
      post_title,
      post_type,
      description,
      event_date,
      place,
      trade_price,
      photo
    } = req.body;
    console.log(req.user);

    try {
      if (post_type == 'event') {
        const post = await new Post({
          post_title,
          post_type,
          description,
          event_date,
          place,
          participants: req.user.id,
          photo,
          post_owner: req.user.id,
          zipcode: req.user.neighborhood_zipCode
        }).save();
        await req.user.posts.push(post._id);
        await req.user.save();
      } else if (post_type == 'info') {
        const post = await new Post({
          post_title,
          post_type,
          description,
          photo,
          post_owner: req.user.id,
          zipcode: req.user.neighborhood_zipCode
        }).save();
        await req.user.posts.push(post._id);
        await req.user.save();
      } else if (post_type == 'trade') {
        const post = await new Post({
          post_title,
          post_type,
          description,
          trade_price,
          place,
          photo,
          post_owner: req.user.id,
          zipcode: req.user.neighborhood_zipCode
        }).save();
        await req.user.posts.push(post._id);
        await req.user.save();
      }
    } catch (err) {
      console.log(err);
    }
  });
  app.get('/api/myPosts', requireLogin, async (req, res) => {
    const myPosts = await Post.find({
      post_owner: req.user.id
    });

    res.send(myPosts);
  });

  //display posts by the user created   tested
  app.get('/api/posts/byuser', auth, async (req, res) => {
    try {
      const post = await Post.find({ post_owner: req.user._id });
      // await req.user.populate('posts').execpopulate();
      res.send(post);
    } catch (e) {
      console.log('something wrong in get post ');
      res.status(404).send(e);
    }
  });
  //display posts by zipcode  how do i can related to the user and post??
  app.get('/api/allPosts', requireLogin, async (req, res) => {
    try {
      // const post = await Post.find({
      //   zipcode: req.user.neighborhood_zipCode
      // });
      // res.send(post);
      Post.find({ zipcode: req.user.neighborhood_zipCode })
        .populate('post_owner', 'user_name user_image')
        .populate('participants', 'user_image')
        .exec((err, post) => {
          if (err) {
            res.send(err);
          } else {
            res.send(post);
          }
        });
    } catch (e) {
      console.log('something wrong in get post ');
      res.status(404).send(e);
    }
  });
  app.get('/api/posts/:id', async (req, res) => {
    console.log('getting detail post information...');
    try {
      Post.find({ _id: req.params.id })
        .populate('participants')
        .populate('review')
        .populate('post_owner', 'user_name')
        .exec((err, review) => {
          if (err) {
            res.send(err);
          } else {
            res.send(review);
          }
        });
    } catch (e) {
      res.send(e);
    }
  });

  //del posts tested
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

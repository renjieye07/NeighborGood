const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const auth = require('../middleware/auth');
const Post = mongoose.model('Post');
const User = mongoose.model('User');
const Review = require('../models/Review');

module.exports = app => {
  app.post('/api/newPost', auth, async (req, res) => {
    console.log('creating new post');
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
  //get a user owen post
  app.get('/api/myPosts', auth, async (req, res) => {
    const allPost = await Post.find({
      post_owner: req.user.id
    });
    // app.get('/api/myPosts', requireLogin, async (req, res) => {
    //   const myPosts = await Post.find({
    //     post_owner: req.user.id
    //   });

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
  // app.get('/api/allPosts', requireLogin, async (req, res) => {
  //   try {
  //     // const post = await Post.find({
  //     //   zipcode: req.user.neighborhood_zipCode
  //     // });
  //     // res.send(post);
  //     Post.find({ zipcode: req.user.neighborhood_zipCode })
  //       .populate('post_owner', 'user_name user_image')
  //       .populate('participants', 'user_image')
  //       .exec((err, post) => {
  //         if (err) {
  //           res.send(err);
  //         } else {
  //           res.send(post);
  //         }
  //       });
  //   } catch (e) {
  //     console.log(e);
  //     res.status(404).send(e);
  //   }
  // });
  //display posts by zipcode
  //needs a query string with this format:  ?sortBy=asc....or ?sortBy=desc
  //query string 1:type: 'event', 'info' and 'trade' (ex:  ?type=event), so, the api will send back the post which type is event
  //             2:pagination: limit(i.e if limit is 10, so that each api call, back-end will send back 10 post)
  //                           skip(i.e skip is how many post want to skip. ex: if limit is 10, you want to get the next 10 post, skip is 10
  //                                 and for each next 10 post, front-end need use skip+10 to get the next 10)
  //

  app.get('/api/allPosts', requireLogin, async (req, res) => {
    let keyword = req.query.keyword;
    let post_type = req.query.type; //(has to be those type('trade', 'info','event'))
    console.log('------- query -------');
    console.log(req.query);
    console.log('------- params -------');
    console.log(req.params);
    const reg = new RegExp(keyword, 'i');
    try {
      console.log(reg);
      console.log(post_type);
      let sortMethod = req.query.sortBy;
      if (keyword && post_type) {
        const post = await Post.find({
          zipcode: req.user.neighborhood_zipCode,
          post_title: reg,
          post_type: post_type
        })
          .populate('post_owner', 'user_name user_image')
          .populate('participants', 'user_image')
          .skip(parseInt(req.query.skip))
          .limit(parseInt(req.query.limit))
          .sort({ createdAt: sortMethod })
          .sort({ review: sortMethod });
        console.log(post);
        res.send(post);
      } else if (!keyword && post_type) {
        const post = await Post.find({
          zipcode: req.user.neighborhood_zipCode,
          post_type: post_type
        })
          .populate('post_owner', 'user_name user_image')
          .populate('participants', 'user_image')
          .skip(parseInt(req.query.skip))
          .limit(parseInt(req.query.limit))
          .sort({ createdAt: sortMethod })
          .sort({ review: sortMethod });
        console.log(post);
        res.send(post);
      } else if (keyword && !post_type) {
        const post = await Post.find({
          zipcode: req.user.neighborhood_zipCode,
          post_title: reg
        })
          .populate('post_owner', 'user_name user_image')
          .populate('participants', 'user_image')
          .skip(parseInt(req.query.skip))
          .limit(parseInt(req.query.limit))
          .sort({ createdAt: sortMethod })
          .sort({ review: sortMethod });
        console.log(post);
        res.send(post);
      } else {
        const post = await Post.find({
          zipcode: req.user.neighborhood_zipCode
        })
          .populate('post_owner', 'user_name user_image')
          .populate('participants', 'user_image')
          .skip(parseInt(req.query.skip))
          .limit(parseInt(req.query.limit))
          .sort({ createdAt: sortMethod })
          .sort({ review: sortMethod });
        console.log(post);
        res.send(post);
      }
    } catch (e) {
      console.log(e);
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

  //takes a post id(should be pass from user on click in front-end) and return the post with its review
  app.get('/api/postsAndReview/:id', auth, async (req, res) => {
    try {
      const post = await Post.find({
        _id: req.params.id
      })
        .populate('review')
        .populate('post_owner', 'user_name user_image')
        .populate('participants', 'user_image user user_name');

      // const review = await Review.find({
      //   related_post: req.params.id
      // });
      if (!post) {
        res.send('no such post');
        console.log('no such post');
      }
      console.log(post);
      await res.send({ post });
    } catch (e) {
      console.log(e);
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
  app.post('/api/allPosts/', auth, async (req, res) => {
    let { keyword, post_type } = req.body; //(has to be those type('trade', 'info','event'))
    const reg = new RegExp(keyword, 'i');
    try {
      console.log(req.body.limit);
      console.log(req.body.skip);
      let sortMethod = req.body.sortBy;

      const post = await Post.find({
        zipcode: req.user.neighborhood_zipCode,
        post_title: reg,
        post_type: post_type
        // options: {
        //   // limit: parseInt(req.query.limit),
        //   // skip: parseInt(req.query.skip)
        //   limit: 3,
        //   skip: 3
        // }
      })
        .populate('post_owner', 'user_name user_image')
        .populate('participants', 'user_image')
        .skip(parseInt(req.body.skip))
        .limit(parseInt(req.body.limit))
        .sort({ createdAt: sortMethod })
        .sort({ review: sortMethod });
      // await req.user.populate('posts').execpopulate();
      console.log(post);
      res.send(post);
    } catch (e) {
      console.log(e);
      res.status(404).send(e);
    }
  });

  //get post by user enter query keywords(all post from all neighborhoods)
  // app.get('/api/posts/', auth, async (req, res) => {
  //   let keyword = req.query.keyword;
  //   const reg = new RegExp(keyword, 'i');
  //   // keyword = keyword.toLowerCase()
  //   console.log(reg);
  //   try {
  //     const post = await Post.find({ post_title: reg });
  //     // await req.user.populate('posts').execpopulate();
  //     console.log(post);
  //     res.send(post);
  //   } catch (e) {
  //     console.log(e);
  //     res.status(404).send(e);
  //   }
  // });
};

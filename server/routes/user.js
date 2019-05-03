const User = require('../models/User');
const express = require('express');
const router = new express.Router();
const auth = require('../middleWare/auth');
const mongoose = require('mongoose');

//tested  create new user
router.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
    console.log(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

//tested user login
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
    console.log('user has been login....');
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

//logout tested with token
router.post('/users/logout', auth, async (req, res) => {
  try {
    console.log('user logout1!!');
    console.log(req.user.token);
    req.user.tokens = req.user.tokens.filter(token => {
      console.log('user logout2!!');
      return token.token != req.token;
    });
    await req.user.save();
    console.log('user logout3!!');
    res.send('user has been logouted...');
  } catch (e) {
    res.status(500).send();
    console.log('user can not logout!!');
  }
});

//logout all tokens
router.post('/users/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

//tested, this api gets the user with token, so only need to return the user profile
router.get('/users/me', auth, async (req, res) => {
  // try {
  //     const users = await User.find({})
  //     res.send(users)
  // } catch (e) {
  //     res.status(500).send()
  // }
  res.send(req.user);
});

//not goting to use this api
// router.get('/users/:id', auth,async (req, res) => {
//     const _id = req.params.id

//     try {
//         const user = await User.findById(_id)

//         if (!user) {
//             console.log('no such user')
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//         console.log('something wrong!!')
//     }
// })

//tested but need to test with token
router.patch('/users/me', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'user_name',
    'password',
    'neighborhood_zipCode',
    'neighborhood_city',
    'user_imageURL'
  ];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    updates.forEach(update => (req.user[update] = req.body[update]));
    await req.user.save();

    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

//tested work ok with token
router.delete('/users/me', auth, async (req, res) => {
  console.log('calling delete');
  try {
    // const user = await User.findByIdAndDelete(req.user._id)

    // if (!user) {
    //     return res.status(404).send('no such user')
    // }
    await req.user.remove();
    console.log('user has been deleted');
    res.send(req.user);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;

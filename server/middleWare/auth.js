const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'iamsocool');
    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token
    });
    if (!user) {
      console.log('no such user');
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(400).send('authrization fail');
  }
};

module.exports = auth;

//this while middleware may need to move to authRouters?? refactor ??

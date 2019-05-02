const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose; //ES6
const validator = require('validator');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
  googleID: String,
  facebookID: String,
  twitterID: String,
  linkedinID: String,
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(email) {
      if (!validator.isEmail(email)) {
        throw new Error('email is invalid');
      }
    }
  },
  user_name: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    minlength: 2,
    maxlength: 20
  },
  password: {
    type: String,
    // require:true,
    trim: true,
    minlength: 8,
    maxlength: 30
    //may not need validate, bacase the password should hash before save to database
    // validate(password){
    //     if(!){
    //       throw new Error('password has to contain both lower upper case, and numbers')
    //     }
    // }
  },
  user_image: String,

  neighborhood_zipCode: {
    type: String,
    // require:true,
    minlength: 5,
    maxlength: 5,
    trim: true
  },
  neighborhood_city: {
    // type:mongoose.Schema.Types.ObjectId,
    type: String,
    // require:true,
    minlength: 3,
    maxlength: 100,
    trim: true
  },
  user_imageURL: String,

  gender: String,

  registerDate: {
    type: Date,
    default: Date.now
  },

  // lastLoginDate:Date,

  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

//make the relationship between user and post
userSchema.virtual('posts', {
  ref: 'Post', // 'Post' should be the same as module.exports
  localField: '_id',
  foreignField: 'post_owner'
});

//this mothed delete the password and tokens before sending back to the clien side
userSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, 'iamsocool');

  user.tokens = user.tokens.concat({ token });
  // console.log(tokens)
  await user.save();

  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  console.log('in the findByCredentials');

  if (!user) {
    // console.log('no such user')
    throw new Error('Unable to login');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  // console.log("fuck")

  if (!isMatch) {
    // console.log("pass word wrong")
    throw new Error('Unable to login');
  }
  return user;
};

// Hash the plain text password before saving
userSchema.pre('save', async function(next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

userSchema.plugin(uniqueValidator);
// module.exports = mongoose.model('users', userSchema);
//dont change this two line of code!!!!!it will not work
const User = mongoose.model('User', userSchema);

module.exports = User;

// minlength: Number, creates a validator that checks if the value length is not less than the given number
// maxlength: Number, creates a validator that checks if the value length is not greater than the given number

// may need to use to validat user name \

//need to call the model to create a instence of a user and use .save to save  to database

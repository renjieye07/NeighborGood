//import needed libraries
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

//create user model class
const User = mongoose.model('User');

//bcrypt saltrounds
// const saltRounds = 10;

//methods used to load user id that is autogenerated by MongoDB
passport.serializeUser((user, done) => {
  done(null, user.id); //user id autogenerated by mongodb
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//passport js configuration
passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      profileFields: ['id', 'name', 'emails', 'photos', 'gender'],
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      //look for existing users
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        //existing user found
        const token = await existingUser.generateAuthToken();
        console.log('user profile: ' + profile);
        done(null, existingUser);
      } else {
        //create a new user, then save the data to the database
        const user = await new User({
          googleID: profile.id,
          username: {
            familyName: profile.name.familyName,
            givenName: profile.name.givenName
          },
          imageURL: profile.photos[0].value,
          email: profile.emails[0].value,
          gender: profile.gender
        }).save();
        await user.generateAuthToken();
        done(null, user);
      }
    }
  )
);

//facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookSecret,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'email', 'name', 'gender', 'picture'],
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ facebookID: profile.id });
      await existingUser.generateAuthToken();
      if (existingUser) {
        console.log('profile', profile);
        done(null, existingUser);
      } else {
        const user = await new User({
          facebookID: profile.id,
          username: {
            familyName: profile.name.familyName,
            givenName: profile.name.givenName
          },
          imageURL: profile.photos[0].value,
          email: profile.emails[0].value,
          gender: profile.gender
        }).save();
        await user.generateAuthToken();
        done(null, user);
      }
    }
  )
);

//twitter
passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitterClientID,
      consumerSecret: keys.twitterClientSecret,
      callbackURL: '/auth/twitter/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ twitterID: profile.id });
      if (existingUser) {
        console.log(profile);
        existingUser.generateAuthToken();
        done(null, existingUser);
      } else {
        const user = await new User({
          twitterID: profile.id,
          username: {
            familyName: profile.displayName.split(' ')[1],
            givenName: profile.displayName.split(' ')[0]
          },
          imageURL: profile.photos[0].value
        }).save();
        user.generateAuthToken();
        done(null, user);
      }
    }
  )
);

//LinkedIn
passport.use(
  new LinkedInStrategy(
    {
      clientID: keys.linkedInClientID,
      clientSecret: keys.linkedInClientSecret,
      callbackURL: '/auth/linkedin/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ linkedinID: profile.id });
      if (existingUser) {
        console.log('profile', profile);
        existingUser.generateAuthToken();
        done(null, existingUser);
      } else {
        const user = await new User({
          linkedinID: profile.id,
          username: {
            familyName: profile.name.familyName,
            givenName: profile.name.givenName
          },
          imageURL: profile.photos[0].value,
          email: profile.emails[0].value
        }).save();
        user.generateAuthToken();
        done(null, user);
      }
    }
  )
);

// //email+password
// passport.use(
//   new LocalStrategy((username, password, done) => {
//     User.findOne({
//       username: username
//     }).then(existingUser => {
//       console.log('existed');
//       if (existingUser) {
//         done(null, existingUser);
//       } else {
//         console.log('creating new user');
//         new User({
//           username: username,
//           password: password
//         });
//       }
//     });
//   })
// );

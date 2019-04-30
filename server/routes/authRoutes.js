const passport = require('passport');

//exporting function to express app
module.exports = app => {
  //add google oauth route handler
  app.get(
    '/auth/google',
    //google oauth has a internal identifier call "google" for anonymous function
    passport.authenticate('google', {
      scope: ['profile', 'email'] //declaring what properties are retrieving
    })
  );
  //callback
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/events');
    }
  );

  //add facebook oauth route handler
  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      res.redirect('/events');
    }
  );

  //add twitter oauth route handler
  app.get(
    '/auth/twitter',
    passport.authenticate('twitter', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter'),
    (req, res) => {
      res.redirect('/events');
    }
  );

  //add linkedin oauth route handler
  app.get('/auth/linkedin', passport.authenticate('linkedin'));

  app.get(
    '/auth/linkedin/callback',
    passport.authenticate('linkedin'),
    (req, res) => {
      res.redirect('/events');
    }
  );

  // //local login
  // app.post('/login',
  // passport.authenticate('local', { failureRedirect: '/login' }),
  // function(req, res) {
  //   console.log("redirecting");
  //   res.redirect('/');
  // });

  //logout
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

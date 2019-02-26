const passport = require('passport');

//exporting function to express app
module.exports = app => {
  //add google oauth route handler
  app.get(
    '/auth/google',
    //google oauth has a internal identifier call "google" for anonymous function
    passport.authenticate('google', {
      scope: ['profile', 'email'] //not really needed, can specify profilefield in passport.js
    })
  );
  //callback
  app.get('/auth/google/callback', passport.authenticate('google'));

  //add facebook oauth route handler
  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', passport.authenticate('facebook'));

  //add twitter oauth route handler
  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get('/auth/twitter/callback', passport.authenticate('twitter'));

  //add linkedin oauth route handler
  app.get(
    '/auth/linkedin',
    passport.authenticate('linkedin')
  );

  app.get('/auth/linkedin/callback', passport.authenticate('linkedin'));

  //local login
  app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

  //logout
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

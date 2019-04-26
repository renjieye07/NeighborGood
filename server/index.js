//import libraries
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
//has to loaded models before passport is called
require('./models/User');
require('./services/passport');

//connet to mongodb
mongoose.connect(keys.mongoURI);

//create an express app
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookieKey] //make sure it's an array(will choose random one from the array)
  })
);
//tell passport to use the cookie
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//import libraries
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
//has to loaded models before passport is called
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')

require('./models/User');
require('./models/Post');
require('./models/Review');
require('./services/passport');

//connet to mongodb
//added userNewUrlParser and userCreateIndex
mongoose.connect(keys.mongoURI,{
  userNewUrlParser:true,
  userCreateIndex:true
});


//create an express app
const app = express();

// front-end back-end data transfer requires json format
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookieKey] //make sure it's an array(will choose random one from the array)
  })
);
//tell passport to use the cookie
app.use(passport.initialize());
app.use(passport.session());

// set up the 404 page,but not test yet
// app.get('*', (req,res)=>{
//   res.send('This is the 404 page. Your url is not found...')
// });


require('./routes/authRoutes')(app);
// require('./routes/postRoutes')(app);
// require('./routes/reviewRoutes')(app);
app.use(express.json());//expreess takes incoming data to an obj

//miantanice 
// app.use((req,res,next)=>{
//   res.status(503).send('Server is currently down, check back soon!!')
// })

// reqrie routes
const userRouter = require('./routes/user')
app.use(userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT)
})






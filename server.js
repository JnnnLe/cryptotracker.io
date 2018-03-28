require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookie = require('cookie-session');
const passport = require('passport');
const mongoose = require("mongoose");
const db = require("./models");
const key = require('./config/keys.js');

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/cryptoDataTest")

const PORT = process.env.PORT || 5000;
const app = express();

// serve static content for the app and set up body-parser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cookie({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [key.cookieKey]
  })
);


app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "handlebars");
require('./services/passport');
require('./routes/authControllers.js')(app);
require('./routes/dataControllers.js')(app);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
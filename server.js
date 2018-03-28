var express = require("express");
var bodyParser = require("body-parser");
var cookie = require('cookie-session');
var passport = require('passport');
const mongoose = require("mongoose");
const db = require("./models");
var PORT = process.env.PORT || 5000;
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/cryptoDataTest")
  


var app = express();

// serve static content for the app and set up body-parser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
require('dotenv').config();
var key = require('./config/keys.js');

app.use(passport.initialize());
app.use(passport.session());


app.set("view engine", "handlebars");
require('./services/passport');
require('./routes/authControllers.js')(app);
require('./routes/dataControllers.js')(app);


app.use(
  cookie({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [key.cookieKey]
  })
);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
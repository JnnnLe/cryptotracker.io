var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var key = require('../config/keys.js');
const db = require("../models");



passport.use(
  new GoogleStrategy(
    {
      clientID: key.googleClientID,
      clientSecret: key.googleClientSecretKey,
      callbackURL: '/auth/google/callback',
      //passReqToCallback : true,
      prompt: 'select_account' 
      
    },
     (accessToken, refreshToken, profile, done) => {
        db.User.create({"social_id":profile.id,"first_name":profile.name.givenName,"last_name":profile.name.familyName,"email":profile.emails[0].value});
        console.log('firstName',profile.name.givenName)

      console.log("social_id",profile.id);
      console.log('lastName',profile.name.familyName)
      console.log('email',profile.emails[0].value)
       done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
  console.log('userId', user.id);
});

passport.deserializeUser((id, done) => {
  
  done(null, id);
  
});

module.exports = passport;
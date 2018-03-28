var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var key = require('../config/keys.js');
const db = require("../models");



passport.use(
  new GoogleStrategy(
    {
      clientID: key.googleClientID,
      clientSecret: key.googleClientSecretKey,
      callbackURL: '/auth/google/callback'
      //passReqToCallback : true,
      
      
    },
     (accessToken, refreshToken, profile, done) => {
        
      const existingUser = db.User.findOne({ social_id: profile.id });
      if (existingUser) {
          done(null, existingUser);
      } else {
          db.User.create({ "social_id": profile.id, "first_name": profile.name.givenName, "last_name": profile.name.familyName, "email": profile.emails[0].value });
          done(null, user);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
  // console.log('userId', user);
});

passport.deserializeUser((user, done) => {
  
  done(null, user);
  
});

module.exports = passport;
const passport = require("../services/passport.js");

module.exports = app => {
  app.get(
    '/login',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
      prompt: 'select_account' 
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'), function(req,res) 
    { 
        // req.session.save();

    res.redirect('/');

    
  });

  app.get('/api/currentUser', function(req, res) {
    console.log('res======',req.user.social_id);
    res.json(req.user.first_name);
  });

  app.get('/auth/logout', function(req, res) {
    req.logout();
    res.send('loggedout')
  });

  app.get('/status', function(req, res) {
    console.log('res======',req);
    res.send('OK')
  });
};


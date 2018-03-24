const passport = require("../services/passport.js");

module.exports = app => {
  app.get(
    '/login',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'), function(req,res) 
    {
      prompt: 'select_account'
    res.send('hello');

    
  });

  app.get('/api/currentUser', function(req, res) {
    res.send(req.user);
    console.log('res',res);
  });

  app.get('/auth/logout', function(req, res) {
    req.logout();
    res.send('loggedout')
  });
};

//module.exports = app
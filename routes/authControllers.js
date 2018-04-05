const passport = require("../services/passport.js");

function loggedIn(req, res, next) {
  if (req.user) {
    return next();
  } else {
    res.redirect('/login');
  }
 }

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
    res.redirect('/');

    
  });

  app.get('/api/currentUser', loggedIn, function(req, res) {

    console.log("re.user##########",req.user)
    var userDetails ={
      social_id:req.user.social_id,
      first_name :req.user.first_name,
      last_name : req.user.last_name,
      photo:req.user.photo
    }
    console.log('res======',req.user);
    res.json(userDetails);
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/')
  });

  app.get('/status', function(req, res) {
    console.log('res======',req);
    res.send('OK')
  });
};


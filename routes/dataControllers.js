const passport = require("../services/passport.js");
const db = require("../models");

module.exports = app =>{

	app.post('/coinpost',function(req,res){
		console.log(req.User);
		console.log("usercoin detaild", req.body)
		if(req.user){
		db.Currency.create(req.body)
    .then(function (dbCurrency) {
      
      return db.User.findOneAndUpdate({"social_id":req.user}, { $push: { currency: dbCurrency._id } }, { new: true });
    })
    .then(function (dbUser) {
      // If the User was updated successfully, send it back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
	});
	return;
}
else{
	console.log("login plz");

}

	})
}
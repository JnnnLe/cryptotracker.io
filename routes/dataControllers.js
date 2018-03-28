const passport = require("../services/passport.js");
const db = require("../models");

module.exports = app =>{

	app.post('/coinpost',function(req,res){
		console.log("hgjfhjhgjhjhjhgjhjhjhj",req.user.social_id);
		console.log("usercoin detaild", req.body)
		if(req.user.social_id){
		db.Currency.create(req.body)
    .then(function (dbCurrency) {
      
      return db.User.findOneAndUpdate({"social_id":req.user.social_id}, { $push: { currency: dbCurrency._id } }, { new: true });
    })
    .then(function (dbUser) {
      // If the User was updated successfully, send it back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      //res.json(err);
    });
    //break;
}
else{
	console.log("login plz");

}

	});

app.get('/coinpost',function(req,res){
  db.User.find({})
    // Specify that we want to populate the retrieved libraries with any associated books
    .populate("currency")
    .then(function(dbUser) {
      // If any Libraries are found, send them to the client with any associated Books
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
})




}

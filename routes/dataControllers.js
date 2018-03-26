const passport = require("../services/passport.js");
const db = require("../models");

module.exports = app =>{

	app.post('/coinpost',function(req,res){
		console.log(req.user);
		console.log(req.body)

	})
}

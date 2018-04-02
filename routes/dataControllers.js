const passport = require("../services/passport.js");
const db = require("../models");

module.exports = app => {


    app.post('/coinpost', function(req, res) {
        console.log("hgjfhjhgjhjhjhgjhjhjhj", req.user.social_id);
        console.log("usercoin detaild", req.body)
        if (req.user.social_id) {
            db.Currency.create({ "coin_name": req.body.coinName, "quantity": req.body.quantity, "price_bought": req.body.priceBought })
                .then(function(dbCurrency) {
                    console.log("dbcurrency", dbCurrency)

                    return db.User.findOneAndUpdate({ "social_id": req.user.social_id }, { $push: { currency: dbCurrency._id } }, { new: true })
                })
                .then(function(dbUser) {
                    console.log("data created")
                })
                .catch(function(err) {
                    console.log(err)
                });

        } else {
            console.log("login plz");

        }

    });

    app.get('/getUser', function(req, res) {

        //console.log(req.user);

       db.User.find({social_id:req.user.social_id})
    // Specify that we want to populate the retrieved users with any associated notes
    .populate("currency")
    .then(function (dbUser) {
      // If able to successfully find and associate all Users and Notes, send them back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
       
    });


    

}
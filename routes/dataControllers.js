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

    app.get('/coinpost', function(req, res) {
        db.User.find({})

            .populate("currency")
            .then(function(dbUser) {

                res.json(dbUser);
            })
            .catch(function(err) {

                res.json(err);
            });
    })

}
const passport = require("../services/passport.js");
const db = require("../models");

function coinUpdater(coinData, coinNameFromUser) {
    console.log("function coin Data", coinData);
    console.log("function usercoin data", coinNameFromUser)
    for (var i = 0; i < coinData.length; i++) {
        if (coinData[i].coin_name === coinNameFromUser) {
            console.log("coin exists")
            var funcObj = {
                "bool": true,
                "quant": coinData[i].quantity
            }

            return funcObj;

        }

    }
    console.log("coin name not exists")
    return false
}

module.exports = app => {


    app.post('/coinpost', function (req, res) {
        console.log("hgjfhjhgjhjhjhgjhjhjhj", req.user.social_id);
        console.log("usercoin detaild", req.body)
        //const userCoin = req.user.body.toLowerCase();
        //findOne for user using socialID
        //
        if (req.user.social_id) {
            db.User.findOne({ "social_id": req.user.social_id }).then(function (data) {
                console.log("data.........", data);
                db.Currency.find({ "_id": { "$in": data.currency } }).then(function (coins) {
                    console.log("coin data.....", coins)
                    const functionObject = coinUpdater(coins, req.body.coinName)
                    console.log("function working????????????????", functionObject)


                    if (functionObject.bool) {
                        const updatedQuantity = parseInt(functionObject.quant) + parseInt(req.body.quantity);
                        console.log("updatedQuantity", updatedQuantity)
                        db.Currency.update({ "coin_name": req.body.coinName }, { $set: { "quantity": updatedQuantity } }, { multi: true })
                            .then(function (dbCurrency) {
                                console.log("dbcurrency", dbCurrency)
                                return res.redirect("/")
                                // return db.User.findOneAndUpdate({ "social_id": req.user.social_id }, { $set: { currency: dbCurrency._id } }, { new: true })
                            })

                            .catch(function (err) {
                                console.log(err)
                            })

                    }

                    else {

                        db.Currency.create({ "coin_name": req.body.coinName, "quantity": req.body.quantity })
                            .then(function (dbCurrency) {
                                console.log("dbcurrency", dbCurrency)

                                return db.User.findOneAndUpdate({ "social_id": req.user.social_id }, { $push: { currency: dbCurrency._id } }, { new: true })
                            })
                            .then(function (dbUser) {
                                console.log("data created")
                            })
                            .catch(function (err) {
                                console.log(err)
                            });
                    }

                })
            });
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
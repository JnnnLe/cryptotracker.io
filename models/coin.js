var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var CurrencySchema = new Schema({

    coin_name: String,
    quantity: String,
    price_bought: String
});


var Currency = mongoose.model("Currency", CurrencySchema);

module.exports = Currency;
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var CurrencySchema = new Schema({
  // `title` must be of type String
  coin_name: String,
  // `body` must be of type String
  quantity: String,
  price_bought:String
});

// This creates our model from the above schema, using mongoose's model method
var Currency = mongoose.model("Currency", CurrencySchema);

// Export the Note model
module.exports = Currency;

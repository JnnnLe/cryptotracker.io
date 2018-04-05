var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({

    social_id: {
        type: String,
        unique: true
    },
    first_name:{
      type:String
    },
    last_name:{
      type:String
    },
    email:{
      type:String,
      unique:true
    },
    photo:{
      type:String,
  },

    currency: [{
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Note model
        ref: "Currency"
    }]
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
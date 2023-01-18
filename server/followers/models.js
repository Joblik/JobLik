const mongoose = require("mongoose");
const { Schema} = mongoose;
const followersSchema = new mongoose.Schema({
  followersId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: false,
    unique: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: false,
    unique: true,
  },

});
const followers = mongoose.model("followers", followersSchema);
module.exports = {followers }; 


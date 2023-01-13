const mongoose = require("mongoose");
const { Schema} = mongoose;
const followersSchema = new mongoose.Schema({
    followersId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: false,
  },


});
const followers = mongoose.model("followers", followersSchema);
module.exports = {followers }; 

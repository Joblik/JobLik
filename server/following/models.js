const mongoose = require("mongoose");
const { Schema} = mongoose;
const followingSchema = new mongoose.Schema({
    followingId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },


});
const following = mongoose.model("following", followingSchema);
module.exports = following; 

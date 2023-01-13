const mongoose = require("mongoose");
const {Schema} = mongoose;
const reclamationSchema = new mongoose.Schema({
    reclamation: {
    type: String,
    required: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: false,
  },


});
const reclamation = mongoose.model("reclamation", reclamationSchema);
module.exports = {reclamation}; 

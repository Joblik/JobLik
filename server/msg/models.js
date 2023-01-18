const mongoose = require("mongoose");
const { Schema} = mongoose;
const msgSchema = new mongoose.Schema({
 msg: {
    type: String,
    require: true,
  },
  sender: {
    type: String,
    require: true,
  },
  receiver: {
    type: String,
    require: true,
  },
  createdAt: Date
});


const Msg = mongoose.model("Msg", msgSchema);
module.exports = { Msg }; 

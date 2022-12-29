const mongoose = require("mongoose");

const OTPSchema = new mongoose.Schema({
  userId: { type: String },
  OTPcode: { type: String },
});

module.exports = mongoose.model("otp", OTPSchema);

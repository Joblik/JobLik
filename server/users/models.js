const mongoose = require("mongoose");
const { Schema} = mongoose;
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    role: "string",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dqmhtibfm/image/upload/v1672229902/icon-5359553_960_720_owjtc1.webp",
  },
  phone: {
    type: Number,
    // default: false,
  },
  job: {
    type: String,
    // require: true,
  },
});
module.exports = mongoose.model("User", UserSchema);

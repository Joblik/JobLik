const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Username: {
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
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  Uimage: {
    type: String,
    default:
      "https://res.cloudinary.com/dqmhtibfm/image/upload/v1672229902/icon-5359553_960_720_owjtc1.webp",
  },
  rate: {
    type: [],
  },
  rating: {
    type: [],
  },
  following: {
    type: [],
  },
  followers: {
    type: [],
  },
});
module.exports = mongoose.model("User", UserSchema);

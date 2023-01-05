const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema({
  
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  adress: {
    type: String,
    require: true,
  },
  owner: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = { PostsSchema };

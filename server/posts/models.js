const mongoose = require("mongoose");
const { Schema} = mongoose;
const PostsSchema = new mongoose.Schema({
  
  description: {
    type: String,
    require: true,
  },
  adress: {
    type: String,
    require: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  
});

module.exports = { PostsSchema };

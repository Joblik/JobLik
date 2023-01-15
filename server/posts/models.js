const mongoose = require("mongoose");
const { Schema} = mongoose;
const PostsSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  adress: {
    type: String,
    require: false,
  },
  title: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: false,
  },
  likes: [
    {
       type: Schema.Types.ObjectId, ref: 'User'

    }
      ],
      
      
});
const Post = mongoose.model("Post", PostsSchema);
module.exports = { Post }; 

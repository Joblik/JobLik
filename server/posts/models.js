const mongoose = require("mongoose");
const { Types} = mongoose.Schema;
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
    type: Types.ObjectId,
    ref: "User",
    
    required: false,
  },
  likes: [
    {
       type: Types.ObjectId, ref: 'User'
    }
      ],
      
      
});
const Post = mongoose.model("Post", PostsSchema);
module.exports = { Post }; 

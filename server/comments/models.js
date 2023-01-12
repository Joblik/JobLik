const mongoose = require("mongoose");
const { Schema} = mongoose;
const CommentSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
} ,
 postId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: false,
},
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: false,
},


});
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment ; 

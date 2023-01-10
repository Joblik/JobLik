const { PostsSchema } =require('./posts/models') ; 
const {msgSchema}= require('./msg/models')
const mongoose = require('mongoose')
const db =
  "mongodb+srv://root:root@cluster0.anvgobs.mongodb.net/?retryWrites=true&w=majority"
;
mongoose.set("strictQuery", true);
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("Database mrigla ..");
  })
  .catch((err) => console.log(err));
  const Posts=mongoose.model('Posts',PostsSchema)
  const Message=mongoose.model('Message',msgSchema)
  module.exports = mongoose;
  module.exports = {Posts}
  module.exports = {Message}


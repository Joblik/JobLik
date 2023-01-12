const express = require("express");
const cors = require("cors");
const mongoose = require ('mongoose')
const app = express();
const postsRoutes = require("./posts/routes")
const userRoutes = require("./users/routes")
const commentRoutes = require("./comments/routes")
const followingRoutes = require("./following/routes")
const followersRoutes= require("./followers/routes")
const reclamationRoutes=require("./reclamation/routes")
app.use(express.json());
app.use(cors());
app.use("/post",postsRoutes);
app.use("/user",userRoutes);
app.use("/comment",commentRoutes);
app.use("/following",followingRoutes);
app.use("/followers",followersRoutes);
app.use("/reclamation",reclamationRoutes);


const db= "mongodb+srv://root:root@cluster0.anvgobs.mongodb.net/?retryWrites=true&w=majority"; 
mongoose.set('strictQuery',true) 
mongoose .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res) => {
  console.log('Database temchi mrigla ..');
})
.catch((err) => console.log(err));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});

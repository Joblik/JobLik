const express = require("express");
const cors = require("cors");
const mongoose = require ('mongoose')
const app = express();
const postsRoutes = require("./posts/routes")
const userRoutes = require("./users/routes")
const commentRoutes = require("./comments/routes")
const reclamationRoutes=require("./reclamation/routes")
const msgRoutes = require("./msg/routes")
const followingsRoutes=require("./following/routes")
const followersRoutes=require("./followers/routes")


app.use(express.json());
app.use(cors());
app.use("/msg",msgRoutes);
app.use("/post",postsRoutes);
app.use("/user",userRoutes);
app.use("/comment",commentRoutes);
app.use("/reclamation",reclamationRoutes);
app.use("/followings",followingsRoutes)
app.use("/followers",followersRoutes)

app.use("/chat",msgRoutes)

const db= "mongodb+srv://root:root@cluster0.anvgobs.mongodb.net/?retryWrites=true&w=majority"; 
mongoose.set('strictQuery',true) 
mongoose .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res) => {
  console.log('Database temchi mrigla ..');
})
.catch((err) => console.log(err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});

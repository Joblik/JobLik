const express = require('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
const app = express()
app.use(express.json())
app.use (cors())




const db= "mongodb+srv://root:root@cluster0.anvgobs.mongodb.net/?retryWrites=true&w=majority"; 
mongoose.set('strictQuery',true) 
mongoose .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res) => {
  console.log('Database temchi mrigla ..');
})
.catch((err) => console.log(err));

const PORT=8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`);
  });
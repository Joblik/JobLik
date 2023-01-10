const express = require("express");
const cors = require("cors");
const mongoose = require("./db");
const app = express();

const routerPosts = require("./posts/routes");
const routerUsers = require("./users/routes");
const routerMsg = require("./msg/routes");

app.use(express.json());
app.use(cors());

app.use("/Posts", routerPosts);
app.use("/Users", routerUsers);
app.use("/Msg", routerMsg);


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});

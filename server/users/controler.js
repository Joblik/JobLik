
const User = require("./models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const GetAllUser = async (req, res) => {
  try {
    await User.find({}).then(result => { res.json(result) })
  }
  catch (err) {
    res.json(err)
  }
}



const addUser = async (req, res) => {

    const body = req.body
    console.log(body);
    try {
      await User.create(body, (err, result) => {
        if (err) res.json(err)
        res.json(result)
      })
    }
    catch (err) {
      console.log(err);
    }
  }
  
  const DeleteOneUser = async (req, res) => {
    try {
      await User.deleteOne({ Pname:req.body.Pname }).then((result) => {
        res.json(result);
      });
    } catch (err) {
      res.json(err);
    }
  };

  const UpdateOneUser = async (req, res) => {
    try {
      

      await User.updateOne(
        { Pname: req.body.Pname },
        { $set: { Pquantity: req.body.Pquantity } }
      ).then((result) => {
        res.json(result);
      });
    } catch (err) {
      res.json(err);
    }
  };

  async function login(req, res) {
    try {
      const {
        body: { email, password },
      } = req;
  
      if (!email && !password) {
        return res.status(301).json({
          message: "Email or password required",
        });
      }
  
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: "Bad cred" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Bad cred" });
      }
  
      const token = jwt.sign({ id: user["_id"] }, "SECRETCODE");
  
      return res
        .status(200)
        .json({ name: user.Username, email: user.email, token, id: user["_id"] });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  const register = async (req, res) => {
    try {
      const {
        body: { Username, email, password },
      } = req;
  
      if (!email && !Username  && !password) {
        return res.status(301).json({
          message: "Please fill all required fields",
        });
      }
  
      const newpassword = await bcrypt.hash(password, 10);
  
      const user = new User({
        Username,
        email,
        password: newpassword,
      });
  
      user.save();
  
      return res.status(200).json({ message: "User Saved" });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  



  module.exports = {

    UpdateOneUser,
    GetAllUser,
    addUser,
    DeleteOneUser,
    login,
    register,
  }
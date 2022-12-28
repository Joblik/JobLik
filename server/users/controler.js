
const { User} = require("./models");



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



  module.exports = {

    UpdateOneUser,
    GetAllUser,
    addUser,
    DeleteOneUser
  }
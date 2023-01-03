
const { Posts} = require("../db");



const GetAllPosts = async (req, res) => {
  console.log(req.body);
  try {
     Posts.find(({}),(err, result)=>{res.json(result)})
  }
  catch (err) {
    res.json(err)
  }
}



const addPost = async (req, res) => {

    const body = req.body
    console.log(body);
    try {
      await Posts.create(body, (err, result) => {
        if (err) {res.json(err)}
        res.json(result)
      })
    }
    catch (err) {
      console.log(err);
    }
  }
  
  const DeleteOnePost = async (req, res) => {
    try {
      await Posts.deleteOne({ Pname:req.body.Pname }).then((result) => {
        res.json(result);
      });
    } catch (err) {
      res.json(err);
    }
  };

  const UpdateOnePost = async (req, res) => {
    try {
      

      await Posts.updateOne(
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

    UpdateOnePost,
    GetAllPosts,
    addPost,
    DeleteOnePost
  }
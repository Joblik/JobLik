const { Posts } = require("../db");

// Getting All Posts
const getAllPosts = (req, res) => {
  console.log("==============> done");
  Posts.find()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
};

// Getting One Post
const getOnePost = (req, res) => {
  Posts.findOne({ _id: req.params.id })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
};

// Creating Post
const addPost = (req, res) => {
  Posts.create(req.body)
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
};

// Updating Post
const updatePost = (req, res) => {
  Posts.findOneAndUpdate({ _id: req.params.id }, req.body)

    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
};

// Deleting Post
const deletePost = (req, res) => {
  Posts.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  updatePost,
  getAllPosts,
  addPost,
  deletePost,
  getOnePost,
};

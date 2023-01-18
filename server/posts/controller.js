const {Post} = require("./models")
const User = require("../users/models");

//function to Create a Post
const addPost = async (req, res) => {
    try {
      const posts = await Post.create(req.body);
      res.status(201).send(posts);
    } catch (err) {
      res.status(400).send(err);
    }
  };

  //function to get all the Posts
  const getAllPosts = async (req, res) => {
    try {
      const posts = await Post.find();
      res.status(200).send(posts);
    } catch (err) {
      res.status(500).send(err);
    }
  }; 
  const getPostById = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).send("Post not found.");
      }
      res.status(200).send(post);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  //function to update the Post 
  const updatePostById = async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!post) {
        return res.status(404).send("Post not found.");
      }
      res.status(200).send(post);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  //function to Delete the Post 
  const deletePostById = async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);
      if (!post) {
        return res.status(404).send("Post not found.");
      }
      res.status(200).send(post);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  const addLike = async (req, res) => {
      const postId = req.body.postId;
      const userId = req.body.userId;
      try {
          const post = await Post.findById(postId);
          const user = await User.findById(userId);
    
          if (!post ) {
              res.status(404).json({ message: 'Post or user not found' });
              return;
          }
    
          if(post.likes.includes(userId)){
              res.status(409).json({ message: 'User already liked this post' });
              return;
          }
          post.likes.push(userId);
          await post.save();
          res.status(201).json(post);
      } catch (err) {
          res.status(500).json({ message: err.message });
      }
    }; 
    
   
  module.exports = {addPost,getAllPosts,addLike,deletePostById}
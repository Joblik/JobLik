const { Posts } = require("../db");
const User = require("../users/models");
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
const addLike = async (req, res) => {
  const postId = req.body.postId;
  const userId = req.body.userId;
  try {
      const post = await Posts.findById(postId);
      const user = await User.findById(userId);

      if (!post || !user) {
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
}

const removeLike = async (req, res) => {
  const postId = req.body.postId;
  const userId = req.body.userId;
  try {
      const post = await Posts.findById(postId);

      if (!post) {
          res.status(404).json({ message: 'Post not found' });
          return;
      }
      post.likes = post.likes.filter(likeId => likeId.toString() !== userId.toString());
      await post.save();
      res.status(200).json(post);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
}
const addComment = async (req, res) => {
  try {
    const postId = req.body.postId;
    const comment = req.body.comment;

    if (!postId || !comment) {
      res.status(400).json({ message: 'Missing required fields' });
      return;
    }
    const result = await db
      .collection('posts')
      .updateOne({ _id: postId }, { $push: { comments: comment } });
    console.log(`Added comment to post ${postId}`);
    res.status(201).json(result);
  } catch (error) {
    console.log(`Error adding comment to post ${postId}`);
    res.status(500).json({ message: error.message });
  }
};


// Retrieve comments for a post
const getComments = async (req, res) => {
  try {
    const postId = req.body.postId;

    if (!postId) {
      res.status(400).json({ message: 'Missing required fields' });
      return;
    }
    const post = await db.collection('posts').findOne({ _id: postId });
    if (!post) {
      res.status(404).json({ message: `Post ${postId} not found` });
      return;
    }
    res.status(200).json(post.comments);
  } catch (error) {
    console.log(`Error retrieving comments for post ${postId}`);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  updatePost,
  getAllPosts,
  addPost,
  deletePost,
  getOnePost,
  addComment,
};

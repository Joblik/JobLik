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
const addLike = async (postId, userId) => {
  try {
      const Posts = await Post.findById(postId);
      const user = await User.findById(userId);

      if (!Posts || !user) {
          throw new Error('Post or user not found');
      }

      if(Posts.likes.includes(userId)){
          throw new Error('User already liked this Posts');
      }
      Posts.likes.push(userId);
      await Posts.save();
      return Posts;
  } catch (err) {
      throw new Error(err.message);
  }
}

const removeLike = async (postId, userId) => {
  try {
      const Posts = await Post.findById(postId);
      if (!Posts) {
          throw new Error('Post not found');
      }
      Posts.likes = Posts.likes.filter(likeId => likeId.toString() !== userId.toString());
      await Posts.save();
      return Posts;
  } catch (err) {
      throw new Error(err.message);
  }
} 
const addComment = async (postId, comment) => {
  try {
    const result = await db
      .collection('posts')
      .updateOne({ _id: postId }, { $push: { comments: comment } });
    console.log(`Added comment to post ${postId}`);
    return result;
  } catch (error) {
    console.log(`Error adding comment to post ${postId}`);
    throw error;
  }
};

// Retrieve comments for a post
const getComments = async postId => {
  try {
    const post = await db.collection('posts').findOne({ _id: postId });
    if (!post) {
      throw new Error(`Post ${postId} not found`);
    }
    return post.comments;
  } catch (error) {
    console.log(`Error retrieving comments for post ${postId}`);
    throw error;
  }
};
module.exports = {
  updatePost,
  getAllPosts,
  addPost,
  deletePost,
  getOnePost,
};

const Comment = require("./models")
// Create a comment
const addComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).send(comment);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Read all comments
const getComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).send(comments);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Read a single comment
const getOneComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).send("Comment not found.");
        }
        res.status(200).send(comment);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update a comment
const putComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!comment) {
            return res.status(404).send("Comment not found.");
        }
        res.status(200).send(comment);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Delete a comment
const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).send("Comment not found.");
        }
        res.status(200).send(comment);
    } catch (err) {
        res.status(500).send(err);
    }
};

// const addComment = async (req, res) => {
//     try {
//       const {description, postId, userId } = req.body;
//       const comment = new Comment({ description, postId, userId });
//       await comment.save();
//       return res.status(200).json({ comment });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   };
//   const deleteComment = async (req, res) => {
//     try {
//       const comment = await Comment.findByIdAndDelete(req.body.id);
//       if (!comment) {
//         return res.status(404).send("comment not found.");
//       }
//       res.status(200).send(Comment);
//     } catch (err) {
//       res.status(500).send(err);
//     } 
//   } 

  module.exports = {addComment,deleteComment,putComment,getComments,getOneComment}
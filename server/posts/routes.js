const router = require("express").Router();
const {
  updatePost,
  getAllPosts,
  addPost,
  deletePost,
  getOnePost,
  addComment,
} = require("./controller");

router.route("/getAllPosts").get(getAllPosts);
router.route("/addPost").post(addPost);
router.route("/addComment").post(addComment);
router.route("/:id").get(getOnePost);
router.route("/:id").put(updatePost);
router.route("/:id").delete(deletePost);

module.exports = router;

const router = require('express').Router();
const {
  updatePost,
  getAllPosts,
  addPost,
  deletePost,
  getOnePost
} = require("./controller");
    

router.route('/getAllPosts').get(getAllPosts)
router.route("/:id").get(getOnePost);
router.route('/addPost').post(addPost)
router.route('/:id').put(updatePost)
router.route('/:id').delete(deletePost)

module.exports = router;
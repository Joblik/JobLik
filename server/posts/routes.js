const router = require("express").Router();

const  {getAllPosts ,
       addPost , 
       addLike, 
       deletePostById,
} = require("./controller");

router.route('/getAllPosts').get(getAllPosts);
router.route('/addPost').post(addPost);
router.route('/addLike').post(addLike);
router.route("/deletePost/:id").delete(deletePostById);
module.exports = router;
const router = require("express").Router();

const  {getAllPosts ,
       addPost , 
       addLike, 
       deletePostById,
       getAllLikes,
} = require("./controller");

router.route('/getAllPosts').get(getAllLikes);
router.route('/getAllLikes').get(getAllPosts);
router.route('/addPost').post(addPost);
router.route('/addLike').post(addLike);
router.route("/deletePost/:id").delete(deletePostById);
module.exports = router;
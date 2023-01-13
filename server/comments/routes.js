const router = require("express").Router();

const  {addComment,deleteComment,putComment,getComments,getOneComment} = require("./controler");
router.route('/addComment').post(addComment);
router.route('/deleteComment/:id').delete(deleteComment);
router.route('/getAllComment').get(getComments);
router.route('/getOneComment/:id').get(getOneComment);
router.route('/putComment/:id').put(putComment)
module.exports = router;
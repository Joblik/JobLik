const router = require('express').Router();
const {
    UpdateOnePost,
    GetAllPosts,
    addPost,
    DeleteOnePost

}= require("./controler");
    

router.route('/addPost').post(addPost)
router.route('/DeleteOnePost').delete(DeleteOnePost)
router.route('/UpdateOnePost').put(UpdateOnePost)
router.route('/GetAllPosts').get(GetAllPosts)

module.exports = router;
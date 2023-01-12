const router = require("express").Router();

const  {getAllFoloowing,findByIdAndDelete,addOneFollowing} = require("./controler");
router.route('/addOneFollowing').post(addOneFollowing);
router.route('/findByIdAndDelete/:id').delete(findByIdAndDelete);
router.route('/getAllFoloowing').get(getAllFoloowing);
module.exports = router;
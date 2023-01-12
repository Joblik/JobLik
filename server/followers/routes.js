const router = require("express").Router();

const  {getAllFollowers,addOneFollowers} = require("./controler");
router.route('/addOneFollowers').post(addOneFollowers);
router.route('/getAllFollowers').get(getAllFollowers);
module.exports = router;
const router = require("express").Router();

const  {getAllreclamation,addOneReclamation} = require("./controler");
router.route('/addOnereclamation').post(addOneReclamation);
router.route('/getAllreclamation').get(getAllreclamation);
module.exports = router;
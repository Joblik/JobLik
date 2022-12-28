const router = require('express').Router();
const {
    UpdateOneUser,
    GetAllUser,
    addUser,
    DeleteOneUser

}= require("./controler");
    

router.route('/addUser').post(addUser)
router.route('/DeleteOneUser').delete(DeleteOneUser)
router.route('/UpdateOneUser').put(UpdateOneUser)
router.route('/GetAllUser').get(GetAllUser)

module.exports = router;
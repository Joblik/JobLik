const router = require('express').Router();
const {
    UpdateOneUser,
    GetAllUser,
    addUser,
    DeleteOneUser

}= require("./controler");
    

router.route('/addUser').post(addUser)
router.route('/DeleteOneUser/:id').delete(DeleteOneUser)
router.route('/UpdateOneUser/:id').put(UpdateOneUser)
router.route('/GetAllUser').get(GetAllUser)

module.exports = router;
const router = require("express").Router();
const {
    getAllMessage,
    addMessage,
    getOnemsg
} = require("./controler");

router.route("/getAllMessage").get(getAllMessage);
router.route("/addMessage").post(addMessage);
router.route("/getOnemsg").get(getOnemsg);


module.exports = router;

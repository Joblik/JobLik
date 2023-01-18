const router = require("express").Router();
const {
    getAllMessage,
    addMessage,
} = require("./controler");

router.route("/getAllMessage").get(getAllMessage);
router.route("/addMessage").post(addMessage);


module.exports = router;

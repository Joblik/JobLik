const router = require("express").Router();
const {
    fetchMessages,
    sendMessage,
} = require("./controler");

router.route("/sendMessage").post(sendMessage);
router.route("/fetchMessages").get(fetchMessages);
module.exports = router;
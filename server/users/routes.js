const router = require("express").Router();
const {
  UpdateOneUser,
  GetAllUser,
  addUser,
  DeleteOneUser,
  login,
  register,
  otp,
} = require("./controler");

router.route("/addUser").post(addUser);
router.route("/DeleteOneUser").delete(DeleteOneUser);
router.route("/UpdateOneUser").put(UpdateOneUser);
router.route("/GetAllUser").get(GetAllUser);
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/otp").post(otp);

module.exports = router;

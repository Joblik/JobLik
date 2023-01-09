const router = require("express").Router();
const {
  UpdateOneUser,
  GetAllUser,
  addUser,
  DeleteOneUser,
  login,
  register,
  otp,
  forgetPassword,
  changePassword,
  GetOneUser,
} = require("./controller");

    
router.route('/addUser').post(addUser)
router.route('/DeleteOneUser/:id').delete(DeleteOneUser)
router.route('/UpdateOneUser/:id').put(UpdateOneUser)
router.route('/GetAllUser').get(GetAllUser)
router.route('/:id').get(GetOneUser)
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/otp").post(otp);
router.route('/forget-pasword').post(forgetPassword)
router.route('/forget-pasword/:token').post(changePassword)

module.exports = router;

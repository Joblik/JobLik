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

    
router.post('/addUser',addUser).post(addUser)
router.delete('/DeleteOneUser/:id',DeleteOneUser)
router.put('/UpdateOneUser/:id',UpdateOneUser)
router.get('/GetAllUser',GetAllUser)
router.post("/login",login);
router.post("/register",register);
router.post("/otp",otp);

module.exports = router;

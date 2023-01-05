const User = require("./models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const OTP = require("./OTP/otpSchema");
const transporter = require("../services/mailHandler");
const otpEmail = require("../emailTemp/otpTemp")
const verifTemp = require("../emailTemp/verifiedTemp")
const forgetPasswordTemp = require("../emailTemp/forgetPasswordTemp")



const GetAllUser = async (req, res) => {
  try {
    await User.find({}).then((result) => {
      res.json(result);
    });
  } catch (err) {
   return  res.json(err);
  }
};

const addUser = async (req, res) => {

  const body = req.body;
console.log(body);
try {
  await User.create(body, (err, result) => {
    if (err) res.json(err);
    res.json(result);
  });
} catch (err) {
return    console.log(err);
}

};


const DeleteOneUser = async (req, res) => {
  try {
    await User.deleteOne({ Pname: req.body.Pname }).then((result) => {
      res.json(result);
    });
  } catch (err) {
  return   res.json(err);
  }
};

const UpdateOneUser = async (req, res) => {
  try {
    await User.updateOne(
      { Pname: req.body.Pname },
      { $set: { Pquantity: req.body.Pquantity } }
    ).then((result) => {
      res.json(result);
    });
  } catch (err) {
  return   res.json(err);
  }
};

async function login(req, res) {
  try {
    const {
      body: { email, password },
    } = req;

    if (!email && !password) {
      return res.status(301).json({
        message: "Email or password required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Bad cred" });
    }
    if (!user.isVerified) {
      return res.status(400).json({ message: "PLEASE VERIFY YOUR ACCOUNT" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Bad cred" });
    }

    const token = jwt.sign({ id: user["_id"] }, "SECRETCODE");

    return res
      .status(200)
      .json({ name: user.Username, email: user.email, token, id: user["_id"] });
  } catch (error) {
 return     res.status(500).send(error);
  }
}

const register = async (req, res) => {
  try {
    const {
      body: { Username, email, password },
    } = req;

    if (!email && !Username && !password) {
      return res.status(301).json({
        message: "Please fill all required fields",
      });
    }
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(400).json({ message: "email USED by another account" });
    }

    const newpassword = await bcrypt.hash(password, 10);

    const user = new User({
      Username,
      email,
      password: newpassword,
    });

    const OTPcode = Math.floor(Math.random() * 1000000);

    const newOTP = new OTP({
      userId: user["_id"],
      OTPcode,
    });

    const mailOptions = {
      from: "JOB LIK <joblik4@gmail.com>",
      to: email,
      subject: "CONFIRM YOUR ACCOUNT",
      html: otpEmail(OTPcode),
    };

    await transporter.sendMail(mailOptions);
    await newOTP.save();
    await user.save();

    return res
      .status(200)
      .json({ message: "User Saved PLEASE VERIFY YOUR ACCOUNT" });
  } catch (error) {
  return   res.status(500).send(error);
  }
};

const otp = async (req, res) => {
  try {
    const {
      body: { email, otp },
    } = req;
    if (!email || !otp) {
      return res.status(301).json({
        message: "Please fill all required fields",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(301).json({
        message: "user Invalid",
      });
    }
    const userOtp = await OTP.findOne({ email });
    if (!userOtp) {
      return res.status(301).json({
        message: "OTP ERROR",
      });
    }
    if (userOtp.OTPcode !== otp) {
      return res.status(301).json({
        message: "OTP Not Valid",
      });
    }

    await OTP.findOneAndRemove({ userId: user["_id"] });
    user.isVerified = true;
    await user.save();

    const mailOptions = {
      from: "JOB LIK <joblik4@gmail.com>",
      to: email,
      subject: "ACCOUNT Verified",
      html: verifTemp(),
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({
      message: "USER VERIFIED",
    });
  } catch (err) {
   return  res.status(500).send(err);
  }
};


const forgetPassword = async (req , res) => {
  try{
    const {  body : {email}} = req

    if (!email) { return res.status(301).json({
      message: "Please fill all required fields",
    }); }

    const user = await User.findOne({ email });

    if (user) {
      const token = jwt.sign({ forgetPaswordId: user["_id"] }, "SECRETCODE");

      const mailOptions = {
        from: "JOB LIK <joblik4@gmail.com>",
        to: email,
        subject: "RESET PASSWORD",
        html: forgetPasswordTemp("http://localhost:3000/forget-password",token),
      };
      await transporter.sendMail(mailOptions);

    }

    return res.status(200).json({ message: "Your request has been created, if the email is associated to an account an email of confirmation will be sent with a link to reset it." });

  } catch (e) {
  return   res.status(500).send(e);
  }
}

const changePassword = async (req , res) => {
  try{

    const {params : {token} , body : {password}} = req
    if (!password) { return res.status(301).json({
      message: "Please fill all required fields",
    }); }

    const JwtRegEx = new RegExp(/^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)/)

if (!JwtRegEx.test(token) ){
  return res.redirect(301, '/login')
}

const userId = jwt.decode(token)
const user = await User.findById(userId.forgetPaswordId)

    if (!user){
      return res.redirect(301, '/login')
    }

    const newHashedPassword  = await bcrypt.hash(password, 10)

    user.password = newHashedPassword

 await user.save()

    return res.status(200).json({ message: "Your password has been changed" , Nuser});

  } catch (e) {
    return   res.status(500).send(e);
  }
}
module.exports = {
  UpdateOneUser,
  GetAllUser,
  addUser,
  DeleteOneUser,
  login,
  register,
  otp,
  forgetPassword,
  changePassword
};

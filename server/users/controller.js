const User = require("./models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const OTP = require("./OTP/otpSchema");
const transporter = require("../services/mailHandler");
const otpEmail = require("../emailTemp/otpTemp");
const verifTemp = require("../emailTemp/verifiedTemp");
const forgetPasswordTemp = require("../emailTemp/forgetPasswordTemp");


const GetAllUser = async (req, res) => {
  try {
    await User.find({}).then((result) => {
      res.json(result);
    });
  } catch (err) {
    return res.json(err);
  }
};
const GetOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(201).send(user);
  } catch (err) {
    return res.json(err);
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
    return console.log(err);
  }
};

const DeleteOneUser = async (req, res) => {
  try {
    await User.deleteOne({ Pname: req.body.Pname }).then((result) => {
      res.json(result);
    });
  } catch (err) {
    return res.json(err);
  }
};

const UpdateOneUser = async (req, res) => {
  console.log("🚀 ~ file: controller.js:53 ~ UpdateOneUser ~ req", req.body);
  console.log("🚀 ~ file: controller.js:53 ~ UpdateOneUser ~ req", req.params);
  
  
  try {
    await User.updateOne()
    _id = req.params.id
    User.findByIdAndUpdate(_id,req.body,{new:true})
    res.status(201).send({message:"updated successfully"})
  } catch (err) {
    return res.json(err);
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
      .json({ name: user.username, email: user.email, token, id: user["_id"] });
  } catch (error) {
    return res.status(500).send(error);
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

    const newPassword = await bcrypt.hash(password, 10);

    const user = new User({
      Username,
      email,
      password: newPassword,
    });

    const OTPcode = Math.floor(Math.random() * 1000000);

    const newOTP = new OTP({
      userId: user["_id"],
      OTPcode,
      expirationTime: Date.now() + 15 * 60 * 1000,
    });

    const mailOptions = {
      from: "JOB LIK <test.ali@croissant-rouge.org.tn>",
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
    return res.status(500).send(error);
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

    if (userOtp.expirationTime < Date.now()) {
      return res.status(301).json({
        message: "OTP expired",
      });
    }

    await OTP.findOneAndRemove({ userId: user["_id"] });
    user.isVerified = true;
    await user.save();

    const mailOptions = {
      from: "JOB LIK <test.ali@croissant-rouge.org.tn>",
      to: email,
      subject: "ACCOUNT Verified",
      html: verifTemp(),
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({
      message: "USER VERIFIED",
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const forgetPassword = async (req, res) => {
  try {
    const {
      body: { email },
    } = req;

    if (!email) {
      return res.status(301).json({
        message: "Please fill all required fields",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      const token = jwt.sign({ forgetPaswordId: user["_id"] }, "SECRETCODE");

      const mailOptions = {
        from: "JOB LIK <test.ali@croissant-rouge.org.tn>",
        to: email,
        subject: "RESET PASSWORD",
        html: forgetPasswordTemp(
          "http://192.168.104.28:8080/forget-password/" + token
        ),
      };
      await transporter.sendMail(mailOptions);
    }

    return res.status(200).json({
      message:
        "Your request has been created, if the email is associated to an account an email of confirmation will be sent with a link to reset it.",
    });
  } catch (e) {
    return res.status(500).send(e);
  }
};

const changePassword = async (req, res) => {
  try {
    const {
      params: { token },
      body: { password },
    } = req;
    if (!password) {
      return res.status(301).json({
        message: "Please fill all required fields",
      });
    }

    const JwtRegEx = new RegExp(
      /^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)/
    );

    if (!JwtRegEx.test(token)) {
      return res.redirect(301, "/login");
    }

    const userId = jwt.decode(token);
    const user = await User.findById(userId.forgetPaswordId);

    if (!user) {
      return res.redirect(301, "/login");
    }

    const newHashedPassword = await bcrypt.hash(password, 10);

    user.password = newHashedPassword;

    await user.save();

    return res
      .status(200)
      .json({ message: "Your password has been changed", user });
  } catch (e) {
    return res.status(500).send(e);
  }
}; 

const addFollower = async(req, res) => {
  try {
    const userId = req.body.userId;
    const followerId = req.body.followerId;
    const user = await addFollower(userId, followerId);
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; 
const removeFollowing = async(req, res) => {
  try {
    const userId = req.body.userId;
    const followingId = req.body.followingId;
    const user = await removeFollowing(userId, followingId);
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; 
const getFollowers = async(req, res) => {
  try {
    const userId = req.params.userId;
    const followers = await getFollowers(userId);
    res.status(200).json({ followers });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; 
const getFollowing = async(req, res) => {
  try {
    const userId = req.body.userId;
    const following = await getFollowing(userId);
    res.status(200).json({ following });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; 
module.exports = {
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
  addFollower,
  removeFollowing, 
  getFollowers, 
  getFollowing,

};

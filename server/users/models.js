const mongoose = require('mongoose');


    const UserSchema = new mongoose.Schema({
        Username: {
          type: String,
        },
        email: {
          type: String,
        },
        password: {
          type: Number,
        },
        Uimage: {
          type: String,
          default:
            "https://res.cloudinary.com/dqmhtibfm/image/upload/v1672229902/icon-5359553_960_720_owjtc1.webp",
        },
        rate: {
          type: [],
        },
        rating: {
            type: [],
          },
        following: {
            type: [],
          },
          followers: {
            type: [],
          },
      });
      const User=mongoose.model('User',UserSchema);
      module.exports={User}
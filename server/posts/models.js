const mongoose = require('mongoose');


    const PostsSchema = new mongoose.Schema({
        Uname: {
          type: String,
        },
        Title: {
          type: String,
        },
        Description: {
          type: String,
        },
        Uimage: {
          type: String,
          default:
            "https://res.cloudinary.com/dugewmeeh/image/upload/v1670743970/mawi%20cuisine/blank-profile-picture-973460_1280_pgdqwd.png",
        },
        Adress: {
          type: String,
        },
        
        Reward: {
            type: Number,
          },
      });
      const Posts=mongoose.model('Posts',PostsSchema);
      module.exports={Posts}
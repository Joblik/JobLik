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
      },
      Adress: {
        type: String,
      },

      Reward: {
        type: Number,
      },
      owner: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
      }]
    });
    
      module.exports={PostsSchema}
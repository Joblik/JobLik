const  {followers}= require("./models")

const getAllFollowers=  async (req, res) => {
    try {
      const followerRes = await followers.find({}).populate("userId","email username image");
      res.status(200).send(followerRes);
    } catch (err) {
      console.log(err);

      res.status(500).send(err);
    }
  }; 
const addOneFollowers=(req, res) => {
    const newFollowers = new followers({
        followersId: req.body.followersId,
        userId: req.body.userId
    });

    newFollowers.save((error) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send(newFollowers);
        }
    });
} 
module.exports = {getAllFollowers,addOneFollowers}
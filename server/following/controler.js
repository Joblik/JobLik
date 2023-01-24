const  {following}= require("./models")

const getAllFoloowing= async (req, res) => {
    try {
        const followings = await following.find({}).populate("userId","email username image");
        res.status(200).send(followings);
      } catch (err) {
        console.log(err);
  
        res.status(500).send(err);
      }
}; 
const findByIdAndDelete =(req, res) => {
    following.findByIdAndDelete(req.params.id, (error, deletedFollowing) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send(deletedFollowing);
        }
    });
};
const addOneFollowing=(req, res) => {
    const newFollowing = new following({
        followingId: req.body.followingId,
        userId: req.body.userId
    });

    newFollowing.save((error) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send(newFollowing);
        }
    });
} 
module.exports = {getAllFoloowing,findByIdAndDelete,addOneFollowing}
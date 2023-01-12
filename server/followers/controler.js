const  {followers}= require("./models")

const getAllFollowers= (req, res) => {
    followers.find({}, (error, followers) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send(followers);
        }
    });
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
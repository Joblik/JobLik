const  {reclamation}= require("./models")

const getAllreclamation= (req, res) => {
    reclamation.find({}, (error, reclamation) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send(reclamation);
        }
    });
}; 
const addOneReclamation=(req, res) => {
    const newReclamation = new reclamation({
        reclamation: req.body.reclamation,
        userId: req.body.userId
    });

    newReclamation.save((error) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send(new reclamation);
        }
    });
} 
module.exports = {getAllreclamation,addOneReclamation}
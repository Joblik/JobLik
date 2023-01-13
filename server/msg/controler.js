const msgSchema = require("./models")

const getAllMessage = (req, res) => {
    console.log("==============>");
    msgSchema.find({})
      .then((response) => res.status(200).send(response))
      .catch((err) => res.status(400).send(err));
  };
  const addMessage = async (req, res) => {
    try {
      const msgSchema = new msgSchema(req.body);
      await msgSchema.save();
      res.status(201).send(message);
    } catch (err) {
      res.status(400).send(err);
    }
};

  const getOnemsg = (req, res) => {
    msgSchema.findOne({ _id: req.params.id })
      .then((response) => res.status(200).send(response))
      .catch((err) => res.status(400).send(err));
  };
 

  module.exports = {
    getAllMessage,
    addMessage,
    getOnemsg
  };
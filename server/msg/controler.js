const {Message} = require("../db")

const getAllMessage = (req, res) => {
    console.log("==============> done");
    Message.find()
      .then((response) => res.status(200).send(response))
      .catch((err) => res.status(400).send(err));
  };
  const addMessage = (req, res) => {
    Message.create(req.body)
      .then((response) => res.status(200).send(response))
      .catch((err) => res.status(400).send(err));
  }; 
  const getOnemsg = (req, res) => {
    Message.findOne({ _id: req.params.id })
      .then((response) => res.status(200).send(response))
      .catch((err) => res.status(400).send(err));
  };
  module.exports = {
    getAllMessage,
    addMessage,
  };
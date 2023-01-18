const {Msg} = require("./models")

const getAllMessage = (req, res) => {
    console.log("==============> done");
    Msg.find()
      .then((response) => res.status(200).send(response))
      .catch((err) => res.status(400).send(err));
  };
  const addMessage = async (req, res) => {
    try {
      const newMessage = new Msg({
        msg: req.body.msg,
        sender: req.body.sender,
        receiver: req.body.receiver,
        createdAt: new Date()
      });

      await newMessage.save();
      res.status(201).json({ message: "Message added successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getOnemsg = (req, res) => {
    Msg.findOne({ _id: req.params.id })
      .then((response) => res.status(200).send(response))
      .catch((err) => res.status(400).send(err));
  };
  module.exports = {
    getAllMessage,
    addMessage,
  };
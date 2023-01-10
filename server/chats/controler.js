const Message = require('../db');

exports.sendMessage = async (req, res) => {
  try {
    const { sender, receiver, message } = req.body;
    const createdAt = new Date();

    const newMessage = new Message({
      sender,
      receiver,
      message,
      createdAt
    });

    await newMessage.save();
    res.send({
      status: 'success',
      message: 'Message sent successfully'
    });
  } catch (error) {
    res.send({
      status: 'error',
      message: 'Error sending message'
    });
  }
};

exports.fetchMessages = async (req, res) => {
  try {
    const { sender, receiver } = req.params;
    const messages = await Message.find({ $or: [{ sender, receiver }, { sender: receiver, receiver: sender }] });
    res.send({
      status: 'success',
      messages
    });
  } catch (error) {
    res.send({
      status: 'error',
      message: 'Error fetching messages'
    });
  }
};

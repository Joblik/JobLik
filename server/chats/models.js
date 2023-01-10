const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  sender: String,
  receiver: String,
  message: String,
  createdAt: Date
});

module.exports = mongoose.model('Message', messageSchema);
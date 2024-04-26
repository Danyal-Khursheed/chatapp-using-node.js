const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
    user : String,
    text: String,
    timestamp : {type: Date, default: new Date},
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
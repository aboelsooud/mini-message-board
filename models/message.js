const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false
    },
    added: {
        type: Date,
        required: true
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
const mongoose = require('mongoose');

const messageSchema = new Schema({
    sender: {
        required: true,
    },
    reciever: {
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        default: Date.now,
        required: true
    },
});

module.exports = mongoose.model('message', messageSchema);
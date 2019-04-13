const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chatdb', {
    autoIndex: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})
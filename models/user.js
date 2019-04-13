const mongoose = require('mongoose');
const validator = require('validator');
const integerValidator = require('mongoose-integer');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

bcrypt.hash(myPlaintextPassword, saltRounds)
    .then(hashedPassword => {
        debugger;
    })
    .catch(err => {
        debugger;
    })

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        index: { unique: true, },
        unique: true,
        minlength: 3,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        index: { unique: true, },
        unique: true,
        validate: validator.isEmail,
    },
    age: {
        type: Number,
        integer: true,
        required: true,
        min: 18,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'n/a'],
        lowercase: true,
        default: 'n/a',
    },
    country: {
        type: String,
        required: true,
        enum: ['eg', 'uk', 'us', 'my'],
    }
}, {
        autoIndex: true,
    });

userSchema.plugin(integerValidator);


const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
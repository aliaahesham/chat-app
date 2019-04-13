const express = require('express');
const User = require('./../models/user');
const router = express.Router();
const createError = require('http-errors');

/* GET users listing. */
router.get('/', function (req, res, next) {
  User
    .find({})
    .exec()
    .then(users => res.send(users))
    .catch(err => next(createError(500, err.message)))
});

router.get('/:userId', (req, res, next) => {
  User
    .findById(req.params.userId)
    .exec()
    .then(users => res.send(users))
    .catch(err => next(createError(404, err.message)))
})

router.post('/', (req, res, next) => {
  const user = new User(req.body);
  user
    .save()
    .create(req.body)
    .then(user => res.send(user))
    .catch(err => next(createError(400, err.message)))
});

router.patch('/:userId', (req, res, next) => {
  User
    .findByIdAndUpdate(req.params.userId, req.body, { new: true })
    .exec()
    .then(user => res.send(user))
    .catch(err => next(createError(400, err.message)))
})

router.delete('/:userId', (req, res, next) => {
  User
    .findByIdAndDelete(req.params.userId)
    .exec()
    .then(user => res.send(user))
    .catch(err => next(createError(400, err.message)))
})

module.exports = router;

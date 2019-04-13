const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  req.send('Hello')
});

module.exports = router;

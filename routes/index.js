const express = require('express');

const {index, newMessage} = require('../controllers/index');

const router = express.Router();

router.get('/', index);


module.exports = router;
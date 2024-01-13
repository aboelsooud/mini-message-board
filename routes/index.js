const express = require('express');

const {getIndex, getNewMessage, postNewMessage} = require('../controllers/index');

const router = express.Router();

router.get('/', getIndex);

router.get('/new', getNewMessage);

router.post('/new', postNewMessage)

module.exports = router;
const express = require('express');
const rescue = require('express-rescue');

const getAll = require('./getAll');

const router = express.Router({ mergeParams: true });

router.get('/', rescue(getAll));

module.exports = router;
const express = require('express');
const rescue = require('express-rescue');

const create = require('./create');
const getAll = require('./getAll');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(create));
router.get('/', rescue(getAll));

module.exports = router;

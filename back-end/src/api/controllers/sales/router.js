const express = require('express');
const rescue = require('express-rescue');

const create = require('./create');
const getAll = require('./getAll');
const getById = require('./getById');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(create));
router.get('/', rescue(getAll));
router.get('/:id', rescue(getById));

module.exports = router;

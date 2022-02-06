const express = require('express');
const rescue = require('express-rescue');

const create = require('./create');
const getAll = require('./getAll');
const getById = require('./getById');
const updateStatus = require('./updateStatus');
const auth = require('../../middlewares/auth');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(auth), rescue(create));
router.get('/', rescue(getAll));
router.get('/:id', rescue(getById));
router.patch('/:id', rescue(updateStatus));

module.exports = router;

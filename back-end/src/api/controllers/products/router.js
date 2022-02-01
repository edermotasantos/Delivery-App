const router = require('express').Router();

const findAllProducts = require('./findAllProducts');

router.get('/', findAllProducts);

module.exports = router;

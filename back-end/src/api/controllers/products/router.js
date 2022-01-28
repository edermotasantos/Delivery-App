const router = require('express').Router();

const { findAllProducts } = require('../products');

router.get('/', findAllProducts);

module.exports = router;

const express = require('express');

const userRouter = require('./users/router');
const salesRouter = require('./sales/router');
const productsRouter = require('./products/router');

const root = express.Router({ mergeParams: true });

root.use('/users', userRouter);
root.use('/sales', salesRouter);
root.use('/products', productsRouter);

module.exports = root;

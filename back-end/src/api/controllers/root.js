const express = require('express');

const userRouter = require('./users/router');
const salesRouter = require('./sales/router');

const root = express.Router({ mergeParams: true });

root.use('/users', userRouter);
root.use('/sales', salesRouter);

module.exports = root;

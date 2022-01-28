const express = require('express');
const cors = require('cors');

const err = require('./middlewares/error');
const path = require('path');

const productsRouter = require('./controllers/products/router');

const app = express();

app.use(express.json());

app.use(cors());

app.use(require('./controllers/root'));

app.use(err);

app.use('/images', express.static(path.join(__dirname, '..', 'public', 'assets', 'images'))); 

app.use('/products', productsRouter);

module.exports = app;

const express = require('express');
const cors = require('cors');

const path = require('path');
const err = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use(cors());

app.use(require('./controllers/root'));

app.use(err);

app.use('/images', express.static(path.join(__dirname, '..', 'public', 'assets', 'images'))); 

module.exports = app;

const express = require('express');
const cors = require('cors');

const err = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use(cors());

app.use(require('./controllers/root'));

app.use(err);

module.exports = app;

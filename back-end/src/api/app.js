const express = require('express');
const cors = require('cors');
const err = require('./middlewares/error');

const app = express();

app.use(cors());
app.use(express.json());

app.use(require('./controllers/root'));

app.use(err);

module.exports = app;

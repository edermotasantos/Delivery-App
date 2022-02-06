const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const path = require('path');
const err = require('./middlewares/error');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

app.use(express.json());

app.use(cors());

app.use(require('./controllers/root'));

app.use(err);

app.use('/images', express.static(path.join(__dirname, '..', '..', 'public'))); 

require('./sockets')(io);

module.exports = server;

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('updateStatus', ({ status }) => {
    io.emit('updateStatus', { status });
  });
});

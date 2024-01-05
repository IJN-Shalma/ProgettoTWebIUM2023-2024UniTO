module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`user connected ${socket.id}`);

        socket.on('chat message', (msg, name, room) => {
            console.log(msg);
            io.sockets.to(room).emit('chat message', msg, name, room);
        });

        socket.on('create or join conversation', (name, room) => {
            socket.join(room);
            io.sockets.to(room).emit('create or join conversation', name, room);
            console.log("User " + name + " joined room " + room);
        });

        socket.on('leave conversation', (name,room) => {
            socket.leave(room);
            console.log("User " + name + " left room " + room);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
};
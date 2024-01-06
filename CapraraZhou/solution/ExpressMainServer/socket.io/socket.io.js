module.exports = (io) => {
    io.on('connection', (socket) => {
        socket.on('chat message', (msg, name, room) => {
            console.log(msg);
            io.in(room).emit('chat message', msg, name, room);
        });

        socket.on('create or join conversation', (name, room) => {
            socket.join(room);
            io.in(room).emit('create or join conversation', name, room);
            console.log("User " + name + " joined room " + room);
        });

        socket.on('leave conversation', (name,room) => {
            socket.leave(room);
            io.in(room).emit('leave conversation', name, room);
            console.log("User " + name + " left room " + room);
        });
    });
};
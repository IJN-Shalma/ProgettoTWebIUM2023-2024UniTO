module.exports = (io) => {
    let users = [];

    io.on('connection', (socket) => {
        socket.on('chat message', (msg, name, room) => {
            io.in(room).emit('chat message', msg, name, room);
        });

        socket.on('create or join conversation', (name, room) => {
            if(!users.includes(name)){
                users.push(name);
                socket.join(room);
                socket.emit('accept');
                io.in(room).emit('create or join conversation', name, room);
            }else{
                socket.emit('refuse');
            }
        });

        socket.on('leave conversation', (name,room) => {
            socket.leave(room);
            io.in(room).emit('leave conversation', name, room);
            let indexUser = users.indexOf(name);
            users.splice(indexUser, 1);
        });
    });
};
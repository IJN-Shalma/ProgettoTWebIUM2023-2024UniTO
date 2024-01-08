import io from 'socket.io-client';

const socket = io('http://localhost:8080');

function sendMessage(message, username, room) {
    socket.emit('chat message', message, username, room);
}

function joinRoom(name, room) {
    socket.emit('create or join conversation', name, room);
}

function leaveRoom(name, room) {
    socket.emit('leave conversation', name, room);
}

export { socket, sendMessage, joinRoom, leaveRoom };

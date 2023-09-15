// 3rd party module from npm
const express = require('express');
const app = express();
const socketIO = require('socket.io');

const expressServer = app.listen(8000);
const io = socketIO(expressServer, 
{
    cors: 
    {
        origin: "http://localhost:3000" 
    }
});

// This is the entire socket server
io.on('connection', socket =>
{
    // "socket" here is the socket of the client
    // No need to place the socket events outside. 
    // A new socket id for the client is generated
    console.log(socket.id, "has connected");

    // In ws we use "send" method, and in socket.io we use the "emit" method
    socket.emit("messageFromServer", { data: "Welcome to the socket server!" })

    socket.on("messageFromClient", data => console.log(data))
})
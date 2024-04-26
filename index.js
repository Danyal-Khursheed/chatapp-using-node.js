const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const Message = require('./model/schema')

const connect = require('./db/database').connect();
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = 8000; // Corrected variable name

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

io.on('connection',(socket)=>{
    console.log('User connected: ', socket.id);

    socket.on('chat message', (data) =>{
        console.log('Received message:', data);

        const message = new Message({user:data.user, text: data.message});
        message.save();
    io.emit('chat message', data);
})

socket.on('disconnect', ()=>{
    console.log('User disconnected:', socket.id);
})
})

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  


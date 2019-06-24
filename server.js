const express = require('express');
const app = express();


const server = app.listen(8000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});


app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

const io = require('socket.io').listen(server);
const clients = [];

io.on('connection', client => {

    client.on('newMessage', data => {
        const date = new Date();
        data.date = date.getHours()+":"+date.getMinutes();
        io.sockets.emit('newMessage', data);
    });

    client.on('userConnected', data => {
        clients.push(client);
        client.name = data.name;
        io.sockets.emit('userConnected', {clients:clients.map(cli=>cli.name)})
    });
    client.on('disconnect', () => {
        if(client.name)
            client.broadcast.emit('userDisconnected', {name: client.name})
        clients.splice(clients.indexOf(client), 1);
    });
});

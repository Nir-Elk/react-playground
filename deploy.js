const express = require('express');
const app = express();
const path = require('path');
const mainRouter = express.Router();
bodyParser = require('body-parser');

PORT = process.env.PORT || 8080;
const deploy = app.listen(PORT, () => {
    console.log(`Express running → PORT ${deploy.address().port}`);
});

app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use(bodyParser.json());


mainRouter.use('/api', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use(mainRouter);


const io = require('socket.io').listen(deploy);
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

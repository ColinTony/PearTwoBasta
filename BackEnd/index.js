// imports
const express = require('express');
const app = express();
const morgan = require('morgan');
const http = require('http');
const mongoose = require('mongoose');
const server = http.Server(app);
const socket = require('socket.io');
const p2pServer = require('socket.io-p2p-server').Server;
const io = socket(server);

// config
io.use(p2pServer);
const PORT = process.env.PORT || 5000;
const indexRoutes = require('./routes/routes');

// config conecction to db
mongoose.connect('mongodb://localhost/basta')
.then(db => console.log('conexion exitosa'))
.catch(err=>console.log('Error de conexion'));

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// no seran archivos grandes mas que texto
app.use(express.urlencoded({
    extended:false
}));

// routes
app.use('/api',indexRoutes);



server.listen(PORT,()=>{
    console.log('Escuchando pueto: ' + PORT);
});
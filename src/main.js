const express = require('express');
const mongoose =require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server =express();
mongoose.connect('mongodb+srv://@cluster0-ep2yc.mongodb.net/dev1?retryWrites=true&w=majority',{useNewUrlParser: true});

//Aceitar qualquer conexão com esse servidor
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
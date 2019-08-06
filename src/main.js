const express = require('express');
const mongoose =require('mongoose');
const routes = require('./routes');

const server =express();
mongoose.connect('mongodb+srv://@cluster0-ep2yc.mongodb.net/dev1?retryWrites=true&w=majority',{useNewUrlParser: true});

server.use(express.json());
server.use(routes);

server.listen(3333);
const express = require('express');
const routerOffice = require('./Routers/offices')
const routerClient = require('./Routers/clients')
const routerProject = require('./Routers/projects')
const routerAutodesk = require('./Routers/autodesk')
const cors = require('cors');

const server = express();
server.use(cors());
server.use('/', routerOffice)
server.use('/', routerClient)
server.use('/', routerProject)
server.use('/', routerAutodesk)

server.use(express.json());
server.use(cors());


server.use(express.json());



module.exports = server
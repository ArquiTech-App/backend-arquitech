const express = require('express');
const routerOffice = require('./Routers/offices')
const routerClient = require('./Routers/clients')
const routerProject = require('./Routers/projects')
const cors = require('cors');

const server = express();



server.use(express.json());
server.use(cors());

server.use('/offices', routerOffice)
server.use('/clients', routerClient)
server.use('/project', routerProject)


module.exports = server
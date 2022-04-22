const express = require('express');
const routerOffice = require('./Routers/offices')
const routerClient = require('./Routers/clients')
const routerProject = require('./Routers/projects')
const cors = require('cors');

const server = express();
server.use('/', routerOffice)
server.use('/', routerClient)
server.use('/', routerProject)

server.use(express.json());
server.use(cors());

module.exports = server
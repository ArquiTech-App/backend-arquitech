const express = require('express');
const routerOffice = require('./Routers/offices')
const routerClient = require('./Routers/clients')
const routerProject = require('./Routers/projects')

const server = express();
server.use('/offices', routerOffice)
server.use('/clients', routerClient)
server.use('/projects', routerProject)

module.exports = server
const express = require('express');
const routerOffice = require('./Routers/offices')
const routerClient = require('./Routers/clients')
const routerProject = require('./Routers/projects')
const routerAutodesk = require('./Routers/autodesk')
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());
server.use('/offices', routerOffice)
server.use('/clients', routerClient)
server.use('/proyects', routerProject)
server.use('/autodesk', routerAutodesk)







module.exports = server